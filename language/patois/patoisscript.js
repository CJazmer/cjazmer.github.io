var langtolang = document.getElementById("langtolang");
var righttextarea = document.getElementById("righttextarea");
var lefttextarea = document.getElementById("lefttextarea");

let Verbs = [ // Verb database ----------------------------------
        { english: "read", patois: "riid"},
        { english: "is", patois: "a"}, // to be
        { english: "eat", patois: "nyam"},
    ]
    let VerbsPastIrr = [ // Verb database ----------------------------------
        { english: "said", patois: "say"},
        { english: "drank", patois: "drink"},
        { english: "ate", patois: "nyam"},
        { english: "made", patois: "make"}, 
        { english: "went", patois: "go"},
        { english: "took", patois: "take"},
        { english: "came", patois: "come"},
        { english: "saw", patois: "saw"},
        { english: "knew", patois: ""},
        { english: "got", patois: ""},
        { english: "gave", patois: ""},
        { english: "found", patois: ""},
        { english: "thought", patois: ""},
        { english: "told", patois: ""},
        { english: "became", patois: ""},
        { english: "showed", patois: ""},
        { english: "left", patois: ""},
        { english: "felt", patois: ""},
        { english: "went", patois: ""},
    ]
    let Nouns = [ // Noun database ----------------------------------
        { english: "thing", patois: "ting"},
        { english: "something", patois: "sumting"},
        { english: "nothing", patois: "nutten"},
        { english: "everything", patois: "everyting"},
        { english: "kind", patois: "kine"},
        { english: "money", patois: "frackles"},
        { english: "work", patois: "wuk"},
        { english: "light", patois: "lite"},
        { english: "food", patois: "bikkle"}, // Food & Drink
        { english: "water", patois: "wata"},
        { english: "orange", patois: "aringe"},
        { english: "banana", patois: "eeeee"},
        { english: "strawberry", patois: "eeeee"},
        { english: "candy", patois: "sweetie"},
        { english: "knife", patois: "ratchet"},
        { english: "butter", patois: "butta"},
        { english: "accent", patois: "speaky-spokey"}, // Language
        { english: "word", patois: "wod"},
        { english: "night", patois: "nite"}, // Time
        { english: "hour", patois: "iwah"},
        { english: "world", patois: "wurl"}, // World       
        { english: "car", patois: "cyar"},
        { english: "part", patois: "paat"},
    ]
    let Pronouns = [ // pronoun database ----------------------------------
        { english: "i", patois: "mi"},
        { english: "my", patois: "mi"},
        { english: "you", patois: "yu"},
        { english: "your", patois: "yu"},
        { english: "he", patois: "im"},
        { english: "his", patois: "im"},
        { english: "him", patois: "im"},
        { english: "she", patois: "har"},
        { english: "her", patois: "har"},
        { english: "we", patois: "wi"},
        { english: "our", patois: "wi"},
        { english: "yall", patois: "unu"},
        { english: "yalls", patois: "unu"},
        { english: "they", patois: "dem"},
        { english: "their", patois: "dem"},
        
        { english: "im", patois: "mi"},
        { english: "i'm", patois: "mi"},
        { english: "youre", patois: "yu"},
        { english: "you're", patois: "yu"},
        { english: "were", patois: "wi"},
        { english: "we're", patois: "wi"},
        { english: "theyre", patois: "wi"},
        { english: "they're", patois: "wi"},
    ]
    let Important = [ // Common words database ----------------------------------
        { english: "yes", patois: "ya"},
        { english: "no", patois: "no"},
        { english: "the", patois: "di"},
        { english: "to", patois: "fi"},
        { english: "and", patois: "an"},
        { english: "or", patois: "ar"},
        { english: "this", patois: "dis"},
        { english: "that", patois: "dat"},
        { english: "here", patois: "hi"},
        { english: "there", patois: "de"},
        { english: "will", patois: "wi"},
        { english: "are", patois: "a"},
        { english: "very", patois: "well"},
        { english: "because", patois: "bikaaz"},
        { english: "with", patois: "wid"},
        { english: "without", patois: "widout"},
        { english: "but", patois: "buh"},
        { english: "who", patois: "ahuu"}, // Questions
        { english: "what", patois: "wa"},
        { english: "when", patois: "wen"},
        { english: "where", patois: "weh"},
        { english: "why", patois: "wa mek"},
        { english: "how", patois: "how"},
        { english: "if", patois: "si"},
        { english: "more", patois: "m�s"},
        { english: "less", patois: "menos"},
        { english: "in", patois: "en"},
        { english: "for", patois: "para"},
        { english: "at", patois: "a"},
        { english: "before", patois: "antes de"},
        { english: "after", patois: "despues de"},
        { english: "eventhough", patois: "aunque"},
        { english: "still", patois: "todav�a"},
        { english: "don't", patois: "no"}, // Tenses
        { english: "dont", patois: "no"},
        { english: "dont", patois: "no"},
        { english: "will", patois: "wi"},
    ]

    let Adjectives = [ // Adjectives database ----------------------------------
        { english: "good", patois: "bien"},
        { english: "bad", patois: "malo"},

    ]
    let Adverbs = [ // Adverbs database ----------------------------------
        { english: "fast", patois: "r�pido"},
        { english: "slow", patois: "lento"},
        { english: "warm", patois: "calor"},
    ]
    let Sayings = [ // sayings & irregulars ----------------------------------
        { english: "going to", patois: "a go"},
        { english: "whats up", patois: "waguan"},

    ]

