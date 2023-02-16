var langtolang = document.getElementById("langtolang");
var righttextarea = document.getElementById("righttextarea");

const Verbs = [ // Verb database ----------------------------------
        { english: "want", spanish: "querer" }, // irr
        { english: "make", spanish: "hacer" }, // irr
        { english: "do", spanish: "hacer" }, // irr
        { english: "can", spanish: "poder" }, // irr
        { english: "like", spanish: "gustarse" },
        { english: "need", spanish: "necesitar" },
        { english: "like", spanish: "gustarse" },
        { english: "work", spanish: "trabajar" },
        { english: "speak", spanish: "hablar" },
        { english: "talk", spanish: "hablar" },
        { english: "use", spanish: "usar" },
        { english: "ir", spanish: "go" }, // irr
        { english: "parar", spanish: "stop" },
        { english: "tener", spanish: "have" }, // irr
        { english: "ver", spanish: "see" }, // irr
        { english: "usar", spanish: "use" },
        { english: "sentirse", spanish: "feel" }, // irr
        { english: "learn", spanish: "aprender" }, // Knollage ----------
        { english: "understand", spanish: "entender" },
        { english: "know", spanish: "saber" }, // irr
        { english: "eat", spanish: "comer" }, // Food & Shop/Store -----------
        { english: "drink", spanish: "beber" },
        { english: "drink", spanish: "tomar" },
        { english: "take", spanish: "tomar" },
        { english: "wash", spanish: "lavar" },
        { english: "say", spanish: "decir" },
        { english: "find", spanish: "encontrar" },
        { english: "place", spanish: "poner" },
        { english: "walk", spanish: "caminar" },
        { english: "arrive", spanish: "llegar" },
        { english: "search", spanish: "buscar" },
        { english: "read", spanish: "leer" },
        { english: "swim", spanish: "nadar" },
    ]
    const Nouns = [ // Noun database ----------------------------------
        { english: "thing", spanish: "cosa" },
        { english: "something", spanish: "algo" },
        { english: "nothing", spanish: "nada" },
        { english: "all", spanish: "todo" },
        { english: "everything", spanish: "todo" },
        { english: "place", spanish: "lugar" },
        { english: "water", spanish: "agua" },
        { english: "food", spanish: "comida" },
        { english: "house", spanish: "casa" },
        { english: "bathroom", spanish: "ba�o" }, // House
        { english: "garbage", spanish: "basura" },
        { english: "window", spanish: "ventana" },
        { english: "door", spanish: "puerta" },
        { english: "wall", spanish: "pared" },
        { english: "floor", spanish: "piso" },
        { english: "roof", spanish: "techo" },
        { english: "people", spanish: "gente" }, // people
        { english: "friend", spanish: "amigo" },
        { english: "family", spanish: "familia" },
        { english: "dad", spanish: "padre" },
        { english: "mom", spanish: "madre" },
        { english: "dog", spanish: "perro" }, // animals
        { english: "cat", spanish: "gato" },
        { english: "body", spanish: "cuerpo" }, // Body Parts & cloths
        { english: "hand", spanish: "mano" },
        { english: "money", spanish: "dinero" }, // Store
        { english: "phone", spanish: "celular" },
        { english: "god", spanish: "dios" },
        { english: "church", spanish: "iglesia" },
        { english: "light", spanish: "luz" },
        { english: "path", spanish: "camino" },
        { english: "life", spanish: "vida" },
        { english: "work", spanish: "trabajo" },
        { english: "bag", spanish: "bolsa" },
        { english: "box", spanish: "caja" },
        { english: "bottle", spanish: "botella" },
        { english: "sign", spanish: "letrero" },
        { english: "picture", spanish: "foto" },
        { english: "name", spanish: "nombre" },
        { english: "number", spanish: "numero" },
        { english: "language", spanish: "idioma" }, // Language
        { english: "word", spanish: "palabra" },
        { english: "sentence", spanish: "oraci�n" },
        { english: "english", spanish: "ingl�s" },
        { english: "spanish", spanish: "espa�ol" },
        { english: "time", spanish: "tiempo" }, // Time
        { english: "year", spanish: "a�o" },
        { english: "month", spanish: "mes" },
        { english: "week", spanish: "semana" },
        { english: "day", spanish: "d�a" },
        { english: "night", spanish: "noche" },
        { english: "hour", spanish: "hora" },
        { english: "minute", spanish: "minuto" },
        { english: "second", spanish: "segundo" },
        { english: "world", spanish: "mundo" }, // World
        { english: "country", spanish: "pa�s" },
        { english: "city", spanish: "ciudad" },
        { english: "car", spanish: "carro" },
        { english: "plane", spanish: "avion" },
        { english: "boat", spanish: "bote" },
        { english: "building", spanish: "edificio" },
        { english: "neighborhood", spanish: "barrio" },
        { english: "road", spanish: "calle" },
        { english: "street", spanish: "calle" },
        { english: "flag", spanish: "bandera" },
        { english: "part", spanish: "parte" }, // Part
        { english: "book", spanish: "libro" },
    ]
    const Pronouns = [ // pronoun database ----------------------------------
        { english: "I", spanish: "yo" },
        { english: "you", spanish: "t�" },
        { english: "he", spanish: "�l" },
        { english: "she", spanish: "ella" },
        { english: "it", spanish: "lo" },
        { english: "we", spanish: "nosotros" },
        { english: "yall", spanish: "vosotros" },
        { english: "they", spanish: "ellos" },
        { english: "my", spanish: "mi" },
        { english: "your", spanish: "tu" },
        { english: "his/her", spanish: "su" },
        { english: "our", spanish: "nuestro" },
        { english: "y'alls", spanish: "vuestro" },
    ]
    const importantwords = [ // Common words database ----------------------------------
        { english: "yes", spanish: "s�" },
        { english: "no", spanish: "no" },
        { english: "and", spanish: "y" },
        { english: "or", spanish: "o" },
        { english: "this", spanish: "este" },
        { english: "that", spanish: "eso" },
        { english: "here", spanish: "aqu�" },
        { english: "there", spanish: "all�" },
        { english: "because", spanish: "porque" },
        { english: "aswell", spanish: "tambi�n" },
        { english: "too", spanish: "tambi�n" },
        { english: "with", spanish: "con" },
        { english: "without", spanish: "sin" },
        { english: "but", spanish: "pero" },
        { english: "who", spanish: "qui�n" },
        { english: "what", spanish: "qu�" },
        { english: "that", spanish: "que" },
        { english: "when", spanish: "cuando" },
        { english: "where", spanish: "d�nde" },
        { english: "why", spanish: "por qu�" },
        { english: "how", spanish: "c�mo" },
        { english: "if", spanish: "si" },
        { english: "more", spanish: "m�s" },
        { english: "less", spanish: "menos" },
        { english: "in", spanish: "en" },
        { english: "for", spanish: "para" },
        { english: "at", spanish: "a" },
        { english: "before", spanish: "antes de" },
        { english: "after", spanish: "despues de" },
        { english: "eventhough", spanish: "aunque" },
        { english: "still", spanish: "todav�a" },
        { english: "you're", spanish: "vas a" },
        { english: "in", spanish: "en" },
    ]

    const Adjectives = [ // Adjectives database ----------------------------------
        { english: "good", spanish: "bien" },
        { english: "bad", spanish: "malo" },
        { english: "every", spanish: "cada" },
        { english: "last", spanish: "ultimo" },
        { english: "new", spanish: "nuevo" },
        { english: "old", spanish: "viejo" },
        { english: "young", spanish: "joven" },
        { english: "best", spanish: "mejor" },
        { english: "worst", spanish: "peor" },
        { english: "easy", spanish: "f�cil" },
        { english: "hard", spanish: "dif�cil" },
        { english: "entire", spanish: "entero" },
        { english: "happy", spanish: "feliz" }, // Feelings
        { english: "sad", spanish: "triste" },
        { english: "red", spanish: "rojo" }, // Colors
        { english: "orange", spanish: "naranja" },
        { english: "yellow", spanish: "amarillo" },
        { english: "green", spanish: "verde" },
        { english: "blue", spanish: "azul" },
        { english: "white", spanish: "blanco" },
        { english: "black", spanish: "negro" },
        { english: "today", spanish: "hoy" }, // Time
        { english: "tomorrow", spanish: "ma�ana" },
        { english: "year", spanish: "a�o" },
        { english: "month", spanish: "mes" },
        { english: "day", spanish: "d�a" },
        { english: "noche", spanish: "noche" },
        { english: "hour", spanish: "hour" },
        { english: "minute", spanish: "minuto" },
        { english: "second", spanish: "segundo" },
        { english: "time", spanish: "vez" },
        { english: "lake", spanish: "lago" },

    ]
    const Adverbs = [ // Adverbs database ----------------------------------
        { english: "fast", spanish: "r�pido" },
        { english: "slow", spanish: "lento" },
        { english: "warm", spanish: "calor" },
    ]
    const sayings = [ // sayings & irregulars ----------------------------------
        { english: "there is", spanish: "hay" },
        { english: "there's", spanish: "hay" },
        { english: "there are", spanish: "hay" },
        { english: "whats up", spanish: "que tal" },
        { english: "thats why", spanish: "por eso" },
        { english: "that's why", spanish: "por eso" },
        { english: "the good thing about", spanish: "lo bueno de" },
        { english: "why", spanish: "por qu�" },
        { english: "por eso", spanish: "that's why" },
        { english: "o sea ", spanish: "in other words " },
        { english: "antes de", spanish: "before" },
        { english: "despues de", spanish: "after" },
        { english: "qu� hora es", spanish: "what time is it" },
        { english: "la hora de", spanish: "time to" },
    ]

    // Irregular Stuff ---------------------------------------------------------
    const verbsEnglishtoSpanishirregulars = [ // Irregular past tense database ----------------------------------
        ["ate", "comer"],
        ["said", "decir"],
        ["made", "hacer"],
        ["went", "ir"],
        ["took", "tomar"],
        ["came", "venir"],
        ["saw", "ver"],
        ["knew", "saber"],
        ["gave", "dar"],
        ["found", "encontrar"],
    ]
    const nounsEnglishtoSpanishirregulargender = [ // Irregular gendered nouns database ----------------------------------
        ["agua", "male"],
        ["mano", "female"],
        ["luz", "female"],
    ]
    // logic ------------
    class Word{
        constructor(english, spanish, pos){
            this.english = english;
            this.spanish = spanish;
            this.pos = pos
        }
        isdefarticle(){
            if(this.english == "the" || (this.spanish == "el" || this.spanish == "la" || this.spanish == "los" || this.spanish == "las")) { return true; }
            else {return false}
        }
        isindefarticle(){
            if (this.english == "a" || (this.spanish == "un" || this.spanish == "una" || this.spanish == "unos" || this.spanish == "unas" )){return true}
            else {return false}
        }
        hasito(){
            if (this.spanish.slice(-3) == "ito" || this.spanish.slice(-3) == "ita") { return true; } 
            else {return false}
        }
        isplural(){
            if (this.spanish.slice(-1) == "s" || this.spanish.slice(-2) == "es") { return true; }
            else {return false}
        }
    }
    let words = [];
 

