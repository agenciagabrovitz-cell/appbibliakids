import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";
import heroImage from "@/assets/hero-bible-kids.png";
import { Users, Baby } from "lucide-react";

interface RoleSelectionProps {
  onRoleSelected: () => void;
}

export default function RoleSelection({ onRoleSelected }: RoleSelectionProps) {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  const selectRole = async (role: "parent" | "child") => {
    if (!user) return;
    setLoading(true);
    const { error } = await supabase
      .from("user_roles")
      .insert({ user_id: user.id, role });

    if (error) {
      toast.error("Erro ao definir perfil");
    } else {
      toast.success(role === "parent" ? "Bem-vindo, pai/mãe! 👨‍👩‍👧" : "Vamos começar a aventura! 🚀");
      onRoleSelected();
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      <Card className="w-full max-w-md border-2 border-primary/20 shadow-lg">
        <CardHeader className="text-center space-y-4">
          <img src={heroImage} alt="Bíblia Kids" className="w-24 h-24 mx-auto bubble-float" />
          <CardTitle className="text-3xl font-display text-primary">Quem é você?</CardTitle>
          <CardDescription className="font-body text-base">
            Escolha seu perfil para começar ✨
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            onClick={() => selectRole("child")}
            disabled={loading}
            className="w-full h-20 rounded-2xl text-xl font-display bg-kids-blue hover:bg-kids-blue/90"
          >
            <Baby className="w-8 h-8 mr-3" />
            Sou Criança 🧒
          </Button>
          <Button
            onClick={() => selectRole("parent")}
            disabled={loading}
            variant="outline"
            className="w-full h-20 rounded-2xl text-xl font-display border-2 border-primary/30 text-foreground hover:bg-primary/10"
          >
            <Users className="w-8 h-8 mr-3" />
            Sou Pai/Mãe 👨‍👩‍👧
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
