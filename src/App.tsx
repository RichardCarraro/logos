import React from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  Flame, 
  Gamepad2, 
  BookOpen, 
  LayoutDashboard, 
  Star, 
  ChevronRight,
  Clock,
  Sparkles,
  Map as MapIcon,
  Timer as Timeline,
  User,
  HelpCircle,
  ArrowLeft,
  CheckCircle2,
  Book
} from 'lucide-react';
import { useProgress } from './hooks/useProgress';
import TermoBiblico from './games/TermoBiblico';
import QuizBiblico from './games/QuizBiblico';
import QuemE from './games/QuemE';
import { cn } from './lib/utils';
import { getWordOfTheDay } from './utils/termoLogic';
import { useTermoGameState } from './hooks/useTermoStats';
import { LESSONS } from './data/lessons';
import { Lesson } from './types';

// --- Shared Components ---

function Sidebar() {
  const { progress } = useProgress();
  const location = useLocation();

  const navItems = [
    { to: '/', icon: LayoutDashboard, label: 'Início' },
    { to: '/aprender', icon: BookOpen, label: 'Aprender' },
    { to: '/progresso', icon: User, label: 'Perfil' },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 bg-white border-r border-prof-border p-8 h-screen sticky top-0">
      <div className="flex items-center gap-3 text-prof-primary font-serif font-bold text-2xl mb-12">
        <div className="w-8 h-8 bg-prof-primary rounded-lg flex items-center justify-center text-white text-lg">L</div>
        LOGOS
      </div>

      <nav className="flex-grow space-y-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all",
                isActive ? "bg-gray-100 text-prof-primary" : "text-prof-muted hover:text-prof-primary"
              )}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-8 pt-8 border-t border-prof-border">
        <p className="text-[10px] font-bold text-prof-muted uppercase tracking-wider mb-2">Nível {progress.level}: DISCÍPULO</p>
        <div className="h-2 bg-prof-border rounded-full overflow-hidden">
          <div 
            className="h-full bg-prof-primary transition-all duration-1000" 
            style={{ width: `${Math.min(100, (progress.points % 1000) / 10)}%` }}
          />
        </div>
        <p className="text-[10px] text-right text-prof-muted mt-1">{progress.points % 1000} / 1000 XP</p>
      </div>
    </aside>
  );
}