function Translate() {
    var paragraphwords = document.getElementById("lefttextarea").value.toLowerCase().split(" "); // text the person typed in to array
    words = [];
    righttextarea.textContent = ""; // resets bottom textbox

    // SPANISH TO ENGLISH -------------------------------------------------------------------------------------------------------------------------------------------------
    if (langtolang.textContent == "Spanish to English") {// If Spanish to english  (dont need to know gender of noun,) ---------------------------------------------------------------------
        paragraphwords.forEach(w => {words.push(new Word("", w, ""))})

        // Search for words ---------------------------------------------- loops thru every word, sets the english word
        for (i = 0; i < words.length; i++){
        do { 
            // Plural, Ito, Articals...
            if(words[i].isdefarticle()) {words[i] = new Word("the", words[i].spanish, "article");}
            if(words[i].isindefarticle()) {words[i] = new Word("a", words[i].spanish, "article");}
            if(words[i].hasito() && words[i].isplural()) {
                words[i] = new Word("little "+ TranslateWord(Nouns, words[i].spanish.slice(0, -4)).english +"s", words[i].spanish, "little plural noun");
            }
            if(words[i].isplural()) {words[i] = new Word(TranslateWord(Nouns, words[i].spanish.slice(0, -1)).english +"s", words[i].spanish, "plural noun");}
            if(words[i].hasito()) {words[i] = new Word("little "+ TranslateWord(Nouns, words[i].spanish.slice(0, -3)).english, words[i].spanish, "noun");}
            

            // Basic words
            if (words[i].english == "") {words[i].english = TranslateWord(Nouns, words[i]);}
            if (words[i].english == "") {words[i].english = TranslateWord(Adjectives, words[i]);}
            if (words[i].english == "") {words[i].english = TranslateWord(Adverbs, words[i]);}
                if (words[i].english == "") {words[i].english = TranslateWord(importantwords, words[i]);}
           
        

            if (words[i].english == "") { words[i] = new Word(words[i].spanish, words[i].spanish, "")} // if english not found just set it to spanish word
        } while (words[i].english == "");
        }

        words.forEach(w => {
            var newspan = document.createElement('span');
            newspan.innerHTML = w.english + " "; newspan.title = w.spanish + "\n Parte de Speech: " + w.pos;
            righttextarea.appendChild(newspan);
            console.log(w.english + " = " + w.spanish + " (" + w.pos) + ")";
        })
        righttextarea.value = righttextarea.textContent.replace(/\s+/g, ' ').trim(); // Remove extra whitespaces
    }
}
    
