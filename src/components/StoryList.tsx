import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { bibleStories } from "@/data/bibleData";

interface StoryListProps {
  onSelectStory: (storyId: string) => void;
  onBack: () => void;
  storiesRead: string[];
}

export default function StoryList({ onSelectStory, onBack, storiesRead }: StoryListProps) {
  return (
    <div className="min-h-screen px-4 py-6 max-w-lg mx-auto">
      <button onClick={onBack} className="flex items-center gap-2 text-muted-foreground mb-4 font-body font-bold">
        <ArrowLeft className="w-5 h-5" /> Voltar
      </button>
      <h1 className="text-2xl font-display text-primary mb-6">📖 Histórias da Bíblia</h1>
      <div className="space-y-4">
        {bibleStories.map((story, i) => (
          <button
            key={story.id}
            onClick={() => onSelectStory(story.id)}
            className="kids-card w-full flex items-center gap-4 text-left animate-slide-up"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <img src={story.image} alt={story.title} className="w-20 h-20 rounded-2xl object-cover" />
            <div className="flex-1">
              <h3 className="font-display text-lg text-foreground">{story.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{story.slides.length} slides</p>
            </div>
            {storiesRead.includes(story.id) && <span className="text-2xl">✅</span>}
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        ))}
      </div>
    </div>
  );
}
