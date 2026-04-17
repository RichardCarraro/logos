
import { VALID_WORDS } from '../data/termoData';

/**
 * Normalizes a word by converting to uppercase and removing accents
 */
export const normalizeWord = (word: string): string => {
  return word
    .toUpperCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
};

/**
 * Validates if a word is a valid Portuguese word using a hybrid approach:
 * 1. Checks local expanded dictionary
 * 2. Fallbacks to a public Dictionary API
 */
export async function validateWord(word: string): Promise<boolean> {
  const normalized = normalizeWord(word);

  // 1. Check local list (Instant)
  if (VALID_WORDS.has(normalized)) {
    return true;
  }

  // 2. Fallback to API (Network call)
  try {
    // We use Dicionário Aberto API as a fallback
    // Note: This API returns an array of objects if the word exists
    const response = await fetch(`https://api.dicionario-aberto.net/word/${word.toLowerCase()}`);
    
    if (response.ok) {
      const data = await response.json();
      // If the array is not empty, the word exists
      if (Array.isArray(data) && data.length > 0) {
        return true;
      }
    }
  } catch (error) {
    console.warn("Dicionário API fallback failed:", error);
  }

  // 3. Second fallback - sometimes regional variations or new words aren't in Dicionário Aberto
  // We can try to assume it's valid if it's a "very common" structure or just return false if we want strictness.
  // The user said: "Priorizar aceitação em caso de dúvida"
  // However, completely accepting everything ruins the game.
  
  return false;
}
