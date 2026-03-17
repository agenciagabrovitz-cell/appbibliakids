export interface BibleVerse {
  number: number;
  text: string;
  kidsText?: string;
}

export interface BibleChapter {
  chapter: number;
  verses: BibleVerse[];
}

export interface BibleBook {
  id: string;
  name: string;
  abbreviation: string;
  chapters: number;
  emoji: string;
  kidsDescription: string;
  sampleChapters: BibleChapter[];
}

export interface BibleCategory {
  id: string;
  name: string;
  emoji: string;
  color: string;
  books: BibleBook[];
}

export interface BibleTestament {
  id: string;
  name: string;
  emoji: string;
  categories: BibleCategory[];
}

export const bibleTestaments: BibleTestament[] = [
  {
    id: "old",
    name: "Antigo Testamento",
    emoji: "📜",
    categories: [
      {
        id: "pentateuch",
        name: "Pentateuco",
        emoji: "📋",
        color: "bg-kids-green",
        books: [
          {
            id: "genesis", name: "Gênesis", abbreviation: "Gn", chapters: 50, emoji: "🌍",
            kidsDescription: "Conta como Deus criou o mundo, os animais e as pessoas! Fala de Adão e Eva, Noé, Abraão e José.",
            sampleChapters: [
              { chapter: 1, verses: [
                { number: 1, text: "No princípio, Deus criou os céus e a terra.", kidsText: "Lá no começo de tudo, Deus criou o céu e a terra! ✨" },
                { number: 2, text: "A terra era sem forma e vazia; havia trevas sobre a face do abismo.", kidsText: "A terra era toda escura e vazia, sem nada! 🌑" },
                { number: 3, text: "Disse Deus: 'Haja luz'. E houve luz.", kidsText: "Então Deus disse: 'Que tenha luz!' E a luz apareceu! 💡" },
                { number: 4, text: "Viu Deus que a luz era boa; e separou a luz das trevas.", kidsText: "Deus viu que a luz era muito bonita e separou ela do escuro! 🌅" },
                { number: 5, text: "Chamou Deus à luz 'dia', e às trevas chamou 'noite'. Houve tarde e manhã, o primeiro dia.", kidsText: "Deus chamou a luz de 'dia' e o escuro de 'noite'. Esse foi o primeiro dia! 🌞🌙" },
                { number: 6, text: "Disse Deus: 'Haja um firmamento no meio das águas.'", kidsText: "No segundo dia, Deus criou o céu lindo e azul! ☁️💙" },
                { number: 9, text: "Disse Deus: 'Ajuntem-se as águas e apareça a porção seca.' E assim se fez.", kidsText: "Deus juntou as águas e apareceu a terra seca! Surgiram os mares e os continentes! 🌊🏝️" },
                { number: 11, text: "E disse Deus: 'Produza a terra relva, ervas e árvores frutíferas.'", kidsText: "Deus fez nascer plantas, flores, árvores com frutas! Tudo ficou verdinho e bonito! 🌿🌸🌳" },
                { number: 14, text: "Disse Deus: 'Haja luminares no firmamento dos céus.'", kidsText: "Deus criou o sol para brilhar de dia e a lua e as estrelas para a noite! ☀️🌙⭐" },
                { number: 20, text: "Disse Deus: 'Produzam as águas criaturas viventes e voem aves sobre a terra.'", kidsText: "Deus criou os peixes no mar e os pássaros no céu! 🐟🦅" },
                { number: 24, text: "Disse Deus: 'Produza a terra seres viventes conforme a sua espécie.'", kidsText: "Deus criou todos os animais: leões, girafas, cachorrinhos, gatinhos! 🦁🐶🐱" },
                { number: 27, text: "Criou Deus o homem à sua imagem; à imagem de Deus o criou; homem e mulher os criou.", kidsText: "E o mais especial: Deus criou o homem e a mulher, parecidos com Ele! 👫✨" },
                { number: 31, text: "Viu Deus tudo quanto fizera, e eis que era muito bom.", kidsText: "Deus olhou para tudo que tinha feito e disse: 'Está MUITO BOM!' 😊🎉" },
              ]},
              { chapter: 2, verses: [
                { number: 1, text: "Assim foram concluídos os céus e a terra, e todo o seu exército.", kidsText: "Deus terminou de criar tudo que existe! 🎉" },
                { number: 2, text: "No sétimo dia, Deus já havia concluído a obra que realizara, e nesse dia descansou.", kidsText: "No sétimo dia, Deus descansou porque já tinha feito tudo! 😴" },
                { number: 3, text: "Abençoou Deus o sétimo dia e o santificou.", kidsText: "Deus abençoou esse dia especial de descanso! 🙏" },
                { number: 7, text: "Então formou o Senhor Deus ao homem do pó da terra e lhe soprou nas narinas o fôlego de vida.", kidsText: "Deus fez Adão do pó da terra e soprou vida nele! Que incrível! 💨✨" },
                { number: 8, text: "Plantou o Senhor Deus um jardim no Éden e ali colocou o homem que formara.", kidsText: "Deus plantou um jardim lindo chamado Éden e colocou Adão lá! 🌳🌺" },
                { number: 18, text: "Disse o Senhor Deus: 'Não é bom que o homem esteja só; far-lhe-ei uma auxiliadora.'", kidsText: "Deus disse: 'Adão não pode ficar sozinho!' E decidiu criar uma companheira! 👫" },
                { number: 22, text: "Da costela que havia tirado do homem, o Senhor Deus fez uma mulher e a trouxe ao homem.", kidsText: "Deus criou Eva para ser a companheira de Adão! Eles ficaram muito felizes juntos! 💑" },
              ]},
              { chapter: 3, verses: [
                { number: 1, text: "A serpente era o mais astuto de todos os animais do campo.", kidsText: "A serpente era muito esperta e enganadora! 🐍" },
                { number: 6, text: "A mulher viu que a árvore era boa para se comer, agradável aos olhos e desejável para dar entendimento; tomou-lhe do fruto e comeu.", kidsText: "Eva olhou para o fruto proibido e comeu! Depois deu para Adão também! 🍎😟" },
                { number: 8, text: "Ouviram a voz do Senhor Deus que passeava no jardim.", kidsText: "Adão e Eva ouviram Deus andando no jardim e sentiram vergonha! 😢" },
                { number: 15, text: "Porei inimizade entre ti e a mulher, entre a tua descendência e o seu descendente.", kidsText: "Mas Deus já tinha um plano! Um dia, alguém especial viria para salvar todos! (Jesus!) ✨🙏" },
                { number: 21, text: "Fez o Senhor Deus vestimenta de peles para Adão e sua mulher e os vestiu.", kidsText: "Mesmo depois do erro, Deus cuidou de Adão e Eva e fez roupas para eles! 🥰" },
              ]},
              { chapter: 6, verses: [
                { number: 8, text: "Noé, porém, achou graça diante do Senhor.", kidsText: "No meio de tanta maldade, Noé era bom e amava a Deus! 🙏" },
                { number: 14, text: "Faze uma arca de tábuas de cipreste.", kidsText: "Deus disse para Noé: 'Construa um barco enorme chamado arca!' 🚢" },
                { number: 19, text: "De tudo o que vive, de cada espécie, dois de cada farás entrar na arca.", kidsText: "Noé colocou dois de cada animal na arca: leões, girafas, elefantes! 🦁🦒🐘" },
                { number: 22, text: "Assim fez Noé; segundo tudo o que Deus lhe ordenara, assim o fez.", kidsText: "Noé obedeceu tudo que Deus mandou! Ele foi muito obediente! ✅" },
              ]},
              { chapter: 7, verses: [
                { number: 4, text: "Porque daqui a sete dias farei chover sobre a terra quarenta dias e quarenta noites.", kidsText: "Deus avisou: 'Vai chover muito forte por 40 dias e 40 noites!' 🌧️" },
                { number: 10, text: "Passados os sete dias, vieram sobre a terra as águas do dilúvio.", kidsText: "E começou a chover muito, muito forte! A água cobriu tudo! 🌊" },
                { number: 17, text: "Durou o dilúvio quarenta dias sobre a terra; cresceram as águas e levantaram a arca.", kidsText: "A água foi subindo e a arca flutuou! Noé e os animais estavam seguros! 🚢✨" },
              ]},
              { chapter: 8, verses: [
                { number: 1, text: "Lembrou-se Deus de Noé e de todos os animais que com ele estavam na arca.", kidsText: "Deus não esqueceu de Noé! Ele cuidou dele e de todos os animais! 🥰" },
                { number: 11, text: "A pomba voltou a ele à tardinha; trazia no bico uma folha de oliveira.", kidsText: "A pomba voltou com um ramo de oliveira! A terra estava secando! 🕊️🌿" },
                { number: 22, text: "Enquanto durar a terra, não deixará de haver sementeira e ceifa, frio e calor, verão e inverno, dia e noite.", kidsText: "Deus prometeu que sempre haveria verão e inverno, dia e noite! 🌈" },
              ]},
              { chapter: 9, verses: [
                { number: 13, text: "O meu arco tenho posto nas nuvens; o qual será por sinal da aliança entre mim e a terra.", kidsText: "Deus colocou um arco-íris no céu como promessa de que nunca mais haveria um dilúvio assim! 🌈🙏" },
              ]},
              { chapter: 12, verses: [
                { number: 1, text: "Ora, disse o Senhor a Abrão: Sai da tua terra, da tua parentela e da casa de teu pai.", kidsText: "Deus chamou Abraão para uma grande aventura: 'Saia da sua terra e vá para um lugar novo!' 🏕️" },
                { number: 2, text: "De ti farei uma grande nação, e te abençoarei, e te engrandecerei o nome.", kidsText: "Deus prometeu a Abraão: 'Vou te abençoar muito e fazer de você uma grande nação!' ⭐" },
                { number: 3, text: "Em ti serão benditas todas as famílias da terra.", kidsText: "Através de Abraão, todas as famílias do mundo seriam abençoadas! (Isso inclui a gente!) 🌍❤️" },
              ]},
              { chapter: 22, verses: [
                { number: 1, text: "Depois destas coisas, pôs Deus Abraão à prova.", kidsText: "Deus quis ver se Abraão confiava nele de verdade! 🙏" },
                { number: 12, text: "Não estendas a mão sobre o rapaz. Agora sei que temes a Deus.", kidsText: "Deus viu que Abraão confiava nele com todo o coração! 💕" },
                { number: 14, text: "Chamou Abraão aquele lugar 'O Senhor Proverá'.", kidsText: "Abraão chamou o lugar de 'Deus vai cuidar de tudo!' E Deus sempre cuida! ✨" },
              ]},
              { chapter: 37, verses: [
                { number: 3, text: "Israel amava mais a José do que a todos os seus filhos, e fez-lhe uma túnica de várias cores.", kidsText: "Jacó amava muito José e deu a ele uma roupa super colorida e bonita! 🌈👕" },
                { number: 5, text: "Teve José um sonho e o contou a seus irmãos.", kidsText: "José tinha sonhos especiais que vinham de Deus! 💭✨" },
                { number: 28, text: "Os midianitas venderam José no Egito.", kidsText: "Os irmãos de José fizeram uma coisa muito feia: venderam ele! 😢" },
              ]},
              { chapter: 45, verses: [
                { number: 4, text: "Disse José a seus irmãos: Eu sou José, vosso irmão, a quem vendestes para o Egito.", kidsText: "José revelou aos irmãos: 'Sou eu, José! Vocês me venderam, mas Deus cuidou de mim!' 😭❤️" },
                { number: 5, text: "Não vos entristeçais; porque para conservação da vida, Deus me enviou adiante de vós.", kidsText: "José disse: 'Não fiquem tristes! Deus usou tudo isso para salvar nossa família!' 🙏✨" },
                { number: 7, text: "Deus me enviou adiante de vós para vos conservar a vida.", kidsText: "Deus transformou algo ruim em algo muito bom! Ele sempre tem um plano! 💪" },
              ]},
            ],
          },
          {
            id: "exodus", name: "Êxodo", abbreviation: "Êx", chapters: 40, emoji: "🏃",
            kidsDescription: "A história de como Deus libertou seu povo do Egito através de Moisés! Inclui as 10 pragas e a travessia do Mar Vermelho.",
            sampleChapters: [
              { chapter: 1, verses: [
                { number: 7, text: "Os filhos de Israel foram fecundos, e multiplicaram-se muito.", kidsText: "O povo de Deus cresceu muito no Egito! Eram muitos, muitos! 👨‍👩‍👧‍👦" },
                { number: 11, text: "Puseram sobre eles chefes de trabalhos forçados.", kidsText: "Mas o Faraó malvado fez deles escravos e os tratava muito mal! 😢" },
              ]},
              { chapter: 2, verses: [
                { number: 3, text: "Não podendo escondê-lo por mais tempo, tomou um cesto de junco e o pôs entre os juncos à margem do rio.", kidsText: "A mamãe de Moisés colocou ele num cestinho no rio para salvá-lo! 🧺🏞️" },
                { number: 5, text: "A filha de Faraó desceu para se banhar no rio e viu o cesto entre os juncos.", kidsText: "A princesa do Egito encontrou o bebê Moisés e cuidou dele! 👸👶" },
                { number: 10, text: "Sendo o menino já grande, ela o trouxe à filha de Faraó, a qual o adotou.", kidsText: "Moisés cresceu no palácio como um príncipe! Mas Deus tinha planos especiais para ele! 🏰✨" },
              ]},
              { chapter: 3, verses: [
                { number: 2, text: "Apareceu-lhe o Anjo do Senhor numa chama de fogo, do meio de uma sarça.", kidsText: "Moisés viu algo incrível: uma planta que queimava mas não se destruía! 🔥🌿" },
                { number: 4, text: "Chamou Deus do meio da sarça: Moisés! Moisés! Ele respondeu: Eis-me aqui!", kidsText: "Deus chamou do meio do fogo: 'Moisés! Moisés!' E Moisés disse: 'Estou aqui!' 🙋" },
                { number: 10, text: "Vem, agora, e eu te enviarei a Faraó, para que tires o meu povo do Egito.", kidsText: "Deus disse: 'Eu escolhi você para libertar meu povo! Vai falar com o Faraó!' 💪" },
                { number: 14, text: "Disse Deus a Moisés: EU SOU O QUE SOU.", kidsText: "Deus disse seu nome especial: 'EU SOU!' Ele é o Deus de todos os tempos! ✨🙏" },
              ]},
              { chapter: 7, verses: [
                { number: 10, text: "Moisés e Arão foram ter com Faraó e fizeram como o Senhor lhes ordenara.", kidsText: "Moisés e Arão foram corajosos e foram falar com o Faraó! 💪" },
                { number: 20, text: "Todas as águas do rio se tornaram em sangue.", kidsText: "Primeira praga: A água virou vermelha como sangue! O Faraó não quis ouvir! 🔴" },
              ]},
              { chapter: 12, verses: [
                { number: 11, text: "É a Páscoa do Senhor.", kidsText: "Deus criou a festa da Páscoa para lembrar como Ele salvou seu povo! 🐑🎉" },
                { number: 31, text: "Levantai-vos, saí do meio do meu povo, tanto vós como os filhos de Israel; ide, servi ao Senhor.", kidsText: "Finalmente! O Faraó disse: 'Vão embora! Saiam!' O povo estava LIVRE! 🎉🏃" },
              ]},
              { chapter: 14, verses: [
                { number: 13, text: "Não temais; aquietai-vos e vede o livramento do Senhor.", kidsText: "Moisés disse: 'Não tenham medo! Deus vai nos salvar!' 🙏💪" },
                { number: 21, text: "Moisés estendeu a mão sobre o mar, e o Senhor fez o mar recuar.", kidsText: "Moisés levantou seu bastão e Deus abriu o mar em dois! Incrível! 🌊✨" },
                { number: 22, text: "Os israelitas passaram pelo mar em terra seca.", kidsText: "O povo de Deus passou pelo meio do mar andando em terra seca! 🚶‍♂️🌊" },
                { number: 29, text: "Os filhos de Israel andaram em seco pelo meio do mar.", kidsText: "Todo mundo passou em segurança! Deus é poderoso demais! 🎉🙌" },
              ]},
              { chapter: 20, verses: [
                { number: 1, text: "Então falou Deus todas estas palavras.", kidsText: "Deus deu 10 regras muito importantes chamadas Mandamentos! 📋" },
                { number: 2, text: "Eu sou o Senhor, teu Deus, que te tirei da terra do Egito.", kidsText: "Deus disse: 'Eu sou o seu Deus! Eu salvei vocês!' 🙏" },
                { number: 3, text: "Não terás outros deuses diante de mim.", kidsText: "1º Mandamento: Só Deus é Deus! Não adorar outros! ☝️" },
                { number: 7, text: "Não tomarás o nome do Senhor, teu Deus, em vão.", kidsText: "3º Mandamento: Respeitar o nome de Deus! 🤫" },
                { number: 12, text: "Honra teu pai e tua mãe.", kidsText: "5º Mandamento: Respeitar e obedecer papai e mamãe! 👨‍👩‍👧 ❤️" },
              ]},
            ],
          },
          {
            id: "leviticus", name: "Levítico", abbreviation: "Lv", chapters: 27, emoji: "⛪",
            kidsDescription: "Ensina as regras que Deus deu para o povo viver de um jeito que agrada a Ele! Fala sobre santidade e adoração.",
            sampleChapters: [
              { chapter: 19, verses: [
                { number: 2, text: "Santos sereis, porque eu, o Senhor, vosso Deus, sou santo.", kidsText: "Deus disse: 'Sejam bons e especiais, porque eu sou especial!' ✨" },
                { number: 18, text: "Amarás o teu próximo como a ti mesmo.", kidsText: "Ame as outras pessoas como você ama a si mesmo! Essa é uma regra muito importante! ❤️" },
                { number: 34, text: "Como o natural entre vós será para vós o estrangeiro.", kidsText: "Trate bem todos, mesmo os que são diferentes de você! 🤗" },
              ]},
            ],
          },
          {
            id: "numbers", name: "Números", abbreviation: "Nm", chapters: 36, emoji: "🔢",
            kidsDescription: "Conta a viagem do povo de Deus pelo deserto e como Deus cuidou deles durante 40 anos!",
            sampleChapters: [
              { chapter: 6, verses: [
                { number: 24, text: "O Senhor te abençoe e te guarde.", kidsText: "Que Deus te abençoe e cuide de você! 🙏" },
                { number: 25, text: "O Senhor faça resplandecer o rosto sobre ti.", kidsText: "Que Deus faça seu rosto brilhar de alegria! 😊✨" },
                { number: 26, text: "O Senhor sobre ti levante o rosto e te dê a paz.", kidsText: "Que Deus te dê paz no coração! 🕊️💕" },
              ]},
              { chapter: 13, verses: [
                { number: 27, text: "De fato, mana leite e mel na terra.", kidsText: "Os espiões voltaram dizendo: 'A terra é maravilhosa! Tem de tudo!' 🍯🥛" },
                { number: 30, text: "Calebe fez calar o povo e disse: Subamos e possuamos a terra.", kidsText: "Calebe foi corajoso e disse: 'Vamos lá! Deus está com a gente!' 💪" },
              ]},
            ],
          },
          {
            id: "deuteronomy", name: "Deuteronômio", abbreviation: "Dt", chapters: 34, emoji: "📖",
            kidsDescription: "Moisés repete as leis de Deus para o povo se lembrar antes de entrar na Terra Prometida!",
            sampleChapters: [
              { chapter: 6, verses: [
                { number: 4, text: "Ouve, Israel, o Senhor, nosso Deus, é o único Senhor.", kidsText: "Escute bem: o nosso Deus é o ÚNICO Deus! ☝️✨" },
                { number: 5, text: "Amarás o Senhor, teu Deus, de todo o teu coração, de toda a tua alma e de todas as tuas forças.", kidsText: "Ame a Deus com todo o seu coração, com tudo que você é! ❤️🙏" },
                { number: 6, text: "Estas palavras que hoje te ordeno estarão no teu coração.", kidsText: "Guarde as palavras de Deus bem dentro do seu coração! 💕📖" },
                { number: 7, text: "Tu as ensinarás a teus filhos.", kidsText: "Ensine as coisas de Deus para seus filhos e amigos! 👨‍👧‍👦" },
              ]},
              { chapter: 31, verses: [
                { number: 6, text: "Sede fortes e corajosos, não temais; porque o Senhor, teu Deus, é quem vai contigo.", kidsText: "Seja forte e corajoso! Deus vai com você para todo lugar! 💪🦸" },
                { number: 8, text: "O Senhor é quem vai adiante de ti; não temas, nem te espantes.", kidsText: "Deus vai na frente de você! Não tenha medo de nada! 🛡️" },
              ]},
            ],
          },
        ],
      },
      {
        id: "historical",
        name: "Livros Históricos",
        emoji: "🏰",
        color: "bg-kids-blue",
        books: [
          {
            id: "joshua", name: "Josué", abbreviation: "Js", chapters: 24, emoji: "⚔️",
            kidsDescription: "Josué liderou o povo de Deus para conquistar a Terra Prometida! As muralhas de Jericó caíram!",
            sampleChapters: [
              { chapter: 1, verses: [
                { number: 5, text: "Ninguém te poderá resistir todos os dias da tua vida.", kidsText: "Deus disse a Josué: 'Ninguém vai te vencer! Eu estou com você!' 💪" },
                { number: 9, text: "Sê forte e corajoso; não temas, nem te espantes, porque o Senhor, teu Deus, é contigo.", kidsText: "Seja forte e corajoso! Deus está com você em todos os lugares! 🦸✨" },
              ]},
              { chapter: 6, verses: [
                { number: 3, text: "Rodeareis a cidade, todos os homens de guerra, marchando ao redor da cidade uma vez.", kidsText: "Deus mandou o povo marchar ao redor de Jericó! Que plano diferente! 🚶‍♂️" },
                { number: 20, text: "O povo gritou, e as trombetas soaram; o muro caiu rente ao chão.", kidsText: "O povo gritou, as trombetas tocaram e os muros CAÍRAM! BOOM! 🎺💥" },
              ]},
            ],
          },
          {
            id: "judges", name: "Juízes", abbreviation: "Jz", chapters: 21, emoji: "⚖️",
            kidsDescription: "Deus escolheu heróis especiais chamados juízes para proteger seu povo! Como Gideão e Sansão!",
            sampleChapters: [
              { chapter: 6, verses: [
                { number: 12, text: "O Anjo do Senhor lhe apareceu e lhe disse: O Senhor é contigo, homem valente.", kidsText: "O anjo disse a Gideão: 'Deus está com você, guerreiro valente!' 💪👼" },
                { number: 16, text: "Eu estarei contigo, e ferirás os midianitas como se fossem um só homem.", kidsText: "Deus prometeu: 'Eu vou te ajudar a vencer!' 🏆" },
              ]},
              { chapter: 7, verses: [
                { number: 7, text: "Com estes trezentos homens vos livrarei.", kidsText: "Com apenas 300 homens, Deus deu a vitória a Gideão! 🎉" },
                { number: 20, text: "A espada do Senhor e de Gideão!", kidsText: "Eles gritaram: 'A espada do Senhor e de Gideão!' e venceram! ⚔️🙌" },
              ]},
            ],
          },
          {
            id: "ruth", name: "Rute", abbreviation: "Rt", chapters: 4, emoji: "💕",
            kidsDescription: "A linda história de Rute, que foi fiel e leal à sua sogra Noemi! Uma história de amor e lealdade!",
            sampleChapters: [
              { chapter: 1, verses: [
                { number: 16, text: "Não me instes para que te deixe. Onde quer que fores, irei eu; onde quer que pousares, ali pousarei eu.", kidsText: "Rute disse a Noemi: 'Eu vou com você para onde você for! Nunca vou te deixar!' 💕" },
                { number: 17, text: "O teu Deus é o meu Deus.", kidsText: "Rute disse: 'O seu Deus agora é o meu Deus também!' 🙏" },
              ]},
              { chapter: 4, verses: [
                { number: 13, text: "Assim, tomou Boaz a Rute, e ela passou a ser sua mulher.", kidsText: "Boaz casou com Rute e eles foram muito felizes! 💒❤️" },
                { number: 17, text: "E lhe chamaram Obede. Este é o pai de Jessé, pai de Davi.", kidsText: "Rute teve um filhinho chamado Obede, que foi o avô do rei Davi! 👶👑" },
              ]},
            ],
          },
          {
            id: "1samuel", name: "1 Samuel", abbreviation: "1Sm", chapters: 31, emoji: "👑",
            kidsDescription: "Samuel foi um profeta especial e Davi, um pastorzinho, se tornou rei! A história de Davi e Golias está aqui!",
            sampleChapters: [
              { chapter: 1, verses: [
                { number: 20, text: "Ana concebeu e deu à luz um filho; pôs-lhe o nome de Samuel.", kidsText: "Ana orou muito a Deus e Ele deu a ela um bebê chamado Samuel! 👶🙏" },
                { number: 28, text: "Pelo que eu o entreguei ao Senhor; todos os dias que viver, será do Senhor.", kidsText: "Ana dedicou Samuel a Deus desde pequenino! 💝" },
              ]},
              { chapter: 3, verses: [
                { number: 4, text: "O Senhor chamou a Samuel; e ele disse: Eis-me aqui.", kidsText: "De noite, Deus chamou Samuel pelo nome! 'Samuel! Samuel!' E ele disse: 'Estou aqui!' 🌙" },
                { number: 10, text: "Fala, Senhor, porque o teu servo ouve.", kidsText: "Samuel disse: 'Fala, Senhor, que eu estou ouvindo!' 👂✨" },
              ]},
              { chapter: 16, verses: [
                { number: 7, text: "O Senhor não vê como vê o homem; o homem vê o exterior, porém o Senhor vê o coração.", kidsText: "Deus não olha para a aparência! Ele olha para o coração! ❤️👀" },
                { number: 12, text: "Levanta-te e unge-o, porque este é ele.", kidsText: "Deus escolheu Davi, um simples pastorzinho, para ser o novo rei! 👑🐑" },
              ]},
              { chapter: 17, verses: [
                { number: 4, text: "Saiu do arraial dos filisteus um homem chamado Golias, da cidade de Gate.", kidsText: "Golias era um gigante enorme e muito assustador! 😱" },
                { number: 34, text: "Davi disse: Teu servo apascentava as ovelhas de seu pai; quando veio um leão ou um urso.", kidsText: "Davi contou: 'Eu já enfrentei leões e ursos para proteger minhas ovelhas!' 🦁🐻" },
                { number: 45, text: "Tu vens contra mim com espada; eu, porém, vou contra ti em nome do Senhor.", kidsText: "Davi disse: 'Você tem armas, mas eu tenho Deus do meu lado!' 💪🙏" },
                { number: 49, text: "Davi meteu a mão no alforje e tomou uma pedra, e com a funda atirou-a, e feriu o filisteu na testa.", kidsText: "Davi atirou uma pedrinha com a funda e acertou Golias na testa! BOOM! 💥" },
                { number: 50, text: "Assim, Davi prevaleceu contra o filisteu com uma funda e uma pedra.", kidsText: "Davi venceu o gigante com apenas uma pedrinha e muita fé em Deus! 🏆🙌" },
              ]},
            ],
          },
          {
            id: "2samuel", name: "2 Samuel", abbreviation: "2Sm", chapters: 24, emoji: "🏛️",
            kidsDescription: "Conta o reinado do rei Davi e como ele governou o povo de Deus!",
            sampleChapters: [
              { chapter: 7, verses: [
                { number: 16, text: "A tua casa e o teu reino serão firmados para sempre diante de ti.", kidsText: "Deus prometeu a Davi que seu reino duraria para sempre! Jesus nasceria de sua família! 👑✨" },
              ]},
              { chapter: 22, verses: [
                { number: 2, text: "O Senhor é a minha rocha, a minha cidadela e o meu libertador.", kidsText: "Davi cantou: 'Deus é minha rocha, meu castelo e quem me salva!' 🏰🎶" },
                { number: 47, text: "Vive o Senhor, e bendita seja a minha rocha!", kidsText: "Deus é vivo e incrível! Louvado seja! 🙌✨" },
              ]},
            ],
          },
          {
            id: "1kings", name: "1 Reis", abbreviation: "1Rs", chapters: 22, emoji: "👑",
            kidsDescription: "A história do rei Salomão, o homem mais sábio do mundo, e outros reis!",
            sampleChapters: [
              { chapter: 3, verses: [
                { number: 5, text: "Deus disse: Pede-me o que queres que eu te dê.", kidsText: "Deus disse a Salomão: 'Peça o que você quiser!' 🤩" },
                { number: 9, text: "Dá ao teu servo um coração compreensivo para julgar o teu povo.", kidsText: "Salomão pediu sabedoria! Ele queria ser inteligente para ajudar as pessoas! 🧠✨" },
                { number: 12, text: "Eis que te dou coração sábio e inteligente.", kidsText: "Deus ficou feliz e deu a Salomão muita sabedoria! O mais sábio de todos! 💡" },
              ]},
            ],
          },
          {
            id: "2kings", name: "2 Reis", abbreviation: "2Rs", chapters: 25, emoji: "🏰",
            kidsDescription: "Mais histórias dos reis de Israel e Judá, e do profeta Eliseu!",
            sampleChapters: [
              { chapter: 2, verses: [
                { number: 11, text: "Um carro de fogo separou os dois; e Elias subiu ao céu num redemoinho.", kidsText: "Elias subiu ao céu num carro de fogo! Que incrível! 🔥🐎" },
              ]},
              { chapter: 5, verses: [
                { number: 14, text: "Naamã desceu e mergulhou no Jordão sete vezes; e a sua carne se tornou limpa.", kidsText: "Naamã mergulhou 7 vezes no rio e ficou curado! Deus é maravilhoso! 🏊‍♂️✨" },
              ]},
            ],
          },
          {
            id: "1chronicles", name: "1 Crônicas", abbreviation: "1Cr", chapters: 29, emoji: "📜",
            kidsDescription: "Conta a história do povo de Deus desde o início até o rei Davi!",
            sampleChapters: [
              { chapter: 16, verses: [
                { number: 34, text: "Rendei graças ao Senhor, porque ele é bom, porque a sua misericórdia dura para sempre.", kidsText: "Agradeçam a Deus porque Ele é bom e seu amor dura para SEMPRE! ❤️🎶" },
              ]},
            ],
          },
          {
            id: "2chronicles", name: "2 Crônicas", abbreviation: "2Cr", chapters: 36, emoji: "📜",
            kidsDescription: "Continua a história dos reis, desde Salomão até o exílio!",
            sampleChapters: [
              { chapter: 7, verses: [
                { number: 14, text: "Se o meu povo, que se chama pelo meu nome, se humilhar, e orar, buscar a minha face e se converter dos seus maus caminhos, então eu ouvirei dos céus, perdoarei os seus pecados e sararei a sua terra.", kidsText: "Deus prometeu: 'Se meu povo orar e pedir perdão, eu vou ouvir e ajudar!' 🙏💕" },
              ]},
            ],
          },
          {
            id: "ezra", name: "Esdras", abbreviation: "Ed", chapters: 10, emoji: "🏗️",
            kidsDescription: "O povo de Deus volta para casa e reconstrói o templo! Uma história de recomeço!",
            sampleChapters: [
              { chapter: 3, verses: [
                { number: 11, text: "Deram louvores e renderam graças ao Senhor, porque é bom, porque a sua misericórdia para com Israel dura para sempre.", kidsText: "O povo cantou e louvou a Deus quando começaram a reconstruir o templo! 🎶🏗️" },
              ]},
            ],
          },
          {
            id: "nehemiah", name: "Neemias", abbreviation: "Ne", chapters: 13, emoji: "🧱",
            kidsDescription: "Neemias reconstrói os muros de Jerusalém com coragem e fé!",
            sampleChapters: [
              { chapter: 2, verses: [
                { number: 17, text: "Vinde, edifiquemos o muro de Jerusalém.", kidsText: "Neemias disse: 'Vamos reconstruir os muros da cidade! Juntos conseguimos!' 🧱💪" },
                { number: 20, text: "O Deus dos céus é quem nos dará bom êxito.", kidsText: "Neemias confiou: 'Deus vai nos ajudar a conseguir!' 🙏" },
              ]},
              { chapter: 8, verses: [
                { number: 10, text: "A alegria do Senhor é a vossa força.", kidsText: "A alegria que Deus nos dá é a nossa força! 😄💪✨" },
              ]},
            ],
          },
          {
            id: "esther", name: "Ester", abbreviation: "Et", chapters: 10, emoji: "👸",
            kidsDescription: "A corajosa rainha Ester salvou seu povo com muita bravura!",
            sampleChapters: [
              { chapter: 2, verses: [
                { number: 17, text: "O rei amou a Ester mais do que a todas as mulheres; ela achou graça e favor perante ele.", kidsText: "O rei escolheu Ester para ser rainha! Ela era linda e boa! 👸👑" },
              ]},
              { chapter: 4, verses: [
                { number: 14, text: "Quem sabe se não foi para um momento como este que chegaste a rainha?", kidsText: "Mordecai disse a Ester: 'Talvez Deus te fez rainha justamente para salvar nosso povo!' 🌟" },
                { number: 16, text: "Se perecer, pereci.", kidsText: "Ester foi muito corajosa e disse: 'Eu vou falar com o rei, mesmo que seja perigoso!' 💪👸" },
              ]},
              { chapter: 7, verses: [
                { number: 3, text: "Seja-me concedida a vida e o meu povo.", kidsText: "Ester pediu ao rei para salvar seu povo e ele ouviu! 🎉" },
              ]},
            ],
          },
        ],
      },
      {
        id: "poetic",
        name: "Livros Poéticos e de Sabedoria",
        emoji: "🎵",
        color: "bg-kids-pink",
        books: [
          {
            id: "job", name: "Jó", abbreviation: "Jó", chapters: 42, emoji: "🙏",
            kidsDescription: "Jó passou por dificuldades mas nunca deixou de confiar em Deus! Uma história sobre paciência e fé!",
            sampleChapters: [
              { chapter: 1, verses: [
                { number: 1, text: "Havia um homem na terra de Uz, cujo nome era Jó; homem íntegro e reto.", kidsText: "Jó era um homem muito bom que amava a Deus de todo coração! 🙏" },
                { number: 21, text: "O Senhor o deu e o Senhor o tomou; bendito seja o nome do Senhor.", kidsText: "Mesmo perdendo tudo, Jó disse: 'Deus deu e Deus tirou. Louvado seja Deus!' 🙌" },
              ]},
              { chapter: 42, verses: [
                { number: 10, text: "O Senhor restaurou a sorte de Jó e lhe deu o dobro.", kidsText: "No final, Deus devolveu tudo para Jó em DOBRO! Deus é fiel! 🎉✨" },
                { number: 12, text: "O Senhor abençoou o último estado de Jó mais do que o primeiro.", kidsText: "A vida de Jó ficou muito melhor do que antes! Deus sempre recompensa a fé! 🏆" },
              ]},
            ],
          },
          {
            id: "psalms", name: "Salmos", abbreviation: "Sl", chapters: 150, emoji: "🎶",
            kidsDescription: "São músicas e orações lindas escritas para louvar a Deus! O maior livro da Bíblia!",
            sampleChapters: [
              { chapter: 1, verses: [
                { number: 1, text: "Bem-aventurado o homem que não anda no conselho dos ímpios.", kidsText: "Feliz é a pessoa que não segue conselhos ruins! 😊" },
                { number: 2, text: "Antes, o seu prazer está na lei do Senhor, e na sua lei medita de dia e de noite.", kidsText: "A pessoa feliz gosta de ler e pensar na Palavra de Deus! 📖💕" },
                { number: 3, text: "Ele é como árvore plantada junto a corrente de águas, que dá o seu fruto na estação própria.", kidsText: "Quem segue Deus é como uma árvore forte que dá muitos frutos! 🌳🍎" },
              ]},
              { chapter: 23, verses: [
                { number: 1, text: "O Senhor é o meu pastor; nada me faltará.", kidsText: "Deus cuida de mim como um pastor cuida de suas ovelhinhas! Não falta nada! 🐑" },
                { number: 2, text: "Ele me faz repousar em pastos verdejantes. Leva-me para junto das águas de descanso.", kidsText: "Ele me leva para lugares lindos com grama verde e água fresquinha! 🌿💧" },
                { number: 3, text: "Refrigera-me a alma. Guia-me pelas veredas da justiça.", kidsText: "Deus renova minhas forças e me guia pelo caminho certo! ✨" },
                { number: 4, text: "Ainda que eu ande pelo vale da sombra da morte, não temerei mal algum.", kidsText: "Mesmo quando tenho medo, não preciso temer porque Deus está comigo! 💪🛡️" },
                { number: 5, text: "Preparas-me uma mesa na presença dos meus adversários.", kidsText: "Deus cuida de mim até quando as coisas estão difíceis! 🍽️" },
                { number: 6, text: "Bondade e misericórdia certamente me seguirão todos os dias da minha vida.", kidsText: "O amor de Deus vai me acompanhar todos os dias da minha vida! ❤️🏠" },
              ]},
              { chapter: 27, verses: [
                { number: 1, text: "O Senhor é a minha luz e a minha salvação; a quem temerei?", kidsText: "Deus é minha luz! Não preciso ter medo de ninguém! 💡🦸" },
              ]},
              { chapter: 91, verses: [
                { number: 1, text: "Aquele que habita no esconderijo do Altíssimo e descansa à sombra do Onipotente.", kidsText: "Quem fica pertinho de Deus está seguro e protegido! 🛡️" },
                { number: 2, text: "Direi do Senhor: Ele é o meu refúgio e o meu baluarte, Deus meu, em quem confio.", kidsText: "Deus é meu esconderijo seguro! Eu confio nele! 🏰" },
                { number: 4, text: "Ele te cobrirá com as suas penas, e debaixo das suas asas estarás seguro.", kidsText: "Deus nos protege como uma mamãe pássaro protege seus filhotes! 🐣💕" },
                { number: 11, text: "Porque aos seus anjos dará ordem a teu respeito, para te guardarem em todos os teus caminhos.", kidsText: "Deus manda seus anjos cuidarem de você por onde você for! 👼✨" },
              ]},
              { chapter: 100, verses: [
                { number: 1, text: "Celebrai com júbilo ao Senhor, todas as terras.", kidsText: "Vamos comemorar e louvar a Deus com alegria! 🎉" },
                { number: 2, text: "Servi ao Senhor com alegria; apresentai-vos a ele com cântico.", kidsText: "Sirva a Deus cantando e dançando de alegria! 💃🎵" },
                { number: 3, text: "Sabei que o Senhor é Deus; foi ele quem nos fez, e dele somos.", kidsText: "Deus é incrível! Ele nos criou e somos dele! 🤗" },
                { number: 4, text: "Entrai pelas suas portas com ação de graças, e nos seus átrios com hinos de louvor.", kidsText: "Entre na casa de Deus agradecendo e cantando! 🏛️🎶" },
                { number: 5, text: "Porque o Senhor é bom, a sua misericórdia dura para sempre.", kidsText: "Deus é bom e seu amor dura para SEMPRE! ❤️♾️" },
              ]},
              { chapter: 119, verses: [
                { number: 105, text: "Lâmpada para os meus pés é a tua palavra e luz para os meus caminhos.", kidsText: "A Bíblia é como uma lanterna que ilumina nosso caminho! 🔦📖" },
                { number: 11, text: "Escondi a tua palavra no meu coração para não pecar contra ti.", kidsText: "Guardei a Palavra de Deus no meu coração! 💕📖" },
              ]},
              { chapter: 121, verses: [
                { number: 1, text: "Elevo os olhos para os montes: de onde me virá o socorro?", kidsText: "Olho para o céu e pergunto: de onde vem minha ajuda? 🏔️👀" },
                { number: 2, text: "O meu socorro vem do Senhor, que fez o céu e a terra.", kidsText: "Minha ajuda vem de Deus, que criou tudo! 🙌✨" },
                { number: 3, text: "Não deixará vacilhar o teu pé; aquele que te guarda não dormirá.", kidsText: "Deus nunca dorme! Ele está sempre cuidando de você! 😴➡️👀" },
              ]},
              { chapter: 139, verses: [
                { number: 14, text: "Eu te louvo porque me fizeste de modo especial e admirável.", kidsText: "Deus, obrigado por me fazer tão especial e único! 🌟" },
                { number: 16, text: "Os teus olhos me viram a substância ainda informe.", kidsText: "Deus já me conhecia antes de eu nascer! 👶💕" },
              ]},
              { chapter: 150, verses: [
                { number: 1, text: "Louvai ao Senhor. Louvai a Deus no seu santuário.", kidsText: "Louvem a Deus! Louvem em todo lugar! 🎶" },
                { number: 6, text: "Todo ser que respira louve ao Senhor. Louvai ao Senhor!", kidsText: "Tudo que respira, louve a Deus! ALELUIA! 🙌🎉🎶" },
              ]},
            ],
          },
          {
            id: "proverbs", name: "Provérbios", abbreviation: "Pv", chapters: 31, emoji: "💡",
            kidsDescription: "Conselhos sábios para viver de um jeito inteligente e bom! Escritos pelo rei Salomão!",
            sampleChapters: [
              { chapter: 1, verses: [
                { number: 7, text: "O temor do Senhor é o princípio do conhecimento.", kidsText: "Respeitar a Deus é o começo de aprender tudo de bom! 🧠✨" },
                { number: 8, text: "Ouve, filho meu, a instrução de teu pai e não deixes o ensinamento de tua mãe.", kidsText: "Escute os conselhos do papai e da mamãe! Eles sabem muito! 👨‍👩‍👧" },
              ]},
              { chapter: 3, verses: [
                { number: 5, text: "Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento.", kidsText: "Confie em Deus com todo o coração! Não tente resolver tudo sozinho! 🙏❤️" },
                { number: 6, text: "Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas.", kidsText: "Lembre de Deus em tudo que fizer, e Ele vai guiar você! 🛤️✨" },
              ]},
              { chapter: 15, verses: [
                { number: 1, text: "A resposta branda desvia o furor, mas a palavra dura suscita a ira.", kidsText: "Falar com calma acalma as pessoas. Falar com raiva só piora! 😊vs😤" },
                { number: 13, text: "O coração alegre aformoseia o rosto.", kidsText: "Quando o coração está feliz, o rosto fica bonito! 😄✨" },
              ]},
              { chapter: 22, verses: [
                { number: 6, text: "Ensina a criança no caminho em que deve andar, e, ainda quando for velho, não se desviará dele.", kidsText: "Se aprender sobre Deus quando criança, nunca vai esquecer! 📖👦" },
              ]},
            ],
          },
          {
            id: "ecclesiastes", name: "Eclesiastes", abbreviation: "Ec", chapters: 12, emoji: "🤔",
            kidsDescription: "Ensina que as coisas mais importantes da vida vêm de Deus! Escrito pelo sábio Salomão.",
            sampleChapters: [
              { chapter: 3, verses: [
                { number: 1, text: "Para tudo há uma ocasião certa; há um tempo certo para cada propósito debaixo do céu.", kidsText: "Tudo tem o momento certo! Tempo de brincar, tempo de estudar, tempo de dormir! ⏰" },
                { number: 4, text: "Tempo de chorar e tempo de rir; tempo de prantear e tempo de saltar de alegria.", kidsText: "Às vezes a gente chora, às vezes a gente ri. E tudo bem! 😢😊" },
              ]},
              { chapter: 12, verses: [
                { number: 1, text: "Lembra-te do teu Criador nos dias da tua mocidade.", kidsText: "Lembre de Deus enquanto você é criança! Ele te ama! 👶🙏" },
                { number: 13, text: "Teme a Deus e guarda os seus mandamentos; porque isto é o dever de todo homem.", kidsText: "A coisa mais importante é amar a Deus e obedecer! ❤️📋" },
              ]},
            ],
          },
          {
            id: "songofsolomon", name: "Cântico dos Cânticos", abbreviation: "Ct", chapters: 8, emoji: "🌹",
            kidsDescription: "Um livro sobre o amor, mostrando como o amor é bonito e especial! Escrito por Salomão.",
            sampleChapters: [
              { chapter: 2, verses: [
                { number: 4, text: "Levou-me à sala do banquete, e o seu estandarte sobre mim era o amor.", kidsText: "O amor de Deus é como uma bandeira enorme sobre nós! ❤️🏳️" },
              ]},
              { chapter: 8, verses: [
                { number: 6, text: "Põe-me como selo sobre o teu coração; porque o amor é forte como a morte.", kidsText: "O amor verdadeiro é a coisa mais forte que existe! 💪❤️" },
                { number: 7, text: "As muitas águas não poderiam apagar o amor, nem os rios afogá-lo.", kidsText: "Nada, nada, nada pode destruir o amor verdadeiro! 🌊❤️" },
              ]},
            ],
          },
        ],
      },
      {
        id: "major-prophets",
        name: "Profetas Maiores",
        emoji: "📢",
        color: "bg-kids-orange",
        books: [
          {
            id: "isaiah", name: "Isaías", abbreviation: "Is", chapters: 66, emoji: "🌟",
            kidsDescription: "Isaías falou sobre a vinda de Jesus muito tempo antes dele nascer! Um livro cheio de promessas!",
            sampleChapters: [
              { chapter: 6, verses: [
                { number: 3, text: "Santo, santo, santo é o Senhor dos Exércitos; toda a terra está cheia da sua glória.", kidsText: "Os anjos cantam: 'Santo, santo, santo é o Senhor! A terra inteira mostra como Ele é incrível!' 👼✨" },
                { number: 8, text: "Eis-me aqui, envia-me a mim.", kidsText: "Isaías disse a Deus: 'Estou aqui! Pode me enviar!' 🙋" },
              ]},
              { chapter: 9, verses: [
                { number: 6, text: "Porque um menino nos nasceu, um filho se nos deu; o governo está sobre os seus ombros.", kidsText: "Isaías profetizou sobre Jesus: 'Um menino especial vai nascer! Ele será chamado Príncipe da Paz!' 👶👑" },
              ]},
              { chapter: 40, verses: [
                { number: 8, text: "Seca-se a erva, e cai a sua flor, mas a palavra de nosso Deus permanece eternamente.", kidsText: "As flores murcham, mas a Palavra de Deus dura para SEMPRE! 🌸➡️📖" },
                { number: 29, text: "Dá força ao cansado e multiplica as forças ao que não tem nenhum vigor.", kidsText: "Deus dá força para quem está cansado e sem energia! 💪✨" },
                { number: 31, text: "Os que esperam no Senhor renovam as suas forças, sobem com asas como águias.", kidsText: "Quem espera em Deus fica forte como águia voando no céu! 🦅" },
              ]},
              { chapter: 53, verses: [
                { number: 5, text: "Ele foi ferido pelas nossas transgressões e moído pelas nossas iniquidades.", kidsText: "Jesus sofreu por nós para nos salvar! Ele nos ama demais! 😢❤️" },
                { number: 6, text: "Todos nós andávamos desgarrados como ovelhas; o Senhor fez cair sobre ele a iniquidade de nós todos.", kidsText: "Nós éramos como ovelhinhas perdidas, mas Jesus veio nos encontrar! 🐑💕" },
              ]},
            ],
          },
          {
            id: "jeremiah", name: "Jeremias", abbreviation: "Jr", chapters: 52, emoji: "😢",
            kidsDescription: "Jeremias avisou o povo para voltar para Deus com todo o coração! Ficou conhecido como o 'profeta chorão'.",
            sampleChapters: [
              { chapter: 1, verses: [
                { number: 5, text: "Antes que eu te formasse no ventre materno, eu te conheci.", kidsText: "Deus disse a Jeremias: 'Antes de você nascer, eu já te conhecia!' 🤱✨" },
                { number: 7, text: "A todos a quem eu te enviar irás; e tudo quanto eu te mandar dirás.", kidsText: "Deus disse: 'Não tenha medo! Eu vou te dizer o que falar!' 📢" },
              ]},
              { chapter: 29, verses: [
                { number: 11, text: "Eu é que sei os planos que tenho para vocês, planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro.", kidsText: "Deus tem planos incríveis para você! Planos de coisas boas, de esperança e um futuro lindo! 🌈✨" },
                { number: 12, text: "Vocês me procurarão e me acharão quando me procurarem de todo o coração.", kidsText: "Quando você procurar Deus de verdade, com todo o coração, vai encontrar Ele! 🔍❤️" },
                { number: 13, text: "Vocês me buscarão e me encontrarão.", kidsText: "Deus promete: 'Você vai me encontrar!' 🤗" },
              ]},
            ],
          },
          {
            id: "lamentations", name: "Lamentações", abbreviation: "Lm", chapters: 5, emoji: "💔",
            kidsDescription: "Orações tristes, mas cheias de esperança no amor de Deus! Mesmo nos momentos difíceis, Deus está ali.",
            sampleChapters: [
              { chapter: 3, verses: [
                { number: 22, text: "As misericórdias do Senhor são a causa de não sermos consumidos; porque as suas misericórdias não têm fim.", kidsText: "O amor de Deus nunca acaba! Ele é fiel todo dia! ❤️🌅" },
                { number: 23, text: "Novas são cada manhã; grande é a tua fidelidade.", kidsText: "Todo dia de manhã, o amor de Deus é novinho! 🌞✨" },
                { number: 25, text: "Bom é o Senhor para os que esperam por ele, para a alma que o busca.", kidsText: "Deus é muito bom com quem espera nele e o procura! 🙏💕" },
              ]},
            ],
          },
          {
            id: "ezekiel", name: "Ezequiel", abbreviation: "Ez", chapters: 48, emoji: "👁️",
            kidsDescription: "Ezequiel teve visões incríveis e falou sobre o poder de Deus! Viu ossos secos voltarem à vida!",
            sampleChapters: [
              { chapter: 37, verses: [
                { number: 3, text: "Filho do homem, acaso poderão reviver estes ossos?", kidsText: "Deus mostrou a Ezequiel um vale cheio de ossos secos e perguntou: 'Esses ossos podem viver?' 🦴" },
                { number: 5, text: "Eis que farei entrar o espírito em vós, e vivereis.", kidsText: "Deus soprou e os ossos ganharam vida de novo! Que poder! 💨✨" },
                { number: 10, text: "O espírito entrou neles, e viveram, e se puseram em pé.", kidsText: "Os ossos viraram pessoas vivas! Deus pode fazer qualquer coisa! 🙌🎉" },
              ]},
            ],
          },
          {
            id: "daniel", name: "Daniel", abbreviation: "Dn", chapters: 12, emoji: "🦁",
            kidsDescription: "Daniel foi fiel a Deus mesmo na cova dos leões! Também interpretou sonhos incríveis!",
            sampleChapters: [
              { chapter: 1, verses: [
                { number: 8, text: "Daniel resolveu firmemente não contaminar-se com as finas iguarias do rei.", kidsText: "Daniel decidiu não comer a comida do rei e seguir as regras de Deus! 🥗" },
                { number: 17, text: "Deus deu a estes quatro jovens conhecimento e inteligência em toda cultura e sabedoria.", kidsText: "Deus deu a Daniel e seus amigos muita sabedoria e inteligência! 🧠✨" },
              ]},
              { chapter: 3, verses: [
                { number: 17, text: "O nosso Deus, a quem servimos, é capaz de livrar-nos.", kidsText: "Os amigos de Daniel disseram: 'Nosso Deus pode nos salvar do fogo!' 🔥🛡️" },
                { number: 25, text: "Estou vendo quatro homens soltos, que andam passeando dentro do fogo.", kidsText: "O rei viu 4 pessoas no fogo! A quarta era um anjo de Deus! 👼🔥" },
                { number: 27, text: "O fogo não tinha tido poder algum sobre os seus corpos.", kidsText: "Eles saíram do fogo sem nenhuma queimadura! Nem cheiro de fumaça! 🙌" },
              ]},
              { chapter: 6, verses: [
                { number: 10, text: "Daniel orava três vezes por dia, e dava graças diante do seu Deus.", kidsText: "Daniel orava a Deus três vezes por dia, mesmo quando era proibido! 🙏" },
                { number: 16, text: "O rei deu ordem, e Daniel foi trazido e lançado na cova dos leões.", kidsText: "O rei mandou jogar Daniel na cova cheia de leões! 😱🦁" },
                { number: 22, text: "O meu Deus enviou o seu anjo e fechou a boca dos leões.", kidsText: "Deus mandou um anjo que fechou a boca dos leões! Daniel ficou bem! ✨👼" },
                { number: 23, text: "Daniel foi tirado da cova, e nenhum ferimento foi achado nele.", kidsText: "Daniel saiu sem nenhum arranhão! Deus é incrível! 🎉🙌" },
              ]},
            ],
          },
        ],
      },
      {
        id: "minor-prophets",
        name: "Profetas Menores",
        emoji: "📣",
        color: "bg-kids-teal",
        books: [
          {
            id: "hosea", name: "Oseias", abbreviation: "Os", chapters: 14, emoji: "❤️",
            kidsDescription: "Mostra como o amor de Deus é grande e nunca desiste de nós!",
            sampleChapters: [
              { chapter: 6, verses: [
                { number: 6, text: "Pois misericórdia quero, e não sacrifício, e o conhecimento de Deus, mais do que holocaustos.", kidsText: "Deus quer que a gente seja bondoso! Isso é mais importante que qualquer presente! ❤️" },
              ]},
              { chapter: 14, verses: [
                { number: 4, text: "Eu curarei a sua infidelidade, eu os amarei de livre vontade.", kidsText: "Deus disse: 'Eu vou curar vocês e amar de graça!' 🥰" },
              ]},
            ],
          },
          {
            id: "joel", name: "Joel", abbreviation: "Jl", chapters: 3, emoji: "🌾",
            kidsDescription: "Joel fala sobre o dia especial de Deus e pede ao povo para se arrepender e voltar para Deus!",
            sampleChapters: [
              { chapter: 2, verses: [
                { number: 28, text: "Derramarei o meu Espírito sobre toda a carne.", kidsText: "Deus prometeu enviar seu Espírito Santo para todo mundo! ✨🕊️" },
                { number: 32, text: "Todo aquele que invocar o nome do Senhor será salvo.", kidsText: "Quem chamar pelo nome de Deus, vai ser salvo! 🙏💕" },
              ]},
            ],
          },
          {
            id: "amos", name: "Amós", abbreviation: "Am", chapters: 9, emoji: "⚖️",
            kidsDescription: "Amós ensina que Deus quer que sejamos justos e bons com todos, especialmente os mais pobres!",
            sampleChapters: [
              { chapter: 5, verses: [
                { number: 24, text: "Antes, corra o juízo como as águas; e a justiça, como ribeiro perene.", kidsText: "Deus quer que a justiça seja como um rio que nunca para de correr! 🏞️⚖️" },
              ]},
            ],
          },
          {
            id: "obadiah", name: "Obadias", abbreviation: "Ob", chapters: 1, emoji: "⛰️",
            kidsDescription: "O menor livro do Antigo Testamento! Fala sobre a justiça de Deus contra os orgulhosos.",
            sampleChapters: [
              { chapter: 1, verses: [
                { number: 15, text: "Como tu fizeste, assim se fará contigo.", kidsText: "Deus é justo! O que a gente faz de bom ou ruim volta para a gente! ⚖️" },
              ]},
            ],
          },
          {
            id: "jonah", name: "Jonas", abbreviation: "Jn", chapters: 4, emoji: "🐋",
            kidsDescription: "Jonas fugiu de Deus e foi engolido por um peixe enorme! Mas Deus nunca desistiu dele!",
            sampleChapters: [
              { chapter: 1, verses: [
                { number: 3, text: "Jonas se dispôs a fugir da presença do Senhor.", kidsText: "Jonas tentou fugir de Deus! Mas ninguém consegue se esconder de Deus! 🏃😰" },
                { number: 17, text: "Deparou o Senhor um grande peixe, para que tragasse a Jonas.", kidsText: "Deus mandou um peixe GIGANTE que engoliu Jonas! 🐋😮" },
              ]},
              { chapter: 2, verses: [
                { number: 1, text: "Da barriga do peixe, Jonas orou ao Senhor, seu Deus.", kidsText: "De dentro da barriga do peixe, Jonas orou pedindo ajuda a Deus! 🙏" },
                { number: 10, text: "Falou o Senhor ao peixe, e este vomitou Jonas em terra seca.", kidsText: "Deus falou com o peixe e ele cuspiu Jonas na praia! 🏖️" },
              ]},
              { chapter: 3, verses: [
                { number: 5, text: "Os ninivitas creram em Deus.", kidsText: "O povo de Nínive ouviu Jonas e acreditou em Deus! Se arrependeram! 🙏" },
                { number: 10, text: "Viu Deus o que fizeram, como se converteram dos seus maus caminhos; e Deus se arrependeu do mal que lhes dissera que faria e não o fez.", kidsText: "Deus viu que se arrependeram e os perdoou! Deus ama perdoar! ❤️" },
              ]},
              { chapter: 4, verses: [
                { number: 11, text: "E eu não hei de ter compaixão da grande cidade de Nínive?", kidsText: "Deus perguntou a Jonas: 'Eu não deveria cuidar dessas pessoas? Eu amo todas elas!' 🌍❤️" },
              ]},
            ],
          },
          {
            id: "micah", name: "Miqueias", abbreviation: "Mq", chapters: 7, emoji: "📍",
            kidsDescription: "Miqueias disse que Jesus nasceria em Belém, e aconteceu! Profecia incrível!",
            sampleChapters: [
              { chapter: 5, verses: [
                { number: 2, text: "E tu, Belém Efrata, de ti me sairá o que será Senhor em Israel.", kidsText: "Miqueias profetizou: 'De Belém vai nascer alguém muito especial!' (Jesus!) ⭐👶" },
              ]},
              { chapter: 6, verses: [
                { number: 8, text: "Que é que o Senhor pede de ti, senão que pratiques a justiça, e ames a bondade, e andes humildemente com o teu Deus?", kidsText: "O que Deus quer de você? Ser justo, ser bondoso e andar com Ele! 🤗🙏" },
              ]},
            ],
          },
          {
            id: "nahum", name: "Naum", abbreviation: "Na", chapters: 3, emoji: "⚡",
            kidsDescription: "Naum fala sobre o poder de Deus contra a maldade! Deus é forte e justo!",
            sampleChapters: [{ chapter: 1, verses: [
              { number: 7, text: "O Senhor é bom, uma fortaleza no dia da angústia, e conhece os que nele confiam.", kidsText: "Deus é bom! Ele é como um castelo forte nos dias difíceis! 🏰💪" },
            ]}],
          },
          {
            id: "habakkuk", name: "Habacuque", abbreviation: "Hc", chapters: 3, emoji: "❓",
            kidsDescription: "Habacuque fez perguntas a Deus e aprendeu a confiar nele mesmo sem entender tudo!",
            sampleChapters: [{ chapter: 3, verses: [
              { number: 17, text: "Ainda que a figueira não floresça, nem haja fruto na vide.", kidsText: "Mesmo quando as coisas estão difíceis... 🥀" },
              { number: 18, text: "Todavia, eu me alegro no Senhor, exulto no Deus da minha salvação.", kidsText: "Mesmo assim, eu vou ficar feliz porque Deus me salva! 😊🙏" },
              { number: 19, text: "O Senhor Deus é a minha fortaleza.", kidsText: "Deus é minha força! Ele me faz andar em lugares altos! 🦌⛰️" },
            ]}],
          },
          {
            id: "zephaniah", name: "Sofonias", abbreviation: "Sf", chapters: 3, emoji: "🎺",
            kidsDescription: "Sofonias fala sobre um dia especial em que Deus vai renovar tudo e alegrar-se sobre nós!",
            sampleChapters: [{ chapter: 3, verses: [
              { number: 17, text: "O Senhor, teu Deus, está no meio de ti, poderoso para salvar; ele se deleitará em ti com alegria; renovar-te-á no seu amor; regozijar-se-á por ti com júbilo.", kidsText: "Deus está com você! Ele é forte para salvar! Ele fica TÃO feliz por você que até canta de alegria! 🎶❤️😄" },
            ]}],
          },
          {
            id: "haggai", name: "Ageu", abbreviation: "Ag", chapters: 2, emoji: "🏗️",
            kidsDescription: "Ageu encorajou o povo a reconstruir o templo de Deus com dedicação!",
            sampleChapters: [{ chapter: 2, verses: [
              { number: 4, text: "Esforça-te e trabalha, porque eu sou convosco, diz o Senhor dos Exércitos.", kidsText: "Deus disse: 'Seja forte e trabalhe! Eu estou com você!' 💪🏗️" },
            ]}],
          },
          {
            id: "zechariah", name: "Zacarias", abbreviation: "Zc", chapters: 14, emoji: "👀",
            kidsDescription: "Zacarias teve visões incríveis sobre o futuro e a vinda de Jesus!",
            sampleChapters: [{ chapter: 9, verses: [
              { number: 9, text: "Eis que o teu rei virá a ti, justo e salvador, humilde, montado sobre um jumento.", kidsText: "Zacarias profetizou: 'Seu rei vai chegar montado num jumentinho!' (Jesus fez isso!) 🫏👑" },
            ]}],
          },
          {
            id: "malachi", name: "Malaquias", abbreviation: "Ml", chapters: 4, emoji: "📨",
            kidsDescription: "O último profeta do Antigo Testamento! Prepara o caminho para a vinda de Jesus!",
            sampleChapters: [{ chapter: 3, verses: [
              { number: 1, text: "Eis que eu envio o meu mensageiro, e ele preparará o caminho diante de mim.", kidsText: "Deus prometeu: 'Vou mandar alguém preparar o caminho!' (João Batista!) 📢" },
              { number: 10, text: "Trazei todos os dízimos à casa do tesouro e provai-me nisto, diz o Senhor.", kidsText: "Deus disse: 'Me testem nisso! Sejam generosos e vejam o que eu faço!' 🎁✨" },
            ]}],
          },
        ],
      },
    ],
  },
  {
    id: "new",
    name: "Novo Testamento",
    emoji: "✝️",
    categories: [
      {
        id: "gospels",
        name: "Evangelhos",
        emoji: "📖",
        color: "bg-kids-red",
        books: [
          {
            id: "matthew", name: "Mateus", abbreviation: "Mt", chapters: 28, emoji: "📝",
            kidsDescription: "Conta a vida de Jesus, seus ensinamentos e milagres incríveis! Escrito por Mateus, um cobrador de impostos.",
            sampleChapters: [
              { chapter: 1, verses: [
                { number: 21, text: "Ela dará à luz um filho e lhe porás o nome de Jesus, porque ele salvará o seu povo dos pecados deles.", kidsText: "O anjo disse: 'O bebê vai se chamar Jesus, porque ele vai salvar as pessoas!' 👶✨" },
                { number: 23, text: "A virgem ficará grávida e dará à luz um filho, e lhe chamarão Emanuel, que significa: Deus conosco.", kidsText: "Jesus também é chamado Emanuel, que quer dizer 'Deus está com a gente!' 🤗" },
              ]},
              { chapter: 5, verses: [
                { number: 3, text: "Bem-aventurados os humildes de espírito, porque deles é o Reino dos céus.", kidsText: "Felizes são as pessoas que dependem de Deus! O céu é delas! 😊✨" },
                { number: 9, text: "Bem-aventurados os pacificadores, porque serão chamados filhos de Deus.", kidsText: "Felizes são os que fazem paz! Eles são filhos de Deus! 🕊️👦👧" },
                { number: 14, text: "Vocês são a luz do mundo.", kidsText: "Jesus disse: 'Vocês são a luz do mundo! Brilhem!' 🔦💡" },
                { number: 16, text: "Assim brilhe a luz de vocês diante dos homens.", kidsText: "Deixe sua luz brilhar para que todos vejam as coisas boas que você faz! 🌟" },
                { number: 44, text: "Amai os vossos inimigos e orai pelos que vos perseguem.", kidsText: "Jesus ensinou: 'Amem até quem não gosta de vocês! Orem por eles!' 🙏❤️" },
              ]},
              { chapter: 6, verses: [
                { number: 9, text: "Pai nosso, que estás nos céus, santificado seja o teu nome.", kidsText: "Jesus ensinou a orar: 'Pai nosso que está no céu, seu nome é santo!' 🙏" },
                { number: 26, text: "Olhai para as aves do céu: não semeiam, não colhem, e vosso Pai celestial as alimenta.", kidsText: "Olhe os passarinhos! Eles não trabalham, mas Deus dá comida para eles. Deus cuida de você também! 🐦" },
                { number: 33, text: "Buscai primeiro o Reino de Deus e a sua justiça, e todas essas coisas vos serão acrescentadas.", kidsText: "Coloque Deus em primeiro lugar e Ele vai cuidar de tudo mais! 👑🙏" },
              ]},
              { chapter: 14, verses: [
                { number: 19, text: "Tomou os cinco pães e os dois peixes e, erguendo os olhos ao céu, os abençoou.", kidsText: "Jesus pegou 5 pãezinhos e 2 peixinhos e abençoou! 🍞🐟" },
                { number: 20, text: "Todos comeram e ficaram satisfeitos; e dos pedaços que sobraram recolheram doze cestos cheios.", kidsText: "Mais de 5 mil pessoas comeram e ainda sobrou! Jesus é incrível! 🤯🎉" },
                { number: 27, text: "Jesus lhes disse: Tende bom ânimo! Sou eu; não temais.", kidsText: "Jesus disse: 'Calma! Sou eu! Não tenham medo!' 🌊🙏" },
                { number: 29, text: "Pedro, descendo do barco, andou sobre as águas para ir a Jesus.", kidsText: "Pedro andou sobre a água! Mas quando olhou para as ondas, começou a afundar! 🚶‍♂️🌊" },
              ]},
              { chapter: 28, verses: [
                { number: 6, text: "Ele não está aqui; ressuscitou, como havia dito.", kidsText: "Jesus ressuscitou! Ele está VIVO! Aleluia! 🎉✨" },
                { number: 19, text: "Ide, portanto, fazei discípulos de todas as nações.", kidsText: "Jesus disse: 'Vão e contem sobre mim para o mundo todo!' 🌍📢" },
                { number: 20, text: "Eu estarei sempre com vocês, até o fim dos tempos.", kidsText: "Jesus prometeu: 'Eu vou estar com vocês PARA SEMPRE!' ❤️♾️" },
              ]},
            ],
          },
          {
            id: "mark", name: "Marcos", abbreviation: "Mc", chapters: 16, emoji: "🏃",
            kidsDescription: "O evangelho mais rápido! Mostra Jesus em ação fazendo muitos milagres!",
            sampleChapters: [
              { chapter: 4, verses: [
                { number: 39, text: "Jesus despertou, repreendeu o vento e disse ao mar: Acalma-te, emudece!", kidsText: "Jesus disse para a tempestade: 'QUIETA!' E tudo ficou calmo! 🌊➡️🌅" },
                { number: 41, text: "Quem é este que até o vento e o mar lhe obedecem?", kidsText: "Todos ficaram impressionados: 'Até o vento obedece Jesus!' 😮✨" },
              ]},
              { chapter: 10, verses: [
                { number: 14, text: "Deixai vir a mim os pequeninos, e não os impeçais, porque dos tais é o Reino de Deus.", kidsText: "Jesus disse: 'Deixem as crianças virem até mim! O Reino de Deus é delas!' 👧👦❤️" },
                { number: 16, text: "Então, tomando-as nos braços, as abençoou, impondo-lhes as mãos.", kidsText: "Jesus abraçou as crianças e abençoou cada uma delas! 🤗✨" },
              ]},
              { chapter: 16, verses: [
                { number: 6, text: "Ressuscitou, não está aqui.", kidsText: "Jesus ressuscitou! O túmulo está vazio! 🎉✨" },
              ]},
            ],
          },
          {
            id: "luke", name: "Lucas", abbreviation: "Lc", chapters: 24, emoji: "👨‍⚕️",
            kidsDescription: "Lucas era médico e contou a história de Jesus com muitos detalhes! Inclui muitas parábolas!",
            sampleChapters: [
              { chapter: 2, verses: [
                { number: 6, text: "Estando eles ali, completaram-se os dias para o nascimento do bebê.", kidsText: "Quando Maria e José chegaram em Belém, chegou a hora do bebê Jesus nascer! 👶" },
                { number: 7, text: "Ela deu à luz o seu filho primogênito, envolveu-o em panos e o deitou numa manjedoura.", kidsText: "Jesus nasceu! Maria envolveu ele em panos quentinhos e o deitou numa manjedoura! ⭐👶" },
                { number: 10, text: "O anjo lhes disse: Não tenham medo! Trago boas novas de grande alegria.", kidsText: "O anjo disse aos pastores: 'Não tenham medo! Tenho uma notícia maravilhosa!' 👼🎉" },
                { number: 11, text: "Na cidade de Davi nasceu-vos o Salvador, que é Cristo, o Senhor.", kidsText: "Nasceu o Salvador Jesus! O presente mais lindo de Deus para o mundo! 🎁✨" },
                { number: 14, text: "Glória a Deus nas maiores alturas, e paz na terra.", kidsText: "Os anjos cantaram: 'Glória a Deus no céu e paz na terra!' 👼🎶" },
              ]},
              { chapter: 10, verses: [
                { number: 30, text: "Jesus prosseguiu: Um homem descia de Jerusalém para Jericó.", kidsText: "Jesus contou uma história: um homem foi assaltado na estrada! 😢" },
                { number: 33, text: "Um samaritano, ao vê-lo, compadeceu-se dele.", kidsText: "Um homem bom chamado samaritano parou e ajudou! 🤗💊" },
                { number: 37, text: "Vai e faze tu o mesmo.", kidsText: "Jesus disse: 'Vá e faça o mesmo! Ajude quem precisa!' ❤️🙏" },
              ]},
              { chapter: 15, verses: [
                { number: 4, text: "Que homem dentre vós, tendo cem ovelhas, e perdendo uma delas, não deixa as noventa e nove e vai após a perdida?", kidsText: "Se você tiver 100 ovelhinhas e perder 1, não vai procurar até achar? 🐑🔍" },
                { number: 6, text: "Alegrai-vos comigo, porque já achei a minha ovelha perdida.", kidsText: "Quando achar, vai gritar de alegria: 'Achei minha ovelhinha!' Assim Deus faz com a gente! 🎉🐑" },
                { number: 20, text: "O pai o avistou de longe, encheu-se de compaixão, correu e abraçou-o.", kidsText: "O pai viu o filho voltando e correu para abraçar! Assim Deus nos recebe de volta! 🏃❤️" },
                { number: 24, text: "Meu filho estava morto e reviveu, estava perdido e foi achado.", kidsText: "O pai disse: 'Meu filho voltou! Vamos fazer uma festa!' Deus ama quando voltamos para Ele! 🎉" },
              ]},
            ],
          },
          {
            id: "john", name: "João", abbreviation: "Jo", chapters: 21, emoji: "❤️",
            kidsDescription: "João mostra como Jesus é o Filho de Deus e nos ama muito! O discípulo amado!",
            sampleChapters: [
              { chapter: 1, verses: [
                { number: 1, text: "No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus.", kidsText: "Desde o começo de tudo, Jesus já existia! Ele estava com Deus e Ele é Deus! ✨" },
                { number: 14, text: "O Verbo se fez carne e habitou entre nós.", kidsText: "Jesus veio morar com a gente na terra! Que presente incrível! 🌍❤️" },
              ]},
              { chapter: 3, verses: [
                { number: 16, text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo o que nele crê não pereça, mas tenha a vida eterna.", kidsText: "Deus amou o mundo TANTO, TANTO, que enviou seu Filho Jesus para nos salvar! Quem acreditar nele vai viver para sempre! ❤️🌍✨" },
                { number: 17, text: "Deus enviou o seu Filho ao mundo, não para condená-lo, mas para que fosse salvo por ele.", kidsText: "Jesus não veio para castigar, mas para SALVAR! 🙌" },
              ]},
              { chapter: 10, verses: [
                { number: 11, text: "Eu sou o bom pastor; o bom pastor dá a vida pelas ovelhas.", kidsText: "Jesus disse: 'Eu sou o Bom Pastor! Eu cuido de vocês com todo meu amor!' 🐑❤️" },
                { number: 14, text: "Eu sou o bom pastor; conheço as minhas ovelhas, e elas me conhecem.", kidsText: "Jesus conhece cada um de nós pelo nome! Ele nos conhece! 🤗" },
              ]},
              { chapter: 11, verses: [
                { number: 25, text: "Eu sou a ressurreição e a vida; quem crê em mim, ainda que morra, viverá.", kidsText: "Jesus disse: 'Eu sou a vida! Quem acredita em mim vai viver para sempre!' ✨🙏" },
                { number: 35, text: "Jesus chorou.", kidsText: "Jesus chorou! Ele sente o que a gente sente. Ele nos entende! 😢❤️" },
                { number: 43, text: "Lázaro, vem para fora!", kidsText: "Jesus gritou: 'Lázaro, saia de aí!' E Lázaro, que estava morto, voltou a viver! 🎉😮" },
              ]},
              { chapter: 14, verses: [
                { number: 1, text: "Não se turbe o vosso coração; credes em Deus, crede também em mim.", kidsText: "Jesus disse: 'Não fiquem preocupados! Confiem em Deus e em mim!' 🙏" },
                { number: 2, text: "Na casa de meu Pai há muitas moradas.", kidsText: "Jesus disse: 'Na casa de Deus tem lugar para todo mundo!' 🏠✨" },
                { number: 6, text: "Eu sou o caminho, e a verdade, e a vida; ninguém vem ao Pai senão por mim.", kidsText: "Jesus disse: 'Eu sou o caminho, a verdade e a vida!' 🛤️✨" },
                { number: 27, text: "Deixo-vos a paz, a minha paz vos dou.", kidsText: "Jesus disse: 'Eu dou minha paz para vocês! Não tenham medo!' 🕊️" },
              ]},
              { chapter: 15, verses: [
                { number: 5, text: "Eu sou a videira, vós, os ramos. Quem permanece em mim e eu nele, esse dá muito fruto.", kidsText: "Jesus disse: 'Eu sou a árvore e vocês são os galhos! Fiquem ligados em mim!' 🌿🍇" },
                { number: 12, text: "O meu mandamento é este: que vos ameis uns aos outros, assim como eu vos amei.", kidsText: "Jesus mandou: 'Amem uns aos outros como eu amei vocês!' ❤️🤗" },
              ]},
            ],
          },
        ],
      },
      {
        id: "historical-nt",
        name: "Histórico",
        emoji: "🔥",
        color: "bg-kids-orange",
        books: [
          {
            id: "acts", name: "Atos dos Apóstolos", abbreviation: "At", chapters: 28, emoji: "🔥",
            kidsDescription: "Conta como os amigos de Jesus espalharam a boa notícia pelo mundo todo com a ajuda do Espírito Santo!",
            sampleChapters: [
              { chapter: 1, verses: [
                { number: 8, text: "Recebereis poder, ao descer sobre vós o Espírito Santo, e sereis minhas testemunhas.", kidsText: "Jesus disse: 'Vocês vão receber poder do Espírito Santo e contar sobre mim para o mundo!' 💪🌍" },
              ]},
              { chapter: 2, verses: [
                { number: 1, text: "Chegando o dia de Pentecostes, estavam todos reunidos no mesmo lugar.", kidsText: "Os amigos de Jesus estavam todos juntos num lugar especial! 👥" },
                { number: 2, text: "De repente veio do céu um som, como de um vento forte.", kidsText: "De repente, veio um barulho enorme do céu, como um vento super forte! 💨" },
                { number: 3, text: "Viram línguas como de fogo que se distribuíram sobre cada um deles.", kidsText: "Apareceram chamas brilhantes sobre cada um deles! O Espírito Santo chegou! 🔥✨" },
                { number: 4, text: "Todos ficaram cheios do Espírito Santo e começaram a falar em outras línguas.", kidsText: "Eles começaram a falar em idiomas que nunca tinham aprendido! Deus é incrível! 🗣️🌍" },
                { number: 41, text: "Naquele dia foram acrescentadas quase três mil almas.", kidsText: "Quase 3 mil pessoas acreditaram em Jesus naquele dia! 🎉👥" },
              ]},
              { chapter: 9, verses: [
                { number: 3, text: "Subitamente uma luz do céu brilhou ao redor dele.", kidsText: "Uma luz super forte do céu brilhou ao redor de Saulo! 💡✨" },
                { number: 4, text: "Saulo! Saulo! Por que me persegues?", kidsText: "Jesus perguntou: 'Saulo, por que você está contra mim?' 🤔" },
                { number: 15, text: "Este é para mim um instrumento escolhido.", kidsText: "Deus escolheu Saulo (que virou Paulo) para espalhar o evangelho! 📢" },
              ]},
            ],
          },
        ],
      },
      {
        id: "pauline-epistles",
        name: "Epístolas de Paulo",
        emoji: "✉️",
        color: "bg-kids-blue",
        books: [
          {
            id: "romans", name: "Romanos", abbreviation: "Rm", chapters: 16, emoji: "📬",
            kidsDescription: "Uma carta do apóstolo Paulo ensinando sobre o amor e a graça de Deus! A salvação é um presente!",
            sampleChapters: [
              { chapter: 3, verses: [
                { number: 23, text: "Pois todos pecaram e carecem da glória de Deus.", kidsText: "Todo mundo já errou! Ninguém é perfeito! 🤷" },
                { number: 24, text: "Sendo justificados gratuitamente, por sua graça, mediante a redenção que há em Cristo Jesus.", kidsText: "Mas Jesus nos perdoa DE GRAÇA! É um presente! 🎁✨" },
              ]},
              { chapter: 5, verses: [
                { number: 8, text: "Deus prova o seu próprio amor para conosco pelo fato de ter Cristo morrido por nós, sendo nós ainda pecadores.", kidsText: "Deus mostrou seu amor: Jesus morreu por nós mesmo quando a gente ainda errava! ❤️✝️" },
              ]},
              { chapter: 8, verses: [
                { number: 28, text: "Sabemos que todas as coisas cooperam para o bem daqueles que amam a Deus.", kidsText: "Deus faz tudo dar certo para quem ama Ele! Tudo tem um propósito! 🙏✨" },
                { number: 31, text: "Se Deus é por nós, quem será contra nós?", kidsText: "Se Deus está do nosso lado, ninguém pode nos vencer! 💪🛡️" },
                { number: 38, text: "Nem a morte, nem a vida, nem os anjos, nem os principados poderão nos separar do amor de Deus.", kidsText: "NADA pode nos separar do amor de Deus! Nem a morte, nem nada! ❤️♾️" },
              ]},
              { chapter: 12, verses: [
                { number: 2, text: "Não vos conformeis com este mundo, mas transformai-vos pela renovação da vossa mente.", kidsText: "Não seja como todo mundo! Deixe Deus transformar seu jeito de pensar! 🧠✨" },
                { number: 12, text: "Alegrai-vos na esperança, sede pacientes na tribulação, perseverai na oração.", kidsText: "Fique feliz, tenha paciência nas dificuldades e ore sempre! 😊🙏" },
                { number: 21, text: "Não te deixes vencer do mal, mas vence o mal com o bem.", kidsText: "Vença as coisas ruins fazendo coisas BOAS! 💪❤️" },
              ]},
            ],
          },
          {
            id: "1corinthians", name: "1 Coríntios", abbreviation: "1Co", chapters: 16, emoji: "💌",
            kidsDescription: "Paulo ensina a igreja sobre amor, união e como viver para Jesus!",
            sampleChapters: [
              { chapter: 13, verses: [
                { number: 4, text: "O amor é paciente, o amor é bondoso.", kidsText: "O amor tem paciência e é bondoso com todo mundo! 💝" },
                { number: 5, text: "Não se ensoberbece, não se porta com indecência, não busca os seus interesses.", kidsText: "O amor não é egoísta e não fica se achando melhor que os outros! 🤗" },
                { number: 7, text: "Tudo sofre, tudo crê, tudo espera, tudo suporta.", kidsText: "O amor nunca desiste! Ele acredita, espera e aguenta tudo! 💪❤️" },
                { number: 13, text: "Agora permanecem a fé, a esperança e o amor. O maior deles é o amor.", kidsText: "As três coisas mais importantes: fé, esperança e amor. O AMOR é o maior! ❤️✨" },
              ]},
            ],
          },
          {
            id: "2corinthians", name: "2 Coríntios", abbreviation: "2Co", chapters: 13, emoji: "💌",
            kidsDescription: "Paulo continua ensinando sobre ser forte na fé mesmo nas dificuldades!",
            sampleChapters: [{ chapter: 12, verses: [
              { number: 9, text: "A minha graça te basta, porque o poder se aperfeiçoa na fraqueza.", kidsText: "Deus disse a Paulo: 'Meu amor é suficiente! Quando você é fraco, eu sou forte!' 💪" },
            ]}],
          },
          {
            id: "galatians", name: "Gálatas", abbreviation: "Gl", chapters: 6, emoji: "🕊️",
            kidsDescription: "Paulo ensina que somos livres por causa de Jesus! Os frutos do Espírito estão aqui!",
            sampleChapters: [{ chapter: 5, verses: [
              { number: 22, text: "O fruto do Espírito é: amor, alegria, paz, paciência, amabilidade, bondade, fidelidade, mansidão, domínio próprio.", kidsText: "O Espírito Santo produz em nós: amor, alegria, paz, paciência, bondade, fidelidade, gentileza e autocontrole! 🍇✨" },
            ]}],
          },
          {
            id: "ephesians", name: "Efésios", abbreviation: "Ef", chapters: 6, emoji: "🛡️",
            kidsDescription: "Paulo fala sobre a armadura de Deus que nos protege! Vista toda a armadura!",
            sampleChapters: [
              { chapter: 2, verses: [
                { number: 8, text: "Porque pela graça sois salvos, mediante a fé; e isto não vem de vós; é dom de Deus.", kidsText: "Somos salvos pela bondade de Deus! É um presente! Não precisamos 'merecer'! 🎁" },
              ]},
              { chapter: 6, verses: [
                { number: 10, text: "No demais, fortalecei-vos no Senhor e na força do seu poder.", kidsText: "Sejam fortes no poder de Deus! 💪⚡" },
                { number: 11, text: "Revesti-vos de toda a armadura de Deus.", kidsText: "Vistam toda a armadura de Deus! 🛡️⚔️" },
                { number: 14, text: "Estai firmes, cingindo-vos com a verdade.", kidsText: "Cinto da VERDADE: sempre fale a verdade! 📏" },
                { number: 15, text: "Calçai os pés com a preparação do evangelho da paz.", kidsText: "Sapatos da PAZ: leve a boa notícia de Jesus para todos! 👟🕊️" },
                { number: 16, text: "Embraçando sempre o escudo da fé.", kidsText: "Escudo da FÉ: confie em Deus para se proteger! 🛡️" },
                { number: 17, text: "Tomai o capacete da salvação e a espada do Espírito, que é a Palavra de Deus.", kidsText: "Capacete da SALVAÇÃO e espada da PALAVRA: leia a Bíblia! ⚔️📖" },
              ]},
            ],
          },
          {
            id: "philippians", name: "Filipenses", abbreviation: "Fp", chapters: 4, emoji: "😄",
            kidsDescription: "Paulo ensina a ter alegria mesmo quando as coisas são difíceis! A carta da alegria!",
            sampleChapters: [{ chapter: 4, verses: [
              { number: 4, text: "Alegrai-vos sempre no Senhor; outra vez digo: alegrai-vos.", kidsText: "Fiquem sempre alegres no Senhor! Alegria, alegria! 😄🎉" },
              { number: 6, text: "Não andeis ansiosos de coisa alguma.", kidsText: "Não fiquem preocupados com nada! Contem tudo para Deus! 🙏" },
              { number: 13, text: "Tudo posso naquele que me fortalece.", kidsText: "Eu posso fazer TUDO com a força que Jesus me dá! 💪✨" },
              { number: 19, text: "O meu Deus suprirá todas as necessidades de vocês.", kidsText: "Deus vai cuidar de TUDO que vocês precisam! 🤗" },
            ]}],
          },
          {
            id: "colossians", name: "Colossenses", abbreviation: "Cl", chapters: 4, emoji: "👑",
            kidsDescription: "Paulo mostra que Jesus é o mais importante de tudo! Ele criou tudo!",
            sampleChapters: [{ chapter: 3, verses: [
              { number: 20, text: "Filhos, obedecei em tudo a vossos pais; pois isto é agradável ao Senhor.", kidsText: "Filhos, obedeçam papai e mamãe em tudo! Isso alegra a Deus! 👨‍👩‍👧 😊" },
              { number: 23, text: "Tudo quanto fizerdes, fazei-o de todo o coração, como para o Senhor.", kidsText: "Faça tudo com todo o coração, como se estivesse fazendo para Jesus! ❤️" },
            ]}],
          },
          {
            id: "1thessalonians", name: "1 Tessalonicenses", abbreviation: "1Ts", chapters: 5, emoji: "🌤️",
            kidsDescription: "Paulo encoraja os cristãos a viver de um jeito que agrada a Deus!",
            sampleChapters: [{ chapter: 5, verses: [
              { number: 16, text: "Regozijai-vos sempre.", kidsText: "Estejam sempre alegres! 😄" },
              { number: 17, text: "Orai sem cessar.", kidsText: "Orem o tempo todo! 🙏" },
              { number: 18, text: "Em tudo dai graças.", kidsText: "Agradeçam a Deus por tudo! 🤗🙌" },
            ]}],
          },
          {
            id: "2thessalonians", name: "2 Tessalonicenses", abbreviation: "2Ts", chapters: 3, emoji: "⏳",
            kidsDescription: "Paulo fala sobre a volta de Jesus e encoraja a ter paciência e trabalhar!",
            sampleChapters: [{ chapter: 3, verses: [
              { number: 3, text: "Fiel é o Senhor, que vos confirmará e guardará do maligno.", kidsText: "Deus é fiel! Ele vai fortalecer e proteger vocês! 🛡️" },
            ]}],
          },
          {
            id: "1timothy", name: "1 Timóteo", abbreviation: "1Tm", chapters: 6, emoji: "👦",
            kidsDescription: "Paulo dá conselhos ao jovem Timóteo sobre como liderar com fé e coragem!",
            sampleChapters: [{ chapter: 4, verses: [
              { number: 12, text: "Ninguém despreze a tua mocidade; pelo contrário, torna-te padrão dos fiéis.", kidsText: "Não importa se você é jovem! Seja um exemplo para todo mundo! 👦⭐" },
            ]}],
          },
          {
            id: "2timothy", name: "2 Timóteo", abbreviation: "2Tm", chapters: 4, emoji: "💪",
            kidsDescription: "Paulo encoraja Timóteo a ser forte e corajoso na fé! Nunca desistir!",
            sampleChapters: [
              { chapter: 1, verses: [
                { number: 7, text: "Deus não nos deu espírito de covardia, mas de poder, de amor e de moderação.", kidsText: "Deus não nos deu medo! Ele nos deu PODER, AMOR e SABEDORIA! 💪❤️🧠" },
              ]},
              { chapter: 3, verses: [
                { number: 16, text: "Toda Escritura é inspirada por Deus e útil para o ensino.", kidsText: "Toda a Bíblia foi inspirada por Deus e serve para nos ensinar! 📖✨" },
              ]},
            ],
          },
          {
            id: "titus", name: "Tito", abbreviation: "Tt", chapters: 3, emoji: "🤝",
            kidsDescription: "Paulo ensina Tito sobre como viver de um jeito bom e correto!",
            sampleChapters: [{ chapter: 3, verses: [
              { number: 5, text: "Não por obras de justiça praticadas por nós, mas segundo sua misericórdia, ele nos salvou.", kidsText: "Deus nos salvou não porque somos perfeitos, mas porque Ele nos AMA! ❤️" },
            ]}],
          },
          {
            id: "philemon", name: "Filemom", abbreviation: "Fm", chapters: 1, emoji: "🕊️",
            kidsDescription: "Uma carta curta sobre perdão e tratar todos com amor! Paulo pede perdão para um amigo.",
            sampleChapters: [{ chapter: 1, verses: [
              { number: 15, text: "Talvez ele tenha sido separado de ti por algum tempo para que o tivesses de volta para sempre.", kidsText: "Às vezes Deus permite coisas difíceis para trazer algo ainda melhor depois! ✨" },
            ]}],
          },
        ],
      },
      {
        id: "general-epistles",
        name: "Epístolas Gerais e Hebreus",
        emoji: "📮",
        color: "bg-kids-green",
        books: [
          {
            id: "hebrews", name: "Hebreus", abbreviation: "Hb", chapters: 13, emoji: "🏆",
            kidsDescription: "Mostra que Jesus é maior que tudo e todos! O capítulo dos heróis da fé!",
            sampleChapters: [
              { chapter: 11, verses: [
                { number: 1, text: "A fé é a certeza daquilo que esperamos e a prova das coisas que não vemos.", kidsText: "Fé é acreditar nas promessas de Deus, mesmo sem ver! Como confiar de olhos fechados! 🙈✨" },
                { number: 6, text: "Sem fé é impossível agradar a Deus.", kidsText: "Para agradar a Deus, precisamos confiar nele! 🙏" },
              ]},
              { chapter: 12, verses: [
                { number: 1, text: "Corramos com perseverança a carreira que nos está proposta.", kidsText: "Vamos correr a corrida da vida sem desistir! Como um atleta! 🏃💨" },
                { number: 2, text: "Olhando firmemente para Jesus, autor e consumador da fé.", kidsText: "Olhe sempre para Jesus! Ele é nosso exemplo! 👀✨" },
              ]},
              { chapter: 13, verses: [
                { number: 8, text: "Jesus Cristo, ontem e hoje, é o mesmo e o será para sempre.", kidsText: "Jesus nunca muda! Ele é o mesmo ontem, hoje e para sempre! ♾️❤️" },
              ]},
            ],
          },
          {
            id: "james", name: "Tiago", abbreviation: "Tg", chapters: 5, emoji: "🔨",
            kidsDescription: "Tiago ensina que a fé precisa de ações boas! Não basta só falar, tem que fazer!",
            sampleChapters: [{ chapter: 1, verses: [
              { number: 17, text: "Toda boa dádiva e todo dom perfeito são lá do alto, descendo do Pai das luzes.", kidsText: "Tudo de bom vem de Deus! Ele é o Pai das luzes! 💡🎁" },
              { number: 19, text: "Todo homem seja pronto para ouvir, tardio para falar, tardio para se irar.", kidsText: "Escute bastante, fale pouco e não fique com raiva rápido! 👂🤐😊" },
            ]}],
          },
          {
            id: "1peter", name: "1 Pedro", abbreviation: "1Pe", chapters: 5, emoji: "🪨",
            kidsDescription: "Pedro encoraja os cristãos a serem fortes como uma rocha mesmo nas dificuldades!",
            sampleChapters: [{ chapter: 5, verses: [
              { number: 7, text: "Lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós.", kidsText: "Jogue todas as suas preocupações para Deus! Ele cuida de você! 🤗💕" },
            ]}],
          },
          {
            id: "2peter", name: "2 Pedro", abbreviation: "2Pe", chapters: 3, emoji: "🌅",
            kidsDescription: "Pedro fala sobre crescer na fé e conhecer mais a Deus cada dia!",
            sampleChapters: [{ chapter: 3, verses: [
              { number: 18, text: "Crescei na graça e no conhecimento de nosso Senhor e Salvador Jesus Cristo.", kidsText: "Cresça no amor de Deus e conheça Jesus cada vez mais! 🌱📖" },
            ]}],
          },
          {
            id: "1john", name: "1 João", abbreviation: "1Jo", chapters: 5, emoji: "❤️",
            kidsDescription: "João ensina que Deus é amor e nós devemos amar uns aos outros!",
            sampleChapters: [{ chapter: 4, verses: [
              { number: 7, text: "Amados, amemos uns aos outros, porque o amor procede de Deus.", kidsText: "Queridos, vamos amar uns aos outros! O amor vem de Deus! ❤️🤗" },
              { number: 8, text: "Deus é amor.", kidsText: "DEUS É AMOR! Simples assim! ❤️✨" },
              { number: 19, text: "Nós amamos porque ele nos amou primeiro.", kidsText: "A gente ama porque Deus nos amou primeiro! Ele começou! 💕" },
            ]}],
          },
          {
            id: "2john", name: "2 João", abbreviation: "2Jo", chapters: 1, emoji: "💝",
            kidsDescription: "Uma cartinha curta sobre andar no amor e na verdade de Deus!",
            sampleChapters: [{ chapter: 1, verses: [
              { number: 6, text: "E o amor é este: que andemos segundo os seus mandamentos.", kidsText: "Amor é obedecer os mandamentos de Deus! 📋❤️" },
            ]}],
          },
          {
            id: "3john", name: "3 João", abbreviation: "3Jo", chapters: 1, emoji: "🤗",
            kidsDescription: "Uma cartinha sobre receber bem os outros e fazer o bem sempre!",
            sampleChapters: [{ chapter: 1, verses: [
              { number: 11, text: "Amado, não imites o que é mau, mas o que é bom.", kidsText: "Não copie as coisas ruins! Copie as coisas BOAS! 👍✨" },
            ]}],
          },
          {
            id: "jude", name: "Judas", abbreviation: "Jd", chapters: 1, emoji: "🛡️",
            kidsDescription: "Judas encoraja a defender a fé e se manter firme em Deus!",
            sampleChapters: [{ chapter: 1, verses: [
              { number: 24, text: "Ora, àquele que é poderoso para vos guardar de tropeçar.", kidsText: "Deus é poderoso para nos proteger de cair! 🛡️💪" },
              { number: 25, text: "Ao único Deus, nosso Salvador, mediante Jesus Cristo, nosso Senhor, glória, majestade, império e soberania.", kidsText: "Toda glória ao nosso Deus, que nos salva através de Jesus! 👑✨🎉" },
            ]}],
          },
        ],
      },
      {
        id: "revelation",
        name: "Revelação / Profético",
        emoji: "🌈",
        color: "bg-kids-yellow",
        books: [
          {
            id: "revelation", name: "Apocalipse", abbreviation: "Ap", chapters: 22, emoji: "🌈",
            kidsDescription: "O último livro da Bíblia! Mostra que no final, Deus vence e tudo fica lindo! Jesus volta!",
            sampleChapters: [
              { chapter: 1, verses: [
                { number: 8, text: "Eu sou o Alfa e o Ômega, diz o Senhor Deus.", kidsText: "Jesus disse: 'Eu sou o começo e o fim de tudo!' 🅰️🔤" },
              ]},
              { chapter: 3, verses: [
                { number: 20, text: "Eis que estou à porta e bato; se alguém ouvir a minha voz e abrir a porta, entrarei.", kidsText: "Jesus diz: 'Estou batendo na porta do seu coração! Abre para mim?' 🚪❤️" },
              ]},
              { chapter: 21, verses: [
                { number: 1, text: "Vi um novo céu e uma nova terra.", kidsText: "João viu um céu novo e uma terra nova, tudo lindo e perfeito! 🌈✨" },
                { number: 3, text: "Eis o tabernáculo de Deus com os homens. Deus habitará com eles.", kidsText: "Deus vai morar COM a gente! Para sempre juntos! 🏠❤️" },
                { number: 4, text: "Ele enxugará dos olhos deles toda lágrima. Não haverá mais morte, nem tristeza, nem choro, nem dor.", kidsText: "Deus vai enxugar todas as lágrimas! Não vai ter mais tristeza, nem dor! Só alegria! 🥹❤️" },
              ]},
              { chapter: 22, verses: [
                { number: 13, text: "Eu sou o Alfa e o Ômega, o Primeiro e o Último, o Princípio e o Fim.", kidsText: "Jesus é o começo e o fim! Ele é TUDO! ✨👑" },
                { number: 20, text: "Aquele que dá testemunho destas coisas diz: Certamente, venho sem demora. Amém! Vem, Senhor Jesus!", kidsText: "Jesus prometeu: 'Eu vou voltar!' E nós dizemos: 'Vem logo, Jesus!' 🙌❤️🎉" },
                { number: 21, text: "A graça do Senhor Jesus seja com todos.", kidsText: "Que o amor de Jesus esteja com todo mundo! Amém! ❤️🙏✨" },
              ]},
            ],
          },
        ],
      },
    ],
  },
];

export function getAllBooks(): BibleBook[] {
  return bibleTestaments.flatMap(t => t.categories.flatMap(c => c.books));
}

export function getBookById(id: string): BibleBook | undefined {
  return getAllBooks().find(b => b.id === id);
}
