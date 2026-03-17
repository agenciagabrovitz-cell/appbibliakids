import { useState, useEffect, useRef } from "react";
import { ArrowLeft, Camera, Save, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface ProfileViewProps {
  onBack: () => void;
}

export default function ProfileView({ onBack }: ProfileViewProps) {
  const { user } = useAuth();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [displayName, setDisplayName] = useState("");
  const [favoriteVerse, setFavoriteVerse] = useState("");
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    const fetchProfile = async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("display_name, avatar_url, favorite_verse")
        .eq("user_id", user.id)
        .single();

      if (data) {
        setDisplayName(data.display_name || "");
        setAvatarUrl(data.avatar_url);
        setFavoriteVerse(data.favorite_verse || "");
      }
      if (error) console.error("Error fetching profile:", error);
      setLoading(false);
    };
    fetchProfile();
  }, [user]);

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Por favor, selecione uma imagem");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      toast.error("A imagem deve ter no máximo 2MB");
      return;
    }

    setUploading(true);
    const fileExt = file.name.split(".").pop();
    const filePath = `${user.id}/avatar.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from("avatars")
      .upload(filePath, file, { upsert: true });

    if (uploadError) {
      toast.error("Erro ao enviar imagem");
      setUploading(false);
      return;
    }

    const { data: { publicUrl } } = supabase.storage
      .from("avatars")
      .getPublicUrl(filePath);

    const url = `${publicUrl}?t=${Date.now()}`;
    setAvatarUrl(url);

    await supabase
      .from("profiles")
      .update({ avatar_url: url })
      .eq("user_id", user.id);

    toast.success("Avatar atualizado! 📸");
    setUploading(false);
  };

  const handleSave = async () => {
    if (!user) return;
    setSaving(true);

    const { error } = await supabase
      .from("profiles")
      .update({
        display_name: displayName.trim(),
        favorite_verse: favoriteVerse.trim(),
      })
      .eq("user_id", user.id);

    if (error) {
      toast.error("Erro ao salvar perfil");
    } else {
      toast.success("Perfil salvo! ✅");
    }
    setSaving(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-xl font-display text-primary animate-pulse">Carregando perfil... ✨</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-6 max-w-lg mx-auto bg-background">
      <Button variant="ghost" onClick={onBack} className="mb-4 text-primary font-display">
        <ArrowLeft className="w-5 h-5 mr-1" /> Voltar
      </Button>

      <h1 className="text-3xl font-display text-primary text-center mb-6">Meu Perfil 👤</h1>

      <Card className="border-2 border-primary/20">
        <CardContent className="pt-6 space-y-6">
          {/* Avatar */}
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative w-28 h-28 rounded-full bg-muted border-4 border-primary/30 overflow-hidden cursor-pointer group"
              onClick={() => fileInputRef.current?.click()}
            >
              {avatarUrl ? (
                <img src={avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <User className="w-12 h-12 text-muted-foreground" />
                </div>
              )}
              <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleAvatarUpload}
            />
            <p className="text-xs text-muted-foreground font-body">
              {uploading ? "Enviando..." : "Toque para trocar a foto"}
            </p>
          </div>

          {/* Name */}
          <div className="space-y-2">
            <label className="text-sm font-body font-semibold text-foreground">Nome</label>
            <Input
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Seu nome"
              className="rounded-xl border-primary/30"
            />
          </div>

          {/* Email (read-only) */}
          <div className="space-y-2">
            <label className="text-sm font-body font-semibold text-foreground">Email</label>
            <Input
              value={user?.email || ""}
              disabled
              className="rounded-xl border-primary/30 opacity-60"
            />
          </div>

          {/* Favorite Verse */}
          <div className="space-y-2">
            <label className="text-sm font-body font-semibold text-foreground">Versículo Favorito ✝️</label>
            <Input
              value={favoriteVerse}
              onChange={(e) => setFavoriteVerse(e.target.value)}
              placeholder="Ex: João 3:16"
              className="rounded-xl border-primary/30"
            />
          </div>

          {/* Save */}
          <Button
            onClick={handleSave}
            disabled={saving}
            className="w-full rounded-xl text-lg font-display h-12"
          >
            <Save className="w-5 h-5 mr-2" />
            {saving ? "Salvando..." : "Salvar Perfil"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
