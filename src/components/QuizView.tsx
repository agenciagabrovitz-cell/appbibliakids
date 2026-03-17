import { useState } from "react";
import { ArrowLeft, Check, X } from "lucide-react";
import { QuizQuestion } from "@/data/bibleData";

interface QuizViewProps {
  storyTitle: string;
  questions: QuizQuestion[];
  onBack: () => void;
  onComplete: (score: number, total: number) => void;
}

export default function QuizView({ storyTitle, questions, onBack, onComplete }: QuizViewProps) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);

  const question = questions[currentQ];
  const isCorrect = selected === question?.correctIndex;

  const handleSelect = (index: number) => {
    if (answered) return;
    setSelected(index);
    setAnswered(true);
    if (index === question.correctIndex) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(q => q + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    const perfect = score === questions.length;
    return (
      <div className="min-h-screen px-4 py-6 max-w-lg mx-auto flex flex-col items-center justify-center text-center">
        <div className="animate-bounce-in">
          <span className="text-8xl">{perfect ? "🏆" : score > 0 ? "⭐" : "💪"}</span>
        </div>
        <h2 className="text-3xl font-display text-primary mt-6">
          {perfect ? "Perfeito!" : score > 0 ? "Muito bem!" : "Continue tentando!"}
        </h2>
        <p className="text-xl font-body text-foreground mt-3">
          Você acertou <span className="font-bold text-accent">{score}</span> de <span className="font-bold">{questions.length}</span> perguntas!
        </p>
        <p className="text-muted-foreground font-body mt-2">+{score * 10} pontos ganhos!</p>
        <button onClick={() => { onComplete(score, questions.length); onBack(); }} className="kids-btn bg-primary text-primary-foreground mt-8">
          Continuar 🎉
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-6 max-w-lg mx-auto">
      <button onClick={onBack} className="flex items-center gap-2 text-muted-foreground mb-4 font-body font-bold">
        <ArrowLeft className="w-5 h-5" /> Voltar
      </button>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-display text-primary">🎮 Quiz: {storyTitle}</h2>
        <span className="kids-badge bg-secondary text-secondary-foreground">{currentQ + 1}/{questions.length}</span>
      </div>

      <div className="kids-card mb-6 animate-slide-up" key={currentQ}>
        <h3 className="text-xl font-body font-bold text-foreground mb-6">{question.question}</h3>
        <div className="space-y-3">
          {question.options.map((option, i) => {
            let btnClass = "w-full kids-btn text-left flex items-center gap-3 ";
            if (!answered) {
              btnClass += "bg-card border-2 border-border text-foreground hover:border-primary";
            } else if (i === question.correctIndex) {
              btnClass += "bg-kids-green text-primary-foreground border-2 border-transparent";
            } else if (i === selected) {
              btnClass += "bg-kids-red text-primary-foreground border-2 border-transparent";
            } else {
              btnClass += "bg-muted text-muted-foreground border-2 border-transparent opacity-50";
            }
            return (
              <button key={i} onClick={() => handleSelect(i)} className={btnClass}>
                <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-bold text-foreground shrink-0">
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="font-body font-semibold">{option}</span>
                {answered && i === question.correctIndex && <Check className="w-5 h-5 ml-auto" />}
                {answered && i === selected && i !== question.correctIndex && <X className="w-5 h-5 ml-auto" />}
              </button>
            );
          })}
        </div>
      </div>

      {answered && (
        <div className="text-center animate-bounce-in">
          <p className="text-lg font-display mb-4">
            {isCorrect ? "🎉 Correto! Muito bem!" : "😊 Não foi dessa vez! Continue tentando!"}
          </p>
          <button onClick={handleNext} className="kids-btn bg-primary text-primary-foreground">
            {currentQ < questions.length - 1 ? "Próxima pergunta ➡️" : "Ver resultado 🏆"}
          </button>
        </div>
      )}
    </div>
  );
}
