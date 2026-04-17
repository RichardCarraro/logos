import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { VALID_WORDS } from '../data/termoData';
import { cn } from '../lib/utils';
import { RefreshCw, Share2, BarChart2, Info, Delete, X, LayoutGrid, Rows } from 'lucide-react';
import confetti from 'canvas-confetti';
import { getWordFeedback, getDailyWords, getShareText, LetterState, GameMode, MODE_CONFIG } from '../utils/termoLogic';
import { useTermoStats, useTermoGameState, TermoStats } from '../hooks/useTermoStats';
import { validateWord, normalizeWord } from '../services/wordValidation';

interface Notification {
  message: string;
  type: 'error' | 'info';
}

interface TermoProps {
  onWin?: (points: number) => void;
}

// --- Sub-components ---

function WordGrid({ 
  guesses, 
  activeIndex, 
  currentGuess, 
  answer, 
  maxAttempts, 
  wordLength, 
  isGameOver, 
  isCurrentBoardSolved, 
  solvedAt,
  onCellClick,
  gridId,
  mode
}: {
  guesses: string[],
  activeIndex: number,
  currentGuess: string[],
  answer: string,
  maxAttempts: number,
  wordLength: number,
  isGameOver: boolean,
  isCurrentBoardSolved: boolean,
  solvedAt: number | null,
  onCellClick: (idx: number) => void,
  gridId: number,
  mode: GameMode
}) {
  const isQuarteto = mode === 'quarteto';
  const isDueto = mode === 'dueto';

  return (
    <div className={cn(
      "grid transition-all duration-500 w-full",
      "grid-rows-[repeat(maxAttempts,1fr)]",
      isQuarteto ? "gap-1 sm:gap-1.5" : "gap-1.5 sm:gap-2",
      isCurrentBoardSolved && "opacity-60 grayscale-[0.3] scale-[0.98]"
    )} style={{ gridTemplateRows: `repeat(${maxAttempts}, minmax(0, 1fr))` }}>
      {Array.from({ length: maxAttempts }).map((_, rowIndex) => {
        const guess = guesses[rowIndex];
        const isCurrent = rowIndex === guesses.length && !isCurrentBoardSolved;
        const feedback = guess ? getWordFeedback(guess, answer) : null;

        return (
          <div key={rowIndex} className={cn(
            "grid grid-cols-5 h-full",
            isQuarteto ? "gap-1 sm:gap-1.5" : "gap-1.5 sm:gap-2"
          )}>
            {Array.from({ length: wordLength }).map((_, colIndex) => {
              const char = guess ? guess[colIndex] : (isCurrent ? currentGuess[colIndex] : '');
              const state = feedback ? feedback[colIndex] : 'empty';
              const isActive = isCurrent && colIndex === activeIndex;

              return (
                <motion.div
                  key={colIndex}
                  onClick={() => {
                    if (isCurrent && !isGameOver) onCellClick(colIndex);
                  }}
                  animate={feedback ? {
                    rotateX: [0, 90, 0],
                    backgroundColor: state === 'correct' ? '#4A6741' : state === 'present' ? '#D4AF37' : state === 'absent' ? '#6B7280' : '#FFFFFF'
                  } : {}}
                  transition={{ delay: colIndex * 0.1, duration: 0.4 }}
                  className={cn(
                    "aspect-square border-2 flex items-center justify-center font-bold rounded-sm transition-all cursor-default relative w-full",
                    isQuarteto ? "text-sm sm:text-base border-[1px]" : "text-xl sm:text-2xl border-2",
                    !guess && !isCurrent && "border-prof-border bg-white text-prof-text",
                    isCurrent && char !== '' && !isActive && "border-prof-primary bg-white text-prof-text",
                    isCurrent && char === '' && !isActive && "border-prof-border bg-white text-prof-text",
                    isActive && !isGameOver && "border-prof-primary scale-105 bg-white shadow-lg z-20",
                    feedback && "text-white border-transparent"
                  )}
                >
                  <span className="select-none pointer-events-none uppercase">{char}</span>
                  {isActive && !isGameOver && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="absolute bottom-1 w-2/3 h-0.5 bg-prof-primary rounded-full" 
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

// --- Main Component ---

export default function TermoBiblico({ onWin }: TermoProps) {
  const [mode, setMode] = useState<GameMode>(() => {
    const saved = localStorage.getItem('termo_current_mode');
    return (saved as GameMode) || 'termo';
  });

  const config = MODE_CONFIG[mode];
  const { answers, dateStr, dayNumber } = useMemo(() => getDailyWords(config.words), [config.words]);
  
  const { stats, addGameResult } = useTermoStats(mode, config.attempts);
  const { gameState, saveGameState } = useTermoGameState(mode, dateStr);

  const [guesses, setGuesses] = useState<string[]>(gameState?.guesses || []);
  const [solvedAt, setSolvedAt] = useState<(number | null)[]>(gameState?.solvedAt || Array(config.words).fill(null));
  
  const wordLength = 5;
  const [currentGuess, setCurrentGuess] = useState<string[]>(Array(wordLength).fill(''));
  const [activeIndex, setActiveIndex] = useState(0);
  const [notification, setNotification] = useState<Notification | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [showStats, setShowStats] = useState(false);

  const answerStrings = useMemo(() => answers.map(a => normalizeWord(a.word)), [answers]);
  const isGameOver = guesses.length >= config.attempts || solvedAt.every(s => s !== null);
  const won = solvedAt.every(s => s !== null);

  const hasProcessedWin = React.useRef(false);

  // Sync mode
  useEffect(() => {
    localStorage.setItem('termo_current_mode', mode);
  }, [mode]);

  // Sync state with local storage
  useEffect(() => {
    const isNewState = !gameState || 
                      guesses.length !== gameState.guesses.length || 
                      isGameOver !== gameState.isOver;
                      
    if (guesses.length > 0 && isNewState) {
      saveGameState(guesses, isGameOver, won, solvedAt);
    }
  }, [guesses, isGameOver, won, solvedAt, saveGameState, gameState]);

  useEffect(() => {
    if (isGameOver && stats.lastPlayedDate !== dateStr && !hasProcessedWin.current) {
      hasProcessedWin.current = true;
      addGameResult(won, guesses.length, dateStr);
      if (won && onWin) onWin(mode === 'termo' ? 500 : mode === 'dueto' ? 1000 : 2000);
    }
  }, [isGameOver, won, stats.lastPlayedDate, dateStr, guesses.length, onWin, addGameResult, mode]);

  const showNotification = (message: string, type: 'error' | 'info' = 'error') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 2000);
  };

  const onKeyPress = useCallback(async (key: string) => {
    if (isGameOver || isAnimating || isValidating) return;

    if (key === 'ENTER') {
      if (currentGuess.some(char => char === '')) {
        showNotification('Complete a palavra');
        return;
      }
      
      const guessStr = currentGuess.join('');
      const normalizedGuess = normalizeWord(guessStr);
      
      setIsValidating(true);
      const isValid = await validateWord(guessStr);
      
      if (!isValid && !answerStrings.includes(normalizedGuess)) {
        showNotification('Palavra não reconhecida');
        setIsValidating(false);
        return;
      }

      setIsValidating(false);
      setIsAnimating(true);
      
      // Update guesses
      const newGuesses = [...guesses, normalizedGuess];
      setGuesses(newGuesses);
      
      // Update solved status
      const newSolvedAt = [...solvedAt];
      answerStrings.forEach((ans, i) => {
        if (newSolvedAt[i] === null && ans === normalizedGuess) {
          newSolvedAt[i] = newGuesses.length - 1;
        }
      });
      setSolvedAt(newSolvedAt);

      setCurrentGuess(Array(wordLength).fill(''));
      setActiveIndex(0);
      
      const isNewlySolved = newSolvedAt.every(s => s !== null);
      if (isNewlySolved) {
        setTimeout(() => {
          confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
          setIsAnimating(false);
        }, 1200);
      } else {
        setTimeout(() => setIsAnimating(false), 1200);
      }
    } else if (key === 'BACKSPACE') {
      if (currentGuess[activeIndex] === '' && activeIndex > 0) {
        const newGuess = [...currentGuess];
        newGuess[activeIndex - 1] = '';
        setCurrentGuess(newGuess);
        setActiveIndex(activeIndex - 1);
      } else {
        const newGuess = [...currentGuess];
        newGuess[activeIndex] = '';
        setCurrentGuess(newGuess);
      }
    } else if (key === 'ARROWLEFT') {
      setActiveIndex(prev => Math.max(0, prev - 1));
    } else if (key === 'ARROWRIGHT') {
      setActiveIndex(prev => Math.min(wordLength - 1, prev + 1));
    } else if (/^[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]$/i.test(key)) {
      const newGuess = [...currentGuess];
      newGuess[activeIndex] = key.toUpperCase();
      setCurrentGuess(newGuess);
      if (activeIndex < wordLength - 1) {
        setActiveIndex(activeIndex + 1);
      }
    }
  }, [currentGuess, isGameOver, isAnimating, isValidating, answerStrings, activeIndex, guesses, solvedAt, wordLength]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (e.key === 'Enter') onKeyPress('ENTER').catch(console.error);
      else if (e.key === 'Backspace') onKeyPress('BACKSPACE').catch(console.error);
      else if (e.key === 'ArrowLeft') onKeyPress('ARROWLEFT').catch(console.error);
      else if (e.key === 'ArrowRight') onKeyPress('ARROWRIGHT').catch(console.error);
      else onKeyPress(e.key.toUpperCase()).catch(console.error);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onKeyPress]);

  const getKeyState = (char: string) => {
    let bestState: LetterState = 'empty';
    
    // Aggregate states across all active (non-solved) grids
    answerStrings.forEach((ans, idx) => {
      // If a grid is solved, we don't count its letter states for the keyboard EXCEPT if it's correct
      // Actually, standard Dordle/Quordle logic: Key is green if it's green in ANY word.
      guesses.forEach(guess => {
        const feedback = getWordFeedback(guess, ans);
        guess.split('').forEach((letter, i) => {
          if (letter === char) {
            const s = feedback[i];
            if (s === 'correct') bestState = 'correct';
            else if (s === 'present' && bestState !== 'correct') bestState = 'present';
            else if (s === 'absent' && bestState === 'empty') bestState = 'absent';
          }
        });
      });
    });
    
    return bestState;
  };

  const handleShare = () => {
    const text = getShareText(mode, guesses, answerStrings, solvedAt, dayNumber);
    navigator.clipboard.writeText(text);
    showNotification('Resultado copiado!', 'info');
  };

  return (
    <div className="flex flex-col items-center gap-1 sm:gap-2 py-2 sm:py-4 px-2 sm:px-4 w-full max-w-7xl mx-auto h-[100dvh] transition-colors duration-500 overflow-hidden text-prof-text relative">
      {/* Header controls - REVERTED */}
      <div className="flex justify-between items-center w-full max-w-xl shrink-0 pt-1">
        <div className="flex gap-1">
          <button onClick={() => showNotification(answers[0].meaning, 'info')} className="p-2 text-prof-muted hover:text-prof-primary transition-colors">
            <Info size={24} />
          </button>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif text-prof-primary tracking-tight font-bold">Termo Bíblico</h2>
        <div className="flex gap-1">
          <button onClick={() => setShowStats(true)} className="p-2 text-prof-muted hover:text-prof-primary transition-colors">
            <BarChart2 size={24} />
          </button>
        </div>
      </div>

      {/* Mode Selector - REVERTED */}
      <div className="flex bg-gray-200/50 p-0.5 rounded-xl w-full max-w-xs shadow-inner shrink-0 leading-none">
        {(['termo', 'dueto', 'quarteto'] as GameMode[]).map(m => (
          <button
            key={m}
            onClick={() => {
              if (guesses.length === 0 || isGameOver) {
                setMode(m);
                setGuesses([]);
                setSolvedAt(Array(MODE_CONFIG[m].words).fill(null));
                hasProcessedWin.current = false;
              } else {
                showNotification('Termine o jogo atual primeiro');
              }
            }}
            className={cn(
              "flex-1 py-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all",
              mode === m ? "bg-white text-prof-primary shadow-md" : "text-prof-muted hover:text-prof-text"
            )}
          >
            {m}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={cn(
              "fixed top-24 z-50 px-4 py-2 rounded-lg font-bold shadow-lg text-sm",
              notification.type === 'error' ? "bg-black text-white" : "bg-prof-primary text-white"
            )}
          >
            {notification.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Game Grids - NO SCROLL, ADAPTIVE LAYOUT */}
      <div className={cn(
        "w-full flex-1 min-h-0 flex px-2 sm:px-4 items-center justify-center transition-all duration-500 overflow-hidden",
        mode === 'termo' ? "flex-col" : "flex-row",
        mode === 'dueto' && "gap-4 sm:gap-12 md:gap-20",
        mode === 'quarteto' && "gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10"
      )}>
        {answerStrings.map((ans, idx) => (
          <div key={idx} className={cn(
            "flex flex-col justify-center transition-all duration-700",
            mode === 'termo' ? "w-full max-w-[350px] sm:max-w-[420px] flex-none" : "flex-1 h-full max-h-full min-w-0",
            mode === 'dueto' && "max-w-[300px]",
            mode === 'quarteto' && "max-w-[280px]"
          )}>
            <div className="w-full flex items-center justify-center">
              <div className="w-full">
                <WordGrid
                  guesses={guesses}
                  activeIndex={activeIndex}
                  currentGuess={currentGuess}
                  answer={ans}
                  maxAttempts={config.attempts}
                  wordLength={wordLength}
                  isGameOver={isGameOver}
                  isCurrentBoardSolved={solvedAt[idx] !== null}
                  solvedAt={solvedAt[idx]}
                  onCellClick={setActiveIndex}
                  gridId={idx}
                  mode={mode}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area - REVERTED */}
      <div className="w-full max-w-lg shrink-0 pt-1 pb-2 sm:pb-4 bg-transparent">
        {isGameOver ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-4 sm:p-6 bg-white border border-prof-border rounded-2xl shadow-xl text-center mx-auto max-w-sm"
          >
            <h3 className="text-lg sm:text-xl font-serif mb-2 font-bold text-prof-text">{won ? 'Excelente!' : 'Fim de Jogo'}</h3>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {answerStrings.map((ans, i) => (
                <div key={i} className={cn(
                  "px-3 py-1 rounded-full font-bold tracking-widest text-[10px] sm:text-xs text-white",
                  solvedAt[i] !== null ? "bg-prof-primary shadow-sm" : "bg-red-500 shadow-sm"
                )}>
                  {ans}
                </div>
              ))}
            </div>
            <button onClick={handleShare} className="prof-btn w-full flex items-center justify-center gap-2 py-3 shadow-lg">
              <Share2 size={18} /> Compartilhar
            </button>
          </motion.div>
        ) : (
          <div className="flex flex-col gap-1.5 sm:gap-2 w-full touch-none px-2 mb-2 sm:mb-4">
            {[
              'QWERTYUIOP'.split(''),
              'ASDFGHJKL'.split(''),
              ['ENTER', ...'ZXCVBNM'.split(''), 'BACKSPACE']
            ].map((row, i) => (
              <div key={i} className="flex justify-center gap-1 sm:gap-1.5 w-full">
                {row.map(char => {
                  const state = getKeyState(char);
                  const isSpecial = char === 'ENTER' || char === 'BACKSPACE';
                  return (
                    <button
                      key={char}
                      onClick={() => onKeyPress(char)}
                      className={cn(
                        "h-12 sm:h-14 flex items-center justify-center font-bold text-[10px] sm:text-xs rounded-md transition-all active:brightness-90 active:scale-95 shadow-sm border select-none",
                        isSpecial ? "px-2 sm:px-4 min-w-[55px] sm:min-w-[90px]" : "flex-1 min-w-[28px] sm:min-w-[44px]",
                        (state as string) === 'correct' && "bg-prof-primary text-white border-transparent shadow-md",
                        (state as string) === 'present' && "bg-prof-accent text-white border-transparent shadow-md",
                        (state as string) === 'absent' && "bg-prof-muted text-white border-transparent shadow-md",
                        (state as string) === 'empty' && "bg-white border-prof-border text-prof-text hover:bg-gray-50 shadow-sm"
                      )}
                    >
                      {char === 'BACKSPACE' ? <Delete size={20} /> : char}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Stats Modal - REVERTED */}
      <AnimatePresence>
        {showStats && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl relative text-prof-text"
            >
              <button onClick={() => setShowStats(false)} className="absolute top-4 right-4 text-prof-muted hover:text-prof-text transition-colors">
                <X size={24} />
              </button>
              <h3 className="text-center text-2xl font-serif mb-2 text-prof-primary">Estatísticas</h3>
              <p className="text-center text-[10px] text-prof-muted uppercase tracking-widest mb-6">{mode}</p>
              
              <div className="grid grid-cols-4 gap-2 text-center mb-8">
                <div>
                  <div className="text-2xl font-bold text-prof-text">{stats.gamesPlayed}</div>
                  <div className="text-[10px] uppercase text-prof-muted">Jogados</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-prof-text">{stats.gamesPlayed > 0 ? Math.round((stats.gamesWon / stats.gamesPlayed) * 100) : 0}</div>
                  <div className="text-[10px] uppercase text-prof-muted">% Vitórias</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-prof-text">{stats.currentStreak}</div>
                  <div className="text-[10px] uppercase text-prof-muted">Streak</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-prof-text">{stats.maxStreak}</div>
                  <div className="text-[10px] uppercase text-prof-muted">Max</div>
                </div>
              </div>

              <h4 className="text-[10px] font-bold uppercase tracking-widest text-prof-muted mb-4 text-center">Distribuição de Tentativas</h4>
              <div className="space-y-1.5 mb-8 max-h-40 overflow-y-auto px-1 scrollbar-hide">
                {Array.from({ length: config.attempts }).map((_, idx) => {
                  const n = idx + 1;
                  const count = stats.guesses[n] || 0;
                  const max = Math.max(...Object.values(stats.guesses) as number[], 1);
                  return (
                    <div key={n} className="flex items-center gap-2">
                      <span className="text-[10px] font-bold w-2 text-prof-text">{n}</span>
                      <div className="flex-1 h-4 bg-gray-100 rounded overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(count / max) * 100}%` }}
                          className={cn("h-full min-w-[15px] flex items-center justify-end px-2 text-[8px] font-bold text-white", count > 0 ? "bg-prof-primary shadow-sm" : "bg-prof-muted")}
                        >
                          {count}
                        </motion.div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button onClick={() => setShowStats(false)} className="prof-btn w-full">FECHAR</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
