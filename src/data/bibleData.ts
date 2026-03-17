import storyNoah from "@/assets/story-noah.png";
import storyCreation from "@/assets/story-creation.png";
import storyDavid from "@/assets/story-david.png";
import storyJesusBirth from "@/assets/story-jesus-birth.png";
import storyDaniel from "@/assets/story-daniel.png";
import storyMoses from "@/assets/story-moses.png";
import storyJonah from "@/assets/story-jonah.png";

export interface StorySlide {
  text: string;
  image: string;
}

export interface BibleStory {
  id: string;
  title: string;
  image: string;
  color: string;
  slides: StorySlide[];
  quiz: QuizQuestion[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

export const bibleStories: BibleStory[] = [
  {
    id: "creation",
    title: "A Criação do Mundo",
    image: storyCreation,
    color: "bg-kids-green",
    slides: [
      { text: "No começo, não existia nada. Tudo era escuro e vazio. Então Deus falou: 'Que haja luz!' E a luz apareceu! ✨", image: storyCreation },
      { text: "Deus separou a luz da escuridão. Chamou a luz de 'dia' e a escuridão de 'noite'. Esse foi o primeiro dia! 🌅", image: storyCreation },
      { text: "Nos outros dias, Deus criou o céu, os mares, as plantas, os animais e tudo que existe! 🌍🌺🐘", image: storyCreation },
      { text: "No sexto dia, Deus criou o homem e a mulher: Adão e Eva! Eles viviam no lindo Jardim do Éden. 👫🌳", image: storyCreation },
      { text: "No sétimo dia, Deus descansou. Ele viu tudo o que tinha feito e disse: 'Está muito bom!' 😊🙏", image: storyCreation },
    ],
    quiz: [
      { question: "O que Deus criou primeiro?", options: ["Os animais", "A luz", "O homem"], correctIndex: 1 },
      { question: "Em quantos dias Deus criou tudo?", options: ["3 dias", "6 dias", "10 dias"], correctIndex: 1 },
      { question: "Como se chamavam o primeiro homem e mulher?", options: ["Noé e Sara", "Adão e Eva", "Abraão e Raquel"], correctIndex: 1 },
    ],
  },
  {
    id: "noah",
    title: "A Arca de Noé",
    image: storyNoah,
    color: "bg-kids-blue",
    slides: [
      { text: "Noé era um homem bom que amava a Deus. Deus pediu para ele construir um grande barco chamado Arca! 🚢", image: storyNoah },
      { text: "Noé colocou dois de cada animal na arca: leões, girafas, elefantes, pássaros e muitos outros! 🦁🦒🐘", image: storyNoah },
      { text: "Então começou a chover muito, muito forte! A chuva durou 40 dias e 40 noites! 🌧️", image: storyNoah },
      { text: "Quando a chuva parou, Noé soltou uma pomba. Ela voltou com um ramo de oliveira! A terra estava seca! 🕊️", image: storyNoah },
      { text: "Deus colocou um lindo arco-íris no céu como promessa de que nunca mais haveria um dilúvio assim! 🌈", image: storyNoah },
    ],
    quiz: [
      { question: "Quem construiu a arca?", options: ["Moisés", "Noé", "Abraão"], correctIndex: 1 },
      { question: "Quantos dias choveu?", options: ["10 dias", "40 dias", "100 dias"], correctIndex: 1 },
      { question: "O que a pomba trouxe?", options: ["Uma flor", "Um ramo de oliveira", "Uma pedra"], correctIndex: 1 },
    ],
  },
  {
    id: "moses",
    title: "Moisés e o Mar Vermelho",
    image: storyMoses,
    color: "bg-kids-red",
    slides: [
      { text: "O povo de Deus estava preso no Egito e era tratado como escravo. Eles precisavam de ajuda! 😢", image: storyMoses },
      { text: "Deus escolheu Moisés para libertar o povo. Moisés foi corajoso e disse ao Faraó: 'Deixe meu povo ir!' 💪", image: storyMoses },
      { text: "O Faraó não queria deixar. Então Deus mandou 10 pragas sobre o Egito até o Faraó concordar! ⚡", image: storyMoses },
      { text: "Quando chegaram ao Mar Vermelho, Moisés estendeu seu bastão e Deus abriu o mar em dois! 🌊", image: storyMoses },
      { text: "O povo atravessou em terra seca! Deus os protegeu e os levou para a terra prometida! 🎉🙏", image: storyMoses },
    ],
    quiz: [
      { question: "Quem libertou o povo de Deus?", options: ["Davi", "Moisés", "José"], correctIndex: 1 },
      { question: "Quantas pragas Deus enviou?", options: ["5", "10", "7"], correctIndex: 1 },
      { question: "Qual mar Moisés abriu?", options: ["Mar Morto", "Mar Vermelho", "Mar Mediterrâneo"], correctIndex: 1 },
    ],
  },
  {
    id: "david",
    title: "Davi e Golias",
    image: storyDavid,
    color: "bg-kids-orange",
    slides: [
      { text: "Golias era um gigante muito grande e forte. Todos os soldados tinham medo dele! 😨", image: storyDavid },
      { text: "Davi era apenas um menino pastor de ovelhas, mas ele confiava muito em Deus! 🐑", image: storyDavid },
      { text: "Davi disse: 'Eu vou lutar contra o gigante! Deus vai me ajudar!' E pegou sua funda e cinco pedrinhas. 💎", image: storyDavid },
      { text: "Com apenas uma pedrinha e muita fé, Davi acertou o gigante Golias na testa! BOOM! 💥", image: storyDavid },
      { text: "Golias caiu no chão! Davi venceu porque confiou em Deus! Com Deus, somos mais fortes! 🏆🙏", image: storyDavid },
    ],
    quiz: [
      { question: "O que Davi usou para vencer Golias?", options: ["Uma espada", "Uma funda e pedras", "Um arco e flecha"], correctIndex: 1 },
      { question: "Davi era um...", options: ["Rei", "Pastor de ovelhas", "Soldado"], correctIndex: 1 },
      { question: "Por que Davi venceu?", options: ["Era forte", "Confiou em Deus", "Tinha armadura"], correctIndex: 1 },
    ],
  },
  {
    id: "daniel",
    title: "Daniel na Cova dos Leões",
    image: storyDaniel,
    color: "bg-kids-yellow",
    slides: [
      { text: "Daniel amava a Deus e orava três vezes por dia. Ele era fiel e obediente! 🙏", image: storyDaniel },
      { text: "Homens malvados fizeram uma lei proibindo orar a Deus. Mas Daniel continuou orando! 😤", image: storyDaniel },
      { text: "Daniel foi jogado numa cova cheia de leões ferozes! Todos achavam que ele ia ser devorado! 🦁😱", image: storyDaniel },
      { text: "Mas Deus enviou um anjo que fechou a boca dos leões! Eles não machucaram Daniel! ✨👼", image: storyDaniel },
      { text: "Daniel saiu da cova sem nenhum arranhão! Todos viram o poder de Deus! 🎉🙌", image: storyDaniel },
    ],
    quiz: [
      { question: "Quantas vezes Daniel orava por dia?", options: ["Uma vez", "Três vezes", "Cinco vezes"], correctIndex: 1 },
      { question: "Onde Daniel foi jogado?", options: ["No mar", "Na cova dos leões", "Na prisão"], correctIndex: 1 },
      { question: "Quem protegeu Daniel?", options: ["Os soldados", "Deus enviou um anjo", "Os leões eram mansos"], correctIndex: 1 },
    ],
  },
  {
    id: "jonah",
    title: "Jonas e a Baleia",
    image: storyJonah,
    color: "bg-kids-teal",
    slides: [
      { text: "Deus pediu a Jonas para ir à cidade de Nínive e pregar. Mas Jonas tinha medo e fugiu num barco! 🚢😰", image: storyJonah },
      { text: "Deus mandou uma tempestade enorme! Os marinheiros jogaram Jonas no mar para a tempestade parar! 🌊⛈️", image: storyJonah },
      { text: "Um peixe gigante engoliu Jonas! Ele ficou dentro da barriga do peixe por 3 dias e 3 noites! 🐋", image: storyJonah },
      { text: "Dentro do peixe, Jonas orou a Deus e pediu perdão. Então o peixe cuspiu Jonas na praia! 🏖️", image: storyJonah },
      { text: "Jonas foi a Nínive e pregou a palavra de Deus! O povo se arrependeu e Deus os perdoou! ❤️🙏", image: storyJonah },
    ],
    quiz: [
      { question: "Para onde Deus mandou Jonas ir?", options: ["Jerusalém", "Nínive", "Egito"], correctIndex: 1 },
      { question: "O que engoliu Jonas?", options: ["Um tubarão", "Um peixe gigante", "Uma baleia azul"], correctIndex: 1 },
      { question: "Quantos dias Jonas ficou no peixe?", options: ["1 dia", "3 dias", "7 dias"], correctIndex: 1 },
    ],
  },
  {
    id: "jesus-birth",
    title: "O Nascimento de Jesus",
    image: storyJesusBirth,
    color: "bg-kids-pink",
    slides: [
      { text: "Um anjo apareceu para Maria e disse: 'Você vai ter um bebê muito especial! Ele será o Filho de Deus!' 👼✨", image: storyJesusBirth },
      { text: "Maria e José viajaram até Belém, mas não havia lugar para eles em nenhuma hospedaria! 🐴", image: storyJesusBirth },
      { text: "Jesus nasceu numa manjedoura, num estábulo simples. Maria o envolveu em panos e o deitou com carinho! 👶⭐", image: storyJesusBirth },
      { text: "Uma estrela brilhante apareceu no céu! Pastores e reis magos vieram visitar o bebê Jesus! ⭐👑", image: storyJesusBirth },
      { text: "Jesus veio ao mundo para nos mostrar o amor de Deus! Ele é o maior presente que já existiu! 🎁❤️", image: storyJesusBirth },
    ],
    quiz: [
      { question: "Onde Jesus nasceu?", options: ["Em Jerusalém", "Em Belém", "No Egito"], correctIndex: 1 },
      { question: "Quem eram os pais terrenos de Jesus?", options: ["Adão e Eva", "Maria e José", "Abraão e Sara"], correctIndex: 1 },
      { question: "O que apareceu no céu quando Jesus nasceu?", options: ["Um arco-íris", "Uma estrela brilhante", "A lua cheia"], correctIndex: 1 },
    ],
  },
];

export const weeklyVerse = {
  reference: "Salmos 119:105",
  text: "A tua palavra é lâmpada para os meus pés e luz para o meu caminho.",
  explanation: "Esse versículo nos ensina que a Bíblia é como uma lanterna que nos ajuda a encontrar o caminho certo na vida! Quando lemos a Palavra de Deus, sabemos o que fazer! 🔦✨",
};

export const gamificationLevels = [
  { name: "Aprendiz da Bíblia", minPoints: 0, emoji: "📖" },
  { name: "Pequeno Discípulo", minPoints: 50, emoji: "🌱" },
  { name: "Explorador da Fé", minPoints: 150, emoji: "🧭" },
  { name: "Guerreiro de Deus", minPoints: 300, emoji: "⚔️" },
  { name: "Herói da Bíblia", minPoints: 500, emoji: "🏆" },
];

export const badges = [
  { id: "first-story", name: "Primeira História", emoji: "📚", description: "Leu sua primeira história" },
  { id: "quiz-master", name: "Mestre do Quiz", emoji: "🧠", description: "Acertou todas as perguntas de um quiz" },
  { id: "verse-memorizer", name: "Memorizador", emoji: "💡", description: "Memorizou o versículo da semana" },
  { id: "explorer", name: "Explorador", emoji: "🗺️", description: "Leu 3 histórias diferentes" },
  { id: "champion", name: "Campeão", emoji: "🏅", description: "Completou 5 quizzes" },
];
