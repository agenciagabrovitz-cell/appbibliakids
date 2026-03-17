import { useState, useEffect, useCallback } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

export function useSubscription() {
  const { user } = useAuth();
  const [subscriptionStatus, setSubscriptionStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchSubscription = useCallback(async () => {
    if (!user) {
      setSubscriptionStatus(null);
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from("users")
        .select("subscription_status")
        .eq("id", user.id)
        .maybeSingle();

      if (error) {
        console.error("Error fetching subscription status:", error);
      }

      setSubscriptionStatus(data?.subscription_status || null);
    } catch (error) {
      console.error("Unexpected error fetching subscription status:", error);
      setSubscriptionStatus(null);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchSubscription();
  }, [fetchSubscription]);

  return { subscriptionStatus, loading, refetch: fetchSubscription };
}
