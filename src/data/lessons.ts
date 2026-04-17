import { Lesson } from '../types';

export const LESSONS: Lesson[] = [
  {
    id: 'genesis',
    category: 'Antigo Testamento',
    title: 'Gênesis',
    summary: 'O livro de Bereshit (No Princípio): a cosmogonia bíblica, a ancestralidade da fé e o estabelecimento da aliança abraâmica.',
    verse: { text: "No princípio criou Deus o céu e a terra.", ref: "Gênesis 1:1" },
    sections: [
      { 
        title: 'Contexto', 
        content: `Gênesis, o primeiro livro do Pentateuco, é tradicionalmente atribuído a Moisés. Escrito originalmente em hebraico, o título do livro é "Bereshit", que significa "No Princípio". Geograficamente, o livro abrange desde as planícies da Mesopotâmia até as terras férteis do Egito, atravessando o Crescente Fértil.

O propósito central de Gênesis é estabelecer a identidade de Israel como o povo da Aliança, respondendo às cosmogonias pagãs da época (como os mitos babilônicos Enuma Elish) com a revelação de um Deus único, transcendente e pessoal. Ele define o cenário político e espiritual para o restante da Bíblia, mostrando que a história humana tem um autor e um destino.

A obra é composta sob uma estrutura literária sofisticada, organizada em torno de dez "Toledot" ou genealogias. Essas divisões servem para rastrear a linhagem da promessa através das gerações, focando na soberania divina em escolher e preservar uma semente santa em meio a um mundo caído.` 
      },
      { 
        title: 'História', 
        content: `A narrativa de Gênesis pode ser dividida em duas partes principais: a História Primitiva (cap. 1-11) e a História Patriarcal (cap. 12-50). A primeira seção detalha os eventos monumentais da Criação, a Queda do homem no Éden, o primeiro fratricídio (Caim e Abel) e o julgamento global através do Dilúvio, seguido pela rebelião de Babel.

O momento de virada ocorre no capítulo 12, com o chamado de Abrão. Deus promete a ele uma terra, uma descendência numerosa e que, por meio dele, todas as famílias da terra seriam abençoadas. A cronologia segue então a vida de Abraão, o nascimento milagroso de Isaque, as provações de Jacó (que se torna Israel) e a ascensão dramática de José no Egito.

A história encerra com o povo de Israel estabelecido no Egito sob a proteção de Deus. O arco narrativo mostra a transição de uma família escolhida para o início de uma grande nação, sempre destacando a fidelidade de Deus em cumprir Suas promessas, mesmo diante da fragilidade e dos erros humanos.` 
      },
      { 
        title: 'Aplicação', 
        content: `Teologicamente, Gênesis fundamenta a doutrina do 'Imago Dei' — o ensino de que cada ser humano é criado à imagem e semelhança de Deus, conferindo dignidade e propósito intrínsecos a cada vida. Para o discípulo moderno, isso significa que nossa identidade não é definida pelo que fazemos, mas por quem nos criou.

A vida dos patriarcas oferece lições práticas sobre a fé perseverante. Assim como Abraão "creu no Senhor, e isso lhe foi creditado como justiça", somos chamados a confiar em Deus mesmo quando as circunstâncias parecem impossíveis. Gênesis nos ensina que a obediência raramente é livre de desafios, mas é sempre sustentada pela providência divina.

Além disso, o livro estabelece a necessidade de redenção. A queda no Éden explicita o problema do pecado, que permeia todas as esferas da existência. O discípulo aprende que a história humana é um campo de batalha entre a rebelião humana e a graça redentora, apontando desde o início (Gn 3:15) para a vitória definitiva do Messias que viria.` 
      }
    ],
    curiosities: [
      "O termo hebraico 'Bara' (criar) usado em Gn 1:1 é exclusivo para a atividade criativa de Deus, sugerindo criação 'ex nihilo' (do nada).",
      "A estrutura do livro segue as 10 'Toledot' (gerações), uma técnica de organização literária que foca na linhagem da aliança.",
      "Descobertas arqueológicas nas Tabuinhas de Nuzi confirmam diversos costumes descritos em Gênesis, como a adoção de servos e contratos matrimoniais."
    ],
    quiz: [
      { question: 'Qual o significado do título hebraico do livro de Gênesis?', options: ['A Aliança', 'No Princípio', 'A Criação', 'Genealogias'], correctIndex: 1 },
      { question: 'Quem é considerado o autor tradicional do Pentateuco?', options: ['Abraão', 'Davi', 'Moisés', 'Samuel'], correctIndex: 2 },
      { question: 'O que as 10 gerações (Toledot) representam na estrutura do livro?', options: ['As tribos de Israel', 'Divisões literárias de genealogias', 'Os 10 mandamentos', 'As pragas do Egito'], correctIndex: 1 },
      { question: 'Qual o significado teológico da doutrina Imago Dei?', options: ['A lei do sacrifício', 'O homem criado à imagem de Deus', 'A eleição de Israel', 'A queda do homem'], correctIndex: 1 }
    ]
  },
  {
    id: 'exodo',
    category: 'Antigo Testamento',
    title: 'Êxodo',
    summary: 'A redenção nacional de Israel: da servidão no Egito à presença gloriosa de Deus no Tabernáculo.',
    verse: { text: "Agora, pois, se diligentemente ouvirdes a minha voz e guardardes a minha aliança...", ref: "Êxodo 19:5" },
    sections: [
      { 
        title: 'Contexto', 
        content: `Êxodo começa cerca de 400 anos após a morte de José, em um período de intensa opressão para os descendentes de Jacó sob o jugo egípcio. O livro foi escrito por Moisés durante os quarenta anos de peregrinação no deserto, servindo como a "constituição" espiritual de Israel. O cenário geográfico se move do delta do Nilo para a península do Sinai.

O propósito de Êxodo é demonstrar a fidelidade de Deus à aliança abraâmica, provando que Ele é o Libertador Supremo. Politicamente, o livro descreve o nascimento de uma teocracia, onde Yahweh (revelado de forma íntima a Moisés como "Eu Sou") assume o papel de Rei e Protetor da nação recém-libertada.

O livro estabelece a base para o sistema sacrificial e a lei moral que governariam a conduta do povo. Ele responde à pergunta sobre como um Deus santo pode habitar no meio de um povo pecador, preparando o caminho para a construção do Tabernáculo, um microcosmo da presença divina na terra.` 
      },
      { 
        title: 'História', 
        content: `A narrativa é marcada por milagres sem precedentes e tensões heróicas. Inicia com o nascimento providencial de Moisés e seu chamado na sarça ardente. Após uma série de dez confrontos sobrenaturais com o Faraó (as dez pragas), que humilharam os deuses egípcios, Israel é libertado pela instituição da Páscoa.

O momento central é a travessia do Mar Vermelho, onde Deus divide as águas para salvar Seu povo e aniquilar o exército egípcio. A cronologia avança para o deserto do Sinai, onde ocorre o momento de virada espiritual: a entrega dos Dez Mandamentos sob relâmpagos e trovões no topo da montanha.

No entanto, a história também revela a rebelião humana com o episódio do Bezerro de Ouro. O livro culmina com a construção meticulosa do Tabernáculo, terminando de forma gloriosa quando a nuvem da presença de Deus desce e enche a tenda, indicando que Deus agora caminha com Seu povo.` 
      },
      { 
        title: 'Aplicação', 
        content: `Êxodo é a narrativa de redenção fundamental do Antigo Testamento, servindo como sombra e tipo para a obra de Cristo. Para o discípulo, a libertação do Egito simboliza a nossa libertação da escravidão do pecado. A Páscoa aponta diretamente para o Cordeiro de Deus que tira o pecado do mundo.

A lei entregue no Sinai não foi dada para salvar o povo — eles já haviam sido salvos da escravidão pela graça — mas para ensiná-los a viver como o povo de Deus. Da mesma forma, somos chamados a obedecer aos mandamentos de Cristo por gratidão, refletindo Sua santidade em um mundo que muitas vezes ignora os valores do Reino.

O Tabernáculo nos ensina sobre a santidade de Deus e a seriedade da adoração. O discípulo pratica essa verdade reconhecendo que somos agora "o templo do Espírito Santo", o que exige uma vida de pureza, reverência e entrega contínua à presença de Deus que habita em nós.` 
      }
    ],
    curiosities: [
      "O nome 'Yahweh' (YHWH), revelado em Êxodo 3, não era apenas um nome, mas uma declaração de auto-existência e fidelidade eterna.",
      "As 10 pragas foram ataques diretos a divindades egípcias específicas, como Hapi (deus do Nilo) e Rá (deus do sol).",
      "A Arca da Aliança era o único item localizado no Santo dos Santos do Tabernáculo, representando o trono terrestre de Deus."
    ],
    quiz: [
      { question: 'Qual foi a última praga que finalmente convenceu o Faraó a libertar Israel?', options: ['As trevas', 'A morte dos primogênitos', 'Os gafanhotos', 'Transformação do Nilo em sangue'], correctIndex: 1 },
      { question: 'Em qual local geográfico a Lei foi entregue a Moisés?', options: ['Monte Carmelo', 'Monte Sinai', 'Sertão de Moabe', 'Mar Vermelho'], correctIndex: 1 },
      { question: 'O que o Tabernáculo simbolizava para o povo no deserto?', options: ['Uma fortaleza militar', 'A presença contínua de Deus', 'Um armazém de alimentos', 'Um monumento aos heróis'], correctIndex: 1 },
      { question: 'Qual item central ficava dentro do Santo dos Santos?', options: ['O altar de incenso', 'O candelabro', 'A Arca da Aliança', 'A mesa dos pães'], correctIndex: 2 }
    ]
  },
  {
    id: 'os-reis',
    category: 'Antigo Testamento',
    title: 'Os Reis',
    summary: 'A ascensão e queda da monarquia: do esplendor de Salomão ao trágico exílio na Babilônia.',
    verse: { text: "Dá, pois, a teu servo um coração entendido para julgar a teu povo...", ref: "1 Reis 3:9" },
    sections: [
      { 
        title: 'Contexto', 
        content: `Os livros de 1 e 2 Reis formavam originalmente um único rolo na tradição hebraica. Sua autoria é incerta, mas muitas vezes atribuída ao profeta Jeremias, compilando registros de cronistas reais durante o exílio babilônico. O cenário abrange a era dourada do Reino Unido até a divisão e o colapso final dos reinos do Norte e do Sul.

O propósito teológico é responder: "Por que estamos no exílio?". Os livros revisam a história de Israel não apenas como dados políticos, mas como uma avaliação espiritual da fidelidade do rei à Aliança. O rei era o representante do povo diante de Deus; quando o rei falhava, a nação sofria as consequências.

O cenario político era de constante instabilidade e ameaça de impérios como a Síria e a Babilônia. O livro destaca o papel crucial dos profetas (como Elias e Eliseu) que serviam como a "consciência moral" do reino, chamando tanto reis quanto plebeus de volta à justiça e ao culto exclusivo a Yahweh.` 
      },
      { 
        title: 'História', 
        content: `A narrativa inicia com o apogeu do reino sob Salomão, marcado pela construção do Templo de Jerusalém, uma maravilha arquitetônica e espiritual. No entanto, o declínio começa com a idolatria de Salomão no fim de sua vida, levando à cisão após sua morte: Israel ao Norte e Judá ao Sul.

A cronologia segue com Elias desafiando a terrível dinastia de Acabe e Jezabel, realizando milagres no Monte Carmelo para provar quem era o Deus verdadeiro. Segue-se a sucessão de Eliseu e uma série de reis, a maioria dos quais em Israel "fez o que era mau aos olhos do Senhor". No Sul, em Judá, houve lampejos de reforma com reis como Ezequias e Josias.

O momento de virada catastrófica ocorre em 722 a.C. com a queda de Samaria (Reino do Norte) e culmina em 586 a.C. com a destruição de Jerusalém e o Templo pelos babilônios. A história termina com Judá no exílio, mas mantendo uma centelha de esperança na linhagem de Davi.` 
      },
      { 
        title: 'Aplicação', 
        content: `A lição central de Os Reis é que o sucesso verdadeiro não é medido por riqueza ou poder militar, mas pela obediência espiritual. Salomão, apesar de toda a sua sabedoria, falhou quando seu coração se desviou. O discípulo aprende que o conhecimento teológico sem integridade prática leva à ruína.

A história destaca a importância da liderança santa. O "efeito cascata" da má liderança é evidente: reis idólatras levavam gerações para longe de Deus. Somos lembrados de que temos influência sobre os que nos rodeiam e que nossa fidelidade pessoal é a nossa contribuição mais importante para o Reino.

Por fim, os livros apontam para a necessidade de um Rei Perfeito. A falha sistemática dos reis humanos — even dos melhores como Josias — clama pelo Messias, o Filho de Davi, cujo trono seria eterno e justo. O discípulo deposita sua esperança não em líderes terrenos, mas na soberania inabalável de Jesus Cristo.` 
      }
    ],
    curiosities: [
      "O Templo de Salomão levou sete anos para ser construído e foi revestido com mais de 2,5 toneladas de ouro.",
      "A inscrição do Rei Mesha (Pedra Moabita) confirma relatos de batalhas descritos nos livros de Reis, servindo como uma importante prova arqueológica.",
      "Elias é um dos dois únicos homens na Bíblia (o outro é Enoque) que não experimentou a morte, sendo levado ao céu em um redemoinho."
    ],
    quiz: [
      { question: 'Quem foi o rei responsável pela construção do primeiro Templo?', options: ['Davi', 'Saul', 'Salomão', 'Ezequias'], correctIndex: 2 },
      { question: 'Qual foi o principal motivo espiritual para a divisão do reino?', options: ['Falta de exército', 'Idolatria de Salomão', 'Conflito com o Egito', 'Pobreza extrema'], correctIndex: 1 },
      { question: 'Qual profeta subiu ao céu em um redemoinho sem morrer?', options: ['Isaías', 'Elias', 'Eliseu', 'Amós'], correctIndex: 1 },
      { question: 'Qual império foi responsável pela destruição final de Jerusalém e do Templo?', options: ['Assírio', 'Persa', 'Grego', 'Babilônico'], correctIndex: 3 }
    ]
  },
  {
    id: 'profetas',
    category: 'Antigo Testamento',
    title: 'Profetas',
    summary: 'A voz da justiça divina: mensageiros de arrependimento, julgamento e a vinda do Renovo messiânico.',
    verse: { text: "Eis-me aqui, envia-me a mim...", ref: "Isaías 6:8" },
    sections: [
      { 
        title: 'Contexto', 
        content: `O corpus profético da Bíblia abrange séculos de história, desde o tempo da monarquia dividida até o período pós-exílio. Os profetas não eram apenas adivinhos do futuro; eram "procuradores da Aliança", homens chamados por Deus para processar a nação por quebra de contrato espiritual. Escrito por diversas mãos em cenários que vão de palácios a calabouços.

Seu propósito era triplo: confrontar o pecado social e religioso, anunciar o julgamento iminente como disciplina divina e oferecer conforto através de promessas de restauração futura. Eles falavam em nome de Deus para reis obstinados e para um povo que havia esquecido a orfandade e a viúva.

A época dos profetas foi marcada pela ascensão de superpotências pagãs que ameaçavam a existência física de Israel. No entanto, para os profetas, o perigo real não era o exército estrangeiro, mas a apostasia interna. Eles estabeleceram o cenário para a vinda do Messias, detalhando Sua natureza e missão séculos antes de Seu nascimento.` 
      },
      { 
        title: 'História', 
        content: `A história dos profetas é uma história de coragem sacrificial. Homens como Isaías, de linhagem nobre, viram a santidade de Deus no Templo e profetizaram sobre o "Servo Sofredor". Jeremias, o "profeta chorão", suportou a zombaria enquanto via a destruição de Jerusalém que ele tanto tentou evitar através do arrependimento.

A cronologia se divide entre profetas pré-exílicos (como Amós e Oseias), profetas do exílio (como Daniel na corte persa e Ezequiel entre os cativos) e profetas pós-exílicos (como Ageu e Zacarias) que encorajaram a reconstrução. Cada um trouxe uma mensagem específica conforme o cenário político da época.

Momentos de virada ocorrem quando as profecias se cumprem — o exílio acontece exatamente como previsto, mas o retorno também ocorre sob o rei Ciro, provando que a palavra de Deus é soberana. O capítulo final dos profetas (Malaquias) encerra o Antigo Testamento com uma expectativa tensa pelo surgimento de "Elias" antes do "Grande Dia do Senhor".` 
      },
      { 
        title: 'Aplicação', 
        content: `Os profetas nos ensinam que Deus se importa profundamente com a justiça social tanto quanto com a pureza litúrgica. Para o discípulo, a mensagem de Amós ressoa: "corra a justiça como as águas". Não podemos ser devotos a Deus e indiferentes ao sofrimento do próximo; a fé bíblica exige um compromisso ativo com a verdade e a retidão.

Eles também nos oferecem um modelo de fidelidade sob pressão. Falar a verdade ao poder era perigoso, mas os profetas priorizaram a aprovação de Deus sobre a popularidade humana. O discípulo moderno é encorajado a manter sua convicção bíblica em um mundo que muitas vezes é hostil aos valores do evangelho.

Teologicamente, as profecias messiânicas são a base da nossa esperança. Ao estudar os detalhes da vida de Cristo descritos por Isaías ou Miqueias, o discípulo fortalece sua confiança na inspiração divina das Escrituras. Aprendemos que Deus está no controle da história e que Suas promessas de um "Novo Céu e Nova Terra" são o âncora de nossa alma.` 
      }
    ],
    curiosities: [
      "O termo hebraico 'Nabi' (profeta) significa literalmente 'alguém que foi chamado' ou 'porta-voz'.",
      "Os profetas usavam 'atos simbólicos' às vezes bizarros (como Ezequiel deitando de lado por meses) para comunicar mensagens visuais impuras ao povo.",
      "O livro de Isaías é muitas vezes chamado de o 'Quinto Evangelho' devido à vasta quantidade de profecias explícitas sobre a vida e morte de Jesus."
    ],
    quiz: [
      { question: 'Qual a principal função de um profeta na Bíblia?', options: ['Apenas prever o futuro', 'Ser um porta-voz da Aliança de Deus', 'Liderar exércitos', 'Acumular riquezas'], correctIndex: 1 },
      { question: 'Qual profeta é conhecido por profetizar o nascimento e sofrimento de Cristo (Isaías 53)?', options: ['Jeremias', 'Amós', 'Isaías', 'Jonas'], correctIndex: 2 },
      { question: 'O que diferencia um profeta maior de um menor?', options: ['A santidade do profeta', 'A duração do ministério', 'O tamanho dos escritos no cânon', 'A importância da mensagem'], correctIndex: 2 },
      { question: 'Quem foi o profeta que viveu na corte da Babilônia e teve visões apocalípticas?', options: ['Daniel', 'Ezequiel', 'Oseias', 'Malaquias'], correctIndex: 0 }
    ]
  },
  {
    id: 'evangelhos',
    category: 'Novo Testamento',
    title: 'Evangelhos',
    summary: 'O Verbo se fez carne: o advento do Messias, Seu ministério terreno e a vitória definitiva sobre o pecado e a morte.',
    verse: { text: "Eu sou o caminho, e a verdade e a vida; ninguém vem ao Pai, senão por mim.", ref: "João 14:6" },
    sections: [
      { 
        title: 'Contexto', 
        content: `Os quatro Evangelhos (Mateus, Marcos, Lucas e João) foram escritos na segunda metade do primeiro século d.C. Eles servem como registros históricos e testemunhos teológicos da vida de Jesus de Nazaré. O cenário é a Judeia e a Galileia sob ocupação romana, um barril de pólvora de expectativa messiânica e tensão política.

O propósito de cada autor é único: Mateus escreve para judeus, provando que Jesus é o Messias prometido; Marcos foca na ação e no serviço de Jesus para um público romano; Lucas, um médico, oferece um relato minucioso e compassivo para gentios; João apresenta a divindade eterna de Jesus ("No princípio era o Verbo").

A autoria varia de apóstolos (Mateus e João) a companheiros próximos (Marcos de Pedro, Lucas de Paulo). Juntos, eles formam uma visão estereoscópica da Pessoa mais importante da história, respondendo à pergunta fundamental: "Quem dizeis que eu sou?".` 
      },
      { 
        title: 'História', 
        content: `A narrativa abrange o nascimento humilde em Belém, o silêncio dos anos de crescimento e a explosão de poder no ministério público de Jesus. Iniciando com o batismo por João Batista e a vitória na tentação no deserto, Jesus passa a curar enfermos, expulsar demônios e ensinar as massas através de parábolas revolucionárias.

Seguimos a cronologia das Suas viagens, os confrontos com os líderes religiosos e o treinamento dos doze apóstolos. O grande momento de virada é a Semana Santa em Jerusalém: a entrada triunfal, a Última Ceia, a traição de Judas e a agonia no Getsêmani.

O ápice dramático e teológico ocorre na Crucificação no Calvário, onde Jesus se entrega como o sacrifício perfeito. No entanto, os Evangelhos não terminam na tumba; eles culminam com a Ressurreição gloriosa ao terceiro dia e a "Grande Comissão", enviando Seus seguidores a todas as nações.` 
      },
      { 
        title: 'Aplicação', 
        content: `Teologicamente, os Evangelhos revelam o caráter de Deus de forma suprema: "quem me vê, vê o Pai". O discípulo aprende que o Reino de Deus é uma realidade presente, mas também futura. Somos chamados a viver sob a ética do Sermão do Monte, que inverte os valores do mundo — bem-aventurados os humildes, os que choram, os pacificadores.

A vida de Jesus é o nosso modelo supremo de discipulado. Sua submissão ao Pai, Sua compaixão pelos marginalizados e Sua firmeza na verdade são o padrão para nossa conduta. O discípulo pratica a presença de Cristo através da oração e da meditação em Suas palavras, buscando ser transformado de "glória em glória".

Por fim, os Evangelhos exigem uma decisão pessoal. Não podemos ser indiferentes a Jesus. Ele é apresentado como o único Salvador e o Rei Supremo. O discípulo aplica esse ensinamento rendendo sua vontade ao Senhorio de Cristo, participando da mesa da comunhão e compartilhando as "Boas Novas" de que a vida eterna está disponível a todos os que creem.` 
      }
    ],
    curiosities: [
      "Os três primeiros evangelhos são chamados de 'Sinóticos' porque podem ser 'vistos juntos', compartilhando uma estrutura e linguagem similar.",
      "Jesus ensinou cerca de 35 a 40 parábolas diferentes, dependendo de como são contadas, usando elementos como sementes, moedas e pastoreio.",
      "O Evangelho de João não contém parábolas no estilo sinótico, focando em longos discursos metafísicos como os famosos sete 'Eu Sou'."
    ],
    quiz: [
      { question: 'Qual Evangelho foi escrito especificamente para provar aos judeus que Jesus era o Messias?', options: ['Marcos', 'João', 'Lucas', 'Mateus'], correctIndex: 3 },
      { question: 'O que o termo "Evangelho" significa literalmente?', options: ['Escrita Bíblica', 'Boas Novas', 'Vida de Jesus', 'Santa Palavra'], correctIndex: 1 },
      { question: 'Qual autor de evangelho era médico por profissão?', options: ['Mateus', 'Marcos', 'Lucas', 'João'], correctIndex: 2 },
      { question: 'Em qual das declarações abaixo Jesus afirma ser o único caminho?', options: ['João 3:16', 'Salmos 23', 'João 14:6', 'Gênesis 1:1'], correctIndex: 2 }
    ]
  },
  {
    id: 'atos',
    category: 'Novo Testamento',
    title: 'Atos',
    summary: "A continuação do que Jesus 'iniciou': o nascimento da Igreja primitiva, o poder do Espírito Santo e as missões apostólicas.",
    verse: { text: "Mas recebereis a virtude do Espírito Santo, que há de vir sobre vós; e ser-me-eis testemunhas...", ref: "Atos 1:8" },
    sections: [
      { 
        title: 'Contexto', 
        content: `O livro de Atos dos Apóstolos foi escrito pelo médico Lucas como a segunda parte de seu relato para Teófilo. Escrito por volta de 62 d.C., serve como a ponte histórica entre os Evangelhos e as Epístolas. O cenário geográfico começa em Jerusalém e se expande "até os confins da terra", terminando em Roma, o coração do império.

O propósito de Atos é duplo: histórico e apologético. Ele demonstra que a nova fé não era uma rebelião política, mas o cumprimento das promessas bíblicas sob a orientação do Espírito Santo. O livro mostra como um grupo de seguidores assustados se transformou em um movimento que "alvoroçou o mundo".

Politicamente, a Igreja operava sob uma tensão constante entre a perseguição judaica e a indiferença ou hostilidade romana. Lucas destaca a natureza inclusiva do Evangelho, que rompe barreiras raciais, sociais e culturais, integrando judeus e gentios em um só corpo.` 
      },
      { 
        title: 'História', 
        content: `A narrativa inicia com a Ascensão de Jesus e o aguardado Dia de Pentecostes, quando o Espírito Santo desce sobre os discípulos em línguas de fogo. O momento de virada inicial é o nascimento da Igreja em Jerusalém, marcada pela comunhão radical e milagres realizados por Pedro e os demais.

Seguimos a cronologia através da primeira perseguição, o martírio de Estevão e a expansão para a Samaria. No capítulo 9, ocorre a virada monumental: a conversão de Saulo de Tarso na estrada de Damasco. Saulo, que perseguia a Igreja, torna-se Paulo, o maior missionário cristão.

A segunda metade do livro foca nas viagens missionárias de Paulo pela Ásia Menor e Europa. Vemos naufrágios, prisões, discursos em praças públicas (como o Areópago) e o estabelecimento de igrejas em centros urbanos. O livro termina de forma aberta, com Paulo preso em Roma, mas pregando com "toda a liberdade", sugerindo que a missão da Igreja continua.` 
      },
      { 
        title: 'Aplicação', 
        content: `O ensinamento teológico central de Atos é o protagonismo do Espírito Santo. Ele é quem envia, capacita e guia a Igreja. Para o discípulo, isso significa que não podemos cumprir a missão de Deus em nossas próprias forças. Atos nos chama a uma dependência profunda do Espírito para testemunhar de Cristo em nosso cotidiano.

A Igreja primitiva em Atos serve como um modelo de comunidade. Eles perseveravam "na doutrina dos apóstolos, na comunhão, no partir do pão e nas orações". O discípulo moderno aprende que o crescimento espiritual não ocorre no isolamento, mas em uma comunidade de fé comprometida com a Palavra e o cuidado mútuo.

Por fim, Atos nos ensina sobre a perseverança diante da oposição. A "alegria em sofrer pelo nome de Jesus" é uma marca constante. O discípulo aplica essa verdade ao enfrentar desafios por sua fé, sabendo que a soberania de Deus usa até a perseguição para expandir Seu Reino. A missão "até os confins da terra" é agora o nosso encargo.` 
      }
    ],
    curiosities: [
      "O livro poderia ser chamado de 'Atos do Espírito Santo', pois Ele é mencionado cerca de 50 vezes ao longo dos capítulos.",
      "Em Atos 11:26, em Antioquia, os seguidores de Jesus foram chamados de 'Cristãos' pela primeira vez (originalmente como um apelido pejorativo).",
      "Lucas usa pronomes como 'nós' em certas partes (ex: At 16:10-17), indicando que ele mesmo estava presente em algumas das viagens missionárias de Paulo."
    ],
    quiz: [
      { question: 'Qual evento marcou o início público da Igreja em Atos 2?', options: ['A última ceia', 'O dia de Pentecostes', 'A conversão de Saulo', 'O naufrágio de Paulo'], correctIndex: 1 },
      { question: 'Qual personagem foi o primeiro mártir cristão em Atos?', options: ['Pedro', 'Tiago', 'Estevão', 'Filipe'], correctIndex: 2 },
      { question: 'Quem foi transformado de perseguidor em apóstolo na estrada de Damasco?', options: ['Barnabé', 'Saulo de Tarso', 'Tomé', 'Silas'], correctIndex: 1 },
      { question: 'Para qual cidade Paulo foi levado ao final do livro de Atos?', options: ['Atenas', 'Éfeso', 'Alexandria', 'Roma'], correctIndex: 3 }
    ]
  },
  {
    id: 'epistolas',
    category: 'Novo Testamento',
    title: 'Epístolas',
    summary: 'A doutrina aplicada: cartas de instrução, correção e encorajamento sobre como viver a nova vida em Cristo.',
    verse: { text: "Toda a Escritura é divinamente inspirada, e proveitosa para ensinar, para redarguir, para corrigir...", ref: "2 Timóteo 3:16" },
    sections: [
      { 
        title: 'Contexto', 
        content: `As Epístolas compõem a maior parte dos livros do Novo Testamento. São cartas escritas por apóstolos e líderes (como Paulo, Pedro, João, Tiago e Judas) para igrejas locais ou indivíduos específicos. Foram escritas em meio às pressões de heresias nascentes, problemas de conduta moral e a necessidade de explicar a relação entre a Graça e a Lei.

O cenario era de comunidades espalhadas pelo império romano, vivendo em culturas pagãs hostis. O propósito dessas cartas era estabelecer a doutrina cristã sólida e fornecer diretrizes éticas para a vida comunitária. Elas transformam a biografia de Jesus (Evangelhos) em teologia aplicada para o cotidiano.

Paulo, autor de 13 das epístolas, muitas vezes escreveu da prisão ou durante suas viagens. Já as "Epístolas Gerais" (Hebreus a Judas) foram escritas para um público mais amplo de cristãos judeus e gentios, reforçando a superioridade de Cristo e a necessidade de fé perseverante.` 
      },
      { 
        title: 'História', 
        content: `Diferente dos Evangelhos, as Epístolas não narram uma biografia, mas a "história intelectual" da Igreja. Elas mostram a luta por manter a pureza do Evangelho contra os legalistas (que queriam voltar à lei) e os libertinos (que abusavam da graça). A cronologia acompanha a expansão da Igreja por Corinto, Éfeso, Filipos e Colossos.

Vemos momentos de virada doutrinária, como em Romanos, onde Paulo expõe sistematicamente a "Justificação pela Fé". Em 1 Coríntios, acompanhamos o apóstolo lidando com divisões e dons espirituais. Em Hebreus, vemos uma magnífica exposição de Cristo como o nosso Sumo Sacerdote eterno e superior.

As cartas também mostram o coração dos apóstolos — como João, em suas epístolas idosas, instando os discípulos a "amarem-se uns aos outros". Elas terminam o cânon doutrinário com advertências sérias contra falsos mestres, preparando a Igreja para permanecer firme através dos séculos até a volta de Cristo.` 
      },
      { 
        title: 'Aplicação', 
        content: `O ensinamento teológico supremo é a vida em união com Cristo. O discípulo aprende que não somos salvos por obras, mas que as obras são o fruto inevitável de um coração transformado. Epístolas como Efésios e Gálatas definem nossa nova posição "nas regiões celestiais" em Cristo, conferindo autoridade e paz.

Praticamente, as cartas oferecem instruções sobre casamento, trabalho, governo e igreja. O discípulo moderno aplica esses textos ao buscar ser um "embaixador de Cristo" em seu ambiente profissional e familiar. Aprendemos que a espiritualidade cristã não é uma mística abstrata, mas algo visível na forma como tratamos as pessoas e lidamos com tentações.

Finalmente, elas enfatizam a esperança futura. Somos encorajados a "olhar firmemente para Jesus" e a viver com a expectativa Suas promessas de retorno. Para o discípulo, estudar as epístolas é sentar-se aos pés dos apóstolos para receber mentoramento direto sobre como ser "luz do mundo" em meio às trevas culturais.` 
      }
    ],
    curiosities: [
      "O livro de Romanos é a epístola mais longa e é considerado 'a obra-prima da teologia cristã', tendo influenciado figuras como Agostinho e Lutero.",
      "As cartas eram frequentemente ditadas por apóstolos a secretários (amaneuenses), com o próprio apóstolo assinando a saudação final para garantir autenticidade.",
      "O termo 'Epístola' deriva do grego 'Epistole', que significa simplesmente 'uma mensagem enviada por carta'."
    ],
    quiz: [
      { question: 'Quem é o autor da maioria das epístolas no Novo Testamento?', options: ['Pedro', 'Tiago', 'Paulo', 'João'], correctIndex: 2 },
      { question: 'Qual livro foca na explicação detalhada da Justificação pela Fé?', options: ['Mateus', 'Romanos', 'Atos', 'Tiago'], correctIndex: 1 },
      { question: 'O que as Epístolas Gerais representam?', options: ['Cartas para igrejas anônimas', 'Cartas escritas para o público cristão em geral', 'Decretos políticos de Roma', 'Ensaios sobre filosofia grega'], correctIndex: 1 },
      { question: 'Qual epístola menciona que "a fé sem obras é morta"?', options: ['Gálatas', 'Hebreus', 'Tiago', 'Efésios'], correctIndex: 2 }
    ]
  },
  {
    id: 'apocalipse',
    category: 'Novo Testamento',
    title: 'Apocalipse',
    summary: 'A Revelação de Jesus Cristo: soberania, julgamento final e a gloriosa consumação da história na Nova Jerusalém.',
    verse: { text: "Ele enxugará de seus olhos toda lágrima; e não haverá mais morte, nem pranto, nem clamor, nem dor...", ref: "Apocalipse 21:4" },
    sections: [
      { 
        title: 'Contexto', 
        content: `O Apocalipse (do grego 'Apokalypsis', que significa "Revelação" ou "Desvelar") foi escrito pelo apóstolo João por volta de 95 d.C., durante seu exílio na ilha de Patmos. Ele foi escrito para sete igrejas reais na Ásia Menor que enfrentavam perseguição sob o imperador Domiciano e lutavam contra a complacência interna.

O cenário geográfico e simbólico é vasto: desde visões do trono celestial até batalhas cósmicas e a terra renovada. É um livro do gênero apocalíptico, caracterizado por simbolismo rico, numerologia e visões proféticas. Suas raízes estão profundas no Antigo Testamento, citando ou aludindo a Daniel, Ezequiel e Isaías constantemente.

O propósito não é apenas fornecer um mapa cronológico do fim dos tempos, mas encorajar os sofredores com a verdade de que Deus é soberano. Ele assegura ao "Discípulo" que, embora o mal pareça vencer temporariamente, a vitória definitiva pertence ao Cordeiro que foi morto.` 
      },
      { 
        title: 'História', 
        content: `A narrativa organiza-se em visões dramáticas. Começa com João vendo o Cristo Glorificado entre os sete candeeiros, ditando cartas para as igrejas. A cena muda para o trono de Deus, onde somente o Cordeiro de Judá é digno de abrir o livro dos sete selos que detêm o destino da terra.

Seguimos a cronologia simbólica de julgamentos: selos, trombetas e taças. Vemos a ascensão do sistema mundial anti-cristão (a Besta e a Babilônia) e a perseguição aos santos. O grande momento de virada é a Segunda Vinda de Cristo — montado em um cavalo branco como o Fiel e Verdadeiro para derrotar as forças das trevas no Armagedom.

O clímax final ocorre com o Julgamento do Trono Branco e a destruição total da morte e do inferno. O livro — e toda a Bíblia — culmina na visão magnífica da Nova Jerusalém descendo do céu, onde não há necessidade de sol porque a Glória de Deus a ilumina, reestabelecendo a comunhão perfeita perdida no Gênesis.` 
      },
      { 
        title: 'Aplicação', 
        content: `A lição teológica central é a vitória de Cristo sobre a história. O discípulo aprende que "Ele é o Alfa e o Ômega", quem controla o início e o fim. Isso gera uma paz radical: não importa quão caótico o mundo pareça, o Reino de Deus é o destino final e inabalável. Somos chamados a ser "vencedores" por meio do sangue do Cordeiro.

Praticamente, o Apocalipse convoca à santidade e resistência cultural. As cartas às sete igrejas repreendem a mornidão de Laodiceia e a tolerância ao pecado de Tiatira. O discípulo moderno aplica isso ao examinar sua própria vida, buscando ser fiel a Cristo em meio às tentações de compromisso e secularismo.

Finalmente, ele sustenta a nossa esperança. A promessa de que "não haverá mais dor" é o que sustenta o cristão em meio ao luto e à injustiça. O discípulo vive com a oração "Maranata" (Vem, Senhor Jesus) nos lábios, deixando que a visão da Nova Jerusalém molde suas prioridades e generosidade no presente, investindo no que é eterno.` 
      }
    ],
    curiosities: [
      "Apocalipse é o único livro na Bíblia que promete uma benção especial a quem o lê e guarda (Ap 1:3).",
      "O número 7 é usado cerca de 50 vezes no livro (7 selos, 7 taças, 7 igrejas), simbolizando perfeição e plenitude divina.",
      "A Ilha de Patmos, onde João estava preso, era uma colônia penal romana rochosa, medindo apenas cerca de 13 km de extensão."
    ],
    quiz: [
      { question: 'O que o termo grego Apokalypsis significa?', options: ['Fim do Mundo', 'Segredo Oculto', 'Revelação / Desvelar', 'Juízo de Fogo'], correctIndex: 2 },
      { question: 'Quem recebeu a visão do trono e escreveu o livro?', options: ['Paulo', 'Pedro', 'Tiago', 'João'], correctIndex: 3 },
      { question: 'Quem é o único digno de abrir o livro dos sete selos?', options: ['Moisés', 'O Cordeiro (Jesus)', 'O Arcanjo Miguel', 'João'], correctIndex: 1 },
      { question: 'O que a Nova Jerusalém representa ao final do livro?', options: ['Um sonho irrealizável', 'O quartel-general romano', 'A restauração total da comunhão com Deus', 'Uma fortaleza militar'], correctIndex: 2 }
    ]
  },
  {
    id: 'herois-da-fe',
    category: 'Personagens',
    title: 'Heróis da Fé',
    summary: 'A galeria dos vitoriosos: homens e mulheres que, por meio da confiança absoluta em Deus, mudaram o curso da história.',
    verse: { text: "Ora, a fé é o firme fundamento das coisas que se esperam, e a prova das coisas que se não veem.", ref: "Hebreus 11:1" },
    sections: [
      { 
        title: 'Contexto', 
        content: `Os "Heróis da Fé" são os personagens imortalizados no capítulo 11 de Hebreus, conhecido como o "Hall da Fama" das Escrituras. O propósito original desse texto era encorajar cristãos judeus do primeiro século que sofriam perseguição profunda e estavam tentados a abandonar sua fé.

O cenário abrange milhares de anos, desde o justo Abel até os profetas e reis. A fé aqui não é descrita como um sentimento vago, mas como uma convicção fundamentada na natureza de Deus. O livro de Hebreus destaca que esses heróis não eram super-homens, mas pessoas "sujeitas às mesmas paixões", que escolheram o invisível em face do perigoso e tangível.

A época em que cada um viveu variou drasticamente, mas o cenario comum era a tensão entre a promessa divina e a realidade terrena muitas vezes contrária. Eles provaram que Deus usa indivíduos comuns para realizar o impossível quando há rendição total à Sua Palavra.` 
      },
      { 
        title: 'História', 
        content: `Nesta galeria, vemos Noé construindo uma arca sob zombaria clara, enquanto o mundo ignorava o aviso divino. Seguimos Abraão, que abandonou a segurança de Ur sem saber para onde ia, apenas porque Deus o chamou. Vemos o momento de virada de Moisés, que "rejeitou ser chamado filho da filha de Faraó, preferindo padecer com o povo de Deus".

A cronologia inclui a coragem de Raabe em Jericó, a força inspirada de Sansão, o governo justo de Davi e as provações extremas de profetas anônimos que foram serrados ao meio ou viveram em covas por amor à verdade. O ponto crucial é que muitos deles "não receberam a promessa" em vida, mas a viram de longe com os olhos do espírito.

Cada história segue um padrão: um chamado divino, um obstáculo monumental e uma resposta de confiança inabalável que resultou em uma intervenção de Deus ou na preservação de um testemunho fiel. Eles são descritos como pessoas das quais "o mundo não era digno", servindo como um eco de fidelidade através das eras.` 
      },
      { 
        title: 'Aplicação', 
        content: `O ensinamento teológico central é que a fé é ativa e sacrificante. Para o discípulo moderno, isso derruba a ideia de que ser cristão é sinônimo de vida livre de problemas. Aprendemos que a fé triunfa "em meio ao" problema. Os heróis provam que a nossa perspectiva deve ser eterna; as dificuldades presentes são leves e momentâneas perto da glória reservada.

A fé prática significa tomar decisões baseadas na realidade invisível de Deus. O discípulo aplica esse legado ao escolher integridade sobre conveniência, e generosidade sobre acúmulo. Somos inspirados por esses exemplos a "correr com paciência a carreira que nos está proposta", sabendo que estamos cercados por uma "tão grande nuvem de testemunhas".

Por fim, Hebreus destaca que eles esperavam por "algo melhor" que Deus proveu para nós — o Messias. O discípulo entende que agora temos o exemplo supremo em Jesus, o autor e consumador da fé. Estudar esses heróis fortalece nossa resiliência espiritual, lembrando-nos que o mesmo Deus que sustentou Daniel e Ester sustenta cada um de nós hoje.` 
      }
    ],
    curiosities: [
      "O termo grego para fé (Pistis) em Hebreus implica em 'lealdade' e 'compromisso firme', não apenas crença intelectual.",
      "A maioria dos 'Heróis da Fé' citados tinham falhas graves (como Davi e Sansão), provando que Deus não escolhe perfeitos, mas os que confiam Nele.",
      "A fé de Abraão é o padrão ouro na Bíblia; ele esperou 25 anos desde a promessa até o nascimento de Isaque."
    ],
    quiz: [
      { question: 'Qual capítulo da Bíblia é conhecido como a Galeria da Fé?', options: ['Salmos 23', 'Hebreus 11', '1 Coríntios 13', 'Romanos 8'], correctIndex: 1 },
      { question: 'Quem é o "Pai da Fé" que saiu de Ur sem saber para onde ia?', options: ['Moisés', 'Noé', 'Abraão', 'José'], correctIndex: 2 },
      { question: 'Qual a definição bíblica de fé segundo o texto?', options: ['Um sentimento forte', 'Firme fundamento das coisas que se esperam', 'Segurança financeira', 'Sorte'], correctIndex: 1 },
      { question: 'Muitos heróis da fé não tiveram sucesso terreno imediato. O que os motivava?', options: ['Fama', 'Riqueza no Egito', 'A esperança em uma cidade cujo arquiteto era Deus', 'Desejo de vingança'], correctIndex: 2 }
    ]
  },
  {
    id: 'mulheres-biblicas',
    category: 'Personagens',
    title: 'Mulheres Bíblicas',
    summary: 'A força da devoção: mulheres que, com coragem, sabedoria e fidelidade, desempenharam papéis vitais no plano de redenção.',
    verse: { text: "A mulher que teme ao Senhor, essa será louvada.", ref: "Provérbios 31:30" },
    sections: [
      { 
        title: 'Contexto', 
        content: `As mulheres na Bíblia operaram em culturas patriarcais muitas vezes limitantes, mas Deus as elevou constantemente como protagonistas em momentos decisivos. O propósito de seus relatos é mostrar que a graça e o chamado divino não conhecem distinção de gênero. Elas foram estrategistas, profetizas, rainhas, mães influentes e as primeiras testemunhas de milagres.

O cenário geográfico varia desde as tendas nômades de Sara até as cortes persas onde Ester governou. Politicamente, elas salvaram nações e mudaram leis. A autoria bíblica dedica espaços significativos para honrar sua contribuição, contrastando com o silêncio sobre as mulheres em muitos outros escritos contemporâneos externos.

A existência dessas narrativas prova o valor intrínseco que Deus confere à mulher na criação e na aliança. Elas são apresentadas como modelos de virtude e ousadia, desafiando o status quo espiritual e social de suas épocas para cumprir a agenda de Yahweh.` 
      },
      { 
        title: 'História', 
        content: `Vemos histórias de virada emocionantes: Rute, uma viúva moabita estrangeira que escolhe a Deus e se torna bisavó de Davi. Ester, que arrisca sua vida ao entrar na presença do rei sem convite para salvar os judeus. Débora, que liderou Israel em tempos de guerra como juíza e profetisa.

A cronologia do Novo Testamento destaca Maria, a jovem que aceitou o peso incalculável de carregar o Messias. Vemos também Maria Madalena, cuja história de libertação a levou a ser a primeira apóstola dos apóstolos, anunciando a ressurreição. A história de Ana, que em lágrimas clamou por um filho e deu à luz ao profeta Samuel, é um marco da oração perseverante.

Cada narrativa destaca um momento de decisão crucial: o "sim" de Maria ao anjo, o "não" de Vasti ao capricho pecaminoso, e o "onde quer que fores, irei" de Rute. Suas histórias não são periféricas; elas fundamentam a linhagem física e espiritual de Jesus Cristo.` 
      },
      { 
        title: 'Aplicação', 
        content: `Teologicamente, as mulheres bíblicas ensinam que o valor da pessoa reside em seu temor ao Senhor. O discípulo aprende que a força de caráter é desenvolvida na submissão à vontade de Deus. Para a discípula moderna, elas oferecem um paradigma de influência espiritual que não depende de títulos humanos, mas de uma caminhada íntima com Deus.

Elas nos ensinam sobre a compaixão e o serviço. Muitas mulheres sustentaram o ministério de Jesus com seus bens e cuidado. O discípulo aplica esse exemplo ao reconhecer e valorizar o serviço "nos bastidores" que mantém a Igreja em pé. Aprendemos que a coragem feminina é peça-chave para a saúde da família e da sociedade cristã.

A fidelidade dessas mulheres diante de crises insolúveis motiva o discípulo a confiar no tempo de Deus. Ana esperou, Ester jejuou e Maria creu. A aplicação prática é uma vida de oração ativa e ousadia santa, sabendo que, nas mãos de Deus, uma mulher dedicada pode mudar o destino de gerações.` 
      }
    ],
    curiosities: [
      "O termo hebraico 'Ezer Kenegdo' (Gn 2:18), traduzido como 'ajudadora', é frequentemente usado para Deus mesmo na Bíblia, sugerindo uma força vital de ajuda e resgate.",
      "Ester é o único livro da Bíblia que não menciona explicitamente o nome de Deus, mas Sua providência é visível em cada página.",
      "Maria Madalena não era uma prostituta no relato bíblico; ela foi uma mulher liberta de sete demônios e uma grande financiadora do ministério de Jesus."
    ],
    quiz: [
      { question: 'Quem foi a moabita que escolheu seguir o Deus de sua sogra Noemi?', options: ['Ester', 'Rute', 'Sara', 'Rebeca'], correctIndex: 1 },
      { question: 'Qual rainha teve coragem de interceder por seu povo perante o Rei Assuero?', options: ['Vasti', 'Maria', 'Ester', 'Jezabel'], correctIndex: 2 },
      { question: 'Débora exerceu qual papel oficial em Israel?', options: ['Rainha', 'Sacerdotisa', 'Juíza e Profetisa', 'Serva'], correctIndex: 2 },
      { question: 'Quem foi a primeira pessoa a anunciar que Jesus havia ressuscitado?', options: ['Pedro', 'João', 'Maria Madalena', 'Lázaro'], correctIndex: 2 }
    ]
  },
  {
    id: 'apostolos',
    category: 'Personagens',
    title: 'Apóstolos',
    summary: 'Os fundadores: da fragilidade humana na Galiléia à autoridade apostólica que estabeleceu a Igreja no mundo.',
    verse: { text: "E designou doze para que estivessem com ele e os enviaria a pregar.", ref: "Marcos 3:14" },
    sections: [
      { 
        title: 'Contexto', 
        content: `Os doze apóstolos foram escolhidos por Jesus não de entre as elites religiosas ou acadêmicas de Jerusalém, mas majoritariamente das margens da sociedade galiléia — pescadores, coletores de impostos e zelotes. O propósito dessa escolha era demonstrar que o "poder de Deus se aperfeiçoa na fraqueza".

O cenario era de um Israel desiludido, sob ocupação romana, buscando heróis militares. Jesus ofereceu a esses homens uma formação intensiva de três anos, focada no Reino de Deus e na transformação do caráter. Após a ascensão de Cristo, o título mudou de "Discípulos" (aprendizes) para "Apóstolos" (enviados com autoridade).

Politicamente e espiritualmente, eles foram os guardiões da tradição oral de Jesus, responsáveis por certificar a verdade dos fatos diante da oposição. O cenario geográfico de suas vidas começou em pequenas aldeias e terminou espalhado por todo o Império Romano, da Etiópia à Índia, conforme a tradição cristã.` 
      },
      { 
        title: 'História', 
        content: `A história dos apóstolos é marcada por momentos de falha e glória. Vemos o temperamento impetuoso de Pedro, que negou Jesus mas depois se tornou a voz principal do Pentecostes. Seguimos João, que evoluiu de um "Filho do Trovão" irado para o "Apóstolo do Amor".

O momento de virada absoluta foi a Ressurreição e o recebimento do Espírito Santo. De homens que fugiram no Getsêmani, eles se tornaram colunas inabaláveis da fé. A cronologia bíblica detalha o ministério de Pedro entre judeus e o de Tiago liderando a igreja em Jerusalém.

A cronologia extrabíblica relata seus martírios: Pedro crucificado de cabeça para baixo, Tiago executado por Herodes, e Tomé pregando na Índia. Eles passaram de aprendizes confusos a arquitetos espirituais da civilização cristã, mantendo a unidade em torno da divindade de Cristo e da autoridade das Escrituras que eles mesmos estavam ajudando a redigir.` 
      },
      { 
        title: 'Aplicação', 
        content: `Teologicamente, o "fundamento dos apóstolos" é a base sobre a qual a Igreja é construída. O discípulo aprende que nossa fé não é uma invenção subjetiva, mas baseada no testemunho ocular desses homens. Estudar suas vidas nos chama à fidelidade doutrinária e à seriedade com o "depósito da fé".

Praticamente, os apóstolos nos ensinam que o fracasso passado não impede o uso futuro por Deus. Se Pedro pôde ser restaurado após uma negação pública, há esperança para qualquer discípulo que tenha falhado. A aplicação prática é uma vida de arrependimento e dependência total da graça.

Por fim, eles nos desafiam à "Grande Comissão". Os apóstolos levaram o evangelho a sério a ponto de darem suas vidas. O discípulo moderno é chamado a ter o mesmo senso de urgência, entendendo que também somos "enviados" em nossas profissões, bairros e círculos de amizade para sermos a continuação desse testemunho apostólico hoje.` 
      }
    ],
    curiosities: [
      "O termo 'Apóstolo' (do grego 'Apostolos') era usado para designar um enviado oficial ou o navio de uma frota que levava a carga principal.",
      "Pedro e André eram irmãos, assim como Tiago e João. Metade dos doze originais podem ter vindo da indústria da pesca na Galiléia.",
      "O apóstolo João foi o único que, segundo a tradição, morreu de morte natural em idade avançada, sobrevivendo a uma tentativa de ser morto em óleo fervente."
    ],
    quiz: [
      { question: 'Quem foi o apóstolo que pregou o sermão no dia de Pentecostes?', options: ['João', 'Pedro', 'Paulo', 'André'], correctIndex: 1 },
      { question: 'Qual apóstolo é conhecido por sua dúvida inicial sobre a ressurreição?', options: ['Filipe', 'Mateus', 'Tomé', 'Bartolomeu'], correctIndex: 2 },
      { question: 'Antes de ser apóstolo, qual era a profissão de Mateus?', options: ['Pescador', 'Carpinteiro', 'Coletor de impostos', 'Escriba'], correctIndex: 2 },
      { question: 'Quantos apóstolos Jesus escolheu originalmente?', options: ['7', '10', '12', '40'], correctIndex: 2 }
    ]
  },
  {
    id: 'parabolas',
    category: 'Personagens',
    title: 'Parábolas',
    summary: 'Verdades celestiais em vestes terrenas: o método de ensino revolucionário de Jesus para revelar o Reino de Deus.',
    verse: { text: "Sem parábolas nada lhes falava.", ref: "Mateus 13:34" },
    sections: [
      { 
        title: 'Contexto', 
        content: `As parábolas (do grego 'Parabole', que significa "lançar ao lado") eram o método pedagógico preferido de Jesus. Ele usava elementos cotidianos da vida agrária e social da Palestina do primeiro século — sementes, moedas, banquetes e pastoreio — para explicar mistérios teológicos profundos. Destinadas a um público de camponeses, fariseus e buscadores.

O propósito era intencionalmente duplo: revelar a verdade para os que tinham "ouvidos para ouvir" e ocultá-la dos que tinham corações endurecidos. As parábolas serviam como um filtro espiritual, exigindo uma resposta de fé e reflexão em vez de apenas recepção passiva de informação.

O cenario era de uma cultura que amava contar histórias. Jesus pegava imagens familiares e inseria um "golpe de mestre" — um elemento inesperado que subvertia as expectativas religiosas da época, como um samaritano heroico ou um pai que corre para abraçar um filho rebelde.` 
      },
      { 
        title: 'História', 
        content: `Cada parábola é um microcosmo narrativo com cronologia e momentos de virada. Na Parábola do Filho Pródigo, o momento de virada é quando ele "cai em si" no chiqueiro. Na do Bom Samaritano, a virada é o gesto de misericórdia de alguém desprezado pela religião oficial.

Vemos a cronologia do crescimento do Reino na Parábola do Grão de Mostarda — de algo minúsculo a uma árvore que abriga as aves. Jesus usava essas histórias para ilustrar a paciência de Deus, o julgamento iminente e a alegria imensa encontrada em um único pecador que se arrepende.

As parábolas foram contadas em contextos específicos: em resposta a perguntas de escribas, em meio a refeições com pecadores ou enquanto caminhava com os discípulos. Elas culminam na grande narrativa do Reino de Deus que está sendo inaugurado na própria Pessoa de Jesus, convidando todos a entrarem nas "bodas do Rei".` 
      },
      { 
        title: 'Aplicação', 
        content: `Teologicamente, as parábolas ensinam sobre a natureza do caráter de Deus: Ele é o Pai amoroso, o Semeador generoso e o Rei justo. O discípulo aprende que o Reino de Deus não é um império político, mas um domínio espiritual que opera através do amor, da graça e da transformação interior. Elas definem os valores da Nova Aliança.

Praticamente, as parábolas exigem ação. A Parábola dos Talentos convoca o discípulo ao trabalho diligente. A do Ovelha Perdida nos chama à missão de resgate. A aplicação prática é um convite à introspecção: "Em qual solo está caindo a minha semente?". Somos chamados a ser terra boa e frutífera para a Palavra.

O discípulo moderno aplica as parábolas ao traduzi-las para a cultura atual. Assim como Jesus usou o arado, podemos pensar em termos de nossas ferramentas atuais para entender a profundidade do Seu ensino. Elas permanecem como espelhos da alma, revelando nossas motivações e apontando para a beleza inigualável da vida sob o governo de Deus.` 
      }
    ],
    curiosities: [
      "Jesus não inventou o gênero parábola (rabinos judeus as usavam), mas Ele o elevou a um nível de profundidade e eficácia artística sem igual.",
      "A Parábola do Bom Samaritano era chocante na época porque judeus e samaritanos se odiavam profundamente, tornando o samaritano o 'heroi' impossível.",
      "Cerca de um terço de todo o ensino registrado de Jesus nos evangelhos sinóticos é dado através de parábolas."
    ],
    quiz: [
      { question: 'O que o termo grego Parabole significa?', options: ['Fábula antiga', 'Lançar ao lado / Comparação', 'Lei Divina', 'Segredo'], correctIndex: 1 },
      { question: 'Na parábola do Semeador, o que a semente representa?', options: ['Dinheiro', 'O povo de Israel', 'A Palavra de Deus', 'Poder'], correctIndex: 2 },
      { question: 'Qual parábola ilustra o perdão incondicional de Deus para com o pecador arrependido?', options: ['O credor incompassivo', 'O grão de mostarda', 'O Filho Pródigo', 'As dez virgens'], correctIndex: 2 },
      { question: 'Qual era um dos principais propósitos de Jesus ao usar parábolas?', options: ['Confundir a todos', 'Entreter as crianças', 'Revelar mistérios do Reino aos que creem', 'Ganhar debates políticos'], correctIndex: 2 }
    ]
  }
];
