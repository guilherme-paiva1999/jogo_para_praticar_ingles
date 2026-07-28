// ============================================================
// GRAMMAR QUEST — BANCO DE QUESTÕES
// Para adicionar perguntas, copie o formato das existentes.
// Este arquivo é carregado pelo index.html.
// ============================================================

// Configuração do desbloqueio de níveis:
// desbloqueio: true  = aluno precisa de pctMinimo% em temasMinimos temas para liberar o próximo nível
// desbloqueio: false = todos os níveis ficam livres desde o início
const CONFIG = { desbloqueio: true, pctMinimo: 70, temasMinimos: 3 };

const NIVEIS = [
  { id: "A1", name: "A1 · Iniciante", desc: "Fundamentos: to be, presente, artigos" },
  { id: "A2", name: "A2 · Básico", desc: "Passado, comparativos, futuro" },
  { id: "B1", name: "B1 · Intermediário", desc: "Present perfect, condicionais, passiva" }
];

const TOPICS = [
  // ---------- A1 ----------
  { id: "tobe", level: "A1", name: "Verbo to be", sub: "am · is · are · was · were", color: "var(--tobe)", soft: "var(--tobe-soft)" },
  { id: "presimple", level: "A1", name: "Present simple", sub: "rotinas e fatos", color: "var(--presimple)", soft: "var(--presimple-soft)" },
  { id: "precont", level: "A1", name: "Present continuous", sub: "acontecendo agora", color: "var(--precont)", soft: "var(--precont-soft)" },
  { id: "artigos", level: "A1", name: "Artigos", sub: "a · an · the", color: "var(--pastsimple)", soft: "var(--pastsimple-soft)" },
  { id: "thereis", level: "A1", name: "There is / there are", sub: "existência", color: "var(--pastcont)", soft: "var(--pastcont-soft)" },
  { id: "can", level: "A1", name: "Can / can't", sub: "habilidade e permissão", color: "var(--tobe)", soft: "var(--tobe-soft)" },
  // ---------- A2 ----------
  { id: "pastsimple", level: "A2", name: "Past simple", sub: "ações concluídas", color: "var(--pastsimple)", soft: "var(--pastsimple-soft)" },
  { id: "pastcont", level: "A2", name: "Past continuous", sub: "em progresso no passado", color: "var(--pastcont)", soft: "var(--pastcont-soft)" },
  { id: "comparativos", level: "A2", name: "Comparativo e superlativo", sub: "bigger · the biggest", color: "var(--presimple)", soft: "var(--presimple-soft)" },
  { id: "futuro", level: "A2", name: "Futuro", sub: "going to · will", color: "var(--precont)", soft: "var(--precont-soft)" },
  { id: "quant", level: "A2", name: "Quantidades", sub: "some · any · much · many", color: "var(--tobe)", soft: "var(--tobe-soft)" },
  { id: "modaisA2", level: "A2", name: "Should / have to", sub: "conselho e obrigação", color: "var(--pastsimple)", soft: "var(--pastsimple-soft)" },
  // ---------- B1 ----------
  { id: "prperfect", level: "B1", name: "Present perfect", sub: "have/has + particípio", color: "var(--tobe)", soft: "var(--tobe-soft)" },
  { id: "cond1", level: "B1", name: "Condicionais 0 e 1", sub: "if + presente", color: "var(--precont)", soft: "var(--precont-soft)" },
  { id: "cond2", level: "B1", name: "Condicional 2", sub: "if + passado, would", color: "var(--pastcont)", soft: "var(--pastcont-soft)" },
  { id: "passiva", level: "B1", name: "Voz passiva", sub: "is/was + particípio", color: "var(--presimple)", soft: "var(--presimple-soft)" },
  { id: "modaisB1", level: "B1", name: "Might / must / could", sub: "dedução e possibilidade", color: "var(--pastsimple)", soft: "var(--pastsimple-soft)" },
  { id: "usedto", level: "B1", name: "Used to", sub: "hábitos do passado", color: "var(--pastcont)", soft: "var(--pastcont-soft)" }
];

