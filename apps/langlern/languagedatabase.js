const Spanishlessonobjs = [
{name: "Spanish 1",
lesson: [
    {english: `quiero means I want`, otherlang: `chico corazon`, hint: ``},
    {english: `say: I want noun`, otherlang: `quiero noun`, hint: ``},
    {english: `'ahora' means 'now'`, otherlang: ``, hint: ``},
    {english: `say: now I want noun`, otherlang: `ahora quiero noun`, hint: ``},
    {english: `y means and`, otherlang: ``, hint: ``},
    {english: `say: I want noun and noun`, otherlang: `quiero noun y noun`, hint: `'y' means 'and'`},
    {english: `Whats the word for 'now'`, otherlang: `ahora`, hint: ``},
    {english: `say: I want noun now`, otherlang: `quiero noun ahora`, hint: ``},
    {english: `say: I don't want noun`, otherlang: `No quiero noun`, hint: `put 'no' at start to negate sentences'`},
    {english: `say: because I don't want noun`, otherlang: `porque no quiero noun`, hint: ``},
    {english: `say: because I don't want noun now`, otherlang: `porque no quiero noun ahora`, hint: ``},
]}];
const Germanlessonobjs = [
{name: `German 1`, 
lesson: [
    {english: `The table is good`, otherlang: `der Tisch ist gut`, hint: ``},
    {english: `the dogs are good`, otherlang: `die Hunde sind gut`, hint: ``},
    {english: `you are good`, otherlang: `du bist gut`, hint: ``},
    {english: `we are good and you are bad`, otherlang: `wir sind gut und du bist schlecht`, hint: ``},
    {english: `das means this / that`, otherlang: ``, hint: ``},
    {english: `this is good and that is bad`, otherlang: `das ist gut und das ist schlecht`, hint: ``},
    {english: `You are that`, otherlang: `du bist das`, hint: ``},
    {english: `That is bad`, otherlang: `das ist schlecht`, hint: ``},
    {english: `Is that bad?`, otherlang: `ist das schlecht?`, hint: `flip like english`},
    {english: `questions also flip verbs`, otherlang: ``, hint: ``},
    {english: `you have a car`, otherlang: `du hast ein Auto`, hint: ``},
    {english: `do you have a car?`, otherlang: `hast du ein Auto?`, hint: `flip it`},
    {english: `because (weil), but (aber)`, otherlang: ``, hint: ``},
    {english: `but, you have a car?`, otherlang: `aber, hast du ein Auto?`, hint: ``},
    {english: `because I have a car`, otherlang: `weil ich ein auto habe?`, hint: ``},
    {english: `I have food and water`, otherlang: `Ich habe Essen und Wasser`, hint: ``},
    {english: `here (hier), there (da)`, otherlang: ``, hint: ``},

    {english: `I can speak German`, otherlang: `ich kann sprechen Deutsch`, hint: ``},
    {english: `you can speak German`, otherlang: `du kannst sprechen Deutsch`, hint: ``},
    {english: `because you can speak German`, otherlang: `weil du kannst sprechen Deutsch`, hint: ``},
    {english: `can you speak German?`, otherlang: `kannst du sprechen Deutsch?`, hint: ``},


    {english: `I was here, you were there`, otherlang: `ich war hier, du warst da`, hint: ``},


    // Possessives 
    {english: `my house is here`, otherlang: `Mein Haus ist hier`, hint: ``},
    {english: `your house is here`, otherlang: `dein Haus ist hier`, hint: ``},
    {english: `his big house and my house`, otherlang: `sein großes Haus und mein Haus`, hint: ``},
    {english: `is your house here?`, otherlang: `Ist dein Haus hier?`, hint: `flip it because its a qestion`},
    {english: `is your house here?`, otherlang: `Ist dein Haus hier?`, hint: ``},
]},
{name: `Noun Gender`, 
lesson: [
    {english: `German has 3 Genders, Male, Female, Neuter`, otherlang: ``, hint: ``},
    {english: `Female words end in 'e', otherwise its male or neuter`, otherlang: ``, hint: ``},
    {english: `word for the is der`, otherlang: ``, hint: ``},
    {english: `the table, the house`, otherlang: `der tisch, der Stuhl`, hint: ``},
    {english: `use die when word is female`, otherlang: ``, hint: ``},
    {english: `the table, the cat`, otherlang: `der tisch, die katze`, hint: `katze is female`},
]},
{name: "Conujation", 
lesson: [
    // {english: `Pronouns: I/Ich | you/du | he/er she/sie it/es | we/wir | they/sie`, otherlang: ``, hint: ``},
    {english: `All verbs end in 'en'. replace en with ending`, otherlang: ``, hint: ``},
    {english: `learnen means learn, `, otherlang: ``, hint: ``},

    {english: `I learn and you learn`, otherlang: `Ich lerne und du lernst`, hint: ``},
    {english: `he learns and we learn`, otherlang: `er lernt und wir lernen`, hint: ``},
    {english: `I learn and they learn`, otherlang: `Ich lerne und sie lernen`, hint: ``},
    {english: `they learn and we learn`, otherlang: `sie lernen und wir lernen`, hint: `we/they have same ending`},

]
},
{name: `Person to Person`, 
lesson: [
    {english: `I(ich, me), you(du, dich) he(er, ihn) we(wir, uns) they(sie) `, otherlang: ``, hint: ``},
    {english: `er sagt es mir`, otherlang: `he tells me (he tell it me)`, hint: ``},
    {english: ``, otherlang: ``, hint: ``},
    {english: ``, otherlang: ``, hint: ``},
    {english: ``, otherlang: ``, hint: ``},
]},
{name: `Negation`, 
lesson: [
    {english: `add 'nicht' after verb to negate`, otherlang: ``, hint: ``},
    {english: `I eat. I dont eat`, otherlang: `Ich esse. Ich esse nicht`, hint: ``},
    {english: `replace artical with Keinen, if theres an artical`, otherlang: ``, hint: ``},
    {english: `I don't have a dog`, otherlang: `Ich habe keinen Hund`, hint: ``},
    {english: `Use Keine if feminine`, otherlang: ``, hint: ``},
    {english: `I don't have a cat`, otherlang: `Ich habe keine Katze`, hint: ``},
]},
{name: `Sentence Examples`, 
lesson: [
    {english: `i'm here, where are you?`, otherlang: `ich bin hier. Wo bist du`, hint: ``},
    {english: `what are you doing? `, otherlang: `was machst du`, hint: ``},
    {english: `why do you have that? `, otherlang: `warum hast du das?`, hint: ``},
    {english: `when are you comming? `, otherlang: `wann kommst du?`, hint: ``},
    {english: `i don't know, what is it`, otherlang: `Ich weiß nicht, was es ist`, hint: ``},
    {english: `i dance, do you dance?`, otherlang: `ich tanze, tanzst du?`, hint: `pronoun after verb because its a question`},
    {english: `i don't dance, i cant dance`, otherlang: `Ich tanze nicht, Ich kann nicht tanzen`, hint: `Negate: put 'nicht' after verb`},
    {english: `i have a cat and you dont have a cat`, otherlang: `Ich habe eine Katze und du hast keine Katze`, hint: `Negate2: replace artical with 'keine'`},
    {english: `my car can drive`, otherlang: `mein Auto kann fahren`, hint: ``},
    {english: `did you eat yet?`, otherlang: `Hast du schon gegessen,`, hint: `schon means yet/already`},
    {english: `i will sing if you will sing`, otherlang: `Ich werde singen, wenn du singst`, hint: `wenn = if, 'werden' is verb 'to will'`},
    {english: `were talking about cats`, otherlang: `sprachen über Katzen`, hint: `über can mean about`},
    {english: `we should eat`, otherlang: `wir sollten Essen`, hint: `sollen (sollt) to should`},
    {english: `I should practice guitar`, otherlang: `Ich sollte Gitarre üben`, hint: `verbs goes at end of sentence`},
    {english: `can you sing and do you sing?`, otherlang: `Kannst du singen und singst du?`, hint: ``},
    {english: `i like to learn languages. you like to learn languages`, otherlang: `Ich lerne gerne Sprachen. Du lernst gerne Sprachen`, hint: `gerne = like (put after verb, not conjugated)`},
    {english: `trees are big but this tree is small`, otherlang: `Bäume sind groß, aber dieser Baum ist klein`, hint: ``},
    {english: ``, otherlang: ``, hint: ``},
]},
];
const Russianlessonobjs = [
{name: `Russian 1`,
lesson: [
    {english: `это means this/that is`, otherlang: ``, hint: ``},
    {english: `That is a house`, otherlang: `это дом`, hint: ``},
    {english: `This is a house, that is water`, otherlang: `это дом, это вода`, hint: ``},
    {english: `I want to eat`, otherlang: `хочу есть`, hint: ``},
    ]
}
];
const Polishlessonobjs = [
{name: `Polish 1`,
lesson: [
    {english: `to means (this/that is)`, otherlang: ``, hint: ``},
    {english: `that is a house`, otherlang: `to jest dom`, hint: ``},
    {english: `this is a house, that is water`, otherlang: `to jest dom, to jest woda`, hint: ``},
    ]
}
];
const Chineselessonobjs = [
{name: `Chinese 1`,
lesson: [
{english: `Wǒ (我) means I`, otherlang: ``, hint: ``},
{english: `shuō (我) means Speak`, otherlang: ``, hint: ``},
{english: `I speak`, otherlang: `Wǒ shuō`, hint: ``},
{english: `Me and you eat`, otherlang: `Wǒ hé nǐ chī`, hint: ``},
]},
];
const GermanSentences = [
{otherlang: "", }
];


