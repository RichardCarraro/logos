import { useState, useEffect, useCallback, useMemo } from 'react';
import { UserProgress } from '../types';
import { isToday, isYesterday, parseISO, formatISO } from 'date-fns';

const STORAGE_KEY = 'lumen_user_progress';

const INITIAL_PROGRESS: UserProgress = {
  points: 0,
  level: 1,
  streak: 0,
  lastPlayed: null,
  badges: [],
  gamesPlayed: {},
  completedLessons: []
};

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return {
          ...INITIAL_PROGRESS,
          ...parsed,
          // Ensure these are always arrays even if they were missing in saved data
          badges: parsed.badges || [],
          completedLessons: parsed.completedLessons || [],
          gamesPlayed: parsed.gamesPlayed || {}
        };
      } catch (e) {
        return INITIAL_PROGRESS;
      }
    }
    return INITIAL_PROGRESS;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  // Handle daily streak on load
  useEffect(() => {
    const today = new Date();
    const lastDate = progress.lastPlayed ? parseISO(progress.lastPlayed) : null;

    if (!lastDate) {
      setProgress(prev => ({ ...prev, streak: 1, lastPlayed: formatISO(today) }));
    } else if (isYesterday(lastDate)) {
      setProgress(prev => ({ ...prev, streak: prev.streak + 1, lastPlayed: formatISO(today) }));
    } else if (!isToday(lastDate)) {
      setProgress(prev => ({ ...prev, streak: 1, lastPlayed: formatISO(today) }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addPoints = useCallback((amount: number) => {
    setProgress(prev => {
      const newPoints = prev.points + amount;
      const newLevel = Math.floor(newPoints / 1000) + 1;
      
      return {
        ...prev,
        points: newPoints,
        level: newLevel,
        lastPlayed: formatISO(new Date())
      };
    });
  }, []);

  const incrementGameCount = useCallback((gameId: string) => {
    setProgress(prev => ({
      ...prev,
      gamesPlayed: {
        ...prev.gamesPlayed,
        [gameId]: (prev.gamesPlayed[gameId] || 0) + 1
      }
    }));
  }, []);

  const addBadge = useCallback((badge: string) => {
    setProgress(prev => {
      if (prev.badges.includes(badge)) return prev;
      return {
        ...prev,
        badges: [...prev.badges, badge]
      };
    });
  }, []);

  const completeLesson = useCallback((lessonId: string) => {
    setProgress(prev => {
      if (prev.completedLessons.includes(lessonId)) return prev;
      return {
        ...prev,
        points: prev.points + 100,
        level: Math.floor((prev.points + 100) / 1000) + 1,
        completedLessons: [...prev.completedLessons, lessonId]
      };
    });
  }, []);

  return useMemo(() => ({
    progress,
    addPoints,
    incrementGameCount,
    addBadge,
    completeLesson
  }), [progress, addPoints, incrementGameCount, addBadge, completeLesson]);
}
