import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const stripeSecretKey = Deno.env.get("STRIPE_SECRET_KEY");
const stripeWebhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");
const supabaseUrl = Deno.env.get("SUPABASE_URL");
const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

if (!stripeSecretKey || !stripeWebhookSecret || !supabaseUrl || !supabaseServiceRoleKey) {
  console.error("Missing necessary environment variables.");
}

const stripe = new Stripe(stripeSecretKey!, {
  apiVersion: "2023-10-16",
  httpClient: Stripe.createFetchHttpClient(),
});

const supabaseAdmin = createClient(supabaseUrl!, supabaseServiceRoleKey!);

serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const signature = req.headers.get("stripe-signature");
  if (!signature) {
    return new Response("No Stripe signature found", { status: 400 });
  }

  let event;
  try {
    const body = await req.text();
    event = stripe.webhooks.constructEvent(body, signature, stripeWebhookSecret!);
  } catch (err) {
    console.error(`Webhook signature verification failed: ${err.message}`);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  try {
    let email: string | null = null;
    let newStatus: string | null = null;

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        email = session.customer_details?.email || session.customer_email;
        newStatus = "active";
        break;
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;
        const customer = await stripe.customers.retrieve(subscription.customer as string);
        email = (customer as Stripe.Customer).email;
        
        // Rules: active, trialing, past_due, canceled
        const status = subscription.status;
        if (["active", "trialing", "past_due", "canceled"].includes(status)) {
          newStatus = status;
        }
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        const customer = await stripe.customers.retrieve(subscription.customer as string);
        email = (customer as Stripe.Customer).email;
        newStatus = "canceled";
        break;
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;
        email = invoice.customer_email || invoice.customer_name; // Try customer_email first
        if (!email && invoice.customer) {
           const customer = await stripe.customers.retrieve(invoice.customer as string);
           email = (customer as Stripe.Customer).email;
        }
        newStatus = "past_due";
        break;
      }

      default:
        console.log(`Unhandled event type ${event.type}`);
        return new Response(JSON.stringify({ received: true, ignored: true }), { status: 200 });
    }

    if (email && newStatus) {
      console.log(`Attempting to upsert user with email ${email} to status ${newStatus}`);
      
      // Try to find the auth user ID by email so the app can query by auth UUID
      let authUserId: string | null = null;
      try {
        const { data: authData } = await supabaseAdmin.auth.admin.listUsers();
        const authUser = authData?.users?.find(
          (u) => u.email?.toLowerCase() === email.toLowerCase()
        );
        if (authUser) {
          authUserId = authUser.id;
          console.log(`Found auth user ID: ${authUserId} for email: ${email}`);
        }
      } catch (e) {
        console.log(`Could not lookup auth user (pre-paid user?): ${e.message}`);
      }

      // Build upsert data - include auth ID if found
      const upsertData: Record<string, unknown> = {
        email: email.toLowerCase(),
        subscription_status: newStatus,
        updated_at: new Date().toISOString(),
      };
      if (authUserId) {
        upsertData.id = authUserId;
      }

      const { data, error } = await supabaseAdmin
        .from("users")
        .upsert(upsertData, { onConflict: "email" })
        .select();

      if (error) {
        console.error(`Error upserting user ${email}:`, error);
        throw error;
      }
      
      if (data && data.length > 0) {
        console.log(`Successfully upserted user ${email} to ${newStatus}. Record:`, data[0]);
      }
    }

    return new Response(JSON.stringify({ received: true }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error(`Error processing webhook: ${error.message}`);
    return new Response("Internal Server Error", { status: 500 });
  }
});

