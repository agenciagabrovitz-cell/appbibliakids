import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";
import heroImage from "@/assets/hero-bible-kids.png";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Bem-vindo de volta! 🎉");
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { display_name: displayName },
            emailRedirectTo: window.location.origin,
          },
        });
        if (error) throw error;
        toast.success("Conta criada! Verifique seu email para confirmar. 📧");
      }
    } catch (error: any) {
      toast.error(error.message || "Algo deu errado");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      <Card className="w-full max-w-md border-2 border-primary/20 shadow-lg">
        <CardHeader className="text-center space-y-4">
          <img src={heroImage} alt="Bíblia Kids" className="w-24 h-24 mx-auto bubble-float" />
          <CardTitle className="text-3xl font-display text-primary">
            Bíblia Kids
          </CardTitle>
          <CardDescription className="font-body text-base">
            {isLogin ? "Entre na sua aventura com Deus! ✨" : "Crie sua conta e comece a explorar! 🌟"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm font-body font-semibold text-foreground">Nome</label>
                <Input
                  type="text"
                  placeholder="Seu nome"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  required={!isLogin}
                  className="rounded-xl border-primary/30 focus:border-primary"
                />
              </div>
            )}
            <div className="space-y-2">
              <label className="text-sm font-body font-semibold text-foreground">Email</label>
              <Input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-xl border-primary/30 focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-body font-semibold text-foreground">Senha</label>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="rounded-xl border-primary/30 focus:border-primary"
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl text-lg font-display h-12"
            >
              {loading ? "Carregando..." : isLogin ? "Entrar 🚀" : "Criar Conta 🎉"}
            </Button>
          </form>
          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm font-body text-primary hover:underline"
            >
              {isLogin ? "Não tem conta? Cadastre-se!" : "Já tem conta? Faça login!"}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
