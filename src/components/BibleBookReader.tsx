import { useState } from "react";
import { BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import type { BibleBook, BibleChapter } from "@/data/bibleBooks";

interface BibleBookReaderProps {
  book: BibleBook;
  kidsMode: boolean;
  onBack: () => void;
}

export default function BibleBookReader({ book, kidsMode }: BibleBookReaderProps) {
  const [chapterIndex, setChapterIndex] = useState(0);

  const chapters = book.sampleChapters;
  const currentChapter: BibleChapter | undefined = chapters[chapterIndex];

  if (!currentChapter) {
    return (
      <div className="animate-slide-up">
        <div className="text-center py-8">
          <span className="text-6xl mb-4 block">{book.emoji}</span>
          <h2 className="text-2xl font-display text-primary mb-2">{book.name}</h2>
          <p className="text-sm text-muted-foreground font-body mb-4">{book.abbreviation} • {book.chapters} capítulos</p>
          <div className="kids-card mx-auto max-w-sm">
            <p className="font-body text-foreground text-sm leading-relaxed">{book.kidsDescription}</p>
          </div>
          <p className="text-xs text-muted-foreground font-body mt-6">
            📖 Em breve, todos os capítulos estarão disponíveis!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-slide-up">
      {/* Book header */}
      <div className="text-center mb-4">
        <span className="text-5xl mb-2 block">{book.emoji}</span>
        <h2 className="text-xl font-display text-primary">{book.name}</h2>
        <p className="text-xs text-muted-foreground font-body">{book.abbreviation} • {book.chapters} capítulos</p>
      </div>

      {/* Kids description */}
      {kidsMode && (
        <div className="bg-accent/10 rounded-2xl p-4 mb-4 border border-accent/20">
          <p className="text-sm font-body text-foreground leading-relaxed">
            🧒 <strong>Sobre este livro:</strong> {book.kidsDescription}
          </p>
        </div>
      )}

      {/* Chapter nav */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setChapterIndex(i => Math.max(0, i - 1))}
          disabled={chapterIndex === 0}
          className="kids-btn bg-secondary text-secondary-foreground px-3 py-2 text-sm disabled:opacity-30"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <span className="font-display text-lg text-foreground">
          Capítulo {currentChapter.chapter}
        </span>
        <button
          onClick={() => setChapterIndex(i => Math.min(chapters.length - 1, i + 1))}
          disabled={chapterIndex === chapters.length - 1}
          className="kids-btn bg-secondary text-secondary-foreground px-3 py-2 text-sm disabled:opacity-30"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Verses */}
      <div className="space-y-3">
        {currentChapter.verses.map(verse => (
          <div key={verse.number} className="kids-card p-4">
            <div className="flex gap-3">
              <span className="font-display text-primary text-lg leading-none mt-0.5">{verse.number}</span>
              <div className="flex-1">
                {kidsMode && verse.kidsText ? (
                  <p className="font-body text-foreground text-sm leading-relaxed">{verse.kidsText}</p>
                ) : (
                  <p className="font-body text-foreground text-sm leading-relaxed">{verse.text}</p>
                )}
                {kidsMode && verse.kidsText && (
                  <p className="font-body text-muted-foreground text-xs mt-2 italic">"{verse.text}"</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chapter dots */}
      {chapters.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {chapters.map((ch, i) => (
            <button
              key={ch.chapter}
              onClick={() => setChapterIndex(i)}
              className={`w-8 h-8 rounded-full font-body text-xs font-bold transition-all ${
                i === chapterIndex
                  ? "bg-primary text-primary-foreground scale-110"
                  : "bg-muted text-muted-foreground hover:bg-primary/20"
              }`}
            >
              {ch.chapter}
            </button>
          ))}
        </div>
      )}

      <p className="text-center text-xs text-muted-foreground font-body mt-6">
        📖 Mais capítulos em breve!
      </p>
    </div>
  );
}
