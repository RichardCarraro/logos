
import { useState, useEffect, useCallback, useMemo } from 'react';
import { GameMode } from '../utils/termoLogic';

export interface TermoStats {
  gamesPlayed: number;
  gamesWon: number;
  currentStreak: number;
  maxStreak: number;
  guesses: { [key: number]: number }; // Dynamic based on max attempts
  lastPlayedDate: string | null;
}

const getInitialStats = (maxGuesses: number): TermoStats => {
  const guesses: { [key: number]: number } = {};
  for (let i = 1; i <= maxGuesses; i++) guesses[i] = 0;
  return {
    gamesPlayed: 0,
    gamesWon: 0,
    currentStreak: 0,
    maxStreak: 0,
    guesses,
    lastPlayedDate: null,
  };
};

export function useTermoStats(mode: GameMode, maxGuesses: number) {
  const [stats, setStats] = useState<TermoStats>(() => {
    const saved = localStorage.getItem(`termo_stats_${mode}`);
    return saved ? JSON.parse(saved) : getInitialStats(maxGuesses);
  });

  useEffect(() => {
    localStorage.setItem(`termo_stats_${mode}`, JSON.stringify(stats));
  }, [stats, mode]);

  const addGameResult = useCallback((won: boolean, numGuesses: number, date: string) => {
    setStats(prev => {
      if (prev.lastPlayedDate === date) return prev;

      const newStats = { ...prev, guesses: { ...prev.guesses } };
      newStats.gamesPlayed += 1;
      if (won) {
        newStats.gamesWon += 1;
        newStats.currentStreak += 1;
        newStats.maxStreak = Math.max(newStats.maxStreak, newStats.currentStreak);
        newStats.guesses[numGuesses] = (newStats.guesses[numGuesses] || 0) + 1;
      } else {
        newStats.currentStreak = 0;
      }
      
      newStats.lastPlayedDate = date;
      return newStats;
    });
  }, []);

  return useMemo(() => ({ stats, addGameResult }), [stats, addGameResult]);
}

export function useTermoGameState(mode: GameMode, date: string) {
  const [gameState, setGameState] = useState<{
    guesses: string[];
    isOver: boolean;
    won: boolean;
    solvedAt: (number | null)[];
  } | null>(() => {
    const saved = localStorage.getItem(`termo_game_${mode}_${date}`);
    return saved ? JSON.parse(saved) : null;
  });

  const saveGameState = useCallback((guesses: string[], isOver: boolean, won: boolean, solvedAt: (number | null)[]) => {
    const state = { guesses, isOver, won, solvedAt };
    localStorage.setItem(`termo_game_${mode}_${date}`, JSON.stringify(state));
    setGameState(state);
  }, [date, mode]);

  return useMemo(() => ({ gameState, saveGameState }), [gameState, saveGameState]);
}
