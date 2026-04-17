import { QuizQuestion, CharacterHint, BibleVerse, TermoWord } from './types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Quantos livros tem a Bíblia protestante?',
    options: ['66', '73', '52', '48'],
    correctAnswer: 0,
    explanation: 'A Bíblia protestante é composta por 66 livros: 39 no Antigo Testamento e 27 no Novo Testamento.'
  },
  {
    id: 'q2',
    question: 'Quem liderou o povo de Israel na saída do Egito?',
    options: ['Arão', 'Josué', 'Moisés', 'Abraão'],
    correctAnswer: 2,
    explanation: 'Moisés foi escolhido por Deus para libertar Seu povo da escravidão no Egito.'
  },
  {
    id: 'q3',
    question: 'Qual é o primeiro livro do Novo Testamento?',
    options: ['Marcos', 'Lucas', 'Mateus', 'João'],
    correctAnswer: 2,
    explanation: 'O Evangelho de Mateus abre o Novo Testamento.'
  }
];

export const CHARACTER_HINTS: CharacterHint[] = [
  {
    id: 'c1',
    name: 'Davi',
    hints: [
      'Fui um pastor de ovelhas na minha juventude.',
      'Derrotei um gigante com uma funda e uma pedra.',
      'Tornei-me rei de Israel.',
      'Escrevi muitos dos Salmos.'
    ],
    explanation: 'Davi foi o segundo rei de Israel e um homem segundo o coração de Deus.'
  },
  {
    id: 'c2',
    name: 'Ester',
    hints: [
      'Fui uma órfã criada por meu primo Mordecai.',
      'Tornei-me rainha da Pérsia.',
      'Arrisquei minha vida para salvar meu povo do extermínio.',
      'Há um livro na Bíblia com meu nome.'
    ],
    explanation: 'Ester demonstrou coragem e fé ao interceder por seu povo perante o rei Assuero.'
  }
];

export const BIBLE_VERSES: BibleVerse[] = [
  {
    id: 'v1',
    text: 'O Senhor é o meu pastor, nada me faltará.',
    reference: 'Salmos 23:1',
    author: 'Davi',
    context: 'Um salmo de confiança e providência divina.'
  },
  {
    id: 'v2',
    text: 'Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito...',
    reference: 'João 3:16',
    author: 'João (registrando as palavras de Jesus)',
    context: 'A essência do evangelho e o amor sacrificial de Deus.'
  }
];

export const TERMO_WORDS: TermoWord[] = [
  { word: 'JESUS', hint: 'O Filho de Deus' },
  { word: 'MARIA', hint: 'Mãe de Jesus' },
  { word: 'PEDRO', hint: 'O apóstolo que andou sobre as águas' },
  { word: 'TERRA', hint: 'Onde Deus colocou o homem' },
  { word: 'AMÉM', hint: 'Assim seja' },
  { word: 'CRISTO', hint: 'O Ungido' },
  { word: 'BÍBLIA', hint: 'A Palavra de Deus' },
  { word: 'SALMO', hint: 'Poema ou cântico sagrado' },
  { word: 'NOÉ', hint: 'Construiu a arca' }
];
