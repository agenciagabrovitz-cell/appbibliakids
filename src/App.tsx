import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { useUserRole } from "@/hooks/useUserRole";
import { useSubscription } from "@/hooks/useSubscription";
import Index from "./pages/Index.tsx";
import Auth from "./pages/Auth.tsx";
import NotFound from "./pages/NotFound.tsx";
import SubscriptionBlocked from "./pages/SubscriptionBlocked.tsx";
import RoleSelection from "./components/RoleSelection.tsx";
import ParentDashboard from "./components/ParentDashboard.tsx";

const queryClient = new QueryClient();

function AppRoutes() {
  const { user, loading: authLoading } = useAuth();
  const { role, loading: roleLoading, refetch } = useUserRole();
  const { subscriptionStatus, loading: subLoading } = useSubscription();

  if (authLoading || (user && roleLoading) || (user && subLoading)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-2xl font-display text-primary animate-pulse">Carregando... ✨</p>
      </div>
    );
  }

  if (!user) {
    return (
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  // Check subscription status before allowing any internal app route access
  const hasValidSubscription = subscriptionStatus === "active" || subscriptionStatus === "trialing";
  if (!hasValidSubscription) {
    return <SubscriptionBlocked />;
  }

  // No role selected yet
  if (!role) {
    return <RoleSelection onRoleSelected={refetch} />;
  }

  // Parent view
  if (role === "parent") {
    return (
      <Routes>
        <Route path="/" element={<ParentDashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  }

  // Child view
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
