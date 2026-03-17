import { useState, useCallback, useEffect } from "react";
import { gamificationLevels, badges as allBadges } from "@/data/bibleData";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

interface GameState {
  points: number;
  storiesRead: string[];
  quizzesCompleted: string[];
  perfectQuizzes: string[];
  verseMemorized: boolean;
  earnedBadges: string[];
}

const defaultState: GameState = {
  points: 0,
  storiesRead: [],
  quizzesCompleted: [],
  perfectQuizzes: [],
  verseMemorized: false,
  earnedBadges: [],
};

export function useGameState() {
  const { user } = useAuth();
  const [state, setState] = useState<GameState>(defaultState);
  const [loaded, setLoaded] = useState(false);

  // Load from DB
  useEffect(() => {
    if (!user) {
      setState(defaultState);
      setLoaded(false);
      return;
    }
    const load = async () => {
      const { data } = await supabase
        .from("game_progress")
        .select("*")
        .eq("user_id", user.id)
        .single();

      if (data) {
        setState({
          points: data.points,
          storiesRead: data.stories_read,
          quizzesCompleted: data.quizzes_completed,
          perfectQuizzes: data.perfect_quizzes,
          verseMemorized: data.verse_memorized,
          earnedBadges: data.earned_badges,
        });
      }
      setLoaded(true);
    };
    load();
  }, [user]);

  // Save to DB
  const saveToDb = useCallback(
    async (newState: GameState) => {
      if (!user) return;
      await supabase
        .from("game_progress")
        .update({
          points: newState.points,
          stories_read: newState.storiesRead,
          quizzes_completed: newState.quizzesCompleted,
          perfect_quizzes: newState.perfectQuizzes,
          verse_memorized: newState.verseMemorized,
          earned_badges: newState.earnedBadges,
        })
        .eq("user_id", user.id);
    },
    [user]
  );

  const updateState = useCallback(
    (updater: (prev: GameState) => GameState) => {
      setState((prev) => {
        const next = updater(prev);
        // Check for new badges
        const newBadges = [...next.earnedBadges];
        if (next.storiesRead.length >= 1 && !newBadges.includes("first-story")) newBadges.push("first-story");
        if (next.perfectQuizzes.length >= 1 && !newBadges.includes("quiz-master")) newBadges.push("quiz-master");
        if (next.verseMemorized && !newBadges.includes("verse-memorizer")) newBadges.push("verse-memorizer");
        if (next.storiesRead.length >= 3 && !newBadges.includes("explorer")) newBadges.push("explorer");
        if (next.quizzesCompleted.length >= 5 && !newBadges.includes("champion")) newBadges.push("champion");
        const finalState = { ...next, earnedBadges: newBadges };
        saveToDb(finalState);
        return finalState;
      });
    },
    [saveToDb]
  );

  const addPoints = useCallback(
    (pts: number) => updateState((s) => ({ ...s, points: s.points + pts })),
    [updateState]
  );

  const markStoryRead = useCallback(
    (storyId: string) =>
      updateState((s) => ({
        ...s,
        storiesRead: s.storiesRead.includes(storyId) ? s.storiesRead : [...s.storiesRead, storyId],
      })),
    [updateState]
  );

  const markQuizCompleted = useCallback(
    (storyId: string, perfect: boolean) =>
      updateState((s) => ({
        ...s,
        quizzesCompleted: s.quizzesCompleted.includes(storyId) ? s.quizzesCompleted : [...s.quizzesCompleted, storyId],
        perfectQuizzes:
          perfect && !s.perfectQuizzes.includes(storyId) ? [...s.perfectQuizzes, storyId] : s.perfectQuizzes,
      })),
    [updateState]
  );

  const markVerseMemorized = useCallback(
    () => updateState((s) => ({ ...s, verseMemorized: true })),
    [updateState]
  );

  const currentLevel = gamificationLevels.reduce((acc, level) => {
    if (state.points >= level.minPoints) return level;
    return acc;
  }, gamificationLevels[0]);

  const nextLevel = gamificationLevels.find((l) => l.minPoints > state.points);

  return {
    ...state,
    loaded,
    addPoints,
    markStoryRead,
    markQuizCompleted,
    markVerseMemorized,
    currentLevel,
    nextLevel,
    allBadges,
  };
}