function MobileNav() {
  const location = useLocation();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-prof-border px-6 py-4 z-50 flex justify-around">
      {[
        { to: '/', icon: LayoutDashboard, label: 'Início' },
        { to: '/aprender', icon: BookOpen, label: 'Aprender' },
        { to: '/progresso', icon: User, label: 'Perfil' },
      ].map((item) => {
        const isActive = location.pathname === item.to;
        return (
          <Link 
            key={item.to} 
            to={item.to} 
            className={cn(
              "flex flex-col items-center gap-1 transition-all",
              isActive ? "text-prof-primary font-bold" : "text-prof-muted hover:text-prof-primary"
            )}
          >
            <item.icon size={22} />
            <span className="text-[10px] uppercase tracking-wider">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

function Header() {
  const { progress } = useProgress();
  const date = new Date().toLocaleDateString('pt-BR', { 
    weekday: 'long', 
    day: 'numeric', 
    month: 'long' 
  });

  return (
    <header className="flex items-center justify-between py-6 mb-8 border-b border-prof-border">
      <div className="hidden md:block">
        <h2 className="text-[10px] uppercase tracking-[0.2em] text-prof-muted font-bold mb-1">Bem-vindo de volta</h2>
        <p className="font-serif text-xl capitalize">{date}</p>
      </div>
      <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
        <div className="bg-[#FFFBEB] border border-[#FEF3C7] px-4 py-1.5 rounded-full text-[#92400E] font-bold flex items-center gap-2 text-sm shadow-sm md:shadow-none">
          <Flame size={16} className="fill-[#92400E]" />
          <span>{progress.streak} DIAS DE SEQUÊNCIA</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-prof-accent/10 border border-prof-accent/20 px-3 py-1.5 rounded-full text-prof-accent font-bold text-sm hidden md:flex items-center gap-2">
            <Star size={16} className="fill-prof-accent" />
            <span>{progress.points} XP</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-prof-primary text-white flex items-center justify-center font-bold shadow-soft">
            U
          </div>
        </div>
      </div>
    </header>
  );
}

// --- Screens ---

function VerseOfTheDay() {
  const verse = {
    text: "Lâmpada para os meus pés é tua palavra e luz, para o meu caminho.",
    ref: "Salmos 119:105"
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="prof-card space-y-4"
    >
      <div className="text-[12px] uppercase tracking-widest text-prof-muted font-bold border-b border-prof-border pb-2 inline-block">Versículo do Dia</div>
      <blockquote className="text-xl font-serif italic text-prof-primary leading-relaxed border-l-4 border-prof-accent pl-6 py-2 my-4">
        "{verse.text}"
      </blockquote>
      <p className="text-xs text-right text-prof-muted font-bold uppercase tracking-widest">— {verse.ref}</p>
    </motion.div>
  );
}

function HomeScreen() {
  const { progress } = useProgress();
  const { answer, dateStr } = React.useMemo(() => getWordOfTheDay(), []);
  const { gameState } = useTermoGameState('termo', dateStr);
  
  const GAMES = [
    { 
      id: 'termo', 
      name: 'Termo Bíblico', 
      desc: 'Adivinhe palavras sagradas', 
      icon: Gamepad2, 
      to: '/jogo/termo',
      difficulty: 'Diário' 
    },
    { 
      id: 'quem-e', 
      name: 'Quem sou eu?', 
      desc: 'Adivinhe o personagem', 
      icon: HelpCircle, 
      to: '/jogo/quem-e',
      difficulty: 'Fácil' 
    },
    { 
      id: 'quiz', 
      name: 'Quiz Rápido', 
      desc: 'Desafio cronometrado', 
      icon: Sparkles, 
      to: '/jogo/quiz',
      difficulty: 'Médio' 
    },
  ];

  const word = answer.word.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const isCompleted = gameState?.isOver;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8">
      <div className="space-y-8">
        {/* Main Game Mode */}
        <section className="prof-card relative overflow-hidden">
          {isCompleted && (
            <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold px-4 py-1 rounded-bl-xl shadow-lg z-10">
              CONCLUÍDO HOJE
            </div>
          )}
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-serif text-xl">Termo Bíblico do Dia</h3>
            <span className="text-[10px] uppercase font-bold text-prof-muted tracking-widest">
              Tentativa {gameState?.guesses.length || 0}/6
            </span>
          </div>
          <p className="text-sm text-prof-muted mb-8 italic">
            Descubra a palavra sagrada de hoje. Todos os dias um novo desafio baseado nas Escrituras.
          </p>
          
          <div className="flex gap-2 justify-center mb-10 overflow-x-auto py-2">
            {isCompleted ? (
               word.split('').map((l, i) => (
                <div key={i} className="w-12 h-12 md:w-14 md:h-14 bg-prof-primary border-2 border-prof-primary rounded-lg flex items-center justify-center font-bold text-xl text-white shadow-lg">
                  {l}
                </div>
              ))
            ) : (
              [0, 1, 2, 3, 4].map((_, i) => (
                <div key={i} className="w-12 h-12 md:w-14 md:h-14 border-2 border-dashed border-prof-border rounded-lg flex items-center justify-center font-bold text-xl text-prof-muted bg-gray-50/50">
                  ?
                </div>
              ))
            )}
          </div>

          <Link to="/jogo/termo" className="w-full">
            <button className={cn("w-full prof-btn", isCompleted && "bg-emerald-500 hover:bg-emerald-600")}>
              {isCompleted ? 'Ver Resultado' : 'Jogar Termo Agora'}
            </button>
          </Link>
        </section>

        {/* Game Mode Grid */}
        <section className="prof-card">
          <h3 className="font-serif text-xl mb-6">Escolha seu Desafio</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {GAMES.map((game) => (
              <Link 
                key={game.id} 
                to={game.to}
                className="flex items-center gap-4 p-4 border border-prof-border rounded-xl hover:border-prof-primary hover:bg-[#F9FAF2] transition-all group"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-prof-muted group-hover:bg-prof-primary/10 group-hover:text-prof-primary transition-colors">
                  <game.icon size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm tracking-tight">{game.name}</p>
                  <p className="text-[10px] text-prof-muted uppercase tracking-wider">{game.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <aside className="space-y-8">
        <VerseOfTheDay />

        <div className="prof-card bg-[#F9FAF2] border-prof-primary/10">
          <h3 className="font-serif text-xl mb-6">Conquistas Recentes</h3>
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: '🌟', label: 'Estrela' },
              { icon: '📜', label: 'Sábio' },
              { icon: '🦁', label: 'Bravo' },
            ].map((badge, i) => (
              <div key={i} className="text-center group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-emerald-50 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto mb-2 text-xl shadow-sm group-hover:scale-110 transition-transform">
                  {badge.icon}
                </div>
                <p className="text-[10px] text-prof-muted font-bold uppercase tracking-wider">{badge.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="prof-card">
          <h3 className="font-serif text-lg mb-4">Curiosidade do Dia</h3>
          <p className="text-sm leading-relaxed text-prof-muted">
            O nome de Jesus em hebraico (Yeshua) significa "Salvação". Este nome foi escolhido pelo próprio Deus e anunciado pelo anjo Gabriel.
          </p>
        </div>
      </aside>
    </div>
  );
}

function LearningScreen() {
  const { progress } = useProgress();
  const navigate = useNavigate();

  const categories = [
    { 
      title: 'Antigo Testamento', 
      lessons: LESSONS.filter(l => l.category === 'Antigo Testamento') 
    },
    { 
      title: 'Novo Testamento', 
      lessons: LESSONS.filter(l => l.category === 'Novo Testamento') 
    },
    { 
      title: 'Personagens', 
      lessons: LESSONS.filter(l => l.category === 'Personagens') 
    },
  ];

  return (
    <div className="space-y-8">
      <div className="mb-12">
        <h2 className="text-[10px] uppercase tracking-[0.2em] text-prof-muted font-bold mb-2">Manual do Discípulo</h2>
        <h3 className="text-3xl font-serif">Aprenda as Escrituras</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, i) => (
          <div key={i} className="prof-card">
            <h3 className="text-sm text-prof-primary flex items-center gap-2 font-bold uppercase tracking-widest border-b border-prof-border pb-4 mb-4">
              <BookOpen size={16} />
              {cat.title}
            </h3>
            <div className="space-y-2">
              {cat.lessons.length > 0 ? (
                cat.lessons.map((lesson) => {
                  const isCompleted = progress.completedLessons.includes(lesson.id);
                  return (
                    <div 
                      key={lesson.id} 
                      onClick={() => navigate(`/aprender/${lesson.id}`)}
                      className="flex justify-between items-center p-3 rounded-lg hover:bg-prof-primary/5 cursor-pointer transition-all group hover:translate-x-1"
                    >
                      <div className="flex items-center gap-3">
                        {isCompleted && <CheckCircle2 size={16} className="text-emerald-500" />}
                        <span className={cn("font-serif text-lg", isCompleted ? "text-emerald-700 font-medium" : "text-prof-text")}>
                          {lesson.title}
                        </span>
                      </div>
                      <ChevronRight size={16} className="text-prof-border group-hover:text-prof-primary transition-colors" />
                    </div>
                  );
                })
              ) : (
                <div className="p-3 text-xs text-prof-muted italic">Lições em breve...</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LessonDetailScreen({ lessonId }: { lessonId: string }) {
  const navigate = useNavigate();
  const { progress, completeLesson } = useProgress();
  const lesson = LESSONS.find(l => l.id === lessonId);
  const isCompleted = progress.completedLessons.includes(lessonId);

  const [quizState, setQuizState] = React.useState<{
    answers: number[];
    isSubmitted: boolean;
  }>({
    answers: Array(lesson?.quiz.length).fill(-1),
    isSubmitted: false
  });

  if (!lesson) return <div>Lição não encontrada.</div>;

  const handleQuizSubmit = () => {
    if (quizState.answers.includes(-1)) return;
    
    setQuizState(prev => ({ ...prev, isSubmitted: true }));
    
    const correctCount = quizState.answers.filter((ans, idx) => ans === lesson.quiz[idx].correctIndex).length;
    
    if (correctCount === lesson.quiz.length) {
      completeLesson(lesson.id);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <button 
        onClick={() => navigate('/aprender')}
        className="flex items-center gap-2 text-prof-muted hover:text-prof-primary transition-colors font-bold uppercase tracking-widest text-[10px]"
      >
        <ArrowLeft size={16} />
        Voltar para o Manual
      </button>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="prof-card overflow-hidden !p-0"
      >
        <div className="bg-prof-primary/5 p-8 border-b border-prof-border">
          <div className="text-[10px] uppercase font-bold text-prof-muted tracking-widest mb-2">{lesson.category}</div>
          <h2 className="text-4xl font-serif mb-4 text-prof-primary">{lesson.title}</h2>
          <p className="text-lg text-prof-muted italic leading-relaxed">{lesson.summary}</p>
        </div>

        <div className="p-8 space-y-12">
          {/* Verse */}
          <div className="bg-prof-bg p-6 rounded-xl border border-prof-border border-l-4 border-prof-accent">
            <p className="text-xl font-serif italic text-prof-primary mb-4 leading-relaxed">"{lesson.verse.text}"</p>
            <p className="text-xs text-right text-prof-muted font-bold uppercase">— {lesson.verse.ref}</p>
          </div>

          {/* Sections */}
          <div className="grid grid-cols-1 gap-8">
            {lesson.sections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-xs uppercase font-bold text-prof-accent tracking-[0.2em]">{section.title}</h3>
                <p className="text-prof-text leading-relaxed whitespace-pre-line">{section.content}</p>
              </div>
            ))}
          </div>

          {/* Quiz */}
          <div className="pt-12 border-t border-prof-border space-y-8">
            <h3 className="text-xl font-serif text-center">Desafio de Sabedoria</h3>
            <div className="space-y-6">
              {lesson.quiz.map((q, qIdx) => (
                <div key={qIdx} className="space-y-4">
                  <p className="font-bold text-prof-primary">{qIdx + 1}. {q.question}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {q.options.map((option, optIdx) => (
                      <button
                        key={optIdx}
                        disabled={quizState.isSubmitted}
                        onClick={() => {
                          const newAnswers = [...quizState.answers];
                          newAnswers[qIdx] = optIdx;
                          setQuizState(prev => ({ ...prev, answers: newAnswers }));
                        }}
                        className={cn(
                          "p-3 text-sm rounded-lg border transition-all text-left",
                          quizState.answers[qIdx] === optIdx 
                            ? "bg-prof-primary/10 border-prof-primary text-prof-primary font-medium" 
                            : "border-prof-border hover:border-prof-primary/50 text-prof-muted",
                          quizState.isSubmitted && optIdx === q.correctIndex && "bg-emerald-100 border-emerald-500 text-emerald-700",
                          quizState.isSubmitted && quizState.answers[qIdx] === optIdx && optIdx !== q.correctIndex && "bg-red-50 border-red-500 text-red-700"
                        )}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {!quizState.isSubmitted ? (
              <button 
                onClick={handleQuizSubmit}
                disabled={quizState.answers.includes(-1)}
                className="w-full prof-btn disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirmar Respostas
              </button>
            ) : (
              <div className="text-center p-6 rounded-xl bg-gray-50 border border-prof-border">
                {quizState.answers.every((ans, i) => ans === lesson.quiz[i].correctIndex) ? (
                  <div className="space-y-4">
                    <p className="text-emerald-600 font-bold flex items-center justify-center gap-2">
                       <CheckCircle2 size={20} /> Sabedoria Confirmada! +100 XP
                    </p>
                    <button onClick={() => navigate('/aprender')} className="prof-btn max-w-xs">Retornar ao Manual</button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-prof-muted font-bold">Você quase conseguiu. Tente ler novamente!</p>
                    <button onClick={() => setQuizState({ answers: Array(lesson.quiz.length).fill(-1), isSubmitted: false })} className="text-prof-primary font-bold underline">Tentar Novamente</button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ProfileScreen() {
  const { progress } = useProgress();

  return (
    <div className="max-w-3xl mx-auto space-y-12">
      <div className="flex items-center gap-8 border-b border-prof-border pb-12">
        <div className="w-24 h-24 rounded-full bg-prof-primary text-white flex items-center justify-center text-3xl font-serif shadow-xl">
          U
        </div>
        <div>
          <h2 className="text-4xl font-serif mb-1">Viajante da Luz</h2>
          <p className="text-prof-muted font-bold uppercase tracking-widest text-sm italic">Nível {progress.level} • Discípulo</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="prof-card text-center">
          <Star size={24} className="text-prof-accent mx-auto mb-2 fill-prof-accent" />
          <p className="text-2xl font-bold">{progress.points}</p>
          <p className="text-[10px] uppercase text-prof-muted font-bold tracking-widest">XP Total</p>
        </div>
        <div className="prof-card text-center">
          <Flame size={24} className="text-orange-500 mx-auto mb-2 fill-orange-500" />
          <p className="text-2xl font-bold">{progress.streak}</p>
          <p className="text-[10px] uppercase text-prof-muted font-bold tracking-widest">Sequência</p>
        </div>
        <div className="prof-card text-center">
          <Trophy size={24} className="text-prof-primary mx-auto mb-2 fill-prof-primary" />
          <p className="text-2xl font-bold">{progress.badges.length}</p>
          <p className="text-[10px] uppercase text-prof-muted font-bold tracking-widest">Conquistas</p>
        </div>
      </div>

      <section>
        <h3 className="text-xl font-serif mb-6">Seus Selos</h3>
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-6">
          {[1,2,3,4,5,6,7,8].map(i => (
            <div key={i} className="flex flex-col items-center">
              <div className={cn(
                "w-16 h-16 rounded-full flex items-center justify-center transition-all border-2",
                i <= progress.badges.length 
                  ? "bg-emerald-50 border-emerald-500 text-emerald-600 shadow-md scale-105" 
                  : "bg-gray-50 border-prof-border text-gray-300"
              )}>
                <Trophy size={28} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function LessonRouteWrapper() {
  const { lessonId } = useParams();
  return <LessonDetailScreen lessonId={lessonId || ''} />;
}

// --- Main App ---

export default function App() {
  const { addPoints, incrementGameCount, addBadge } = useProgress();

  const handleGameWin = React.useCallback((points: number, gameId: string) => {
    addPoints(points);
    incrementGameCount(gameId);
    if (points >= 500) addBadge(`badge-${gameId}`);
  }, [addPoints, incrementGameCount, addBadge]);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-prof-bg flex flex-col md:flex-row">
        <Sidebar />
        
        <div className="flex-grow flex flex-col min-h-screen">
          <div className="flex-grow max-w-6xl mx-auto w-full px-6 pb-24 md:pb-12">
            <Header />
            <main>
              <AnimatePresence mode="wait">
                <motion.div
                  key={window.location.pathname}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/aprender" element={<LearningScreen />} />
                    <Route path="/aprender/:lessonId" element={<LessonRouteWrapper />} />
                    <Route path="/progresso" element={<ProfileScreen />} />
                    <Route 
                      path="/jogo/termo" 
                      element={<TermoBiblico onWin={(p) => handleGameWin(p, 'termo')} />} 
                    />
                    <Route 
                      path="/jogo/quiz" 
                      element={<QuizBiblico onComplete={(p) => handleGameWin(p, 'quiz')} />} 
                    />
                    <Route 
                      path="/jogo/quem-e" 
                      element={<QuemE onWin={(p) => handleGameWin(p, 'quem-e')} />} 
                    />
                  </Routes>
                </motion.div>
              </AnimatePresence>
            </main>
          </div>
        </div>

        <MobileNav />
      </div>
    </BrowserRouter>
  );
}
