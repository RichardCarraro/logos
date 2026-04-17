import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QUIZ_QUESTIONS } from '../data';
import { cn } from '../lib/utils';
import { Check, X, ArrowRight, Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuizProps {
  onComplete: (points: number) => void;
}

export default function QuizBiblico({ onComplete }: QuizProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  const question = QUIZ_QUESTIONS[currentIdx];

  const handleAnswer = (idx: number) => {
    if (isAnswered) return;
    setSelectedAnswer(idx);
    setIsAnswered(true);
    if (idx === question.correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowSummary(true);
      const finalPoints = score * 200;
      onComplete(finalPoints);
      if (score === QUIZ_QUESTIONS.length) {
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 }
        });
      }
    }
  };

  if (showSummary) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-8 prof-card">
        <div className="bg-emerald-50 p-6 rounded-full mb-6 border-2 border-emerald-500 text-emerald-600">
          <Trophy size={48} />
        </div>
        <h2 className="text-4xl mb-2 font-serif text-prof-primary">Quiz Concluído!</h2>
        <p className="text-xl text-prof-muted mb-8">
          Você acertou <span className="font-bold text-prof-text">{score}</span> de {QUIZ_QUESTIONS.length} perguntas.
        </p>
        <div className="bg-prof-bg p-6 rounded-xl mb-8 w-full max-w-xs border border-prof-border">
          <p className="text-[10px] uppercase tracking-widest text-prof-muted font-bold mb-1">XP Ganhos</p>
          <p className="text-3xl font-bold text-prof-primary">{score * 200}</p>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="prof-btn w-full max-w-xs"
        >
          Voltar ao Início
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="mb-10 flex justify-between items-center bg-white p-4 rounded-xl border border-prof-border">
        <span className="text-[10px] font-bold text-prof-primary uppercase tracking-[0.2em]">
          Pergunta {currentIdx + 1} / {QUIZ_QUESTIONS.length}
        </span>
        <div className="flex gap-1.5">
          {QUIZ_QUESTIONS.map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-1.5 w-6 rounded-full transition-all",
                i === currentIdx ? "bg-prof-primary w-10" : i < currentIdx ? "bg-prof-muted/40" : "bg-prof-border"
              )}
            />
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          className="space-y-10"
        >
          <h2 className="text-3xl text-center leading-tight font-serif text-prof-primary px-4">{question.question}</h2>

          <div className="grid grid-cols-1 gap-4">
            {question.options.map((option, idx) => {
              const isCorrect = idx === question.correctAnswer;
              const isSelected = idx === selectedAnswer;

              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  disabled={isAnswered}
                  className={cn(
                    "w-full text-left p-6 rounded-2xl border-2 transition-all flex items-center justify-between group bg-white shadow-sm",
                    !isAnswered && "border-prof-border hover:border-prof-primary hover:shadow-md",
                    isAnswered && isCorrect && "bg-emerald-50 border-emerald-500 text-emerald-800",
                    isAnswered && isSelected && !isCorrect && "bg-red-50 border-red-500 text-red-800",
                    isAnswered && !isSelected && !isCorrect && "opacity-50 grayscale border-prof-border bg-gray-50",
                    !isAnswered && "cursor-pointer"
                  )}
                >
                  <span className="text-lg font-medium">{option}</span>
                  {isAnswered && isCorrect && <Check className="text-emerald-600" size={24} />}
                  {isAnswered && isSelected && !isCorrect && <X className="text-red-600" size={24} />}
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 space-y-6"
            >
              <div className="p-6 bg-white rounded-2xl border border-prof-accent/20 shadow-sm border-l-4 border-l-prof-accent">
                <p className="text-[10px] font-bold text-prof-accent mb-2 uppercase tracking-widest flex items-center gap-2">
                   Explicação
                </p>
                <p className="text-prof-muted italic text-lg leading-relaxed font-serif">"{question.explanation}"</p>
              </div>

              <button
                onClick={nextQuestion}
                className="prof-btn w-full bg-prof-primary flex items-center justify-center gap-2 text-lg py-5"
              >
                {currentIdx < QUIZ_QUESTIONS.length - 1 ? 'Próxima Pergunta' : 'Ver Resultado'}
                <ArrowRight size={20} />
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
