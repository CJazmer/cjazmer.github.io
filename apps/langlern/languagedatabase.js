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
    {english: `his big house and her house`, otherlang: `sein großes Haus und ihr Haus`, hint: ``},

    {english: `is your house here?`, otherlang: `Ist dein Haus hier?`, hint: `flip it`},
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
}
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
    {name: `german`, langfam: `Germanic`, colors:clrsarr[1], lessonsobjs: Germanlessonobjs, audioindex: 3},
    {name: `swedish`, langfam: `Germanic (north)`, colors:clrsarr[1], lessonsobjs: null, audioindex: 3},
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
  {english: "0", spanish: "cero", portuguese: "zero", russian: "нуль", polish: "zero",       german: "null", swahili: "sifuri", lakota: "0???", chinese: "...", french: "zéro"},
  {english: "1", spanish: "uno", portuguese: "um", russian: "один", polish: "jeden",         german: "eins", swahili: "moja", lakota: "waŋží", chinese: "一", french: "un"},
  {english: "2", spanish: "dos", portuguese: "dois", russian: "два", polish: "dwa",          german: "zwei", swahili: "mbili", lakota: "núŋpa", chinese: "二", french: "deux"},
  {english: "3", spanish: "tres", portuguese: "tres", russian: "три", polish: "trzy",        german: "drei", swahili: "tatu", lakota: "yámni", chinese: "三", french: "trois"},
  {english: "4", spanish: "cuatro", portuguese: "quatro", russian: "четыре", polish: "cztery",german: "vier", swahili: "nne", lakota: "tópa", chinese: "四", french: "quatre"},
  {english: "5", spanish: "cinco", portuguese: "cinco", russian: "пять", polish: "piec",     german: "fünf", swahili: "tano", lakota: "záptaŋ", chinese: "五", french: "cinq"},
  {english: "6", spanish: "seis", portuguese: "seis", russian: "шесть", polish: "szesc",     german: "sechs", swahili: "sita", lakota: "šákpe", chinese: "六", french: "six"},
  {english: "7", spanish: "siete", portuguese: "sete", russian: "Семь", polish: "siedem",    german: "sieben", swahili: "saba", lakota: "šakówiŋ", chinese: "七", french: "sept"},
  {english: "8", spanish: "ocho", portuguese: "oito", russian: "вóсемь", polish: "osiem",    german: "acht", swahili: "nane", lakota: "šaglógaŋ", chinese: "八", french: "huit"},
  {english: "9", spanish: "nueve", portuguese: "nove", russian: "девять", polish: "dziewiec",german: "neun", swahili: "tisa", lakota: "napčíyuŋka", chinese: "九", french: "neuf"},
  {english: "10", spanish: "dies", portuguese: "dez", russian: "десять", polish: "dziesiec", german: "zehn", swahili: "kumi", lakota: "wikčémna", chinese: "十", french: "dix"}
]
const vAnimals = [
    {english: "dog", spanish: "perro", german: "der Hund", russian: "собака (sabaka)", hawaiian: "ʻīlio", oneida: "é·lhal", lakota: "šúŋka", arabic: "كَلْب"},
    {english: "cat", spanish: "gato", german: "die Katze", russian: "кот", hawaiian: "pōpoki", oneida: "takó·s (dagosh)", lakota: "igmú", arabic: "قِط"},
    {english: "bird", spanish: "pajaro", german: "der Vogel", russian: "птица", hawaiian: "manu", oneida: "otsiˀtʌ́haˀ (ojitaha)", lakota: "ziŋtkála", arabic: "طائ"},
    {english: "fish", spanish: "pez", german: "der Fisch", russian: "рыба", hawaiian: "i'a", oneida: "kʌ́tsi (gaji)", lakota: "hoǧáŋ", arabic: "سَمَك"},
    {english: "chicken", spanish: "pollo", german: "das Huhn", russian: "курица", hawaiian: "moa", oneida: "kitkit", lakota: "?", arabic: "دَجاج"}
  ]
  const vFruit = [
    {english: "apple", spanish: "manzana", portugese: "", polish: "jabłko", russian: "яблоко", hawaiian: "", german: "der Apfel", arabic: "تُفّاح"},
    {english: "banana", spanish: "banana", portugese: "", polish: "banan", russian: "банан", hawaiian: "", german: "die Banane", arabic: "مَوز"},
    {english: "cherry", spanish: "cereza", portugese: "", polish: "wiśnia", russian: "вишня", hawaiian: "", german: "die Kirsche", arabic: "كَرَز"},
    {english: "orange", spanish: "naranja", portugese: "", polish: "Pomarańczowy", russian: "апельсин", hawaiian: "", german: "die Orange", arabic: "بُرْتُقال"},
    {english: "strawberry", spanish: "fresa", portugese: "", polish: "truskawka", russian: "клубника", hawaiian: "", german: "die Erdbeere", arabic: "فَراولة"},
    {english: "watermelon", spanish: "sandía", portugese: "melancia", polish: "arbuz", russian: "арбуз", hawaiian: "", german: "die Wassermelone", arabic: "بَطّيخ"},    
  ]
  const vFood = [
    {english: "bread", spanish: "pan", german: "das Brot"},
    {english: "beer", spanish: "cerveza", german: "das Bier"},
    {english: "onion", spanish: "cebolla", german: "die Zwiebel"},
    {english: "cheese", spanish: "queso", german: "der Käse"},
    {english: "peppers", spanish: "pimientos", german: "der Pfeffer"},
    {english: "rice", spanish: "arroz", german: "der Reis"},
    {english: "sandwich", spanish: "sandwich", german: "das Sandwich"},
    {english: "salt", spanish: "sal", german: "das Salz"},
  ];
  const vLandscape = [
    {english: "plant", spanish: "planta", german: "die Pflanze", russian: "растение", hawaiian: "", lakota: "", oneida: "", arabic: ""},
    {english: "fire", spanish: "fuego", german: "das Feuer", russian: "огонь", hawaiian: "ahi", lakota: "pȟéta", oneida: "o·tsísteˀ", arabic: "نار"},
    {english: "sun", spanish: "sol", german: "die Sonne", russian: "солнце", hawaiian: "lā", lakota: "wí", oneida: "", arabic: "شَّمس"},
    {english: "moon", spanish: "luna", german: "der Mond", russian: "луна", hawaiian: "mahina", lakota: "haŋwí", oneida: "wehní·taleˀ (waynidale)", arabic: "قَمَر"},
    {english: "mountain", spanish: "montaña", german: "der Berg"},
    {english: "tree", spanish: "árbol", german: "der Baum"},
    {english: "leaf", spanish: "hoja", german: "das Blatt"},
    {english: "forest", spanish: "bosque", german: "der Wald"},
    {english: "sea", spanish: "mar", german: "das Meer"},
    {english: "star", spanish: "la estrella", german: "der Stern", russian: "звезда", hawaiian: "hoku", lakota: "wičháȟpi", oneida: "", arabic: "نَجْم"},
  ]
  const vWeather = [
    {english: "sky", spanish: "el cielo", german: "der Himmel", russian: "небо", hawaiian: "lani", lakota: "maȟpíya", oneida: "", arabic: "سَماء"},
    {english: "cloud", spanish: "la nube", german: "die Wolke"},
    {english: "storm", spanish: "la tormenta", german: "der Sturm"},
    {english: "rain", spanish: "la lluvia", german: "der Regen"},
    {english: "snow", spanish: "la nieve", german: "der Schnee"},
  ];
  const vWorld = [
    {english: "people", spanish: "gente", german: "die Leute"},
    {english: "country", spanish: "país", german: "das Land"},
    {english: "flag", spanish: "bandera", german: "die Flagge"},
    {english: "city", spanish: "ciudad", german: "die Stadt"},
    {english: "building", spanish: "edificio", german: "das Gebäude"},
    {english: "neighborhood", spanish: "barrio", german: "die Nachbarschaft"},
    {english: "street", spanish: "calle", german: "die Straße"},
    {english: "car", spanish: "carro", german: "das Auto"},
    {english: "boat", spanish: "bote", german: "das Boot"},
    {english: "plane", spanish: "avión", german: "das Flugzeug"},
    {english: "sidewalk", spanish: "banqueta", german: "der Gehweg"},
    {english: "yard", spanish: "patio", german: "das Yard"},
  ];
  const vBody = [
    {english: "head", spanish: "cabeza", german: "der Kopf"},
    {english: "hair", spanish: "pelo", german: "die Haare"},
    {english: "eye", spanish: "ojo", german: "das Auge"},
    {english: "arm", spanish: "brazo", german: "der Arm"},
    {english: "leg", spanish: "pierna", german: "das Bein"},
    {english: "foot", spanish: "pie", german: "der Fuß"},
  ]
  const vCloths = [
    {english: "cloths", spanish: "ropa", portugese: "roupa", german: "die Kleidung"},
    {english: "shirt", spanish: "camiseta", portugese: "camisa", german: "das Hemd"},
    {english: "pants", spanish: "pantalones", portugese: "calça", german: "die Hose"},
    {english: "shoe", spanish: "zapato", portugese: "sapato", german: "der Schuh"},
  ];
  const vTime = [
    {english: "today", spanish: "hoy", german: "heute"},
    {english: "tomorrow", spanish: "mañana", german: "morgen"},
    {english: "yesterday", spanish: "ayer", german: "gestern"},
    {english: "now", spanish: "ahora", german: "jetzt"},
    {english: "later", spanish: "más tarde", german: "später"},
    {english: "again", spanish: "otra vez", german: "wieder"},

    {english: "second", spanish: "segundo", german: "der Zweite"},
    {english: "minute", spanish: "minuto", german: "die Minute"},
    {english: "hour", spanish: "hora", german: "die Stunde"},
    {english: "day", spanish: "día", german: "der Tag"},
    {english: "night", spanish: "noche", german: "die Nacht"},
    {english: "week", spanish: "semana", german: "die Woche"},
    {english: "month", spanish: "mes", german: "der Monat"},
    {english: "year", spanish: "año", german: "das Jahr"},

    {english: "spring", spanish: "primavera", german: "der Frühling"},
    {english: "summer", spanish: "verano", german: "der Sommer"},
    {english: "fall", spanish: "otoño", german: "der Herbst"},
    {english: "winter", spanish: "invierno", german: "der Winter"},

  ];
  const vRoom = [
    {english: "room", spanish: "cuarto", german: "das Zimmer"},
    {english: "table", spanish: "mesa", german: "der Tisch"},
    {english: "chair", spanish: "silla", german: "der Stuhl"},
    {english: "seat", spanish: "asiento", german: "der Sitz"},
    {english: "book", spanish: "libro", german: "das Buch"},
    {english: "door", spanish: "puerta", german: "die Tür"},
    {english: "bed", spanish: "cama", german: "das Bett"},
    {english: "floor", spanish: "piso", german: "der Boden"},
    {english: "roof", spanish: "techo", german: "das Dach"},
    {english: "wall", spanish: "pared", german: "die Wand"},
    {english: "exit", spanish: "salida", german: "der Ausgang"},
  ];
  const vFamily = [
    {english: "dad", spanish: "padre", german: "der Papa"},
    {english: "mom", spanish: "madre", german: "die Mama"},
    {english: "sister", spanish: "hermana", german: "die Schwester"},
    {english: "brother", spanish: "hermano", german: "der Bruder"},
    {english: "grandpa", spanish: "abuelo", german: "der Opa"},
    {english: "grandma", spanish: "abuela", german: "die Oma"},
    {english: "man", spanish: "hombre", german: "der Mann"},
    {english: "woman", spanish: "mujer", german: "die Frau"},
    {english: "kid", spanish: "niño", german: "das Kind"},
  ];
  const vMain = [
    {english: "there is/are", spanish: "hay", german: "...", russian: "есть"},
    {english: "this/that is", spanish: "...", german: "das", russian: "это"},
    {english: "hi", spanish: "hola", german: "hallo"},
    {english: "yes", spanish: "sí", german: "ja"},
    {english: "no", spanish: "no", german: "nein"},
    {english: "and", spanish: "y", german: "und"},
    {english: "thanks", spanish: "gracias", german: "danke"},
    {english: "please", spanish: "por favor", german: "bitte"},
    {english: "here", spanish: "aquí", german: "hier"},
    {english: "there", spanish: "alla", german: "dort"},

    {english: "what", spanish: "qué", german: "was"},
    {english: "where", spanish: "dónde", german: "wo"},
    {english: "why", spanish: "por qué", german: "warum"},
    {english: "when", spanish: "cuando", german: "wenn"},
    {english: "how", spanish: "cómo", german: "wie"},

    {english: "with", spanish: "con", german: "mit"},
    {english: "without", spanish: "sin", german: "ohne"},
    {english: "food", spanish: "comida", german: "das Essen"},
    {english: "water", spanish: "agua", german: "das Wasser"},
    {english: "money", spanish: "dinero", german: "das Geld"},
    {english: "house", spanish: "casa", german: "das Haus"},
    {english: "phone", spanish: "celular", german: "das Telefon"},
    {english: "job", spanish: "trabajo", german: "die Arbeit"},
  ];

const VocabDatabase = [
{name: "Main", 
    arr: [
        {name: "Main1", arr: vMain},
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
    ]
},
{name: "Nature", 
    arr: [
        {name: "Animals",  arr: vAnimals},
        {name: "Landscape",  arr: vLandscape},
        {name: "Weather",  arr: vWeather},
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