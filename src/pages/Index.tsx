import { useState } from "react";
import KidsDashboard from "@/components/KidsDashboard";
import StoryList from "@/components/StoryList";
import StoryViewer from "@/components/StoryViewer";
import QuizView from "@/components/QuizView";
import VerseOfWeek from "@/components/VerseOfWeek";
import ProgressView from "@/components/ProgressView";
import ColoringPages from "@/components/ColoringPages";
import BibleModule from "@/components/BibleModule";
import PhotoToColoring from "@/components/PhotoToColoring";
import ProfileView from "@/components/ProfileView";
import { bibleStories } from "@/data/bibleData";
import { useGameState } from "@/hooks/useGameState";

type Screen = "dashboard" | "stories" | "story" | "quiz" | "verse" | "progress" | "coloring" | "bible" | "photo-coloring" | "profile";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("dashboard");
  const [selectedStoryId, setSelectedStoryId] = useState<string | null>(null);
  const game = useGameState();

  const selectedStory = bibleStories.find(s => s.id === selectedStoryId);

  const handleSelectStory = (id: string) => {
    setSelectedStoryId(id);
    setScreen("story");
  };

  const handleStoryComplete = () => {
    if (selectedStoryId) {
      game.markStoryRead(selectedStoryId);
      game.addPoints(10);
    }
  };

  const handleQuizComplete = (score: number, total: number) => {
    if (selectedStoryId) {
      game.markQuizCompleted(selectedStoryId, score === total);
      game.addPoints(score * 10);
    }
  };

  const handleMemorize = () => {
    game.markVerseMemorized();
    game.addPoints(20);
  };

  return (
    <div className="min-h-screen bg-background">
      {screen === "dashboard" && (
        <KidsDashboard
          onNavigate={(section) => setScreen(section as Screen)}
          playerName=""
          currentLevel={game.currentLevel}
          points={game.points}
        />
      )}
      {screen === "bible" && (
        <BibleModule onBack={() => setScreen("dashboard")} />
      )}
      {screen === "stories" && (
        <StoryList
          onSelectStory={handleSelectStory}
          onBack={() => setScreen("dashboard")}
          storiesRead={game.storiesRead}
        />
      )}
      {screen === "story" && selectedStory && (
        <StoryViewer
          story={selectedStory}
          onBack={() => setScreen("stories")}
          onComplete={handleStoryComplete}
          onStartQuiz={() => setScreen("quiz")}
        />
      )}
      {screen === "quiz" && selectedStory && (
        <QuizView
          storyTitle={selectedStory.title}
          questions={selectedStory.quiz}
          onBack={() => setScreen("stories")}
          onComplete={handleQuizComplete}
        />
      )}
      {screen === "verse" && (
        <VerseOfWeek
          onBack={() => setScreen("dashboard")}
          memorized={game.verseMemorized}
          onMemorize={handleMemorize}
        />
      )}
      {screen === "coloring" && (
        <ColoringPages onBack={() => setScreen("dashboard")} />
      )}
      {screen === "photo-coloring" && (
        <PhotoToColoring onBack={() => setScreen("dashboard")} />
      )}
      {screen === "profile" && (
        <ProfileView onBack={() => setScreen("dashboard")} />
      )}
      {screen === "progress" && (
        <ProgressView
          onBack={() => setScreen("dashboard")}
          points={game.points}
          currentLevel={game.currentLevel}
          nextLevel={game.nextLevel}
          storiesRead={game.storiesRead}
          quizzesCompleted={game.quizzesCompleted}
          earnedBadges={game.earnedBadges}
        />
      )}
    </div>
  );
};

export default Index;