const clrsarr = [
    ["darkorange", "orange"], // Romance 0
    ["gold", "yellow"], // Germanic 1
    ["green", "lime"], // Celtic 2
    ["rgb(60, 135, 215)", "rgb(100, 175, 255)"], // Slavic 3
    ["rgb(60, 135, 215)", "rgb(100, 175, 255)"], // Uralic 4
    ["rgb(255, 180, 70)", "rgb(255, 210, 100)"], // Semetic 5
    ["rgb(255, 180, 70)", "rgb(255, 210, 100)"], // Berber Amazigh 6
    ["mediumpurple", "plum"], // African Language 7
    ["red", "pink"], // Turkic 8
    ["red", "pink"], // Sino-Tibetian 9
    ["hotpink", "lightpink"], // Austronesian 10
    ["mediumpurple", "plum"], // Native American 11
]
const languagedatabase = [
    {name: `spanish`, langfam: `Romance`, colors:clrsarr[0], lessonsobjs: Spanishlessonobjs, audioindex: 8},
    {name: `french`, langfam: `Romance`, colors:clrsarr[0], lessonsobjs: Spanishlessonobjs, audioindex: 8},
    {name: `german`, langfam: `Germanic (west)`, colors:clrsarr[1], lessonsobjs: Germanlessonobjs, audioindex: 3},
    {name: `swedish`, langfam: `Germanic (north)`, colors:clrsarr[1], lessonsobjs: null, audioindex: 3},
    {name: `finish`, langfam: `Uralic`, colors:clrsarr[4], lessonsobjs: null, audioindex: 0},
    {name: `polish`, langfam: `Slavic (west)`, colors:clrsarr[3], lessonsobjs: Polishlessonobjs, audioindex: 16},
    {name: `russian`, langfam: `Slavic (east)`, colors:clrsarr[3], lessonsobjs: Russianlessonobjs, audioindex: 18},
    {name: `chinese`, langfam: `Sino-Tibetan`, colors:clrsarr[9], lessonsobjs: Chineselessonobjs, audioindex: 19},
    {name: `swahili`, langfam: `Bantu`, colors:clrsarr[11], lessonsobjs: null, audioindex: 0},
    {name: `hawaiian`, langfam: `Polynesian`, colors:clrsarr[10], lessonsobjs: null, audioindex: 0},
    {name: `arabic`, langfam: `Semetic`, colors:clrsarr[5], lessonsobjs: null, audioindex: 0},
    {name: `turkish`, langfam: `Turkic`, colors:clrsarr[8], lessonsobjs: null, audioindex: 0},
];




