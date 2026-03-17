import { useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { BibleStory } from "@/data/bibleData";

interface StoryViewerProps {
  story: BibleStory;
  onBack: () => void;
  onComplete: () => void;
  onStartQuiz: () => void;
}

export default function StoryViewer({ story, onBack, onComplete, onStartQuiz }: StoryViewerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = story.slides[currentSlide];
  const isLast = currentSlide === story.slides.length - 1;

  const next = () => {
    if (isLast) {
      onComplete();
      onStartQuiz();
    } else {
      setCurrentSlide(s => s + 1);
    }
  };

  return (
    <div className="min-h-screen px-4 py-6 max-w-lg mx-auto flex flex-col">
      <button onClick={onBack} className="flex items-center gap-2 text-muted-foreground mb-4 font-body font-bold">
        <ArrowLeft className="w-5 h-5" /> Voltar
      </button>

      <h2 className="text-xl font-display text-primary mb-4">{story.title}</h2>

      {/* Progress dots */}
      <div className="flex justify-center gap-2 mb-4">
        {story.slides.map((_, i) => (
          <div key={i} className={`w-3 h-3 rounded-full transition-all ${i === currentSlide ? "bg-primary scale-125" : i < currentSlide ? "bg-accent" : "bg-muted"}`} />
        ))}
      </div>

      {/* Slide */}
      <div className="flex-1 story-slide-bg p-6 flex flex-col items-center gap-6 animate-slide-up" key={currentSlide}>
        <img src={slide.image} alt={story.title} className="w-full max-w-xs rounded-2xl object-contain" />
        <p className="text-lg font-body font-semibold text-foreground text-center leading-relaxed">{slide.text}</p>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-6 gap-4">
        <button
          onClick={() => setCurrentSlide(s => Math.max(0, s - 1))}
          disabled={currentSlide === 0}
          className="kids-btn bg-muted text-foreground disabled:opacity-30 flex items-center gap-1"
        >
          <ChevronLeft className="w-5 h-5" /> Anterior
        </button>
        <button onClick={next} className="kids-btn bg-primary text-primary-foreground flex items-center gap-1">
          {isLast ? "Fazer Quiz! 🎮" : <>Próximo <ChevronRight className="w-5 h-5" /></>}
        </button>
      </div>
    </div>
  );
}