function Translate() {
    righttextarea.textContent = ""; // reset right textbox

    // ENGLISH TO PATOIS -------------------------------------------------------------------------------------------------------------------------------------------------
    if (langtolang.textContent == "English to Patois") {// If Spanish to english  (dont need to know gender of noun,) ---------------------------------------------------------------------
        var paragraph = lefttextarea.value; // get text from left textbox (text the person typed in)
        paragraph = paragraph.toLowerCase()
        Sayings.forEach(saying => { if (paragraph.includes(saying.english)) { paragraph = paragraph.replace(saying.english, saying.patois);} })
        var ogparagraphwords = paragraph.split(" ");
        var paragraphwords = [{ english: ".", patois: ".", partofspeech: ""}]; // the main array thats translated
        ogparagraphwords.forEach(word => { paragraphwords.push({ english: word, patois: "", partofspeech: "other" });})  // fills new array based on old one



     paragraphwords.forEach(word => {
      TranslateWord(word, Nouns, "noun");
      TranslateWord(word, Verbs, "verb");
      TranslateWord(word, Important, "other");
      TranslateWord(word, Pronouns, "pronoun");

      if (word.english == "dont" || word.english == "don't") {word.patois = "no", word.partofspeech = "negation";}
      VerbsPastIrr.forEach(verb => {if(word.english == verb.english) {word.patois = "did " + verb.patois; word.partofspeech = "verb";}})
      if (word.patois == "") {word.patois = word.english;}
      if (word.english.slice(-3) == "ing") {word.english = word.english.slice(0, -3); word.patois = "a "
         TranslateWord(word, Verbs, "verb (progressive)"); word.english += "ing"; // ing ending
        }


     })





        paragraphwords.shift(); // removes . at start
        paragraphwords.forEach(word => {
            var newspan = document.createElement('span');
            newspan.innerHTML = word.patois + " "; newspan.title = word.english + "\n Part of Speech: " + word.partofspeech;
            righttextarea.appendChild(newspan);
            console.log(word.patois + " = " + word.english + " (" + word.partofspeech + ")");
        })
        righttextarea.value = righttextarea.textContent.replace(/\s+/g, ' ').trim(); // Remove extra whitespaces
    
    }
}

    if (langtolang == "Patois to English") {


        var x = 0;
        while (x < paragraphwords.length) { righttextarea.value += paragraphwords[x] + " "; x++ }
        righttextarea.value = righttextarea.value.replace(/\s+/g, ' ').trim(); // Remove extra whitespaces
    }

    function Flip() { // Flip Languages ----------------------------------------
        if (langtolang.textContent == "English to Patois") { langtolang.textContent = "Patois to English"; }
        else { langtolang.textContent = "English to Patois"; }

        var temp = lefttextarea.textContent;
        lefttextarea.textContent = righttextarea.textContent; // swaps text in textboxes
        righttextarea.textContent = temp;
    }
    function TranslateWord(word, table, partofspeech) {
        if(word.patois.length < 3) {table.forEach(tableword => { if(word.english == tableword.english) {word.patois += tableword.patois; word.partofspeech = partofspeech} })}
    }