// Vocab Database --------------------------------
const vColors = [
    {english: "red", spanish: "rojo", german: `rot`, swedish: "röd", russian: `кра́сный`, arabic: "أَحْمَرْ", questionextra: "<div style='background-color:red; width:1em; height:1em; border-radius:100%'></div>"},
    {english: "orange", spanish: "naranja", german: `orange`, swedish: "orange", russian: `ора́нжевый`, arabic: "بُرْتُقَانِي", questionextra: "<div style='background-color:orange; width:1em; height:1em; border-radius:100%'></div>"},
    {english: "yellow", spanish: "amarillo", german: `gelb`, swedish: "gul", russian: `жёлтый`, arabic: "أَصْفَرْ", questionextra: "<div style='background-color:yellow; width:1em; height:1em; border-radius:100%'></div>"},
    {english: "green", spanish: "verde", german: `grün`, swedish: "grön", russian: `зелёный`, arabic: "أَخْضَرْ", questionextra: "<div style='background-color:green; width:1em; height:1em; border-radius:100%'></div>"},
    {english: "cyan", spanish: "...", german: `hellblau`, swedish: "...", russian: `голубо́й`, arabic: "...", questionextra: "<div style='background-color:cyan; width:1em; height:1em; border-radius:100%'></div>"},
    {english: "blue", spanish: "azul", german: `blau`, swedish: "blå", russian: `си́ний`, arabic: "أَزْرَقْ", questionextra: "<div style='background-color:blue; width:1em; height:1em; border-radius:100%'></div>"},
    {english: "purple", spanish: "morado", german: `lila`, swedish: "lila", russian: `фиоле́товый`, arabic: "مُوفْ", questionextra: "<div style='background-color:purple; width:1em; height:1em; border-radius:100%'></div>"},
    {english: "black", spanish: "negro", german: `schwarz`, swedish: "svart", russian: `чёрный`, arabic: "إِسْوِدْ", questionextra: "<div style='background-color:black; width:1em; height:1em; border-radius:100%'></div>"},
    {english: "white", spanish: "blanco", german: `weiß`, swedish: "vit", russian: `бе́лый`, arabic: "أَبْيَضْ", questionextra: "<div style='background-color:white; width:1em; height:1em; border-radius:100%'></div>"},
]
const vNumbers = [
  {english: "0", spanish: "cero", portuguese: "zero", russian: "нуль", polish: "zero",       german: "null", swedish: "noll", swahili: "sifuri", lakota: "0???", chinese: "...", french: "zéro"},
  {english: "1", spanish: "uno", portuguese: "um", russian: "один", polish: "jeden",         german: "eins", swedish: "en", swahili: "moja", lakota: "waŋží", chinese: "一", french: "un"},
  {english: "2", spanish: "dos", portuguese: "dois", russian: "два", polish: "dwa",          german: "zwei", swedish: "två", swahili: "mbili", lakota: "núŋpa", chinese: "二", french: "deux"},
  {english: "3", spanish: "tres", portuguese: "tres", russian: "три", polish: "trzy",        german: "drei", swedish: "tre", swahili: "tatu", lakota: "yámni", chinese: "三", french: "trois"},
  {english: "4", spanish: "cuatro", portuguese: "quatro", russian: "четыре", polish: "cztery",german: "vier", swedish: "fyra", swahili: "nne", lakota: "tópa", chinese: "四", french: "quatre"},
  {english: "5", spanish: "cinco", portuguese: "cinco", russian: "пять", polish: "piec",     german: "fünf", swedish: "fem", swahili: "tano", lakota: "záptaŋ", chinese: "五", french: "cinq"},
  {english: "6", spanish: "seis", portuguese: "seis", russian: "шесть", polish: "szesc",     german: "sechs", swedish: "sex", swahili: "sita", lakota: "šákpe", chinese: "六", french: "six"},
  {english: "7", spanish: "siete", portuguese: "sete", russian: "Семь", polish: "siedem",    german: "sieben", swedish: "sju", swahili: "saba", lakota: "šakówiŋ", chinese: "七", french: "sept"},
  {english: "8", spanish: "ocho", portuguese: "oito", russian: "вóсемь", polish: "osiem",    german: "acht", swedish: "åtta", swahili: "nane", lakota: "šaglógaŋ", chinese: "八", french: "huit"},
  {english: "9", spanish: "nueve", portuguese: "nove", russian: "девять", polish: "dziewiec",german: "neun", swedish: "nio", swahili: "tisa", lakota: "napčíyuŋka", chinese: "九", french: "neuf"},
  {english: "10", spanish: "dies", portuguese: "dez", russian: "десять", polish: "dziesiec", german: "zehn", swedish: "tio", swahili: "kumi", lakota: "wikčémna", chinese: "十", french: "dix"}
]
const vAnimals = [
    {english: "dog", spanish: "el perro", german: "der Hund", russian: "собака",     arabic: "كَلْب", finish: "koira",  hawaiian: "ʻīlio", oneida: "é·lhal", lakota: "šúŋka"},
    {english: "cat", spanish: "el gato", german: "die Katze", russian: "кот",        arabic: "قِط", finish: "kissa", hawaiian: "pōpoki", oneida: "takó·s", lakota: "igmú",},
    {english: "bird", spanish: "el pajaro", german: "der Vogel", russian: "птица",   arabic: "طائ", finish: "lintu", hawaiian: "manu", oneida: "otsiˀtʌ́haˀ", lakota: "ziŋtkála",},
    {english: "fish", spanish: "el pez", german: "der Fisch", russian: "рыба",       arabic: "سَمَك", finish: "kala", hawaiian: "i'a", oneida: "kʌ́tsi", lakota: "hoǧáŋ"},
    {english: "chicken", spanish: "el pollo", german: "das Huhn", russian: "курица", arabic: "دَجاج", finish: "kana", hawaiian: "moa", oneida: "kitkit", lakota: "?"},
    {english: "cow", spanish: "la vaca", german: "die Kuh", russian: "корова",       arabic: "بقرة", finish: "lehmä", hawaiian: "?", oneida: "?", lakota: "?"},
    {english: "pig", spanish: "el cerdo", german: "das Schwein", russian: "свинья",  arabic: "خنزير", finish: "sika", hawaiian: "?", oneida: "?", lakota: "?"},
  ]
  const vFruit = [
    {english: "apple", spanish: "manzana", portugese: "", polish: "jabłko", russian: "яблоко", hawaiian: "", german: "der Apfel", swedish: "ett äpple", arabic: "تُفّاح"},
    {english: "banana", spanish: "banana", portugese: "", polish: "banan", russian: "банан", hawaiian: "", german: "die Banane", swedish: "en banan", arabic: "مَوز"},
    {english: "cherry", spanish: "cereza", portugese: "", polish: "wiśnia", russian: "вишня", hawaiian: "", german: "die Kirsche", swedish: "ett körsbär", arabic: "كَرَز"},
    {english: "orange", spanish: "naranja", portugese: "", polish: "Pomarańczowy", russian: "апельсин", hawaiian: "", german: "die Orange", swedish: "en apelsin", arabic: "بُرْتُقال"},
    {english: "strawberry", spanish: "fresa", portugese: "", polish: "truskawka", russian: "клубника", hawaiian: "", german: "die Erdbeere", swedish: "en jordgubbe", arabic: "فَراولة"},
    {english: "watermelon", spanish: "sandía", portugese: "melancia", polish: "arbuz", russian: "арбуз", hawaiian: "", german: "die Wassermelone", swedish: "en vattenmelon", arabic: "بَطّيخ"},    
  ]
  const vFood = [
    {english: "food", spanish: "la comida", german: "das Essen", swedish: "en mat", russian: "еда"},
    {english: "water", spanish: "el agua", german: "das Wasser", swedish: "ett vatten", russian: "вода"},
    {english: "drink", spanish: "la bebida", german: "das Getränk", swedish: "en drink", russian: "напиток"},
    {english: "beer", spanish: "cerveza", german: "das Bier", swedish: "en öl", russian: "пиво"},
    {english: "ice", spanish: "el hielo", german: "das Eis", swedish: "en is", russian: "лед"},
    {english: "bread", spanish: "pan", german: "das Brot", swedish: "en bröd", russian: "хлеб"},
    {english: "rice", spanish: "arroz", german: "der Reis", swedish: "ett ris", russian: "рис"},
    {english: "meat", spanish: "la carne", german: "das Fleisch", swedish: "ett kött", russian: "мясо"},
    {english: "onion", spanish: "cebolla", german: "die Zwiebel", swedish: "en lök", russian: "лук"},
    {english: "cheese", spanish: "queso", german: "der Käse", swedish: "en ost", russian: "сыр"},
    {english: "peppers", spanish: "pimientos", german: "der Pfeffer", swedish: "peppar", russian: "перец"},
    {english: "sandwich", spanish: "sandwich", german: "das Sandwich", swedish: "en smörgås", russian: "..."},
    {english: "salt", spanish: "sal", german: "das Salz", swedish: "ett salt", russian: "соль"},
  ];
  const vLandscape = [
    {english: "plant", spanish: "la planta", german: "die Pflanze", russian: "растение", hawaiian: "", lakota: "", oneida: "", arabic: ""},
    {english: "fire", spanish: "el fuego", german: "das Feuer", russian: "огонь", hawaiian: "ahi", lakota: "pȟéta", oneida: "o·tsísteˀ", arabic: "نار"},
    {english: "sun", spanish: "el sol", german: "die Sonne", russian: "солнце", hawaiian: "lā", lakota: "wí", oneida: "", arabic: "شَّمس"},
    {english: "moon", spanish: "la luna", german: "der Mond", russian: "луна", hawaiian: "mahina", lakota: "haŋwí", oneida: "wehní·taleˀ (waynidale)", arabic: "قَمَر"},
    {english: "mountain", spanish: "la montaña", german: "der Berg", russian: "гора"},
    {english: "tree", spanish: "el árbol", german: "der Baum", russian: "дерево"},
    {english: "leaf", spanish: "la hoja", german: "das Blatt", russian: "лист"},
    {english: "forest", spanish: "el bosque", german: "der Wald", russian: "лес"},
    {english: "sea", spanish: "el mar", german: "das Meer", russian: "море"},
    {english: "river", spanish: "el río", german: "der Fluss", russian: "река"},
    {english: "star", spanish: "la estrella", german: "der Stern", russian: "звезда", hawaiian: "hoku", lakota: "wičháȟpi", oneida: "", arabic: "نَجْم"},
  ]
  const vWeather = [
    {english: "sky", spanish: "el cielo", german: "der Himmel", russian: "небо", hawaiian: "lani", lakota: "maȟpíya", oneida: "", arabic: "سَماء"},
    {english: "cloud", spanish: "la nube", german: "die Wolke", russian: "облако"},
    {english: "storm", spanish: "la tormenta", german: "der Sturm", russian: "буря"},
    {english: "rain", spanish: "la lluvia", german: "der Regen", russian: "дождь"},
    {english: "snow", spanish: "la nieve", german: "der Schnee", russian: "снег"},
  ];
  const vWorld = [
    {english: "people", spanish: "gente", german: "die Leute", swedish: "ett folk", russian: "люди"},
    {english: "country", spanish: "país", german: "das Land", swedish: "ett land", russian: "страна"},
    {english: "flag", spanish: "bandera", german: "die Flagge", swedish: "en flagga", russian: "флаг"},
    {english: "city", spanish: "ciudad", german: "die Stadt", swedish: "en stad", russian: "город"},
    {english: "building", spanish: "edificio", german: "das Gebäude", swedish: "en byggnad", russian: "здание"},
    {english: "neighborhood", spanish: "barrio", german: "die Nachbarschaft", swedish: "ett grannskap", russian: "район"},
    {english: "street", spanish: "calle", german: "die Straße", swedish: "en gata", russian: "дорога"},
    {english: "car", spanish: "carro", german: "das Auto", swedish: "en bil", russian: "машина"},
    {english: "boat", spanish: "bote", german: "das Boot", swedish: "en båt", russian: "лодка"},
    {english: "plane", spanish: "avión", german: "das Flugzeug", swedish: "ett flygplan", russian: "самолёт"},
    {english: "sidewalk", spanish: "banqueta", german: "der Gehweg", swedish: "en trottoar", russian: "тротуар"},
    {english: "yard", spanish: "patio", german: "das Yard", swedish: "...", russian: "двор"},
  ];
  const vBody = [
    {english: "body", spanish: "cuerpo", german: "der Körper", swedish: "en kropp", russian: "тело"},
    {english: "head", spanish: "la cabeza", german: "der Kopf", swedish: "ett huvud", russian: "голова"},
    {english: "face", spanish: "la cara", german: "das Gesicht", swedish: "ett ansikte", russian: "лицо"},
    {english: "eye", spanish: "el ojo", german: "das Auge", swedish: "ett öga", russian: "Глаз"},
    {english: "mouth", spanish: "la boca", german: "der Mund", swedish: "en mun", russian: "рот"},
    {english: "nose", spanish: "la naris", german: "die Nase", swedish: "en näsa", russian: "нос"},
    {english: "ear", spanish: "la oreja", german: "das Ohr", swedish: "ett öra", russian: "ухо"},
    {english: "beard", spanish: "la barba", german: "der Bart", swedish: "en skägg", russian: "борода"},
    {english: "hair", spanish: "el pelo", german: "die Haare", swedish: "ett hår", russian: "волосы"},
    {english: "arm", spanish: "el brazo", german: "der Arm", swedish: "en arm", russian: "..."},
    {english: "hand", spanish: "la mano", german: "die Hand", swedish: "en hand", russian: "..."},
    {english: "hand & arm", spanish: "...", german: "...", swedish: "...", russian: "рука"},
    {english: "leg", spanish: "la pierna", german: "das Bein", swedish: "ett ben", russian: "нога"},
    {english: "foot", spanish: "el pie", german: "der Fuß", swedish: "en fot", russian: "ступня"},
  ]
  const vCloths = [
    {english: "cloths", spanish: "la ropa", portugese: "roupa", german: "die Kleidung", swedish: "en kläder", russian: "одежда"},
    {english: "cap", spanish: "la gorra", portugese: "o boné", german: "die Kappe", swedish: "en hatt", russian: "шапка"},
    {english: "glasses", spanish: "gafas/lentes", portugese: "os óculos", german: "die Brille", swedish: "glasögon", russian: "очки"},
    {english: "shirt", spanish: "la camiseta", portugese: "camisa", german: "das Hemd", swedish: "en skjorta", russian: "рубашка"},
    {english: "pants", spanish: "pantalones", portugese: "calça", german: "die Hose", swedish: "en byxa", russian: "штаны"},
    {english: "socks", spanish: "los calcetines", portugese: "as meias", german: "die Socken", swedish: "strumpor", russian: "носки"},
    {english: "shoe", spanish: "el zapato", portugese: "sapato", german: "der Schuh", swedish: "en sko", russian: "обувь"},
    {english: "necklace", spanish: "el collar", portugese: "o colar", german: "die Halskette", swedish: "ett halsband", russian: "..."},
  ];
  const vTime = [
    {english: "today", spanish: "hoy", german: "heute", swedish: "idag", russian: "сегодня"},
    {english: "tomorrow", spanish: "mañana", german: "morgen", swedish: "imorgon", russian: "завтра"},
    {english: "yesterday", spanish: "ayer", german: "gestern", swedish: "igår", russian: "вчера"},
    {english: "now", spanish: "ahora", german: "jetzt", swedish: "nu", russian: "сейчас"},
    {english: "later", spanish: "más tarde", german: "später", swedish: "senare", russian: "позже"},
    {english: "again", spanish: "otra vez", german: "wieder", swedish: "igen", russian: "снова"},

    {english: "second", spanish: "segundo", german: "der Zweite", swedish: "en sekund", russian: "второй"},
    {english: "minute", spanish: "minuto", german: "die Minute", swedish: "en minut", russian: "минута"},
    {english: "hour", spanish: "hora", german: "die Stunde", swedish: "en timme", russian: "час"},
    {english: "day", spanish: "día", german: "der Tag", swedish: "en dag", russian: "день"},
    {english: "night", spanish: "noche", german: "die Nacht", swedish: "en natt", russian: "ночь"},
    {english: "week", spanish: "semana", german: "die Woche", swedish: "en vecka", russian: "неделя"},
    {english: "month", spanish: "mes", german: "der Monat", swedish: "en månad", russian: "месяц"},
    {english: "year", spanish: "año", german: "das Jahr", swedish: "ett år", russian: "год"},

    {english: "spring", spanish: "primavera", german: "der Frühling", swedish: "en vår", russian: "весна"},
    {english: "summer", spanish: "verano", german: "der Sommer", swedish: "en sommar", russian: "лето"},
    {english: "fall", spanish: "otoño", german: "der Herbst", swedish: "en höst", russian: "осень"},
    {english: "winter", spanish: "invierno", german: "der Winter", swedish: "en vinter", russian: "зима"},
  ];

  const vRoom = [
    {english: "room", spanish: "cuarto", german: "das Zimmer", russian: "комната"},
    {english: "table", spanish: "mesa", german: "der Tisch", russian: "стол"},
    {english: "chair", spanish: "silla", german: "der Stuhl", russian: "стул"},
    {english: "seat", spanish: "asiento", german: "der Sitz", russian: "место"},
    {english: "book", spanish: "libro", german: "das Buch", russian: "книга"},
    {english: "door", spanish: "puerta", german: "die Tür", russian: "дверь"},
    {english: "bed", spanish: "cama", german: "das Bett", russian: "кровать"},
    {english: "floor", spanish: "piso", german: "der Boden", russian: "пол"},
    {english: "roof", spanish: "techo", german: "das Dach", russian: "крыша"},
    {english: "wall", spanish: "pared", german: "die Wand", russian: "стена"},
    {english: "exit", spanish: "salida", german: "der Ausgang", russian: "выход"},
  ];
  const vLanguage = [
    {english: "language", spanish: "el idioma", german: "die Sprache", swedish: "ett språk", russian: "язык"},
    {english: "word", spanish: "la palabra", german: "das Wort", swedish: "ett ord", russian: "слово"},
    {english: "sentence", spanish: "la frase", german: "der Satz", swedish: "en mening", russian: "предложение"},
    {english: "spanish", spanish: "español", german: "Spanisch", swedish: "spanska", russian: "испанский"},
    {english: "english", spanish: "inglés", german: "Englisch", swedish: "engelsk", russian: "английский"},
    {english: "russian", spanish: "ruso", german: "Russisch", swedish: "ryska", russian: "русский"},
    {english: "german", spanish: "alemán", german: "Deutsch", swedish: "tyska", russian: "Немецкий"},
    {english: "arabic", spanish: "árabe", german: "Arabisch", swedish: "arabiska", russian: "арабский"},
  ];
  const vFamily = [
    {english: "dad", spanish: "padre", german: "der Papa", swedish: "en pappa", russian: "па́па"},
    {english: "mom", spanish: "madre", german: "die Mama", swedish: "en mamma", russian: "ма́ма"},
    {english: "sister", spanish: "hermana", german: "die Schwester", swedish: "en syster", russian: "сестра́"},
    {english: "brother", spanish: "hermano", german: "der Bruder", swedish: "en bror", russian: "брат"},
    {english: "grandpa", spanish: "abuelo", german: "der Opa", swedish: "en farfar", russian: "дедушка"},
    {english: "grandma", spanish: "abuela", german: "die Oma", swedish: "en mormor", russian: "бабушка"},
    {english: "man", spanish: "hombre", german: "der Mann", swedish: "en man", russian: "мужчина"},
    {english: "woman", spanish: "mujer", german: "die Frau", swedish: "en kvinna", russian: "женщина"},
    {english: "kid", spanish: "niño", german: "das Kind", swedish: "ett barn", russian: "ребёнок"},
  ];
  const vMain = [
    {english: "there is/are", spanish: "hay", german: "...", swedish: "...", russian: "есть"},
    {english: "this/that is", spanish: "...", german: "das", swedish: "...", russian: "это"},
    {english: "hi", spanish: "hola", german: "hallo", swedish: "hej", russian: "привет"},
    {english: "yes", spanish: "sí", german: "ja", swedish: "ja", russian: "да"},
    {english: "no", spanish: "no", german: "nein", swedish: "nej", russian: "нет"},
    {english: "and", spanish: "y", german: "und", swedish: "och", russian: "и"},
    {english: "thanks", spanish: "gracias", german: "danke", swedish: "tack", russian: "Спасибо"},
    {english: "please", spanish: "por favor", german: "bitte", swedish: "snälla", russian: "пожалуйста"},
    {english: "here", spanish: "aquí", german: "hier", swedish: "här", russian: "здесь"},
    {english: "there", spanish: "alla", german: "dort", swedish: "där", russian: "там"},

    {english: "what", spanish: "qué", german: "was", swedish: "vad", russian: "что"},
    {english: "where", spanish: "dónde", german: "wo", swedish: "var", russian: "где"},
    {english: "why", spanish: "por qué", german: "warum", swedish: "varför", russian: "почему"},
    {english: "who", spanish: "quién", german: "wer", swedish: "vem", russian: "кто"},
    {english: "when", spanish: "cuando", german: "wenn", swedish: "när", russian: "когда"},
    {english: "how", spanish: "cómo", german: "wie", swedish: "hur", russian: "как"},

    {english: "with", spanish: "con", german: "mit", swedish: "med", russian: "с"},
    {english: "without", spanish: "sin", german: "ohne", swedish: "utan", russian: "без"},
    {english: "food", spanish: "comida", german: "das Essen", swedish: "en mat", russian: "еда"},
    {english: "water", spanish: "agua", german: "das Wasser", swedish: "ett vatten", russian: "вода"},
    {english: "money", spanish: "dinero", german: "das Geld", swedish: "en pengar", russian: "деньги"},
    {english: "house", spanish: "casa", german: "das Haus", swedish: "ett hus", russian: "дом"},
    {english: "phone", spanish: "celular", german: "das Telefon", swedish: "en telefon", russian: "телефон"},
    {english: "job", spanish: "trabajo", german: "die Arbeit", swedish: "ett jobb", russian: "работа"},
  ];
  const vPronouns = [
    {english: "I", spanish: "yo", german: "ich", swedish: "jag", russian: "Я"},
    {english: "you", spanish: "tú", german: "du", swedish: "du", russian: "ты"},
    {english: "you formal", spanish: "usted", german: "sie", swedish: "...", russian: "вы"},
    {english: "he", spanish: "él", german: "er", swedish: "han", russian: "он"},
    {english: "she", spanish: "ella", german: "sie", swedish: "hon", russian: "она"},
    {english: "it", spanish: "lo/la", german: "es", swedish: "det", russian: "оно"},
    {english: "we", spanish: "nosotros", german: "wir", swedish: "ci", russian: "Мы"},
    {english: "yall", spanish: "...", german: "ihr", swedish: "...", russian: "вы"},
    {english: "they", spanish: "ellos", german: "sie", swedish: "de", russian: "Они"},

    {english: "obj: me", spanish: "me", german: "...", swedish: "mig", russian: "меня"},
    {english: "obj: you", spanish: "te", german: "...", swedish: "dig", russian: "тебя"},
    {english: "obj: him", spanish: "lo", german: "...", swedish: "hans", russian: "eго"},
    {english: "obj: her", spanish: "la", german: "...", swedish: "hennes", russian: "eё"},
    {english: "obj: it", spanish: "lo", german: "...", swedish: "den/det", russian: "eго"},
    {english: "obj: us", spanish: "nos", german: "...", swedish: "oss", russian: "нас"},
    {english: "obj: yall", spanish: "...", german: "...", swedish: "er", russian: "вас"},
    {english: "obj: them", spanish: "les", german: "...", swedish: "dem", russian: "их"},

    {english: "my", spanish: "mi", german: "mein", swedish: "min/mitt", russian: "мой"},
    {english: "your", spanish: "tu", german: "dein", swedish: "din/ditt", russian: "твой"},
    {english: "his", spanish: "...", german: "sein", swedish: "hans", russian: "..."},
    {english: "her", spanish: "...", german: "ihr", swedish: "hennes", russian: "..."},
    {english: "its", spanish: "...", german: "sein", swedish: "dess", russian: "..."},
    {english: "his/her/it", spanish: "su", german: "...", swedish: "...", russian: "его"},
    {english: "our", spanish: "nuestro", german: "unser", swedish: "vår/vårt", russian: "наш"},
    {english: "yall's", spanish: "...", german: "euer", swedish: "...", russian: "ваш"},
    {english: "their", spanish: "su", german: "ihr", swedish: "deras", russian: "их"},
  ];
  const veeee = [
    {english: "thats why", spanish: "por eso", german: ""},
    {english: "once you", spanish: "una vez que", german: ""},
    {english: "", spanish: "", german: ""},
    {english: "", spanish: "", german: ""},
    {english: "", spanish: "", german: ""},
  ];
  const vEntertainment = [
    {english: "tv", spanish: "la tele", german: "das Fern"},
    {english: "sport", spanish: "deporte", german: "der Sport"},
    {english: "team", spanish: "equipo", german: "das Team"},
    {english: "music", spanish: "música", german: "die Musik"},
    {english: "song", spanish: "canción", german: "das Lied"},
    {english: "movie", spanish: "película", german: "der Film"},
    {english: "photo", spanish: "la foto", german: "das Foto"},
    {english: "message", spanish: "mensaje", german: "die Nachricht"},
  ];
  const vVerbs1 = [
    {english: "want", spanish: "querer (quier)", german: "wollen (will)", swedish: "vilija (vill)", russian: "хотеть"},
    {english: "need, have to", spanish: "necesitar", german: "müssen", swedish: "måste", russian: ""},
    {english: "eat", spanish: "comer", german: "essen", swedish: "äta", russian: "есть"},
    {english: "drink", spanish: "tomar |take|", german: "trinken", swedish: "dricka (dricker)", russian: "пить"},
    {english: "know", spanish: "saber", german: "wissen (weiß)", swedish: "veta (vet)", russian: ""},
    {english: "think", spanish: "pensar (piens)", german: "denken", swedish: "tänka (tänker)", russian: ""},
    {english: "remember", spanish: "recordar (recuer)", german: "denken", swedish: "minna (minns)", russian: ""},
    {english: "do, make", spanish: "hacer", german: "machen", swedish: "göra (gör)", russian: ""},
    {english: "give", spanish: "dar", german: "geben", swedish: "ge (ger)", russian: ""},
    {english: "take", spanish: "...", german: "nehmen", swedish: "ta (tar)", russian: ""},
    {english: "live", spanish: "vivir", german: "leben", swedish: "leva (lever)", russian: ""},
    {english: "live (reside)", spanish: "vivir", german: "leben", swedish: "bo (bor)", russian: ""},
    {english: "say/tell", spanish: "decir", german: "sagen", swedish: "säga (säger)", russian: ""},
    {english: "speak", spanish: "hablar", german: "sprechen", swedish: "tala (talar)", russian: ""},
    {english: "use", spanish: "usar", german: "benutzen", swedish: "använda (använder)", russian: ""},
    {english: "learn", spanish: "aprender", german: "lernen", swedish: "lära (lär sig)", russian: ""},
    {english: "practice", spanish: "praticar", german: "üben", swedish: "träna (tränar)", russian: ""},
    {english: "work", spanish: "trabajar", german: "arbeiten", swedish: "jobbar", russian: ""},
    {english: "have", spanish: "tener (tien)", german: "haben", swedish: "ha (har)", russian: ""},
    {english: "help", spanish: "ayudar", german: "helfen", swedish: "hjälpa (hjälper)", russian: ""},
    {english: "like", spanish: "gustar", german: "mögen", swedish: "gilla (gillar)", russian: ""},
    {english: "hear", spanish: "escuchar", german: "hören", swedish: "höra (hör)", russian: ""},
    {english: "able to", spanish: "poder (pon)", german: "können", swedish: "kan", russian: ""},
    {english: "see", spanish: "ver", german: "sehen", swedish: "ser", russian: ""},
    {english: "buy", spanish: "comprar", german: "kaufen", swedish: "köpa (köper)", russian: ""},
    {english: "sell", spanish: "vender", german: "verkaufen", swedish: "sälja (säljer)", russian: ""},
  ];
  const vVerbs2 = [
    {english: "sleep", spanish: "dormir (duer)", german: "schlafen"},
    {english: "drive", spanish: "manejar", german: "fahren"},
    {english: "clean", spanish: "limpiar", german: "sauber"},
    {english: "turn off", spanish: "prender", german: "machen an"},
    {english: "turn on", spanish: "apagar", german: "machen aus"},
    {english: "play", spanish: "jugar (jueg)", german: "spielen"},
    {english: "play (instrument)", spanish: "tocar |touch|", german: "..."},
    {english: "read", spanish: "leer", german: "lesen"},
    {english: "write", spanish: "escribir", german: "schreiben"},
    {english: "call", spanish: "llamar", german: "rufen"},
    {english: "draw", spanish: "dibujar", german: "zeichnen"},
    {english: "play", spanish: "jugar", german: "spielen"},
    {english: "play instrument", spanish: "tocar", german: "..."},
    {english: "dance", spanish: "bailar", german: "tanzen"},
    {english: "swim", spanish: "nadar", german: "schwimmen"},

    /*
    {english: "open", spanish: "abrir", german: "öffnen"},
    {english: "close", spanish: "cerrar", german: "schließen"},
    {english: "push", spanish: "empujar", german: "drücken"},
    {english: "pull", spanish: "jalar", german: "ziehen"},
    */
  ];
  const vVerbs3 = [ // modify somthing
    {english: "change", spanish: "cambiar", german: "ändern"},
    {english: "cut", spanish: "cortar", german: "schneiden"},
    {english: "break", spanish: "romper", german: "brechen"},
    {english: "fix", spanish: "arreglar", german: "reparieren"},
    {english: "burn", spanish: "quemar", german: "brennen"},
    {english: "fill", spanish: "llenar", german: "füllen"},
    {english: "take out/off", spanish: "sacar", german: "entfernen"},
    {english: "cover", spanish: "cubrir", german: "decken"},
  ];
  const SpanishVerbs = [
    {english: "subir", spanish: "go/turn up, climb"},
    {english: "bajar", spanish: "go/turn down, descend"},
    {english: "tomar", spanish: "drink, take"},
    {english: "hacer", spanish: "do, make"},
    {english: "querer (quier)", spanish: "want"},
    {english: "aprender", spanish: "learn"},
    {english: "montar", spanish: "Ride, Setup/PutTogether"},
    {english: "Ayudar", spanish: "help"},
  ];