// ============================================================
// MODO QUIZ (múltipla escolha)
// q: frase com ___ | opts: 4 alternativas | a: índice da correta (0-3) | ex: explicação
// ============================================================
const QUIZ = {
  tobe: [
    { q: "She ___ a doctor.", opts: ["is","are","am","be"], a: 0, ex: "'She' usa 'is': She is a doctor." },
    { q: "They ___ my friends.", opts: ["is","are","am","was"], a: 1, ex: "'They' (plural) usa 'are'." },
    { q: "I ___ very happy today.", opts: ["is","are","am","be"], a: 2, ex: "'I' sempre usa 'am'." },
    { q: "___ you a student?", opts: ["Is","Are","Am","Be"], a: 1, ex: "Pergunta com 'you' usa 'Are'." },
    { q: "We ___ at home yesterday.", opts: ["was","are","were","is"], a: 2, ex: "'We' no passado usa 'were'." },
    { q: "He ___ tired last night.", opts: ["were","is","are","was"], a: 3, ex: "'He' no passado usa 'was'." },
    { q: "The books ___ on the table.", opts: ["is","are","am","was"], a: 1, ex: "'The books' (plural) usa 'are'." },
    { q: "It ___ not cold today.", opts: ["are","am","is","were"], a: 2, ex: "'It' usa 'is': It is not (isn't) cold." },
    { q: "My parents ___ at the party last week.", opts: ["was","is","were","are"], a: 2, ex: "'My parents' (plural) no passado usa 'were'." },
    { q: "___ she your teacher?", opts: ["Are","Is","Am","Were"], a: 1, ex: "Pergunta com 'she' no presente usa 'Is'." }
  ],
  presimple: [
    { q: "She ___ to school every day.", opts: ["go","goes","going","went"], a: 1, ex: "3ª pessoa do singular (she/he/it) recebe -es: goes." },
    { q: "They ___ soccer on Sundays.", opts: ["plays","play","playing","played"], a: 1, ex: "'They' usa a forma base: play." },
    { q: "He ___ like coffee.", opts: ["don't","doesn't","isn't","not"], a: 1, ex: "Negativa com 'he' usa 'doesn't' + verbo base." },
    { q: "___ you speak English?", opts: ["Does","Are","Do","Is"], a: 2, ex: "Pergunta com 'you' usa 'Do'." },
    { q: "My mother ___ dinner at 7 PM.", opts: ["cook","cooks","cooking","is cook"], a: 1, ex: "'My mother' = she, então 'cooks'." },
    { q: "Water ___ at 100°C.", opts: ["boil","boils","boiling","is boil"], a: 1, ex: "Fatos científicos usam present simple: boils." },
    { q: "___ she work in a hospital?", opts: ["Do","Is","Are","Does"], a: 3, ex: "Pergunta com 'she' usa 'Does' + verbo base." },
    { q: "I ___ TV in the morning.", opts: ["don't watch","doesn't watch","not watch","am not watch"], a: 0, ex: "Negativa com 'I' usa 'don't' + verbo base." },
    { q: "The bank ___ at 9 AM.", opts: ["open","opens","opening","is open"], a: 1, ex: "'The bank' = it, então 'opens'." },
    { q: "We ___ our grandparents every weekend.", opts: ["visits","visiting","visit","are visit"], a: 2, ex: "'We' usa a forma base: visit." }
  ],
  precont: [
    { q: "She ___ a book right now.", opts: ["reads","is reading","read","reading"], a: 1, ex: "Ação acontecendo agora: is + verbo-ing." },
    { q: "They ___ soccer at the moment.", opts: ["is playing","plays","are playing","play"], a: 2, ex: "'They' usa 'are' + playing." },
    { q: "I ___ for the bus.", opts: ["am waiting","is waiting","waiting","waits"], a: 0, ex: "'I' usa 'am' + waiting." },
    { q: "___ you listening to me?", opts: ["Do","Is","Are","Does"], a: 2, ex: "Pergunta no present continuous: Are you + verbo-ing?" },
    { q: "He ___ TV now.", opts: ["isn't watching","don't watch","not watching","doesn't watching"], a: 0, ex: "Negativa: is not (isn't) + watching." },
    { q: "Look! It ___.", opts: ["rains","is raining","rained","raining"], a: 1, ex: "'Look!' indica ação em progresso: is raining." },
    { q: "We ___ dinner at the moment.", opts: ["cook","cooks","are cooking","is cooking"], a: 2, ex: "'We' usa 'are' + cooking." },
    { q: "The baby ___ right now.", opts: ["sleep","sleeps","is sleeping","are sleeping"], a: 2, ex: "'The baby' = it, então 'is sleeping'." },
    { q: "Listen! Someone ___ the piano.", opts: ["plays","is playing","play","played"], a: 1, ex: "'Listen!' indica ação agora: is playing." },
    { q: "Why ___ you crying?", opts: ["do","is","are","does"], a: 2, ex: "'You' usa 'are': Why are you crying?" }
  ],
  artigos: [
    { q: "She has ___ apple.", opts: ["a","an","the","two"], a: 1, ex: "Antes de som de vogal usa-se 'an': an apple." },
    { q: "I saw ___ dog in the street.", opts: ["an","a","the","some"], a: 1, ex: "Som de consoante usa 'a': a dog." },
    { q: "___ sun is very hot today.", opts: ["A","An","The","Some"], a: 2, ex: "Coisas únicas usam 'the': the sun." },
    { q: "He is ___ engineer.", opts: ["a","an","the","one"], a: 1, ex: "'Engineer' começa com som de vogal: an engineer." },
    { q: "I play ___ guitar.", opts: ["a","an","the","some"], a: 2, ex: "Instrumentos musicais usam 'the': play the guitar." },
    { q: "She goes to school by ___ bus.", opts: ["a","an","the","(sem artigo)"], a: 3, ex: "Transporte com 'by' não usa artigo: by bus." }
  ],
  thereis: [
    { q: "___ a book on the table.", opts: ["There is","There are","There","Is there"], a: 0, ex: "Singular: there is + um item." },
    { q: "___ many students in the class.", opts: ["There is","There are","Theres","There be"], a: 1, ex: "Plural: there are + vários itens." },
    { q: "___ there a bank near here?", opts: ["Are","Is","Do","Does"], a: 1, ex: "Pergunta no singular: Is there...?" },
    { q: "There ___ any cookies left.", opts: ["isn't","aren't","not","no"], a: 1, ex: "'Cookies' é plural: there aren't." },
    { q: "There ___ a lot of people at the party last night.", opts: ["was","were","is","be"], a: 1, ex: "'People' é plural + passado: there were." },
    { q: "There ___ some milk in the fridge.", opts: ["are","is","were","be"], a: 1, ex: "'Milk' é incontável (singular): there is." }
  ],
  can: [
    { q: "She ___ swim very well.", opts: ["can","cans","can to","could to"], a: 0, ex: "'Can' nunca muda: she can swim." },
    { q: "___ you help me, please?", opts: ["Can","Do can","Are","Does"], a: 0, ex: "Pergunta: Can + sujeito + verbo base." },
    { q: "He ___ speak French. (negativa)", opts: ["can't","don't can","doesn't can","no can"], a: 0, ex: "Negativa: can't (cannot) + verbo base." },
    { q: "I ___ play the piano when I was five.", opts: ["can","could","canned","cans"], a: 1, ex: "Passado de can: could." },
    { q: "Birds ___ fly.", opts: ["can","cans","could to","are can"], a: 0, ex: "'Can' é igual para todos os sujeitos." },
    { q: "We ___ see the movie yesterday, the cinema was closed.", opts: ["can't","couldn't","don't","aren't"], a: 1, ex: "Passado negativo: couldn't." }
  ],
  pastsimple: [
    { q: "She ___ to the park yesterday.", opts: ["go","goes","went","gone"], a: 2, ex: "'Go' é irregular: o passado é 'went'." },
    { q: "They ___ a movie last night.", opts: ["watch","watched","watching","watches"], a: 1, ex: "Verbo regular: watch + ed = watched." },
    { q: "He ___ his keys this morning.", opts: ["lose","losed","lost","loses"], a: 2, ex: "'Lose' é irregular: lost." },
    { q: "___ you visit your grandmother?", opts: ["Do","Does","Did","Was"], a: 2, ex: "Perguntas no passado usam 'Did' + verbo base." },
    { q: "I ___ breakfast at 8 AM.", opts: ["eat","ate","eaten","eats"], a: 1, ex: "'Eat' é irregular: ate." },
    { q: "We ___ go to the beach last summer.", opts: ["don't","doesn't","didn't","wasn't"], a: 2, ex: "Negativa no passado: didn't + verbo base." },
    { q: "She ___ a beautiful song.", opts: ["sing","sang","sung","sings"], a: 1, ex: "'Sing' é irregular: sang." },
    { q: "They ___ in London in 2010.", opts: ["live","lives","lived","living"], a: 2, ex: "Verbo regular: live + d = lived." },
    { q: "He ___ a new car last month.", opts: ["buy","buyed","bought","buys"], a: 2, ex: "'Buy' é irregular: bought." },
    { q: "What ___ you do yesterday?", opts: ["do","did","does","was"], a: 1, ex: "Perguntas no passado: What did you do?" }
  ],
  pastcont: [
    { q: "She ___ when I called her.", opts: ["studies","was studying","is studying","studied"], a: 1, ex: "Ação em progresso no passado: was + studying." },
    { q: "They ___ TV at 8 PM yesterday.", opts: ["was watching","watched","were watching","are watching"], a: 2, ex: "'They' usa 'were' + watching." },
    { q: "I ___ when the phone rang.", opts: ["was sleeping","slept","am sleeping","were sleeping"], a: 0, ex: "'I' no passado contínuo usa 'was' + sleeping." },
    { q: "___ you working at 10 PM?", opts: ["Did","Was","Are","Were"], a: 3, ex: "Pergunta com 'you': Were you + verbo-ing?" },
    { q: "He ___ attention in class.", opts: ["wasn't paying","didn't paying","isn't paying","weren't paying"], a: 0, ex: "Negativa com 'he': wasn't + paying." },
    { q: "While we ___, it started to rain.", opts: ["walk","are walking","were walking","walks"], a: 2, ex: "'While' + ação longa no passado: were walking." },
    { q: "What ___ you doing at midnight?", opts: ["was","did","were","are"], a: 2, ex: "'You' usa 'were': What were you doing?" },
    { q: "The children ___ in the garden all afternoon.", opts: ["was playing","were playing","played playing","are playing"], a: 1, ex: "'The children' (plural) usa 'were' + playing." },
    { q: "It ___ when we left the house.", opts: ["was snowing","snows","is snowing","were snowing"], a: 0, ex: "'It' usa 'was' + snowing." },
    { q: "While she ___, he was washing the dishes.", opts: ["cooks","was cooking","is cooking","cooked"], a: 1, ex: "Duas ações simultâneas no passado: was cooking / was washing." }
  ],
  comparativos: [
    { q: "My house is ___ than yours.", opts: ["bigger","more big","biggest","big"], a: 0, ex: "Adjetivos curtos: + er (big → bigger)." },
    { q: "This is the ___ movie of the year.", opts: ["better","best","more good","goodest"], a: 1, ex: "Superlativo irregular de good: the best." },
    { q: "English is ___ than Chinese.", opts: ["easier","more easy","easyer","easiest"], a: 0, ex: "Y vira i + er: easier." },
    { q: "This book is ___ interesting than that one.", opts: ["more","most","much","many"], a: 0, ex: "Adjetivos longos: more + adjetivo." },
    { q: "She is the ___ student in the class.", opts: ["most intelligent","more intelligent","intelligentest","intelligenter"], a: 0, ex: "Superlativo de adjetivo longo: the most + adjetivo." },
    { q: "Today is ___ than yesterday.", opts: ["worse","worst","more bad","badder"], a: 0, ex: "'Bad' é irregular: worse (comparativo)." }
  ],
  futuro: [
    { q: "Look at those clouds! It ___ rain.", opts: ["is going to","will","is go to","goes to"], a: 0, ex: "Evidência visível → going to." },
    { q: "I think she ___ win the game.", opts: ["will","is going to","wills","going"], a: 0, ex: "Previsão/opinião (I think) → will." },
    { q: "We ___ travel to Bahia next month. (plano)", opts: ["are going to","will","going to","go"], a: 0, ex: "Plano já decidido → going to." },
    { q: "Don't worry, I ___ help you.", opts: ["will","am going to","going","would"], a: 0, ex: "Decisão tomada na hora → will." },
    { q: "They ___ not come to the party.", opts: ["will","are","do","can"], a: 0, ex: "Negativa do futuro: will not (won't)." },
    { q: "___ you visit us next week?", opts: ["Will","Are","Do","Did"], a: 0, ex: "Pergunta no futuro: Will you...?" }
  ],
  quant: [
    { q: "I don't have ___ money.", opts: ["much","many","some","a"], a: 0, ex: "'Money' é incontável: much." },
    { q: "How ___ apples do you want?", opts: ["many","much","some","any"], a: 0, ex: "'Apples' é contável: how many." },
    { q: "There are ___ eggs in the fridge.", opts: ["some","any","much","a"], a: 0, ex: "Frase afirmativa: some." },
    { q: "Do you have ___ questions?", opts: ["any","some","much","a"], a: 0, ex: "Pergunta: any." },
    { q: "She doesn't have ___ friends here.", opts: ["many","much","some","a"], a: 0, ex: "'Friends' é contável + negativa: many." },
    { q: "I'd like ___ water, please.", opts: ["some","any","many","a"], a: 0, ex: "Pedidos e ofertas usam some." }
  ],
  modaisA2: [
    { q: "You look tired. You ___ sleep more.", opts: ["should","have","must to","don't"], a: 0, ex: "Conselho: should + verbo base." },
    { q: "Students ___ wear a uniform at this school.", opts: ["have to","should","can","may"], a: 0, ex: "Obrigação (regra externa): have to." },
    { q: "You ___ smoke here. It's forbidden.", opts: ["mustn't","don't have to","should","can"], a: 0, ex: "Proibição: mustn't." },
    { q: "It's Sunday, so I ___ wake up early.", opts: ["don't have to","mustn't","shouldn't","can't"], a: 0, ex: "Ausência de obrigação: don't have to." },
    { q: "She ___ study for the test tomorrow.", opts: ["has to","have to","should to","musts"], a: 0, ex: "3ª pessoa: has to." },
    { q: "___ I take an umbrella? (pedindo conselho)", opts: ["Should","Have","Must to","Do have"], a: 0, ex: "Pedindo conselho: Should I...?" }
  ],
  prperfect: [
    { q: "I have never ___ sushi.", opts: ["eaten","ate","eat","eating"], a: 0, ex: "Present perfect usa o particípio: eaten." },
    { q: "She ___ finished her homework.", opts: ["has","have","is","was"], a: 0, ex: "'She' usa 'has' + particípio." },
    { q: "___ you ever been to London?", opts: ["Have","Has","Did","Are"], a: 0, ex: "Pergunta com 'you': Have you ever...?" },
    { q: "They ___ lived here since 2015.", opts: ["have","has","are","were"], a: 0, ex: "'Since' + ponto no tempo pede present perfect." },
    { q: "He hasn't called me ___.", opts: ["yet","already","never","since"], a: 0, ex: "Negativa com 'ainda não': yet no final." },
    { q: "We have known each other ___ ten years.", opts: ["for","since","ago","from"], a: 0, ex: "'For' + período de tempo (ten years)." }
  ],
  cond1: [
    { q: "If it rains, I ___ at home.", opts: ["will stay","stay","stayed","would stay"], a: 0, ex: "1ª condicional: if + presente, will + verbo." },
    { q: "If you heat water, it ___.", opts: ["boils","will boils","boiled","boil"], a: 0, ex: "Condicional zero (fatos): presente + presente." },
    { q: "If she ___ hard, she will pass the exam.", opts: ["studies","will study","studied","study"], a: 0, ex: "Depois do 'if' usa-se presente: studies." },
    { q: "We will go to the beach if the weather ___ nice.", opts: ["is","will be","was","be"], a: 0, ex: "Na parte do 'if' não se usa will: if the weather is nice." },
    { q: "If I see him, I ___ him the message.", opts: ["will give","give","gave","would give"], a: 0, ex: "Resultado futuro: will give." },
    { q: "If you don't water plants, they ___.", opts: ["die","dies","died","will dies"], a: 0, ex: "Condicional zero: they die (fato geral)." }
  ],
  cond2: [
    { q: "If I ___ rich, I would travel the world.", opts: ["were","am","will be","would be"], a: 0, ex: "2ª condicional: if + passado (were), would." },
    { q: "If she had time, she ___ learn Italian.", opts: ["would","will","can","is"], a: 0, ex: "Resultado imaginário: would + verbo base." },
    { q: "What ___ you do if you won the lottery?", opts: ["would","will","do","did"], a: 0, ex: "Situação hipotética: What would you do...?" },
    { q: "If we ___ in Paris, we would visit the Louvre.", opts: ["lived","live","will live","would live"], a: 0, ex: "Depois do 'if' na 2ª condicional: passado (lived)." },
    { q: "He would be happier if he ___ less.", opts: ["worked","works","will work","would work"], a: 0, ex: "Parte do 'if': passado simples (worked)." },
    { q: "If I ___ you, I would apologize.", opts: ["were","will be","am","would be"], a: 0, ex: "Expressão clássica: If I were you..." }
  ],
  passiva: [
    { q: "This house ___ built in 1990.", opts: ["was","is","has","were"], a: 0, ex: "Passiva no passado: was + particípio (built)." },
    { q: "English ___ spoken in many countries.", opts: ["is","are","was","be"], a: 0, ex: "Passiva no presente: is + spoken." },
    { q: "The letters ___ delivered every morning.", opts: ["are","is","was","be"], a: 0, ex: "Sujeito plural: are + delivered." },
    { q: "The Mona Lisa ___ painted by Da Vinci.", opts: ["was","is","were","has"], a: 0, ex: "Ação concluída no passado: was painted." },
    { q: "My car ___ stolen last night!", opts: ["was","is","has","did"], a: 0, ex: "Passado + particípio: was stolen." },
    { q: "These products ___ made in Brazil.", opts: ["are","is","was","been"], a: 0, ex: "Plural no presente: are made." }
  ],
  modaisB1: [
    { q: "It ___ rain later. Take an umbrella.", opts: ["might","must","should to","can to"], a: 0, ex: "Possibilidade: might." },
    { q: "She ___ be at home. The lights are on.", opts: ["must","might not","can","would"], a: 0, ex: "Dedução forte (quase certeza): must." },
    { q: "He ___ be the thief! He was with me all night.", opts: ["can't","must","might","should"], a: 0, ex: "Dedução negativa (impossível): can't." },
    { q: "You ___ try this restaurant. The food is amazing.", opts: ["must","might","can't","would"], a: 0, ex: "Recomendação forte: you must try it." },
    { q: "I'm not sure, but I ___ go to the party.", opts: ["might","must","can't","have"], a: 0, ex: "Incerteza: might." },
    { q: "___ you pass me the salt, please?", opts: ["Could","Must","Might","Should"], a: 0, ex: "Pedido educado: Could you...?" }
  ],
  usedto: [
    { q: "I ___ play soccer when I was a kid.", opts: ["used to","use to","was used to","using to"], a: 0, ex: "Hábito do passado: used to + verbo base." },
    { q: "She ___ live in Rio, but now she lives here.", opts: ["used to","uses to","was use to","used"], a: 0, ex: "'Used to' não muda com o sujeito." },
    { q: "___ you ___ have long hair?", opts: ["Did / use to","Did / used to","Do / use to","Have / used to"], a: 0, ex: "Pergunta: Did + use to (sem -d)." },
    { q: "He didn't ___ like vegetables.", opts: ["use to","used to","uses to","using to"], a: 0, ex: "Negativa: didn't use to (sem -d)." },
    { q: "We ___ go to the beach every summer.", opts: ["used to","use to","are used to","using to"], a: 0, ex: "Afirmativa: used to (com -d)." },
    { q: "My grandmother ___ tell us stories.", opts: ["used to","uses to","use to","using"], a: 0, ex: "Hábito repetido no passado: used to tell." }
  ]
};

