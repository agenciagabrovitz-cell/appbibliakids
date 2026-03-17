import { ArrowLeft } from "lucide-react";
import { gamificationLevels, badges as allBadges } from "@/data/bibleData";

interface ProgressViewProps {
  onBack: () => void;
  points: number;
  currentLevel: { name: string; emoji: string; minPoints: number };
  nextLevel?: { name: string; emoji: string; minPoints: number };
  storiesRead: string[];
  quizzesCompleted: string[];
  earnedBadges: string[];
}

export default function ProgressView({ onBack, points, currentLevel, nextLevel, storiesRead, quizzesCompleted, earnedBadges }: ProgressViewProps) {
  const progress = nextLevel ? ((points - currentLevel.minPoints) / (nextLevel.minPoints - currentLevel.minPoints)) * 100 : 100;

  return (
    <div className="min-h-screen px-4 py-6 max-w-lg mx-auto">
      <button onClick={onBack} className="flex items-center gap-2 text-muted-foreground mb-4 font-body font-bold">
        <ArrowLeft className="w-5 h-5" /> Voltar
      </button>

      <h1 className="text-2xl font-display text-primary mb-6">🏆 Meu Progresso</h1>

      {/* Level Card */}
      <div className="kids-card text-center animate-slide-up mb-4">
        <span className="text-5xl block mb-2">{currentLevel.emoji}</span>
        <h2 className="text-2xl font-display text-foreground">{currentLevel.name}</h2>
        <p className="text-3xl font-bold text-primary mt-2">{points} pontos</p>
        {nextLevel && (
          <div className="mt-4">
            <div className="flex justify-between text-sm font-body text-muted-foreground mb-1">
              <span>{currentLevel.name}</span>
              <span>{nextLevel.name} {nextLevel.emoji}</span>
            </div>
            <div className="w-full bg-muted rounded-full h-4 overflow-hidden">
              <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: `${Math.min(progress, 100)}%` }} />
            </div>
            <p className="text-xs text-muted-foreground mt-1 font-body">Faltam {nextLevel.minPoints - points} pontos</p>
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="kids-card text-center py-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <span className="text-3xl">📖</span>
          <p className="text-2xl font-bold text-foreground">{storiesRead.length}</p>
          <p className="text-xs text-muted-foreground font-body">Histórias lidas</p>
        </div>
        <div className="kids-card text-center py-4 animate-slide-up" style={{ animationDelay: "0.15s" }}>
          <span className="text-3xl">🎮</span>
          <p className="text-2xl font-bold text-foreground">{quizzesCompleted.length}</p>
          <p className="text-xs text-muted-foreground font-body">Quizzes feitos</p>
        </div>
      </div>

      {/* Badges */}
      <div className="kids-card animate-slide-up" style={{ animationDelay: "0.2s" }}>
        <h3 className="font-display text-lg text-foreground mb-4">🎖️ Conquistas</h3>
        <div className="grid grid-cols-2 gap-3">
          {allBadges.map(badge => {
            const earned = earnedBadges.includes(badge.id);
            return (
              <div key={badge.id} className={`rounded-2xl p-3 text-center transition-all ${earned ? "bg-secondary" : "bg-muted opacity-40"}`}>
                <span className="text-3xl block">{badge.emoji}</span>
                <p className="text-sm font-body font-bold text-foreground mt-1">{badge.name}</p>
                <p className="text-xs text-muted-foreground font-body">{badge.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* All Levels */}
      <div className="kids-card mt-4 animate-slide-up" style={{ animationDelay: "0.25s" }}>
        <h3 className="font-display text-lg text-foreground mb-3">📊 Níveis</h3>
        {gamificationLevels.map(level => (
          <div key={level.name} className={`flex items-center gap-3 py-2 ${points >= level.minPoints ? "opacity-100" : "opacity-40"}`}>
            <span className="text-2xl">{level.emoji}</span>
            <div className="flex-1">
              <p className="font-body font-bold text-foreground text-sm">{level.name}</p>
              <p className="text-xs text-muted-foreground font-body">{level.minPoints} pontos</p>
            </div>
            {points >= level.minPoints && <span>✅</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