const VocabDatabase = [
{name: "Main", 
    arr: [
        {name: "Main1", arr: vMain},
        {name: "Pronouns", arr: vPronouns},
        {name: "Numbers", arr: vNumbers},
        {name: "Colors",  arr: vColors},
        {name: "Fruit",  arr: vFruit},
        {name: "Time",  arr: vTime},
        {name: "Room",  arr: vRoom},
        {name: "Food",  arr: vFood},
    ]
},
{name: "People", 
    arr: [
        {name: "Family",  arr: vFamily},
        {name: "Body",  arr: vBody},
        {name: "Cloths",  arr: vCloths},
        {name: "World",  arr: vWorld},
        {name: "Language",  arr: vLanguage},
    ]
},
{name: "Nature", 
    arr: [
        {name: "Animals",  arr: vAnimals},
        {name: "Landscape",  arr: vLandscape},
        {name: "Weather",  arr: vWeather},
    ]
},
{name: "Verbs", 
    arr: [
        {name: "Verbs1",  arr: vVerbs1},
        {name: "Verbs2",  arr: vVerbs2},
        {name: "Verbs3",  arr: vVerbs3},
    ]
},
];
// german: in, auf, an, mit, von, zu, aus...



// Functions ---------------------
function getcurrentlangobj(){

    let aaaaaa = languagedatabase[0];
    languagedatabase.forEach(lll => {
        if(lll.name.toLowerCase() == localStorage.getItem('currentlang').toLowerCase()){aaaaaa = lll}
    })
    return aaaaaa;
}

function getcurrentvocablesson(){
    let bbbbb = VocabDatabase[0].arr[0];
    VocabDatabase.forEach(cat => {
        cat.arr.forEach(les => {
        if(les.name.toLowerCase() == localStorage.getItem('currentvocablesson').toLowerCase()){bbbbb = les};
    });
    })
    return bbbbb;
}

// Need to have <script src="https://code.responsivevoice.org/responsivevoice.js?key=j1WhBeQz"></script>
function getapivoice(){
    let currentlang = getcurrentlangobj().name;
    if(currentlang == "german"){currentlang = "deutsch"};
    if(currentlang == "hawaiian"){currentlang = "indonesian"};
let r = "";


responsiveVoice.getVoices().forEach(i => {
    if(i.name.toLowerCase().includes(currentlang)){r = i.name;}
})
return r;
}

function getcurrentlessonarr(){
let clssn = localStorage.getItem("currentgrammarlesson");
let r = getcurrentlangobj().lessonsobjs[0];

getcurrentlangobj().lessonsobjs.forEach(les => {
    if(les.name == clssn) {r = les.lesson}
})

console.log(`returned ${r}`);
return r;
}
// console.log(responsiveVoice.getVoices())
console.log(localStorage);