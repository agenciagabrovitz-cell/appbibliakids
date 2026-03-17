import { ArrowLeft } from "lucide-react";
import { weeklyVerse } from "@/data/bibleData";

interface VerseOfWeekProps {
  onBack: () => void;
  memorized: boolean;
  onMemorize: () => void;
}

export default function VerseOfWeek({ onBack, memorized, onMemorize }: VerseOfWeekProps) {
  return (
    <div className="min-h-screen px-4 py-6 max-w-lg mx-auto">
      <button onClick={onBack} className="flex items-center gap-2 text-muted-foreground mb-4 font-body font-bold">
        <ArrowLeft className="w-5 h-5" /> Voltar
      </button>

      <h1 className="text-2xl font-display text-primary mb-6">📅 Versículo da Semana</h1>

      <div className="kids-card text-center animate-slide-up">
        <span className="text-5xl mb-4 block bubble-float">📖</span>
        <p className="text-sm font-body font-bold text-accent mb-2">{weeklyVerse.reference}</p>
        <blockquote className="text-xl font-body font-bold text-foreground leading-relaxed mb-4 italic">
          "{weeklyVerse.text}"
        </blockquote>
      </div>

      <div className="kids-card mt-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
        <h3 className="font-display text-lg text-foreground mb-2">💡 O que isso significa?</h3>
        <p className="font-body text-foreground leading-relaxed">{weeklyVerse.explanation}</p>
      </div>

      <div className="mt-6 text-center">
        {memorized ? (
          <div className="kids-badge bg-accent text-accent-foreground text-lg py-2 px-6">
            ✅ Versículo memorizado! +20 pontos!
          </div>
        ) : (
          <button onClick={onMemorize} className="kids-btn bg-primary text-primary-foreground text-lg">
            Memorizei! 🧠✨
          </button>
        )}
      </div>
    </div>
  );
}
