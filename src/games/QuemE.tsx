import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CHARACTER_HINTS } from '../data';
import { cn } from '../lib/utils';
import { HelpCircle, Send, CheckCircle2, ChevronRight, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuemEProps {
  onWin: (points: number) => void;
}

export default function QuemE({ onWin }: QuemEProps) {
  const [characterIdx, setCharacterIdx] = useState(Math.floor(Math.random() * CHARACTER_HINTS.length));
  const [visibleHints, setVisibleHints] = useState(1);
  const [guess, setGuess] = useState('');
  const [gameState, setGameState] = useState<'playing' | 'won' | 'lost'>('playing');
  const [feedback, setFeedback] = useState('');

  const character = CHARACTER_HINTS[characterIdx];

  const handleGuess = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!guess.trim() || gameState !== 'playing') return;

    if (guess.toLowerCase().trim() === character.name.toLowerCase()) {
      setGameState('won');
      const points = 500 - (visibleHints - 1) * 100;
      onWin(points);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      setFeedback('Ainda não... tente outra dica ou mude seu palpite!');
      setTimeout(() => setFeedback(''), 3000);
    }
  };

  const nextHint = () => {
    if (visibleHints < character.hints.length) {
      setVisibleHints(v => v + 1);
    }
  };

  const resetGame = () => {
    setCharacterIdx(Math.floor(Math.random() * CHARACTER_HINTS.length));
    setVisibleHints(1);
    setGuess('');
    setGameState('playing');
    setFeedback('');
  };

  return (
    <div className="max-w-2xl mx-auto py-8 flex flex-col items-center">
      <div className="text-center mb-12">
        <div className="inline-block p-4 bg-prof-primary/5 rounded-full mb-6 border border-prof-primary/10">
          <HelpCircle size={40} className="text-prof-primary" />
        </div>
        <h2 className="text-4xl font-serif text-prof-primary mb-2">Quem sou eu?</h2>
        <p className="text-prof-muted italic text-lg">Use as pistas para revelar minha identidade.</p>
      </div>

      <div className="w-full space-y-4 mb-12">
        {character.hints.slice(0, visibleHints).map((hint, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-6 bg-white border border-prof-border rounded-2xl shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow"
          >
            <div className="bg-prof-primary h-7 w-7 rounded-lg flex items-center justify-center text-white text-[10px] font-bold shrink-0 mt-0.5">
              {i + 1}
            </div>
            <p className="text-lg text-prof-text leading-relaxed font-serif italic">"{hint}"</p>
          </motion.div>
        ))}

        {visibleHints < character.hints.length && gameState === 'playing' && (
          <button
            onClick={nextHint}
            className="w-full py-4 border-2 border-dashed border-prof-border rounded-2xl text-prof-muted font-bold uppercase tracking-widest hover:border-prof-primary hover:text-prof-primary transition-all text-xs flex items-center justify-center gap-2"
          >
            Revelar Próxima Pista
            <ChevronRight size={18} />
          </button>
        )}
      </div>

      <div className="w-full max-w-md">
        {gameState === 'playing' ? (
          <form onSubmit={handleGuess} className="space-y-4">
            <div className="relative group">
              <input
                type="text"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                placeholder="Quem sou eu?"
                className="w-full pl-8 pr-16 py-5 rounded-xl border-2 border-prof-border focus:border-prof-primary outline-none transition-all bg-white shadow-inner font-serif text-xl italic"
              />
              <button
                type="submit"
                className="absolute right-3 top-3 bottom-3 px-4 bg-prof-primary text-white rounded-lg hover:opacity-90 transition-all active:scale-95 shadow-md flex items-center justify-center"
              >
                <Send size={20} />
              </button>
            </div>
            <AnimatePresence>
              {feedback && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-center text-xs text-red-600 font-bold uppercase tracking-widest bg-red-50 py-2 rounded-lg border border-red-100"
                >
                  {feedback}
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-10 rounded-[40px] border border-prof-border text-center shadow-xl relative overflow-hidden"
          >
             <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500" />
            <CheckCircle2 size={56} className="text-emerald-500 mx-auto mb-6" />
            <h3 className="text-3xl font-serif text-prof-primary mb-2">Exato!</h3>
            <p className="text-prof-muted mb-8 font-serif italic text-2xl">
              "Eu sou {character.name}"
            </p>
            <div className="bg-prof-bg p-6 rounded-2xl mb-8 text-sm text-left border border-prof-border">
              <p className="font-bold text-prof-accent mb-2 uppercase tracking-[0.2em] text-[10px]">HISTÓRIA</p>
              <p className="text-prof-text leading-relaxed font-serif italic text-lg">"{character.explanation}"</p>
            </div>
            <button
              onClick={resetGame}
              className="prof-btn w-full flex items-center justify-center gap-2"
            >
              <RefreshCw size={20} />
              Outro Personagem
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
