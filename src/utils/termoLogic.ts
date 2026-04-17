
import { TERMO_ANSWERS, TermoAnswer } from '../data/termoData';

export type LetterState = 'correct' | 'present' | 'absent' | 'empty';
export type GameMode = 'termo' | 'dueto' | 'quarteto';

export const MODE_CONFIG = {
  termo: { words: 1, attempts: 6, label: 'Termo' },
  dueto: { words: 2, attempts: 7, label: 'Dueto' },
  quarteto: { words: 4, attempts: 9, label: 'Quarteto' }
};

export function getWordFeedback(guess: string, answer: string): LetterState[] {
  const result: LetterState[] = Array(guess.length).fill('absent');
  const answerArr = answer.split('');
  const guessArr = guess.split('');

  // First pass: Find correct positions
  for (let i = 0; i < guess.length; i++) {
    if (guessArr[i] === answerArr[i]) {
      result[i] = 'correct';
      answerArr[i] = ''; // Mark as consumed
      guessArr[i] = ''; // Processed
    }
  }

  // Second pass: Find present positions
  for (let i = 0; i < guess.length; i++) {
    if (guessArr[i] !== '') {
      const matchIndex = answerArr.indexOf(guessArr[i]);
      if (matchIndex !== -1) {
        result[i] = 'present';
        answerArr[matchIndex] = ''; // Consume the instance
      }
    }
  }

  return result;
}

export function getDailyWords(count: number): { answers: TermoAnswer[], dateStr: string, dayNumber: number } {
  const now = new Date();
  const dateStr = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
  
  const start = new Date(2026, 0, 1);
  const diff = now.getTime() - start.getTime();
  const dayNumber = Math.floor(diff / (1000 * 60 * 60 * 24));
  
  const answers: TermoAnswer[] = [];
  const baseSeed = now.getFullYear() * 1000 + (now.getMonth() + 1) * 100 + now.getDate();
  
  for (let i = 0; i < count; i++) {
    const seed = baseSeed + (i * 13); // Shift seed for each word
    const index = seed % TERMO_ANSWERS.length;
    answers.push(TERMO_ANSWERS[index]);
  }
  
  return { answers, dateStr, dayNumber };
}

export function getWordOfTheDay() {
  const { answers, dateStr, dayNumber } = getDailyWords(1);
  return { answer: answers[0], dateStr, dayNumber };
}

export function getShareText(
  mode: GameMode, 
  guesses: string[], 
  answers: string[], 
  solvedAt: (number | null)[], 
  dayNumber: number
): string {
  const maxAttempts = MODE_CONFIG[mode].attempts;
  const won = solvedAt.every(s => s !== null);
  const score = won ? guesses.length : 'X';

  const emojiGrids = answers.map((answer, gridIdx) => {
    return guesses.map((guess, guessIdx) => {
      // If this grid was already solved, show nothing or consistent emojis
      const solvedIn = solvedAt[gridIdx];
      if (solvedIn !== null && guessIdx > solvedIn) return null;

      const feedback = getWordFeedback(guess, answer);
      return feedback.map(state => {
        if (state === 'correct') return '🟩';
        if (state === 'present') return '🟨';
        return '⬜';
      }).join('');
    }).filter(row => row !== null);
  });

  let visualGrid = '';
  if (mode === 'termo') {
    visualGrid = emojiGrids[0].join('\n');
  } else if (mode === 'dueto') {
    const rows = Math.max(...emojiGrids.map(g => g.length));
    for (let i = 0; i < rows; i++) {
      const row1 = emojiGrids[0][i] || '⬜⬜⬜⬜⬜';
      const row2 = emojiGrids[1][i] || '⬜⬜⬜⬜⬜';
      visualGrid += `${row1}  ${row2}\n`;
    }
  } else {
    // Quarteto grouping
    visualGrid = '[grid 1]  [grid 2]\n[grid 3]  [grid 4]';
  }

  return `Termo Bíblico ${MODE_CONFIG[mode].label} #${dayNumber}\n\n${visualGrid}\n\n${score}/${maxAttempts}`;
}
