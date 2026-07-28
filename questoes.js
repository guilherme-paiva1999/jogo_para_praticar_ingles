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
  { id: "B1", name: "B1 · Intermediário", desc: "Present perfect, condicionais, passiva" },
  { id: "B2", name: "B2 · Intermediário alto", desc: "Past perfect, reported speech, wish" },
  { id: "C1", name: "C1 · Avançado", desc: "Inversões, modais no passado, subjuntivo" },
  { id: "C2", name: "C2 · Proficiência", desc: "Condicionais mistas, participle clauses" }
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
  { id: "usedto", level: "B1", name: "Used to", sub: "hábitos do passado", color: "var(--pastcont)", soft: "var(--pastcont-soft)" },
  // ---------- B2 ----------
  { id: "pastperfect", level: "B2", name: "Past perfect", sub: "had + particípio", color: "var(--tobe)", soft: "var(--tobe-soft)" },
  { id: "cond3", level: "B2", name: "Condicional 3", sub: "if + had, would have", color: "var(--precont)", soft: "var(--precont-soft)" },
  { id: "reported", level: "B2", name: "Reported speech", sub: "discurso indireto", color: "var(--presimple)", soft: "var(--presimple-soft)" },
  { id: "relative", level: "B2", name: "Relative clauses", sub: "who · which · whose", color: "var(--pastcont)", soft: "var(--pastcont-soft)" },
  { id: "gerinf", level: "B2", name: "Gerúndio vs infinitivo", sub: "enjoy doing · want to do", color: "var(--pastsimple)", soft: "var(--pastsimple-soft)" },
  { id: "wish", level: "B2", name: "Wish / if only", sub: "desejos e arrependimentos", color: "var(--tobe)", soft: "var(--tobe-soft)" },
  // ---------- C1 ----------
  { id: "inversion", level: "C1", name: "Inversões", sub: "Never have I...", color: "var(--pastcont)", soft: "var(--pastcont-soft)" },
  { id: "cleft", level: "C1", name: "Cleft sentences", sub: "It was... that / What... is", color: "var(--precont)", soft: "var(--precont-soft)" },
  { id: "modalpast", level: "C1", name: "Modais no passado", sub: "must have · should have", color: "var(--pastsimple)", soft: "var(--pastsimple-soft)" },
  { id: "passadv", level: "C1", name: "Passiva avançada", sub: "is said to · had it done", color: "var(--tobe)", soft: "var(--tobe-soft)" },
  { id: "conectivos", level: "C1", name: "Conectivos", sub: "despite · although · however", color: "var(--presimple)", soft: "var(--presimple-soft)" },
  { id: "subjunctive", level: "C1", name: "Subjuntivo", sub: "suggest that he be...", color: "var(--precont)", soft: "var(--precont-soft)" },
  // ---------- C2 ----------
  { id: "mixedcond", level: "C2", name: "Condicionais mistas", sub: "passado + presente", color: "var(--tobe)", soft: "var(--tobe-soft)" },
  { id: "participle", level: "C2", name: "Participle clauses", sub: "Having finished...", color: "var(--precont)", soft: "var(--precont-soft)" },
  { id: "inversioncond", level: "C2", name: "Condicionais invertidas", sub: "Had I known...", color: "var(--pastcont)", soft: "var(--pastcont-soft)" },
  { id: "hadbetter", level: "C2", name: "Rather / had better", sub: "preferência e conselho", color: "var(--presimple)", soft: "var(--presimple-soft)" },
  { id: "futureperf", level: "C2", name: "Future perfect", sub: "will have done", color: "var(--pastsimple)", soft: "var(--pastsimple-soft)" },
  { id: "phrasal", level: "C2", name: "Phrasal verbs", sub: "put off · give up · run out", color: "var(--precont)", soft: "var(--precont-soft)" }
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
  ],
  pastperfect: [
    { q: "When I arrived, the movie ___ already started.", opts: ["had","has","was","did"], a: 0, ex: "Ação anterior a outra no passado: had + particípio." },
    { q: "She had never ___ sushi before that day.", opts: ["eaten","ate","eat","eating"], a: 0, ex: "Past perfect usa o particípio: eaten." },
    { q: "By the time we got there, they ___ everything.", opts: ["had eaten","have eaten","eat","are eating"], a: 0, ex: "'By the time' + past perfect: had eaten." },
    { q: "He was tired because he ___ all night.", opts: ["had worked","has worked","is working","work"], a: 0, ex: "Causa anterior: had worked." },
    { q: "I realized I ___ my wallet at home.", opts: ["had left","have left","leave","am leaving"], a: 0, ex: "Ação anterior a 'realized': had left." },
    { q: "After she ___ her homework, she went out.", opts: ["had finished","finishes","has finished","finish"], a: 0, ex: "'After' + ação anterior: had finished." }
  ],
  cond3: [
    { q: "If I had studied, I ___ passed the exam.", opts: ["would have","will have","would","had"], a: 0, ex: "3ª condicional: if + had..., would have + particípio." },
    { q: "If she ___ earlier, she wouldn't have missed the bus.", opts: ["had left","left","would leave","leaves"], a: 0, ex: "Parte do 'if': had + particípio." },
    { q: "We would have gone to the party if we ___ invited.", opts: ["had been","were","have been","are"], a: 0, ex: "Passiva na 3ª condicional: had been invited." },
    { q: "If you had told me, I ___ you.", opts: ["would have helped","would help","helped","will help"], a: 0, ex: "Resultado irreal no passado: would have helped." },
    { q: "He ___ the accident if he had driven slowly.", opts: ["would have avoided","would avoid","avoided","avoids"], a: 0, ex: "Would have + particípio: would have avoided." },
    { q: "___ you have come if I had called you?", opts: ["Would","Will","Did","Do"], a: 0, ex: "Pergunta na 3ª condicional: Would you have...?" }
  ],
  reported: [
    { q: "Direto: 'I am tired.' → She said she ___ tired.", opts: ["was","is","were","be"], a: 0, ex: "No discurso indireto, o tempo 'volta': am → was." },
    { q: "He said he ___ help me the next day.", opts: ["would","will","can","shall"], a: 0, ex: "Will vira would no indireto." },
    { q: "Direto: 'I live in London.' → She told me she ___ in London.", opts: ["lived","lives","is living","live"], a: 0, ex: "Present simple vira past simple: lived." },
    { q: "They said they ___ the movie the night before.", opts: ["had seen","have seen","see","are seeing"], a: 0, ex: "Past simple vira past perfect: had seen." },
    { q: "He asked me where I ___.", opts: ["lived","live","do live","living"], a: 0, ex: "Pergunta indireta sem inversão: where I lived." },
    { q: "She asked ___ I was okay.", opts: ["if","that","what","do"], a: 0, ex: "Pergunta sim/não no indireto usa 'if': asked if..." }
  ],
  relative: [
    { q: "The man ___ lives next door is a doctor.", opts: ["who","which","whose","what"], a: 0, ex: "Pessoa: who." },
    { q: "The book ___ I bought is great.", opts: ["which","who","whose","where"], a: 0, ex: "Coisa: which (ou that)." },
    { q: "The girl ___ bike was stolen is crying.", opts: ["whose","who","which","that"], a: 0, ex: "Posse: whose." },
    { q: "The city ___ I was born is beautiful.", opts: ["where","which","who","whose"], a: 0, ex: "Lugar: where." },
    { q: "The people ___ we met were friendly.", opts: ["who","whose","which","where"], a: 0, ex: "Pessoas: who (ou that)." },
    { q: "That's the reason ___ I called you.", opts: ["why","which","who","whose"], a: 0, ex: "Motivo: the reason why." }
  ],
  gerinf: [
    { q: "I enjoy ___ soccer.", opts: ["playing","to play","play","played"], a: 0, ex: "'Enjoy' pede gerúndio: enjoy playing." },
    { q: "She wants ___ a doctor.", opts: ["to be","being","be","been"], a: 0, ex: "'Want' pede infinitivo com to: wants to be." },
    { q: "He finished ___ the report.", opts: ["writing","to write","write","wrote"], a: 0, ex: "'Finish' pede gerúndio: finished writing." },
    { q: "They decided ___ abroad.", opts: ["to travel","traveling","travel","traveled"], a: 0, ex: "'Decide' pede infinitivo: decided to travel." },
    { q: "I'm interested in ___ languages.", opts: ["learning","to learn","learn","learned"], a: 0, ex: "Depois de preposição, sempre -ing: in learning." },
    { q: "She stopped ___ years ago.", opts: ["smoking","to smoke","smoke","smoked"], a: 0, ex: "Stop + -ing = parar de fazer: stopped smoking." }
  ],
  wish: [
    { q: "I wish I ___ taller.", opts: ["were","am","will be","would be"], a: 0, ex: "Desejo no presente: wish + passado (were)." },
    { q: "She wishes she ___ more money.", opts: ["had","has","have","will have"], a: 0, ex: "Wish + passado: had." },
    { q: "I wish I ___ studied harder. (arrependimento)", opts: ["had","have","would","was"], a: 0, ex: "Arrependimento: wish + past perfect (had studied)." },
    { q: "He wishes he ___ speak Japanese.", opts: ["could","can","will","is"], a: 0, ex: "Habilidade desejada: wish + could." },
    { q: "I wish you ___ stop making noise!", opts: ["would","will","can","are"], a: 0, ex: "Irritação com hábito alheio: wish + would." },
    { q: "If only I ___ known earlier!", opts: ["had","have","would","was"], a: 0, ex: "'If only' + past perfect: had known." }
  ],
  inversion: [
    { q: "Never ___ such a beautiful place.", opts: ["have I seen","I have seen","I saw","did I saw"], a: 0, ex: "Advérbio negativo no início inverte: Never have I seen." },
    { q: "Rarely ___ so hard.", opts: ["does he work","he works","he does work","works he"], a: 0, ex: "Rarely + inversão: does he work." },
    { q: "Not only ___ late, but he also forgot the documents.", opts: ["was he","he was","he is","is"], a: 0, ex: "Not only + inversão: was he." },
    { q: "Little ___ that everything would change.", opts: ["did she know","she knew","she did know","knew she"], a: 0, ex: "Little + inversão: did she know." },
    { q: "Under no circumstances ___ leave this room.", opts: ["should you","you should","you must to","should"], a: 0, ex: "Expressão negativa + inversão: should you." },
    { q: "No sooner ___ arrived than it started to rain.", opts: ["had we","we had","we have","did we"], a: 0, ex: "No sooner + past perfect invertido: had we arrived." }
  ],
  cleft: [
    { q: "___ was John that broke the window.", opts: ["It","There","That","What"], a: 0, ex: "Ênfase no sujeito: It was John that..." },
    { q: "___ I need is a long vacation.", opts: ["What","That","It","Which"], a: 0, ex: "Ênfase no objeto: What I need is..." },
    { q: "It was in 2010 ___ we first met.", opts: ["that","when it","which","who"], a: 0, ex: "It was + info + that: that we first met." },
    { q: "What she did ___ call the police.", opts: ["was","is that","did","does"], a: 0, ex: "What + sujeito + did + was: was (to) call." },
    { q: "It ___ my brother who found the keys.", opts: ["was","is what","did","has"], a: 0, ex: "It was + pessoa + who." },
    { q: "___ matters most is your health.", opts: ["What","It","That","Which"], a: 0, ex: "What como sujeito: What matters most is..." }
  ],
  modalpast: [
    { q: "The ground is wet. It ___ rained last night.", opts: ["must have","must","should have","can have"], a: 0, ex: "Dedução sobre o passado: must have + particípio." },
    { q: "He ___ the train — he left very late.", opts: ["might have missed","might miss","must miss","misses"], a: 0, ex: "Possibilidade no passado: might have missed." },
    { q: "You ___ told me! I waited for hours.", opts: ["should have","must have","might","would"], a: 0, ex: "Crítica sobre o passado: should have told." },
    { q: "She ___ done it — she was with me all day.", opts: ["can't have","mustn't have","shouldn't","didn't have"], a: 0, ex: "Dedução negativa no passado: can't have done." },
    { q: "They ___ arrived by now, the flight landed at noon.", opts: ["should have","can have","might","must to"], a: 0, ex: "Expectativa: should have arrived." },
    { q: "I ___ left my keys at the office. I can't find them.", opts: ["must have","should","can have","would"], a: 0, ex: "Dedução lógica: must have left." }
  ],
  passadv: [
    { q: "He is said ___ very rich.", opts: ["to be","that he is","being","be"], a: 0, ex: "Passiva impessoal: is said to be." },
    { q: "It ___ that the economy will improve.", opts: ["is believed","believes","is believing","believed"], a: 0, ex: "It is believed that..." },
    { q: "I had my car ___ yesterday.", opts: ["repaired","repair","to repair","repairing"], a: 0, ex: "Causativa: have + objeto + particípio." },
    { q: "She got her hair ___ last week.", opts: ["cut","cutted","to cut","cutting"], a: 0, ex: "Get + objeto + particípio: got her hair cut." },
    { q: "The suspect is thought ___ the country.", opts: ["to have left","that left","leaving","left"], a: 0, ex: "Passiva sobre o passado: is thought to have left." },
    { q: "We're having our house ___ next month.", opts: ["painted","paint","to paint","painting"], a: 0, ex: "Causativa: having our house painted." }
  ],
  conectivos: [
    { q: "___ the rain, we went out.", opts: ["Despite","Although","However","Because"], a: 0, ex: "Despite + substantivo: Despite the rain." },
    { q: "___ it was late, she kept working.", opts: ["Although","Despite","However","Therefore"], a: 0, ex: "Although + frase completa." },
    { q: "He studied hard; ___, he failed the test.", opts: ["however","although","despite","because"], a: 0, ex: "Contraste entre frases: however." },
    { q: "She was tired. ___, she finished the report.", opts: ["Nevertheless","Although","Despite","Because of"], a: 0, ex: "Contraste formal: Nevertheless." },
    { q: "___ of the traffic, we arrived on time.", opts: ["In spite","Despite","Although","However"], a: 0, ex: "In spite OF + substantivo." },
    { q: "The project failed ___ the lack of funding.", opts: ["due to","although","however","despite of"], a: 0, ex: "Causa: due to + substantivo." }
  ],
  subjunctive: [
    { q: "I suggest that he ___ a doctor.", opts: ["see","sees","saw","seeing"], a: 0, ex: "Subjuntivo: verbo base mesmo com he/she (see)." },
    { q: "It's essential that she ___ on time.", opts: ["be","is","was","been"], a: 0, ex: "Subjuntivo do to be: be." },
    { q: "The teacher demanded that we ___ quiet.", opts: ["be","are","were","being"], a: 0, ex: "Demand that + subjuntivo: be quiet." },
    { q: "I recommend that he ___ more water.", opts: ["drink","drinks","drank","drinking"], a: 0, ex: "Recommend that + verbo base: drink." },
    { q: "It's important that every student ___ the rules.", opts: ["follow","follows","followed","following"], a: 0, ex: "Subjuntivo: follow (sem -s)." },
    { q: "She insisted that the meeting ___ postponed.", opts: ["be","is","was","will be"], a: 0, ex: "Insist that + subjuntivo: be postponed." }
  ],
  mixedcond: [
    { q: "If I had studied medicine, I ___ a doctor now.", opts: ["would be","would have been","will be","am"], a: 0, ex: "Passado irreal + resultado presente: would be... now." },
    { q: "If she weren't so shy, she ___ spoken at the meeting yesterday.", opts: ["would have","would","will have","had"], a: 0, ex: "Condição presente + resultado passado: would have spoken." },
    { q: "If we had caught that flight, we ___ in Paris right now.", opts: ["would be","would have been","are","will be"], a: 0, ex: "Resultado no presente: would be... right now." },
    { q: "If he ___ the job back then, he would be rich today.", opts: ["had taken","took","would take","takes"], a: 0, ex: "Condição no passado: had taken." },
    { q: "If I ___ afraid of heights, I would have gone skydiving.", opts: ["weren't","wouldn't be","am not","won't be"], a: 0, ex: "Condição presente (característica): weren't." },
    { q: "She would have called you if she ___ your number.", opts: ["knew","knows","would know","will know"], a: 0, ex: "Condição presente: if she knew (agora)." }
  ],
  participle: [
    { q: "___ his homework, he went to bed.", opts: ["Having finished","Finished","To finish","Finish"], a: 0, ex: "Ação anterior: Having + particípio." },
    { q: "___ from above, the city looks tiny.", opts: ["Seen","Seeing","To see","See"], a: 0, ex: "Sentido passivo: Seen from above." },
    { q: "___ what to say, she remained silent.", opts: ["Not knowing","Not known","No knowing","Not to know"], a: 0, ex: "Negativa: Not + -ing." },
    { q: "___ in 1900, the building is very old.", opts: ["Built","Building","To build","Having building"], a: 0, ex: "Passivo: Built in 1900 (= que foi construído)." },
    { q: "___ the news, she started to cry.", opts: ["Hearing","Heard","To hear","Hear"], a: 0, ex: "Ação simultânea/imediata: Hearing the news." },
    { q: "___ lost the map, we asked for directions.", opts: ["Having","Had","Have","To have"], a: 0, ex: "Ação anterior: Having lost." }
  ],
  inversioncond: [
    { q: "___ I known about the party, I would have gone.", opts: ["Had","If had","Have","Did"], a: 0, ex: "3ª condicional invertida: Had I known = If I had known." },
    { q: "___ you need any help, call me.", opts: ["Should","If should","Would","Had"], a: 0, ex: "1ª condicional formal: Should you need = If you need." },
    { q: "___ I in your position, I would accept the offer.", opts: ["Were","Was","Am","Be"], a: 0, ex: "2ª condicional invertida: Were I = If I were." },
    { q: "Had she studied, she ___ passed.", opts: ["would have","would","will have","had"], a: 0, ex: "Resultado: would have passed." },
    { q: "Should the flight ___ delayed, we will notify you.", opts: ["be","is","was","been"], a: 0, ex: "Should + sujeito + verbo base: be delayed." },
    { q: "Were he ___ ask me, I would say yes.", opts: ["to","will","would","can"], a: 0, ex: "Were + sujeito + to + verbo: Were he to ask." }
  ],
  hadbetter: [
    { q: "You ___ better see a doctor.", opts: ["had","would","should","have"], a: 0, ex: "Conselho forte: had better." },
    { q: "I ___ rather stay home tonight.", opts: ["would","had","should","will"], a: 0, ex: "Preferência: would rather." },
    { q: "She'd rather ___ tea than coffee.", opts: ["drink","drinks","drinking","to drink"], a: 0, ex: "Would rather + verbo base: drink." },
    { q: "You had better ___ late again!", opts: ["not be","don't be","not to be","no be"], a: 0, ex: "Negativa: had better not + verbo." },
    { q: "I'd rather you ___ smoke here.", opts: ["didn't","don't","won't","not"], a: 0, ex: "Preferência sobre outra pessoa: I'd rather you didn't." },
    { q: "It's time we ___ home.", opts: ["went","go","will go","going"], a: 0, ex: "It's time + passado: went." }
  ],
  futureperf: [
    { q: "By 2030, I ___ working here for 20 years.", opts: ["will have been","will be","will have","am"], a: 0, ex: "Future perfect continuous: will have been working." },
    { q: "By next month, she ___ her degree.", opts: ["will have finished","will finish","finishes","has finished"], a: 0, ex: "Concluído até um ponto futuro: will have finished." },
    { q: "This time tomorrow, we ___ over the Atlantic.", opts: ["will be flying","will fly","fly","are flying"], a: 0, ex: "Em progresso no futuro: will be flying." },
    { q: "By the time you arrive, I ___ dinner.", opts: ["will have made","will make","make","made"], a: 0, ex: "By the time + future perfect: will have made." },
    { q: "In June, they ___ married for ten years.", opts: ["will have been","will be","are","were"], a: 0, ex: "Duração até um ponto futuro: will have been married." },
    { q: "Don't call at 8 — I ___ the match.", opts: ["will be watching","will watch","watch","watched"], a: 0, ex: "Ação em progresso num momento futuro: will be watching." }
  ],
  phrasal: [
    { q: "The meeting was ___ until Friday.", opts: ["put off","put on","put up","put in"], a: 0, ex: "Put off = adiar." },
    { q: "She ___ the story — it wasn't true.", opts: ["made up","made off","made in","made over"], a: 0, ex: "Make up = inventar." },
    { q: "I can't ___ this noise anymore!", opts: ["put up with","put off","put on","put away"], a: 0, ex: "Put up with = tolerar." },
    { q: "He ___ smoking last year.", opts: ["gave up","gave in","gave away","gave out"], a: 0, ex: "Give up = parar/desistir." },
    { q: "The plane ___ on time.", opts: ["took off","took up","took in","took over"], a: 0, ex: "Take off = decolar." },
    { q: "We've ___ of milk.", opts: ["run out","run over","run up","run into"], a: 0, ex: "Run out of = acabar (o estoque)." }
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
  ],
  pastperfect: [
    { s: "The train had already left when we arrived", ex: "Ação anterior: had left." },
    { s: "She had never seen snow before", ex: "Had + never + particípio." },
    { s: "By 2010 they had moved to Spain", ex: "'By' + past perfect." },
    { s: "He had studied English before moving abroad", ex: "Ação anterior a outra: had studied." }
  ],
  cond3: [
    { s: "If I had known I would have called you", ex: "If + had..., would have + particípio." },
    { s: "She would have won if she had trained more", ex: "Resultado irreal no passado." },
    { s: "We would have gone if it hadn't rained", ex: "Negativa no if: hadn't rained." },
    { s: "If you had asked I would have helped", ex: "3ª condicional completa." }
  ],
  reported: [
    { s: "She said she was very tired", ex: "Am/is vira was no indireto." },
    { s: "He told me he would call later", ex: "Will vira would." },
    { s: "They said they had finished the work", ex: "Past simple vira past perfect." },
    { s: "She asked me where I lived", ex: "Pergunta indireta: sem inversão." }
  ],
  relative: [
    { s: "The man who called you is my uncle", ex: "Pessoa: who." },
    { s: "The house where I grew up was sold", ex: "Lugar: where." },
    { s: "The book which you lent me is amazing", ex: "Coisa: which." },
    { s: "The woman whose car broke down needed help", ex: "Posse: whose." }
  ],
  gerinf: [
    { s: "I enjoy reading before bed", ex: "Enjoy + -ing." },
    { s: "She wants to learn French", ex: "Want + to + verbo." },
    { s: "He avoided answering the question", ex: "Avoid + -ing." },
    { s: "They agreed to help us", ex: "Agree + to + verbo." }
  ],
  wish: [
    { s: "I wish I were on vacation", ex: "Desejo presente: wish + were." },
    { s: "She wishes she had more time", ex: "Wish + passado: had." },
    { s: "I wish I had studied medicine", ex: "Arrependimento: wish + had + particípio." },
    { s: "If only he could come with us", ex: "If only + could." }
  ],
  inversion: [
    { s: "Never have I seen such a mess", ex: "Never + auxiliar + sujeito." },
    { s: "Rarely does she make mistakes", ex: "Rarely + does + sujeito + verbo base." },
    { s: "Little did he know the truth", ex: "Little + did + sujeito + verbo base." },
    { s: "Not only was it cold but also windy", ex: "Not only + inversão." }
  ],
  cleft: [
    { s: "It was Maria who solved the problem", ex: "It was + pessoa + who." },
    { s: "What I want is some peace", ex: "What + frase + is." },
    { s: "It was yesterday that we arrived", ex: "It was + tempo + that." },
    { s: "What he needs is a good rest", ex: "Ênfase com what... is." }
  ],
  modalpast: [
    { s: "You should have called me earlier", ex: "Crítica: should have + particípio." },
    { s: "She must have forgotten the meeting", ex: "Dedução: must have + particípio." },
    { s: "He can't have finished so quickly", ex: "Impossibilidade: can't have + particípio." },
    { s: "They might have taken the wrong bus", ex: "Possibilidade: might have + particípio." }
  ],
  passadv: [
    { s: "He is said to be a genius", ex: "Passiva impessoal: is said to be." },
    { s: "I had my phone repaired yesterday", ex: "Causativa: had + objeto + particípio." },
    { s: "She is believed to live abroad", ex: "Is believed to + verbo." },
    { s: "They got the roof fixed last month", ex: "Get + objeto + particípio." }
  ],
  conectivos: [
    { s: "Despite the cold we went swimming", ex: "Despite + substantivo." },
    { s: "Although he was tired he kept working", ex: "Although + frase completa." },
    { s: "In spite of the rain they played the match", ex: "In spite of + substantivo." },
    { s: "Due to the strike the flight was cancelled", ex: "Due to + causa." }
  ],
  subjunctive: [
    { s: "I suggest that he take a break", ex: "Suggest that + verbo base (take)." },
    { s: "It is vital that she be informed", ex: "Subjuntivo do to be: be." },
    { s: "They demanded that he apologize immediately", ex: "Demand that + verbo base." },
    { s: "I recommend that you see a doctor", ex: "Recommend that + verbo base." }
  ],
  mixedcond: [
    { s: "If I had saved money I would be rich now", ex: "Passado irreal + presente: would be now." },
    { s: "She would be here if she had caught the train", ex: "Resultado presente + condição passada." },
    { s: "If he were taller he would have joined the team", ex: "Condição presente + resultado passado." },
    { s: "If they had left earlier they would be home now", ex: "Mistura de tempos: had left + would be." }
  ],
  participle: [
    { s: "Having finished the report she went home", ex: "Having + particípio = ação anterior." },
    { s: "Seen from the plane the island looks small", ex: "Particípio passivo: Seen from..." },
    { s: "Not knowing the answer he kept quiet", ex: "Negativa: Not + -ing." },
    { s: "Having lost his keys he called a locksmith", ex: "Having lost = como tinha perdido." }
  ],
  inversioncond: [
    { s: "Had I known I would have helped", ex: "Had I known = If I had known." },
    { s: "Should you need anything just ask", ex: "Should you need = If you need." },
    { s: "Were I rich I would travel the world", ex: "Were I = If I were." },
    { s: "Had they trained harder they would have won", ex: "3ª condicional invertida." }
  ],
  hadbetter: [
    { s: "You had better take an umbrella", ex: "Had better + verbo base." },
    { s: "I would rather walk than drive", ex: "Would rather + verbo... than." },
    { s: "It's time we went to bed", ex: "It's time + passado." },
    { s: "She would rather not talk about it", ex: "Negativa: would rather not." }
  ],
  futureperf: [
    { s: "By 2030 she will have graduated", ex: "Will have + particípio." },
    { s: "This time tomorrow I will be travelling", ex: "Will be + -ing." },
    { s: "By December we will have moved house", ex: "Concluído até um ponto futuro." },
    { s: "They will have finished the bridge by next year", ex: "Future perfect + by." }
  ],
  phrasal: [
    { s: "The concert was called off yesterday", ex: "Call off = cancelar." },
    { s: "She turned down the job offer", ex: "Turn down = recusar." },
    { s: "I came across an old photo", ex: "Come across = encontrar por acaso." },
    { s: "He gave up eating sugar", ex: "Give up + -ing = parar de." }
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
  ],
  pastperfect: [
    { q: "When I got home, everyone had already ___.", hint: "verbo: leave · particípio", ans: ["left"], ex: "Had + particípio: left." },
    { q: "She had ___ that movie three times before.", hint: "verbo: see · particípio", ans: ["seen"], ex: "Particípio de see: seen." },
    { q: "They had ___ dinner before we arrived.", hint: "verbo: finish", ans: ["finished"], ex: "Had finished." },
    { q: "I ___ never been there before that trip.", hint: "auxiliar", ans: ["had"], ex: "Past perfect: had been." }
  ],
  cond3: [
    { q: "If I had studied, I ___ have passed.", hint: "hipotético", ans: ["would"], ex: "Would have passed." },
    { q: "If she had ___ the truth, she would have told us.", hint: "verbo: know · particípio", ans: ["known"], ex: "Had known." },
    { q: "They would have ___ if you had invited them.", hint: "verbo: come · particípio", ans: ["come"], ex: "Would have come." },
    { q: "If we ___ left earlier, we would have arrived on time.", hint: "auxiliar", ans: ["had"], ex: "If we had left." }
  ],
  reported: [
    { q: "Direto: 'I like pizza.' → He said he ___ pizza.", hint: "like · um tempo atrás", ans: ["liked"], ex: "Like vira liked." },
    { q: "Direto: 'I will help.' → She said she ___ help.", hint: "will vira...", ans: ["would"], ex: "Will vira would." },
    { q: "Direto: 'I have finished.' → He said he ___ finished.", hint: "auxiliar", ans: ["had"], ex: "Have vira had." },
    { q: "She asked me ___ I was from.", hint: "pergunta indireta de lugar", ans: ["where"], ex: "Asked me where I was from." }
  ],
  relative: [
    { q: "The boy ___ won the prize is my cousin.", hint: "pessoa", ans: ["who","that"], ex: "Pessoa: who." },
    { q: "The dog ___ tail is white is mine.", hint: "posse", ans: ["whose"], ex: "Posse: whose." },
    { q: "The restaurant ___ we had dinner was expensive.", hint: "lugar", ans: ["where"], ex: "Lugar: where." },
    { q: "The phone ___ I bought yesterday stopped working.", hint: "coisa", ans: ["which","that"], ex: "Coisa: which/that." }
  ],
  gerinf: [
    { q: "I can't stand ___ in traffic.", hint: "verbo: wait · -ing", ans: ["waiting"], ex: "Can't stand + -ing." },
    { q: "She hopes ___ the exam.", hint: "verbo: pass · com to (2 palavras)", ans: ["to pass"], ex: "Hope + to + verbo." },
    { q: "He suggested ___ to the beach.", hint: "verbo: go · -ing", ans: ["going"], ex: "Suggest + -ing." },
    { q: "We plan ___ a new house.", hint: "verbo: buy · com to (2 palavras)", ans: ["to buy"], ex: "Plan + to + verbo." }
  ],
  wish: [
    { q: "I wish I ___ rich.", hint: "to be · passado", ans: ["were","was"], ex: "Wish + were." },
    { q: "She wishes she ___ the answer.", hint: "verbo: know · passado", ans: ["knew"], ex: "Wish + passado: knew." },
    { q: "I wish I ___ gone to the party.", hint: "arrependimento · auxiliar", ans: ["had"], ex: "Wish + had + particípio." },
    { q: "He wishes he ___ play the guitar.", hint: "habilidade", ans: ["could"], ex: "Wish + could." }
  ],
  inversion: [
    { q: "Never ___ I heard such a story.", hint: "auxiliar", ans: ["have"], ex: "Never have I heard." },
    { q: "Rarely ___ he arrive late.", hint: "auxiliar", ans: ["does"], ex: "Rarely does he arrive." },
    { q: "Little ___ she know what was coming.", hint: "auxiliar", ans: ["did"], ex: "Little did she know." },
    { q: "No sooner ___ I sat down than the phone rang.", hint: "auxiliar", ans: ["had"], ex: "No sooner had I sat down." }
  ],
  cleft: [
    { q: "___ was the manager who made the decision.", hint: "ênfase", ans: ["it"], ex: "It was... who." },
    { q: "___ I love about this city is the food.", hint: "ênfase", ans: ["what"], ex: "What I love... is." },
    { q: "It was in Paris ___ they got married.", hint: "conector", ans: ["that"], ex: "It was + lugar + that." },
    { q: "What she wants ___ to travel the world.", hint: "to be", ans: ["is"], ex: "What she wants is..." }
  ],
  modalpast: [
    { q: "The lights are off. They ___ have gone out.", hint: "dedução", ans: ["must"], ex: "Must have gone." },
    { q: "You ___ have told me the truth!", hint: "crítica", ans: ["should"], ex: "Should have told." },
    { q: "She ___ have seen us, it was too dark.", hint: "impossível", ans: ["can't","cannot"], ex: "Can't have seen." },
    { q: "He might ___ missed the bus.", hint: "auxiliar", ans: ["have"], ex: "Might have missed." }
  ],
  passadv: [
    { q: "He is said ___ be very talented.", hint: "partícula", ans: ["to"], ex: "Is said to be." },
    { q: "I had my car ___ last week.", hint: "verbo: wash · particípio", ans: ["washed"], ex: "Had my car washed." },
    { q: "It is ___ that she moved to Japan.", hint: "verbo: believe · particípio", ans: ["believed"], ex: "It is believed that." },
    { q: "She got her dress ___ for the wedding.", hint: "verbo: make · particípio", ans: ["made"], ex: "Got her dress made." }
  ],
  conectivos: [
    { q: "___ being sick, he went to work.", hint: "contraste + -ing", ans: ["despite"], ex: "Despite + -ing." },
    { q: "___ it was expensive, she bought it.", hint: "contraste + frase", ans: ["although","though"], ex: "Although + frase." },
    { q: "He trained hard; ___, he lost the match.", hint: "contraste entre frases", ans: ["however"], ex: "However entre frases." },
    { q: "The game was cancelled due ___ the storm.", hint: "partícula", ans: ["to"], ex: "Due to + causa." }
  ],
  subjunctive: [
    { q: "I suggest that she ___ early.", hint: "verbo: leave · subjuntivo", ans: ["leave"], ex: "Verbo base: leave." },
    { q: "It's essential that he ___ present.", hint: "to be · subjuntivo", ans: ["be"], ex: "Subjuntivo: be." },
    { q: "The judge ordered that the man ___ released.", hint: "to be · subjuntivo", ans: ["be"], ex: "Be released." },
    { q: "We recommend that she ___ the course.", hint: "verbo: take", ans: ["take"], ex: "Verbo base: take." }
  ],
  mixedcond: [
    { q: "If I had accepted the job, I ___ be in London now.", hint: "hipotético presente", ans: ["would"], ex: "Would be now." },
    { q: "If she ___ so busy, she would have come yesterday.", hint: "to be · negativa", ans: ["weren't","wasn't"], ex: "If she weren't." },
    { q: "If we had taken the map, we ___ be lost now.", hint: "negativa", ans: ["wouldn't"], ex: "Wouldn't be lost." },
    { q: "If he ___ studied harder, he would have a degree today.", hint: "auxiliar", ans: ["had"], ex: "If he had studied." }
  ],
  participle: [
    { q: "___ finished dinner, they watched a movie.", hint: "particípio presente do auxiliar", ans: ["having"], ex: "Having finished." },
    { q: "___ from a distance, the mountain seems blue.", hint: "verbo: see · particípio", ans: ["seen"], ex: "Seen from a distance." },
    { q: "Not ___ what to do, she called her mother.", hint: "verbo: know · -ing", ans: ["knowing"], ex: "Not knowing." },
    { q: "___ in Italy, the car is very stylish.", hint: "verbo: make · particípio", ans: ["made"], ex: "Made in Italy." }
  ],
  inversioncond: [
    { q: "___ I known earlier, I would have come.", hint: "inversão", ans: ["had"], ex: "Had I known." },
    { q: "___ you have any questions, contact us.", hint: "inversão", ans: ["should"], ex: "Should you have." },
    { q: "___ I you, I would apologize.", hint: "inversão", ans: ["were"], ex: "Were I you." },
    { q: "Had she ___ the email, she would have replied.", hint: "verbo: see · particípio", ans: ["seen"], ex: "Had she seen." }
  ],
  hadbetter: [
    { q: "You ___ better hurry up!", hint: "expressão", ans: ["had"], ex: "Had better." },
    { q: "I'd ___ have pizza than salad.", hint: "preferência", ans: ["rather"], ex: "Would rather... than." },
    { q: "It's time we ___ home.", hint: "verbo: go · passado", ans: ["went"], ex: "It's time + passado." },
    { q: "I'd rather you ___ tell anyone.", hint: "negativa · passado", ans: ["didn't"], ex: "I'd rather you didn't." }
  ],
  futureperf: [
    { q: "By 2030, I will ___ finished my studies.", hint: "auxiliar", ans: ["have"], ex: "Will have finished." },
    { q: "This time tomorrow, she will be ___ to Rome.", hint: "verbo: fly · -ing", ans: ["flying"], ex: "Will be flying." },
    { q: "By the time you wake up, I will have ___.", hint: "verbo: leave · particípio", ans: ["left"], ex: "Will have left." },
    { q: "By June, they will have ___ here for a decade.", hint: "verbo: live · particípio", ans: ["lived"], ex: "Will have lived." }
  ],
  phrasal: [
    { q: "Please turn ___ the TV, it's too loud.", hint: "diminuir", ans: ["down"], ex: "Turn down = diminuir." },
    { q: "We ran ___ of coffee this morning.", hint: "acabar", ans: ["out"], ex: "Run out of = acabar." },
    { q: "The flight took ___ at noon.", hint: "decolar", ans: ["off"], ex: "Take off = decolar." },
    { q: "I can't put ___ with this behavior.", hint: "tolerar", ans: ["up"], ex: "Put up with = tolerar." }
  ]
};