// ============================================================
// MODO MONTE A FRASE
// s: frase correta (palavras separadas por espaço) | ex: explicação
// ============================================================
const BUILD = {
  tobe: [
    { s: "She is a doctor", ex: "Sujeito + is/am/are + complemento." },
    { s: "They were at home yesterday", ex: "'They' no passado usa 'were'." },
    { s: "Are you a student ?", ex: "Na pergunta, o verbo to be vem antes do sujeito." },
    { s: "I am not tired today", ex: "Negativa: sujeito + am/is/are + not." },
    { s: "The books are on the table", ex: "Sujeito plural usa 'are'." },
    { s: "He was late for class", ex: "'He' no passado usa 'was'." }
  ],
  presimple: [
    { s: "She goes to school every day", ex: "3ª pessoa do singular: goes." },
    { s: "He does not like coffee", ex: "Negativa com he: does not (doesn't) + verbo base." },
    { s: "Do you speak English ?", ex: "Pergunta: Do/Does + sujeito + verbo base." },
    { s: "My father works in a bank", ex: "'My father' = he, então 'works'." },
    { s: "We play soccer on Sundays", ex: "'We' usa a forma base do verbo." },
    { s: "The bank opens at nine", ex: "Horários fixos usam present simple." }
  ],
  precont: [
    { s: "She is reading a book now", ex: "Presente contínuo: is + verbo-ing." },
    { s: "They are playing soccer now", ex: "'They' usa 'are' + playing." },
    { s: "Are you listening to me ?", ex: "Pergunta: Are + sujeito + verbo-ing?" },
    { s: "He is not watching TV now", ex: "Negativa: is not (isn't) + verbo-ing." },
    { s: "I am waiting for the bus", ex: "'I' usa 'am' + waiting." },
    { s: "The baby is sleeping right now", ex: "'The baby' = it: is sleeping." }
  ],
  artigos: [
    { s: "She has an old car", ex: "'An' antes de som de vogal: an old car." },
    { s: "The sun rises in the east", ex: "Coisas únicas usam 'the': the sun, the east." },
    { s: "He is a good teacher", ex: "'A' antes de som de consoante: a good teacher." },
    { s: "I bought an umbrella yesterday", ex: "'Umbrella' começa com som de vogal: an umbrella." }
  ],
  thereis: [
    { s: "There is a cat on the sofa", ex: "Singular: there is." },
    { s: "There are two banks in my town", ex: "Plural: there are." },
    { s: "Is there a hospital near here ?", ex: "Pergunta: Is there...?" },
    { s: "There were many people at the party", ex: "Plural no passado: there were." }
  ],
  can: [
    { s: "She can dance very well", ex: "Can + verbo base, para qualquer sujeito." },
    { s: "Can you open the window ?", ex: "Pergunta: Can + sujeito + verbo." },
    { s: "He can't drive a car", ex: "Negativa: can't + verbo base." },
    { s: "I could swim when I was young", ex: "Habilidade no passado: could." }
  ],
  pastsimple: [
    { s: "She went to the park yesterday", ex: "'Go' é irregular: went." },
    { s: "They watched a movie last night", ex: "Verbo regular: watched." },
    { s: "Did you visit your grandmother ?", ex: "Pergunta no passado: Did + sujeito + verbo base." },
    { s: "I did not eat breakfast today", ex: "Negativa: did not (didn't) + verbo base." },
    { s: "He bought a new car last month", ex: "'Buy' é irregular: bought." },
    { s: "We lived in London in 2010", ex: "Verbo regular: lived." }
  ],
  pastcont: [
    { s: "She was studying when I called", ex: "Ação em progresso no passado: was studying." },
    { s: "They were watching TV last night", ex: "'They' usa 'were' + watching." },
    { s: "Were you working at ten ?", ex: "Pergunta: Were + sujeito + verbo-ing?" },
    { s: "He was not paying attention in class", ex: "Negativa: was not (wasn't) + verbo-ing." },
    { s: "I was sleeping when the phone rang", ex: "Duas ações: uma longa (was sleeping), uma curta (rang)." },
    { s: "The children were playing in the garden", ex: "Sujeito plural: were playing." }
  ],
  comparativos: [
    { s: "My car is faster than yours", ex: "Comparativo curto: faster than." },
    { s: "She is the best student in the class", ex: "Superlativo irregular: the best." },
    { s: "This exercise is more difficult than that one", ex: "Adjetivo longo: more difficult than." },
    { s: "Winter is colder than summer", ex: "Adjetivo curto: colder than." }
  ],
  futuro: [
    { s: "I am going to study medicine", ex: "Plano: am/is/are going to + verbo." },
    { s: "She will call you tomorrow", ex: "Futuro com will: will + verbo base." },
    { s: "We are going to travel next month", ex: "'We' usa 'are going to'." },
    { s: "It will rain this weekend", ex: "Previsão: will rain." }
  ],
  quant: [
    { s: "There are some books on the shelf", ex: "Afirmativa: some." },
    { s: "I don't have any money", ex: "Negativa: any." },
    { s: "How many brothers do you have ?", ex: "Contável: how many." },
    { s: "She drinks too much coffee", ex: "Incontável: much." }
  ],
  modaisA2: [
    { s: "You should drink more water", ex: "Conselho: should + verbo base." },
    { s: "I have to work on Saturday", ex: "Obrigação: have to + verbo." },
    { s: "She shouldn't eat so much sugar", ex: "Conselho negativo: shouldn't." },
    { s: "We must arrive on time", ex: "Obrigação forte: must + verbo base." }
  ],
  prperfect: [
    { s: "I have never seen this movie", ex: "Have + never + particípio (seen)." },
    { s: "She has lived here for ten years", ex: "Has + particípio + for + período." },
    { s: "Have you ever been to Brazil ?", ex: "Pergunta: Have you ever + particípio?" },
    { s: "They have already finished the project", ex: "'Already' entre have e o particípio." }
  ],
  cond1: [
    { s: "You will pass if you study hard", ex: "Resultado (will) + condição (if + presente)." },
    { s: "Ice melts if you heat it", ex: "Condicional zero: presente + presente." },
    { s: "I will call you if I need help", ex: "Will + verbo, if + presente." },
    { s: "We will stay home if it rains", ex: "Na parte do 'if' não se usa will." }
  ],
  cond2: [
    { s: "I would travel more if I were rich", ex: "Would + verbo, if + passado (were)." },
    { s: "She would help you if she could", ex: "Situação hipotética: would... if... could." },
    { s: "What would you do in my place ?", ex: "Pergunta hipotética: What would you do?" },
    { s: "I would buy a car if I had money", ex: "If + passado (had), would + verbo base." }
  ],
  passiva: [
    { s: "This book was written by a famous author", ex: "Was + particípio + by + agente." },
    { s: "English is spoken all over the world", ex: "Presente: is + spoken." },
    { s: "The room is cleaned every day", ex: "Rotina na passiva: is cleaned." },
    { s: "The bridge was built in 1950", ex: "Passado: was built." }
  ],
  modaisB1: [
    { s: "It might rain this afternoon", ex: "Possibilidade: might + verbo base." },
    { s: "She must be very tired", ex: "Dedução: must be." },
    { s: "He can't be at work now", ex: "Dedução negativa: can't be." },
    { s: "Could you help me please ?", ex: "Pedido educado: Could you...?" }
  ],
  usedto: [
    { s: "I used to play the piano", ex: "Hábito do passado: used to + verbo base." },
    { s: "She used to live in London", ex: "'Used to' é igual para todos os sujeitos." },
    { s: "Did you use to have a dog ?", ex: "Pergunta: Did + use to (sem -d)." },
    { s: "We didn't use to eat fast food", ex: "Negativa: didn't use to (sem -d)." }
  ]
};

