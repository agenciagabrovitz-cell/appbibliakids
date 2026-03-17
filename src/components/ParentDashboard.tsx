import { useState, useEffect, useCallback } from "react";
import { LogOut, Plus, User, Trophy, BookOpen, Gamepad2, Star, RefreshCw, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { gamificationLevels } from "@/data/bibleData";
import heroImage from "@/assets/hero-bible-kids.png";

interface ChildProgress {
  child_id: string;
  display_name: string | null;
  avatar_url: string | null;
  points: number;
  stories_read: string[];
  quizzes_completed: string[];
  perfect_quizzes: string[];
  verse_memorized: boolean;
  earned_badges: string[];
  last_activity: string;
}

export default function ParentDashboard() {
  const { user, signOut } = useAuth();
  const [children, setChildren] = useState<ChildProgress[]>([]);
  const [childEmail, setChildEmail] = useState("");
  const [adding, setAdding] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);

  const fetchChildren = useCallback(async () => {
    if (!user) return;
    const { data, error } = await supabase.rpc("get_children_progress", {
      _parent_id: user.id,
    });
    if (!error && data) {
      const parsed = Array.isArray(data) ? (data as unknown as ChildProgress[]) : [];
      setChildren(parsed);
    }
    setLoading(false);
  }, [user]);

  useEffect(() => {
    fetchChildren();
  }, [fetchChildren]);

  const handleAddChild = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !childEmail.trim()) return;
    setAdding(true);

    const { data, error } = await supabase.rpc("link_child_by_email", {
      _parent_id: user.id,
      _child_email: childEmail.trim(),
    });

    if (error) {
      toast.error("Erro ao vincular criança");
    } else {
      const result = data as any;
      if (result.success) {
        toast.success("Criança vinculada com sucesso! 🎉");
        setChildEmail("");
        setShowAdd(false);
        fetchChildren();
      } else {
        toast.error(result.error || "Erro ao vincular");
      }
    }
    setAdding(false);
  };

  const handleRemoveChild = async (childId: string) => {
    if (!user) return;
    await supabase
      .from("parent_children")
      .delete()
      .eq("parent_id", user.id)
      .eq("child_id", childId);
    toast.success("Criança removida");
    fetchChildren();
  };

  const getLevel = (points: number) =>
    gamificationLevels.reduce((acc, level) => (points >= level.minPoints ? level : acc), gamificationLevels[0]);

  const timeSince = (dateStr: string) => {
    const diff = Date.now() - new Date(dateStr).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 60) return `${mins}min atrás`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours}h atrás`;
    return `${Math.floor(hours / 24)}d atrás`;
  };

  return (
    <div className="min-h-screen px-4 py-6 max-w-2xl mx-auto bg-background">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <img src={heroImage} alt="Bíblia Kids" className="w-12 h-12" />
          <div>
            <h1 className="text-2xl font-display text-primary">Dashboard dos Pais</h1>
            <p className="text-sm text-muted-foreground font-body">Acompanhe o progresso dos seus filhos</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" onClick={fetchChildren}>
            <RefreshCw className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={signOut} className="text-muted-foreground">
            <LogOut className="w-4 h-4 mr-1" /> Sair
          </Button>
        </div>
      </div>

      {/* Add Child */}
      {!showAdd ? (
        <Button
          onClick={() => setShowAdd(true)}
          className="w-full mb-6 rounded-xl font-display h-12"
          variant="outline"
        >
          <Plus className="w-5 h-5 mr-2" /> Adicionar Filho(a)
        </Button>
      ) : (
        <Card className="mb-6 border-2 border-primary/20">
          <CardContent className="pt-4">
            <form onSubmit={handleAddChild} className="flex gap-2">
              <Input
                type="email"
                placeholder="Email da conta do filho(a)"
                value={childEmail}
                onChange={(e) => setChildEmail(e.target.value)}
                required
                className="rounded-xl border-primary/30 flex-1"
              />
              <Button type="submit" disabled={adding} className="rounded-xl font-display">
                {adding ? "..." : "Vincular"}
              </Button>
              <Button type="button" variant="ghost" onClick={() => setShowAdd(false)} className="rounded-xl">
                ✕
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Loading */}
      {loading && (
        <p className="text-center text-primary font-display text-xl animate-pulse py-12">
          Carregando... ✨
        </p>
      )}

      {/* No children */}
      {!loading && children.length === 0 && (
        <Card className="border-2 border-dashed border-primary/20">
          <CardContent className="py-12 text-center">
            <User className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <p className="font-display text-xl text-foreground mb-2">Nenhum filho vinculado</p>
            <p className="text-sm text-muted-foreground font-body">
              Adicione o email da conta do seu filho para acompanhar o progresso dele.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Children List */}
      <div className="space-y-4">
        {children.map((child) => {
          const level = getLevel(child.points);
          return (
            <Card key={child.child_id} className="border-2 border-primary/10 overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {child.avatar_url ? (
                      <img src={child.avatar_url} alt="" className="w-12 h-12 rounded-full object-cover border-2 border-primary/20" />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center border-2 border-primary/20">
                        <User className="w-6 h-6 text-muted-foreground" />
                      </div>
                    )}
                    <div>
                      <CardTitle className="text-lg font-display text-foreground">
                        {child.display_name || "Sem nome"}
                      </CardTitle>
                      <p className="text-xs text-muted-foreground font-body">
                        {level.emoji} {level.name} • Ativo {timeSince(child.last_activity)}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveChild(child.child_id)}
                    className="text-destructive/60 hover:text-destructive"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-kids-yellow/10 rounded-xl p-3 text-center">
                    <Trophy className="w-5 h-5 mx-auto mb-1 text-kids-yellow" />
                    <p className="text-2xl font-display text-foreground">{child.points}</p>
                    <p className="text-xs text-muted-foreground font-body">Pontos</p>
                  </div>
                  <div className="bg-kids-blue/10 rounded-xl p-3 text-center">
                    <BookOpen className="w-5 h-5 mx-auto mb-1 text-kids-blue" />
                    <p className="text-2xl font-display text-foreground">{child.stories_read.length}</p>
                    <p className="text-xs text-muted-foreground font-body">Histórias</p>
                  </div>
                  <div className="bg-kids-orange/10 rounded-xl p-3 text-center">
                    <Gamepad2 className="w-5 h-5 mx-auto mb-1 text-kids-orange" />
                    <p className="text-2xl font-display text-foreground">{child.quizzes_completed.length}</p>
                    <p className="text-xs text-muted-foreground font-body">Quizzes</p>
                  </div>
                  <div className="bg-kids-pink/10 rounded-xl p-3 text-center">
                    <Star className="w-5 h-5 mx-auto mb-1 text-kids-pink" />
                    <p className="text-2xl font-display text-foreground">{child.earned_badges.length}</p>
                    <p className="text-xs text-muted-foreground font-body">Badges</p>
                  </div>
                </div>

                {/* Badges */}
                {child.earned_badges.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {child.earned_badges.map((badge) => (
                      <span key={badge} className="kids-badge bg-secondary text-xs font-body text-secondary-foreground">
                        {badge === "first-story" && "📖 Primeira História"}
                        {badge === "quiz-master" && "🧠 Mestre do Quiz"}
                        {badge === "verse-memorizer" && "✝️ Memorizador"}
                        {badge === "explorer" && "🗺️ Explorador"}
                        {badge === "champion" && "🏆 Campeão"}
                      </span>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
