import { Book, BookOpen, Gamepad2, Palette, Calendar, Trophy, Camera, LogOut, UserCircle } from "lucide-react";
import heroImage from "@/assets/hero-bible-kids.png";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";

interface DashboardSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

const sections: DashboardSection[] = [
  { id: "bible", title: "Bíblia", icon: <Book className="w-8 h-8" />, color: "bg-kids-red", description: "66 livros para explorar" },
  { id: "stories", title: "Histórias", icon: <BookOpen className="w-8 h-8" />, color: "bg-kids-blue", description: "Histórias da Bíblia" },
  { id: "quiz", title: "Quiz", icon: <Gamepad2 className="w-8 h-8" />, color: "bg-kids-orange", description: "Teste seu conhecimento" },
  { id: "coloring", title: "Colorir", icon: <Palette className="w-8 h-8" />, color: "bg-kids-yellow", description: "Páginas para colorir" },
  { id: "photo-coloring", title: "Foto Colorir", icon: <Camera className="w-8 h-8" />, color: "bg-kids-teal", description: "Transforme fotos em desenhos" },
  { id: "verse", title: "Versículo", icon: <Calendar className="w-8 h-8" />, color: "bg-kids-green", description: "Versículo da semana" },
  { id: "progress", title: "Progresso", icon: <Trophy className="w-8 h-8" />, color: "bg-kids-pink", description: "Suas conquistas" },
  { id: "profile", title: "Meu Perfil", icon: <UserCircle className="w-8 h-8" />, color: "bg-primary", description: "Edite seu perfil" },
];

interface KidsDashboardProps {
  onNavigate: (section: string) => void;
  playerName: string;
  currentLevel: { name: string; emoji: string };
  points: number;
}

export default function KidsDashboard({ onNavigate, playerName, currentLevel, points }: KidsDashboardProps) {
  const { signOut } = useAuth();

  return (
    <div className="min-h-screen px-4 py-6 max-w-lg mx-auto">
      {/* Logout */}
      <div className="flex justify-end mb-2">
        <Button variant="ghost" size="sm" onClick={signOut} className="text-muted-foreground">
          <LogOut className="w-4 h-4 mr-1" /> Sair
        </Button>
      </div>
      {/* Header */}
      <div className="text-center mb-8 animate-slide-up">
        <img src={heroImage} alt="Bíblia Kids" className="w-32 h-32 mx-auto mb-3 bubble-float" />
        <h1 className="text-3xl font-display text-primary">Bíblia Kids</h1>
        <p className="text-lg font-display text-secondary-foreground">Aventura com Deus ✨</p>
        <div className="mt-3 inline-flex items-center gap-2 kids-badge bg-secondary">
          <span>{currentLevel.emoji}</span>
          <span className="font-body font-bold text-secondary-foreground">{currentLevel.name}</span>
          <span className="text-muted-foreground">• {points} pts</span>
        </div>
      </div>

      {/* Section Grid */}
      <div className="grid grid-cols-2 gap-4">
        {sections.map((section, i) => (
          <button
            key={section.id}
            onClick={() => onNavigate(section.id)}
            className="kids-card flex flex-col items-center gap-2 text-center"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className={`${section.color} p-4 rounded-2xl text-primary-foreground`}>
              {section.icon}
            </div>
            <h3 className="font-display text-lg text-foreground">{section.title}</h3>
            <p className="text-xs text-muted-foreground font-body">{section.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
