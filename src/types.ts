export interface UserProgress {
  points: number;
  level: number;
  streak: number;
  lastPlayed: string | null;
  badges: string[];
  gamesPlayed: {
    [gameId: string]: number;
  };
  completedLessons: string[];
}

export interface LessonSection {
  title: string;
  content: string;
}

export interface Lesson {
  id: string;
  category: string;
  title: string;
  summary: string;
  verse: {
    text: string;
    ref: string;
  };
  sections: LessonSection[];
  curiosities: string[];
  /** Quiz questions for the lesson */
  quiz: {
    question: string;
    options: string[];
    /** Index of the correct option (0-based) */
    correctIndex: number;
  }[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface CharacterHint {
  id: string;
  name: string;
  hints: string[];
  explanation: string;
}

export interface BibleVerse {
  id: string;
  text: string;
  reference: string;
  author: string;
  context: string;
}

export interface TermoWord {
  word: string;
  hint: string;
}