function TranslateWord(table, word){
    var ee = ""
    table.forEach(w => {
        if(w.spanish == word.spanish) { ee = w.english; }
    })
    return ee;
}

// Conjugation
const VerbEndings = [
    {person: "i", presentar: "o", presenterir: "e", pastar: "e", pasterir: "i", imperfectar: "aba", conditional: "ia"},
    {person: "you", presentar: "as", presenterir: "es", pastar: "aste", pasterir: "iste", imperfectar: "abas", conditional: "ias"},
    {person: "he/she/it", presentar: "a", presenterir: "e", pastar: "o", pasterir: "io", imperfectar: "aba", conditional: "ia"},
    {person: "we", presentar: "amos", presenterir: "emos", pastar: "amos", pasterir: "emos", imperfectar: "abamos", conditional: "iamos"},
    {person: "they", presentar: "an", presenterir: "en", pastar: "aron", pasterir: "eron", imperfectar: "aban", conditional: "ian"},
]
function VerbEnding(infverb, person, tense){
var type = infverb.slice(-2); // ar/er/ir
var r = "";
if(type != "ar"){type = "erir"};
var verbstem = infverb.slice(0, -2);

VerbEndings.forEach(e => { if(e.person == person) {
    if(tense == "conditional" || tense == "future") {r = infverb + e[tense]}
    else {r = verbstem + e[tense + type]}
}});
if(infverb.slice(-2) == "ir"){r = r.replace("emos","imos");}
return r;
}
console.log(VerbEnding("trabajar", "we", "present"));