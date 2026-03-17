import { useState } from "react";
import { ArrowLeft, BookOpen, ChevronRight, Search } from "lucide-react";
import { bibleTestaments, type BibleTestament, type BibleCategory, type BibleBook } from "@/data/bibleBooks";
import BibleBookReader from "./BibleBookReader";

type BibleScreen = "testaments" | "categories" | "books" | "reader";

interface BibleModuleProps {
  onBack: () => void;
}

export default function BibleModule({ onBack }: BibleModuleProps) {
  const [screen, setScreen] = useState<BibleScreen>("testaments");
  const [selectedTestament, setSelectedTestament] = useState<BibleTestament | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<BibleCategory | null>(null);
  const [selectedBook, setSelectedBook] = useState<BibleBook | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [kidsMode, setKidsMode] = useState(true);

  const handleSelectTestament = (t: BibleTestament) => {
    setSelectedTestament(t);
    setScreen("categories");
  };

  const handleSelectCategory = (c: BibleCategory) => {
    setSelectedCategory(c);
    setScreen("books");
  };

  const handleSelectBook = (b: BibleBook) => {
    setSelectedBook(b);
    setScreen("reader");
  };

  const handleBack = () => {
    if (screen === "reader") setScreen("books");
    else if (screen === "books") setScreen("categories");
    else if (screen === "categories") setScreen("testaments");
    else onBack();
  };

  const filteredBooks = searchQuery.trim()
    ? bibleTestaments
        .flatMap(t => t.categories.flatMap(c => c.books))
        .filter(b => b.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : null;

  const screenTitle = screen === "testaments" ? "📖 Bíblia Kids"
    : screen === "categories" ? `${selectedTestament?.emoji} ${selectedTestament?.name}`
    : screen === "books" ? `${selectedCategory?.emoji} ${selectedCategory?.name}`
    : selectedBook?.name || "";

  return (
    <div className="min-h-screen px-4 py-6 max-w-lg mx-auto">
      <button onClick={handleBack} className="flex items-center gap-2 text-muted-foreground mb-4 font-body font-bold">
        <ArrowLeft className="w-5 h-5" /> Voltar
      </button>

      {screen !== "reader" && (
        <>
          <h1 className="text-2xl font-display text-primary mb-2">{screenTitle}</h1>

          {/* Kids mode toggle */}
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={() => setKidsMode(!kidsMode)}
              className={`kids-badge text-sm transition-all ${kidsMode ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}`}
            >
              {kidsMode ? "🧒 Modo Kids: ON" : "📖 Modo Kids: OFF"}
            </button>
          </div>

          {/* Search */}
          <div className="relative mb-5">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar livro..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-card border-2 border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </>
      )}

      {/* Search results */}
      {filteredBooks && screen !== "reader" && (
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground font-body mb-2">{filteredBooks.length} livro(s) encontrado(s)</p>
          {filteredBooks.map((book, i) => (
            <BookCard key={book.id} book={book} index={i} onSelect={handleSelectBook} />
          ))}
        </div>
      )}

      {/* Testaments */}
      {!filteredBooks && screen === "testaments" && (
        <div className="space-y-4">
          {bibleTestaments.map((testament, i) => (
            <button
              key={testament.id}
              onClick={() => handleSelectTestament(testament)}
              className="kids-card w-full flex items-center gap-4 text-left animate-slide-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`${testament.id === "old" ? "bg-kids-orange" : "bg-kids-red"} p-4 rounded-2xl text-3xl flex items-center justify-center`}>
                {testament.emoji}
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg text-foreground">{testament.name}</h3>
                <p className="text-sm text-muted-foreground font-body">
                  {testament.categories.reduce((sum, c) => sum + c.books.length, 0)} livros
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          ))}

          <div className="mt-6 p-4 rounded-2xl bg-card border-2 border-border text-center">
            <p className="text-sm text-muted-foreground font-body">
              📚 A Bíblia tem <span className="font-bold text-foreground">66 livros</span>: 39 no Antigo Testamento e 27 no Novo Testamento!
            </p>
          </div>
        </div>
      )}

      {/* Categories */}
      {!filteredBooks && screen === "categories" && selectedTestament && (
        <div className="space-y-3">
          {selectedTestament.categories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => handleSelectCategory(cat)}
              className="kids-card w-full flex items-center gap-4 text-left animate-slide-up"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className={`${cat.color} p-3 rounded-2xl text-2xl flex items-center justify-center min-w-[52px]`}>
                {cat.emoji}
              </div>
              <div className="flex-1">
                <h3 className="font-display text-base text-foreground">{cat.name}</h3>
                <p className="text-xs text-muted-foreground font-body">{cat.books.length} livro(s)</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          ))}
        </div>
      )}

      {/* Books list */}
      {!filteredBooks && screen === "books" && selectedCategory && (
        <div className="space-y-2">
          {selectedCategory.books.map((book, i) => (
            <BookCard key={book.id} book={book} index={i} onSelect={handleSelectBook} />
          ))}
        </div>
      )}

      {/* Book reader */}
      {screen === "reader" && selectedBook && (
        <BibleBookReader book={selectedBook} kidsMode={kidsMode} onBack={handleBack} />
      )}
    </div>
  );
}

function BookCard({ book, index, onSelect }: { book: BibleBook; index: number; onSelect: (b: BibleBook) => void }) {
  return (
    <button
      onClick={() => onSelect(book)}
      className="kids-card w-full flex items-center gap-3 text-left animate-slide-up p-4"
      style={{ animationDelay: `${index * 0.03}s` }}
    >
      <span className="text-2xl">{book.emoji}</span>
      <div className="flex-1 min-w-0">
        <h3 className="font-display text-base text-foreground">{book.name}</h3>
        <p className="text-xs text-muted-foreground font-body truncate">{book.kidsDescription}</p>
      </div>
      <span className="text-xs text-muted-foreground font-body whitespace-nowrap">{book.chapters} cap.</span>
      <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
    </button>
  );
}
