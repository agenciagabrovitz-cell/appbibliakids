import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const supabaseUrl = Deno.env.get("SUPABASE_URL");
const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error("Faltam variáveis de ambiente SUPABASE_URL ou SUPABASE_SERVICE_ROLE_KEY");
  Deno.exit(1);
}

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);

async function testWebhookLogic(email: string, status: string) {
  console.log(`Simulando atualização para ${email} com status ${status}...`);
  
  const { data, error } = await supabaseAdmin
    .from("users")
    .upsert(
      { 
        email: email.toLowerCase(), 
        subscription_status: status,
        updated_at: new Date().toISOString()
      },
      { onConflict: "email" }
    )
    .select();

  if (error) {
    console.error("Erro no teste:", error);
  } else {
    console.log("Sucesso! Registro atualizado:", data);
  }
}

// Testar com um email de exemplo
await testWebhookLogic("teste_integracao@exemplo.com", "active");