// ============================================================
// MODO DIGITE O VERBO
// q: frase com ___ | hint: dica | ans: respostas aceitas | ex: explicação
// ============================================================
const TYPE = {
  tobe: [
    { q: "She ___ a doctor.", hint: "to be · presente", ans: ["is"], ex: "'She' usa 'is'." },
    { q: "They ___ my friends.", hint: "to be · presente", ans: ["are"], ex: "'They' usa 'are'." },
    { q: "I ___ very happy today.", hint: "to be · presente", ans: ["am"], ex: "'I' sempre usa 'am'." },
    { q: "We ___ at home yesterday.", hint: "to be · passado", ans: ["were"], ex: "'We' no passado usa 'were'." },
    { q: "He ___ tired last night.", hint: "to be · passado", ans: ["was"], ex: "'He' no passado usa 'was'." },
    { q: "The books ___ on the table.", hint: "to be · presente", ans: ["are"], ex: "Sujeito plural usa 'are'." },
    { q: "It ___ cold today.", hint: "to be · presente", ans: ["is"], ex: "'It' usa 'is'." },
    { q: "My parents ___ at the party last week.", hint: "to be · passado", ans: ["were"], ex: "Sujeito plural no passado usa 'were'." }
  ],
  presimple: [
    { q: "She ___ to school every day.", hint: "verbo: go", ans: ["goes"], ex: "3ª pessoa singular: goes." },
    { q: "He ___ TV at night.", hint: "verbo: watch", ans: ["watches"], ex: "Verbos em -ch recebem -es: watches." },
    { q: "My mother ___ dinner at 7 PM.", hint: "verbo: cook", ans: ["cooks"], ex: "'My mother' = she: cooks." },
    { q: "They ___ soccer on Sundays.", hint: "verbo: play", ans: ["play"], ex: "'They' usa a forma base: play." },
    { q: "The bank ___ at 9 AM.", hint: "verbo: open", ans: ["opens"], ex: "'The bank' = it: opens." },
    { q: "She ___ a dog and two cats.", hint: "verbo: have", ans: ["has"], ex: "'Have' é irregular na 3ª pessoa: has." },
    { q: "He ___ his homework after school.", hint: "verbo: do", ans: ["does"], ex: "'Do' na 3ª pessoa: does." },
    { q: "I ___ English every morning.", hint: "verbo: study", ans: ["study"], ex: "'I' usa a forma base: study." }
  ],
  precont: [
    { q: "She ___ a book right now.", hint: "verbo: read (2 palavras)", ans: ["is reading"], ex: "is + reading." },
    { q: "They ___ soccer at the moment.", hint: "verbo: play (2 palavras)", ans: ["are playing"], ex: "are + playing." },
    { q: "I ___ for the bus.", hint: "verbo: wait (2 palavras)", ans: ["am waiting"], ex: "am + waiting." },
    { q: "The baby ___ right now.", hint: "verbo: sleep (2 palavras)", ans: ["is sleeping"], ex: "is + sleeping." },
    { q: "We ___ dinner now.", hint: "verbo: cook (2 palavras)", ans: ["are cooking"], ex: "are + cooking." },
    { q: "Look! It ___.", hint: "verbo: rain (2 palavras)", ans: ["is raining"], ex: "is + raining." },
    { q: "He ___ in the park now.", hint: "verbo: run (2 palavras)", ans: ["is running"], ex: "Dobra o n: running." },
    { q: "You ___ too much noise!", hint: "verbo: make (2 palavras)", ans: ["are making"], ex: "Tira o e: making." }
  ],
  artigos: [
    { q: "She wants ___ orange.", hint: "artigo", ans: ["an"], ex: "Som de vogal: an orange." },
    { q: "He has ___ new phone.", hint: "artigo", ans: ["a"], ex: "Som de consoante: a new phone." },
    { q: "___ moon is beautiful tonight.", hint: "artigo", ans: ["the"], ex: "Coisas únicas: the moon." },
    { q: "It is ___ interesting book.", hint: "artigo", ans: ["an"], ex: "Som de vogal: an interesting book." }
  ],
  thereis: [
    { q: "There ___ a park near my house.", hint: "to be · presente", ans: ["is"], ex: "Singular: there is." },
    { q: "There ___ many cars in the street.", hint: "to be · presente", ans: ["are"], ex: "Plural: there are." },
    { q: "There ___ a big storm last night.", hint: "to be · passado", ans: ["was"], ex: "Singular no passado: there was." },
    { q: "There ___ two dogs in the garden yesterday.", hint: "to be · passado", ans: ["were"], ex: "Plural no passado: there were." }
  ],
  can: [
    { q: "She ___ speak three languages. (afirmativa)", hint: "habilidade", ans: ["can"], ex: "Habilidade: can." },
    { q: "He ___ come to the party, he is sick. (negativa)", hint: "negativa", ans: ["can't","cannot"], ex: "Negativa: can't." },
    { q: "When I was young, I ___ run very fast.", hint: "passado", ans: ["could"], ex: "Passado de can: could." },
    { q: "___ you help me with this exercise? (pedido)", hint: "pergunta", ans: ["can","could"], ex: "Pedido: Can/Could you...?" }
  ],
  pastsimple: [
    { q: "She ___ to the park yesterday.", hint: "verbo: go", ans: ["went"], ex: "'Go' é irregular: went." },
    { q: "They ___ a movie last night.", hint: "verbo: watch", ans: ["watched"], ex: "Regular: watched." },
    { q: "He ___ a new car last month.", hint: "verbo: buy", ans: ["bought"], ex: "'Buy' é irregular: bought." },
    { q: "I ___ breakfast at 8 AM.", hint: "verbo: eat", ans: ["ate"], ex: "'Eat' é irregular: ate." },
    { q: "We ___ in London in 2010.", hint: "verbo: live", ans: ["lived"], ex: "Regular: lived." },
    { q: "She ___ a beautiful song.", hint: "verbo: sing", ans: ["sang"], ex: "'Sing' é irregular: sang." },
    { q: "He ___ his keys this morning.", hint: "verbo: lose", ans: ["lost"], ex: "'Lose' é irregular: lost." },
    { q: "They ___ all night for the test.", hint: "verbo: study", ans: ["studied"], ex: "Y vira i + ed: studied." }
  ],
  pastcont: [
    { q: "She ___ when I called.", hint: "verbo: study (2 palavras)", ans: ["was studying"], ex: "was + studying." },
    { q: "They ___ TV at 8 PM.", hint: "verbo: watch (2 palavras)", ans: ["were watching"], ex: "were + watching." },
    { q: "I ___ when the phone rang.", hint: "verbo: sleep (2 palavras)", ans: ["was sleeping"], ex: "was + sleeping." },
    { q: "We ___ when it started to rain.", hint: "verbo: walk (2 palavras)", ans: ["were walking"], ex: "were + walking." },
    { q: "He ___ home at midnight.", hint: "verbo: drive (2 palavras)", ans: ["was driving"], ex: "Tira o e: driving." },
    { q: "The children ___ in the garden.", hint: "verbo: play (2 palavras)", ans: ["were playing"], ex: "were + playing." },
    { q: "It ___ when we left the house.", hint: "verbo: snow (2 palavras)", ans: ["was snowing"], ex: "was + snowing." },
    { q: "You ___ during the class.", hint: "verbo: talk (2 palavras)", ans: ["were talking"], ex: "were + talking." }
  ],
  comparativos: [
    { q: "My brother is ___ than me.", hint: "adjetivo: tall", ans: ["taller"], ex: "Curto: taller." },
    { q: "This is the ___ day of my life.", hint: "adjetivo: happy · superlativo", ans: ["happiest"], ex: "Y vira i: happiest." },
    { q: "Math is ___ than history for me.", hint: "adjetivo: difficult (2 palavras)", ans: ["more difficult"], ex: "Longo: more difficult." },
    { q: "Her grades are ___ than mine.", hint: "adjetivo: good", ans: ["better"], ex: "Irregular: better." }
  ],
  futuro: [
    { q: "I promise I ___ help you.", hint: "decisão na hora", ans: ["will"], ex: "Promessa/decisão: will." },
    { q: "Look! The baby ___ fall!", hint: "going to (3 palavras)", ans: ["is going to"], ex: "Evidência: is going to." },
    { q: "They ___ visit Paris next year.", hint: "going to (3 palavras)", ans: ["are going to"], ex: "Plano: are going to." },
    { q: "I think it ___ be sunny tomorrow.", hint: "previsão", ans: ["will"], ex: "Previsão com I think: will." }
  ],
  quant: [
    { q: "How ___ water do you drink per day?", hint: "incontável", ans: ["much"], ex: "Incontável: much." },
    { q: "I have ___ good news for you!", hint: "afirmativa", ans: ["some"], ex: "Afirmativa: some." },
    { q: "Do you have ___ pets?", hint: "pergunta", ans: ["any"], ex: "Pergunta: any." },
    { q: "How ___ students are in your class?", hint: "contável", ans: ["many"], ex: "Contável: many." }
  ],
  modaisA2: [
    { q: "You ___ see a doctor.", hint: "conselho", ans: ["should"], ex: "Conselho: should." },
    { q: "I ___ to finish this today.", hint: "obrigação (com 'to')", ans: ["have"], ex: "Obrigação: have to." },
    { q: "You ___ park here, it's forbidden.", hint: "proibição", ans: ["mustn't","must not"], ex: "Proibição: mustn't." },
    { q: "He ___ have to wake up early on weekends.", hint: "não precisa (negativa)", ans: ["doesn't"], ex: "Sem obrigação: doesn't have to." }
  ],
  prperfect: [
    { q: "I have ___ my keys!", hint: "verbo: lose · particípio", ans: ["lost"], ex: "Particípio de lose: lost." },
    { q: "She has ___ three books this year.", hint: "verbo: read · particípio", ans: ["read"], ex: "Particípio de read: read." },
    { q: "We have ___ in this city since 2020.", hint: "verbo: live", ans: ["lived"], ex: "Regular: lived." },
    { q: "He has ___ to Japan twice.", hint: "verbo: be · particípio", ans: ["been"], ex: "Particípio de be: been." }
  ],
  cond1: [
    { q: "If it rains, we ___ stay home.", hint: "futuro", ans: ["will"], ex: "Resultado: will stay." },
    { q: "If you heat ice, it ___.", hint: "verbo: melt", ans: ["melts"], ex: "Condicional zero: melts." },
    { q: "If she ___ hard, she will pass.", hint: "verbo: study", ans: ["studies"], ex: "If + presente: studies." },
    { q: "I will help you if you ___ me.", hint: "verbo: ask", ans: ["ask"], ex: "If + presente: ask." }
  ],
  cond2: [
    { q: "If I ___ you, I would study more.", hint: "to be", ans: ["were","was"], ex: "Clássico: If I were you." },
    { q: "If he had time, he ___ travel more.", hint: "hipotético", ans: ["would"], ex: "Resultado imaginário: would." },
    { q: "She would come if you ___ her.", hint: "verbo: invite · passado", ans: ["invited"], ex: "If + passado: invited." },
    { q: "If we ___ in London, we would speak English every day.", hint: "verbo: live · passado", ans: ["lived"], ex: "If + passado: lived." }
  ],
  passiva: [
    { q: "This song was ___ by The Beatles.", hint: "verbo: write · particípio", ans: ["written"], ex: "Particípio de write: written." },
    { q: "Portuguese ___ spoken in Brazil.", hint: "to be · presente", ans: ["is"], ex: "Presente: is spoken." },
    { q: "The pyramids ___ built thousands of years ago.", hint: "to be · passado", ans: ["were"], ex: "Plural no passado: were built." },
    { q: "The cake was ___ by my grandmother.", hint: "verbo: make · particípio", ans: ["made"], ex: "Particípio de make: made." }
  ],
  modaisB1: [
    { q: "It ___ snow tomorrow, I'm not sure.", hint: "possibilidade", ans: ["might","may"], ex: "Possibilidade: might/may." },
    { q: "You worked all day, you ___ be tired.", hint: "dedução", ans: ["must"], ex: "Dedução forte: must." },
    { q: "That ___ be true! It's impossible.", hint: "dedução negativa", ans: ["can't","cannot"], ex: "Impossível: can't be." },
    { q: "___ you open the door for me, please?", hint: "pedido educado", ans: ["could","can"], ex: "Educado: Could you...?" }
  ],
  usedto: [
    { q: "I ___ to play video games every day.", hint: "costumava", ans: ["used"], ex: "Afirmativa: used to." },
    { q: "Did you ___ to live here?", hint: "pergunta (sem -d)", ans: ["use"], ex: "Pergunta: did you use to." },
    { q: "He didn't ___ to like coffee.", hint: "negativa (sem -d)", ans: ["use"], ex: "Negativa: didn't use to." },
    { q: "They ___ to visit us every Sunday.", hint: "costumavam", ans: ["used"], ex: "Afirmativa: used to." }
  ]
};
