import { Lesson } from '../types';

export const LESSONS: Lesson[] = [
  {
    id: 'genesis',
    category: 'Antigo Testamento',
    title: 'Gênesis',
    summary: 'O livro das origens: a criação do mundo, a queda do homem e o início da aliança de Deus.',
    verse: { text: "No princípio criou Deus o céu e a terra.", ref: "Gênesis 1:1" },
    sections: [
      { title: 'Contexto', content: 'Gênesis é o primeiro livro da Bíblia e do Pentateuco. Seu nome significa "origem".' },
      { title: 'História', content: 'Narra a criação, o Jardim do Éden, o Dilúvio de Noé e as histórias dos patriarcas.' },
      { title: 'Aplicação', content: 'Ensina que Deus é o Criador e tem um plano de redenção.' }
    ],
    quiz: [
      { question: 'Qual foi o primeiro homem criado por Deus?', options: ['Noé', 'Abraão', 'Adão', 'Moisés'], correctIndex: 2 },
      { question: 'Quem foi chamado para sair de sua terra?', options: ['José', 'Abraão', 'Jacó', 'Isaque'], correctIndex: 1 }
    ]
  },
  {
    id: 'exodo',
    category: 'Antigo Testamento',
    title: 'Êxodo',
    summary: 'A libertação de Israel do Egito e o recebimento da Lei no Monte Sinai.',
    verse: { text: "Deixa ir o meu povo, para que me sirva.", ref: "Êxodo 8:1" },
    sections: [
      { title: 'Contexto', content: 'Continua a história de Israel, agora como uma nação escravizada no Egito.' },
      { title: 'História', content: 'Deus levanta Moisés para liderar o povo através das dez pragas e do Mar Vermelho.' },
      { title: 'Aplicação', content: 'Deus é o nosso Libertador e estabelece Sua vontade através de Seus mandamentos.' }
    ],
    quiz: [
      { question: 'Quem liderou Israel na saída do Egito?', options: ['Arão', 'Moisés', 'Josué', 'Davi'], correctIndex: 1 },
      { question: 'Onde Moisés recebeu os Dez Mandamentos?', options: ['Monte Sinai', 'Monte Nebo', 'Monte das Oliveiras', 'Monte Carmelo'], correctIndex: 0 }
    ]
  },
  {
    id: 'os-reis',
    category: 'Antigo Testamento',
    title: 'Os Reis',
    summary: 'A história da monarquia em Israel, desde a glória de Salomão até o exílio.',
    verse: { text: "Dá, pois, a teu servo um coração entendido para julgar a teu povo.", ref: "1 Reis 3:9" },
    sections: [
      { title: 'Contexto', content: 'Relata o período em que Israel foi governado por monarcas.' },
      { title: 'História', content: 'Inclui o reinado de Salomão, a divisão do reino e as reformas dos reis bons e ruins.' },
      { title: 'Aplicação', content: 'Nossa fidelidade a Deus reflete diretamente no destino de nossa nação e vida.' }
    ],
    quiz: [
      { question: 'Qual rei pediu sabedoria a Deus?', options: ['Davi', 'Saul', 'Salomão', 'Ezequias'], correctIndex: 2 },
      { question: 'Qual profeta desafiou os profetas de Baal no Monte Carmelo?', options: ['Isaías', 'Elias', 'Eliseu', 'Jeremias'], correctIndex: 1 }
    ]
  },
  {
    id: 'profetas',
    category: 'Antigo Testamento',
    title: 'Profetas',
    summary: 'Homens chamados para confrontar o povo e anunciar o futuro Reino de Deus.',
    verse: { text: "Eis-me aqui, envia-me a mim.", ref: "Isaías 6:8" },
    sections: [
      { title: 'Contexto', content: 'Deus enviou mensageiros para chamar Israel ao arrependimento.' },
      { title: 'História', content: 'Cobre profetas maiores como Isaías e Jeremias, e menores como Amós e Jonas.' },
      { title: 'Aplicação', content: 'Devemos ouvir a voz de Deus mesmo quando ela nos confronta.' }
    ],
    quiz: [
      { question: 'Quem foi o "profeta chorão"?', options: ['Isaías', 'Ezequiel', 'Jeremias', 'Daniel'], correctIndex: 2 },
      { question: 'Qual profeta foi engolido por um grande peixe?', options: ['Jonas', 'Miqueias', 'Naum', 'Habacuque'], correctIndex: 0 }
    ]
  },
  {
    id: 'evangelhos',
    category: 'Novo Testamento',
    title: 'Evangelhos',
    summary: 'Vida e ensinamentos de Jesus Cristo relatados por quatro testemunhas.',
    verse: { text: "Eu sou o caminho, e a verdade e a vida.", ref: "João 14:6" },
    sections: [
      { title: 'Contexto', content: 'Base do Novo Testamento, focada em Jesus.' },
      { title: 'História', content: 'Mateus, Marcos, Lucas e João narram Seu ministério.' },
      { title: 'Aplicação', content: 'Jesus é o centro de nossa fé e o modelo de vida.' }
    ],
    quiz: [
      { question: 'Quantos são os evangelhos?', options: ['4', '12', '3', '7'], correctIndex: 0 },
      { question: 'Qual evangelho é conhecido por ser o mais curto?', options: ['Mateus', 'Marcos', 'Lucas', 'João'], correctIndex: 1 }
    ]
  },
  {
    id: 'atos',
    category: 'Novo Testamento',
    title: 'Atos',
    summary: 'O nascimento da Igreja e a expansão do Evangelho pelo mundo.',
    verse: { text: "Mas recebereis a virtude do Espírito Santo.", ref: "Atos 1:8" },
    sections: [
      { title: 'Contexto', content: 'Escrito por Lucas, narra o início da era da Igreja.' },
      { title: 'História', content: 'Penteconste, as missões de Pedro e a conversão de Paulo.' },
      { title: 'Aplicação', content: 'Somos chamados a levar o Evangelho a todas as nações pelo poder do Espírito Santo.' }
    ],
    quiz: [
      { question: 'Em que dia o Espírito Santo desceu sobre os apóstolos?', options: ['Páscoa', 'Pentecostes', 'Natal', 'Tabernáculos'], correctIndex: 1 },
      { question: 'Quem foi o apóstolo dos gentios?', options: ['Pedro', 'Tiago', 'Paulo', 'João'], correctIndex: 2 }
    ]
  },
  {
    id: 'epistolas',
    category: 'Novo Testamento',
    title: 'Epístolas',
    summary: 'Cartas doutrinárias escritas para instruir as primeiras comunidades cristãs.',
    verse: { text: "Toda a Escritura é divinamente inspirada.", ref: "2 Timóteo 3:16" },
    sections: [
      { title: 'Contexto', content: 'Cartas escritas por Paulo, Pedro, João e outros.' },
      { title: 'História', content: 'Abordam problemas práticos, teologia e encorajamento para a igreja.' },
      { title: 'Aplicação', content: 'As cartas nos ensinam como viver a vida cristã no cotidiano.' }
    ],
    quiz: [
      { question: 'Qual livro é conhecido como a epístola da alegria?', options: ['Romanos', 'Gálatas', 'Filipenses', 'Efésios'], correctIndex: 2 },
      { question: 'Quem escreveu a maioria das epístolas?', options: ['Pedro', 'Paulo', 'João', 'Lucas'], correctIndex: 1 }
    ]
  },
  {
    id: 'apocalipse',
    category: 'Novo Testamento',
    title: 'Apocalipse',
    summary: 'A revelação final: o triunfo de Cristo e a Nova Jerusalém.',
    verse: { text: "Ele enxugará de seus olhos toda lágrima.", ref: "Apocalipse 21:4" },
    sections: [
      { title: 'Contexto', content: 'Escrito pelo apóstolo João na ilha de Patmos.' },
      { title: 'História', content: 'Simbolismo rico que descreve a batalha espiritual final e a vitória de Deus.' },
      { title: 'Aplicação', content: 'Apocalipse nos dá esperança na vitória final de Jesus sobre o mal.' }
    ],
    quiz: [
      { question: 'Quem recebeu a revelação do Apocalipse?', options: ['Paulo', 'Pedro', 'João', 'André'], correctIndex: 2 },
      { question: 'Onde João estava quando escreveu o livro?', options: ['Roma', 'Jerusalém', 'Ilha de Patmos', 'Éfeso'], correctIndex: 2 }
    ]
  },
  {
    id: 'herois-da-fe',
    category: 'Personagens',
    title: 'Heróis da Fé',
    summary: 'Personagens que demonstraram confiança absoluta em Deus.',
    verse: { text: "Ora, a fé é o firme fundamento...", ref: "Hebreus 11:1" },
    sections: [
      { title: 'Contexto', content: 'Hebreus 11 lista os grandes exemplos da fé bíblica.' },
      { title: 'História', content: 'Personagens como Noé, Abraão e Moisés.' },
      { title: 'Aplicação', content: 'Nossa fé deve se traduzir em obediência prática.' }
    ],
    quiz: [
      { question: 'Quem venceu o gigante Golias?', options: ['Saul', 'Davi', 'Samuel', 'Gideão'], correctIndex: 1 },
      { question: 'Quem foi preservado na cova dos leões?', options: ['Daniel', 'Sadraque', 'Mesaque', 'Abednego'], correctIndex: 0 }
    ]
  },
  {
    id: 'mulheres-biblicas',
    category: 'Personagens',
    title: 'Mulheres Bíblicas',
    summary: 'A força e a devoção das mulheres na história da salvação.',
    verse: { text: "A mulher que teme ao Senhor, essa será louvada.", ref: "Provérbios 31:30" },
    sections: [
      { title: 'Contexto', content: 'Mulheres que foram fundamentais na linhagem de Jesus e no ministério de Deus.' },
      { title: 'História', content: 'Rute, Ester, Maria (mãe de Jesus) e Maria Madalena.' },
      { title: 'Aplicação', content: 'Deus usa a sensibilidade e a coragem feminina para Seus propósitos.' }
    ],
    quiz: [
      { question: 'Quem foi a rainha que salvou o povo judeu da extinção?', options: ['Rute', 'Sara', 'Ester', 'Rebeca'], correctIndex: 2 },
      { question: 'Qual mulher foi a primeira a ver Jesus ressuscitado?', options: ['Marta', 'Maria Madalena', 'Maria (mãe)', 'Izabel'], correctIndex: 1 }
    ]
  },
  {
    id: 'apostolos',
    category: 'Personagens',
    title: 'Apóstolos',
    summary: 'Os doze escolhidos por Jesus para lançar os fundamentos da Igreja.',
    verse: { text: "E designou doze para que estivessem com ele.", ref: "Marcos 3:14" },
    sections: [
      { title: 'Contexto', content: 'Discípulos que se tornaram enviados de Cristo.' },
      { title: 'História', content: 'De pescadores a mártires, levaram a mensagem cristã adiante.' },
      { title: 'Aplicação', content: 'Somos todos chamados a ser discípulos e testemunhas de Jesus.' }
    ],
    quiz: [
      { question: 'Quem foi o apóstolo que negou Jesus três vezes?', options: ['João', 'Judas', 'Pedro', 'Tomé'], correctIndex: 2 },
      { question: 'Qual apóstolo duvidou da ressurreição até ver as marcas?', options: ['Tiago', 'Tomé', 'Filipe', 'Mateus'], correctIndex: 1 }
    ]
  },
  {
    id: 'parabolas',
    category: 'Personagens',
    title: 'Parábolas',
    summary: 'As histórias usadas por Jesus para explicar mistérios do Reino.',
    verse: { text: "Sem parábolas nada lhes falava.", ref: "Mateus 13:34" },
    sections: [
      { title: 'Contexto', content: 'Método de ensino de Jesus usando exemplos da vida rural e cotidiana.' },
      { title: 'História', content: 'O Filho Pródigo, o Bom Samaritano e o Semeador.' },
      { title: 'Aplicação', content: 'As parábolas nos ensinam verdades espirituais profundas através de analogias simples.' }
    ],
    quiz: [
      { question: 'Na parábola do Semeador, que tipo de terra produz fruto?', options: ['Com espinhos', 'Pedregosa', 'Boa terra', 'Caminho'], correctIndex: 2 },
      { question: 'Qual parábola ensina sobre o amor ao próximo?', options: ['Filho Pródigo', 'Bom Samaritano', 'Dracma Perdida', 'Ovelha Perdida'], correctIndex: 1 }
    ]
  }
];
