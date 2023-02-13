var righttextarea = document.getElementById("righttextarea");
var langtolang = document.getElementById("langtolang");

let Verbs = [ // Verb database ----------------------------------
{ english: "love", oneida: "noluhkwa"}, // Common ------------------------
{ english: "admire", oneida: "nuhwe"},
{ english: "have", oneida: "ayʌ"},
{ english: "boil", oneida: "o"},
{ english: "drink", oneida: "hnekihl"},
{ english: "want", oneida: ""},
{ english: "like", oneida: "nuhwe"}, // se is added at end oftenly
{ english: "need", oneida: ""},
{ english: "eat", oneida: "k"},
{ english: "drink", oneida: ""},
{ english: "speak", oneida: ""},
{ english: "can", oneida: ""},
{ english: "learn", oneida: ""},
{ english: "understand", oneida: ""},
{ english: "know", oneida: "nuhte"},
{ english: "do", oneida: ""},
{ english: "make", oneida: ""},
{ english: "go", oneida: ""},
{ english: "stop", oneida: ""},
{ english: "work", oneida: ""},
{ english: "have", oneida: ""},
{ english: "see", oneida: ""},
{ english: "use", oneida: ""},
{ english: "feel", oneida: ""},
{ english: "happen", oneida: ""},
{ english: "listen", oneida: ""},
{ english: "hear", oneida: ""},
{ english: "live", oneida: ""},
{ english: "wait", oneida: ""},
]
// Irregular English he/she present  has = have, does = do, 
// Irregular Past tense english 
let Nouns = [ // Noun database Ka/O at the beginning is just prefix, these are the stems----------------------------------
{ english: "water", oneida: "hne·ka", oneidaprefix: "o" }, // Water & Food -----------------------------------
{ english: "food", oneida: "khwa", oneidaprefix: "ká" }, //khwa = bit of food. khwak = food variety
{ english: "ice", oneida: "wis", oneidaprefix: "o" },
{ english: "beer", oneida: "tsí·tsi", oneidaprefix: "o" },
{ english: "meat", oneida: "ˀwahl", oneidaprefix: "o" },

{ english: "plant", oneida: "hut", oneidaprefix: "o" }, // Plants and fruits
{ english: "car", oneida: "sleht", oneidaprefix: "kʌ́" },


{ english: "fish", oneida: "itsy", oneidaprefix: "kʌ́" },
{ english: "corn", oneida: "nʌst", oneidaprefix: "o" }, // Food -------------
{ english: "stone", oneida: "nʌy", oneidaprefix: "o" },
{ english: "word", oneida: "wʌn", oneidaprefix: "o" },
{ english: "sound", oneida: "wʌn", oneidaprefix: "o" },
]
// -------------- Pronouns are start of verb ----------------------------------------------------------
let pronounsobjective = [ // objective pronouns (Factual, Unbiased)  ----------------------------------
{ oneida: "wak", english: "i"},
{ oneida: "sa", english: "you"},
{ oneida: "lon", english: "they"}, // lon or loti
{ oneida: "lo", english: "he"},
{ oneida: "yako", english: "she/someone"},
]
let pronounssubjective = [ // subjective pronouns (Not sure, Opinion, What you think)  ----------------------------------
{ oneida: "k", english: "i"},
{ oneida: "s", english: "you"},
{ oneida: "la", english: "he"},
{ oneida: "yu", english: "she/someone"}, // yu or ye
{ oneida: "lu", english: "they"}, // lu or lati
]
let pronouns = [ // normal pronouns (Not necessary)  ----------------------------------
{ oneida: "tho", english: "i"},
{ oneida: "Kátsha", english: "you"},
{ oneida: "Hao", english: "yall"},
]
let pronouns2people = [ // 2 people pronouns (oneida to subject pronoun to object pronoun)  ----------------------------------
{ oneida: "ku", english1: "i", english2: "you" },
{ oneida: "i", english1: "i", english2: "him" },
{ oneida: "khey", english1: "i", english2: "her" },
{ oneida: "sk", english1: "you", english2: "me" },
{ oneida: "she", english1: "you", english2: "her/them" },
{ oneida: "hets", english1: "you", english2: "him" },
{ oneida: "shako", english1: "he", english2: "her" },
{ oneida: "shukwa", english1: "he", english2: "us" },
{ oneida: "luwa", english1: "she", english2: "him" },
{ oneida: "ku", english1: "i", english2: "you" },
]
let possessivepronouns = [ // subjective pronouns (Not sure, Opinion, What you think)  ----------------------------------
{ english: "my", oneidaAstem: "akwa", oneidaCstem: "ak" },
{ english: "your", oneidaAstem: "sa", oneidaCstem: "sa" },
{ english: "his", oneidaAstem: "lao", oneidaCstem: "lao" },
{ english: "her", oneidaAstem: "ako", oneidaCstem: "ako" },
{ english: "their", oneidaAstem: "laon", oneidaCstem: "laoti" },


]
let importantwords = [ // Common words database ----------------------------------
{ english: "hi", oneida: "shekoli"},
{ english: "hello", oneida: "shekoli"},
{ english: "yes", oneida: "hʌ"},
{ english: "no", oneida: "tah"},
{ english: "and", oneida: "okháleˀ"},
{ english: "or", oneida: "eeeee"},
{ english: "this", oneida: "eeeee"},
{ english: "that", oneida: "eseeeeeo"},
{ english: "here", oneida: "eeeee"},
{ english: "there", oneida: "eeeee"},
{ english: "because", oneida: "eeeee"},
{ english: "but", oneida: "nok tsiˀ"},

]

let states = [ // states database ----------------------------------
{ english: "good", oneida: "iya" },
{ english: "bad", oneida: "aksʌ", },
{ english: "new", oneida: "ase", },
{ english: "old", oneida: "akayu", },
{ english: "young", oneida: "young", },
{ english: "best", oneida: "best", },
{ english: "worst", oneida: "worst", },
{ english: "big", oneida: "owanʌ", },
{ english: "small", oneida: "a", },
{ english: "long", oneida: "es", },
{ english: "short", oneida: "esha", },
{ english: "tall", oneida: "a", },
{ english: "short", oneida: "a", }, 
]
let AdverbsEnglishtoSpanish = [ // Adverbs database ----------------------------------
{ english: "fast", oneida: "rápido"},
{ english: "slow", oneida: "lento"},
{ english: "warm", oneida: "calor"},
]

let sayings = [ // sayings & irregulars ----------------------------------
{ english: "there is", oneida: "hay"},
{ english: "there's", oneida: "hay"},
]
let vowels = ["a", "e", "i", "o", "u", "ʌ"]


function Translate() {
    document.getElementById("righttextarea").textContent = "";   // reset right textbox
    var paragraph = document.getElementById("lefttextarea").value.toLowerCase() + " ."; // get text from left textbox (text the person typed in)
    var ogparagraphwords = paragraph.split(" ");
    let paragraphwords = [{ english: "", oneida: "", partofspeech: "" }]; // Splits paragraph using spaces. Puts each word in the array
    ogparagraphwords.forEach(word => { paragraphwords.push({ english: word, oneida: "", partofspeech: "other"}) })

    
    // ENGLISH TO ONEIDA -------------------------------------------------------------------------------------------------------------------------------------------------
    if (langtolang.textContent == "English to Oneida") { 
        
            // Search for Word and translate it & get info  ------------------------------------------------------------------------------------------
            paragraphwords.forEach(word => {
            TranslatetoOneida(word, Nouns, "noun");
            TranslatetoOneida(word, Verbs, "verb");
            TranslatetoOneida(word, pronouns, "pronoun");
            if (word.oneida == "") {word.oneida = word.english;}
            if (word.english == "dont" || word.english == "doesnt" || word.english == "don't" || word.english == "doesn't") 
            {word.partofspeech = "negation"; word.oneida = "te"}
        })

        if (paragraphwords.includes({ english: "fish", oneida: "itsy", partofspeech: "noun"})) { console.log("theres a pvp")}
        
        // rearange words section
        // if (paragraphwords[1] == [{english: "fish", oneida: "itsy", partofspeech: "noun"}]) {console.log("YESSSS")}
        // else {console.log("fish, itsy, noun is not " + paragraphwords[1].english + paragraphwords[1].oneida + paragraphwords[1].partofspeech)}
        // console.log("here: " + paragraphwords[1].value + paragraphwords[1].id)


        
        // loop thru items that can straight up be deleted like the or a
         i = 0; 
        while (i < paragraphwords.length) { // When Found & know the Part of Speech -----------------------------------------------------
            var w = paragraphwords[i]; var wb = paragraphwords[i-1]; var wa = paragraphwords[i+1];
            
            if (w.partofspeech == "noun") { // Noun ------------------------------------------- i eat big fruit = i fruit big eat
               if (wb.partofspeech == "possessivepronoun") { w.oneida = wb.oneida + "-" + w.oneida; w.english = paragraphwords[i-1].english + "-" + w.english; w.partofspeech = "possessivepronoun-noun"; paragraphwords.splice(i - 1, 1);} // Attach the pronoun from word before on the this current word then delete that word before.
               if (wb.partofspeech == "pronoun-verb") { wb.oneida = wb.oneida.replace("-", "-" + w.oneida + "-"); wb.english = wb.english.replace("-", "-" + w.english + "-"); wb.partofspeech = "pronoun-noun-verb"; paragraphwords.splice(i, 1); }
               if (wb.partofspeech == "negation-pronoun-verb") { console.log(wb.oneida.substring(/noluhkwa/g));      wb.oneida = wb.oneida.replace(wb.oneida.substring(/-\w*$/), "-" + w.oneida + "-"); wb.english = wb.english.replace("-\*$", "-" + w.english + "-"); wb.partofspeech = "negation-pronoun-noun-verb"; paragraphwords.splice(i, 1);}
               if (wb.partofspeech == "pronoun-state-verb") { wb.partofspeech = "pronoun-noun-state-verb"; wb.oneida = wb.oneida.replace("-", "-" + w.oneida + "-"); wb.english = wb.english.replace("-","-"+w.english+"-"); paragraphwords.splice(i, 1); i--; wb = paragraphwords[i-1]}
            }
            else if (w.partofspeech == "verb") { // Verb ----------------------------------------------------------
                // Verb order negiative-Pronoun-Noun-Verb-Partical
                // If Negation dont/not
                var negation = false;
                if (wb.partofspeech == "negation") { paragraphwords.splice(i - 1, 1); negation = true; i--; wb = paragraphwords[i-1]; } // delete row and i -1 because of the shift in rows
                // 2 people pronouns
                if (wb.partofspeech === "pronoun" && wa.partofspeech === "pronoun") {
                    for (var j = 0, len = pronouns2people.length; j < len; j++) {
                        if (wb.english == pronouns2people[j].english1 && wa.english == pronouns2people[j].english2) { w.oneida = pronouns2people[j].oneida + "-" + w.oneida; w.partofspeech = "pronoun-verb"; w.english = "(" + pronouns2people[j].english1 + " to " + pronouns2people[j].english2 + ")-" + w.english; break; }
                    }
                    if (wb.partofspeech == "pronoun") { paragraphwords.splice(i - 1, 1); i--; wb = paragraphwords[i-1]; }
                    if (wa.partofspeech == "pronoun") { paragraphwords.splice(i + 1, 1); }
                }
                else {   // 1 person pronouns
                    if (document.getElementById("checkboxobjective").checked) { // If Factual & Unbaised
                        pronounsobjective.forEach(po => { 
                            if (wb.english == po.english) { w.oneida = po.oneida + "-" + w.oneida; w.partofspeech = "pronoun-verb"; w.english = po.english + "-" + w.english; paragraphwords.splice(i - 1, 1); i--; } // Remove/splice extra pronoun
                        })
                    }
                    else { // If Opinion 
                        for (var j = 0, len = pronounsobjective.length; j < len; j++) {
                            if (wb.english == pronounssubjective[j].english) { w.oneida = pronounssubjective[j].oneida + "-" + w.oneida; w.partofspeech = "pronoun-verb"; w.english = pronounssubjective[j].english + "-" + w.english; paragraphwords.splice(i - 1, 1); i--; break; } // Remove/splice extra pronoun
                        }
                    } // like needs opionion prefixes
                }
                if (negation) { w.oneida = "te-" + w.oneida; w.english = "no-" + w.english; w.partofspeech = "negation-" + w.partofspeech; }
            }
            else if (w.partofspeech == "state") {
                if (wb.partofspeech == "pronoun-verb") { wb.oneida = wb.oneida.replace("-", "-" + w.oneida + "-"); wb.partofspeech = "pronoun-state-verb"; w.oneida = w.oneida.replace("-","-"+w.oneida+"-"); wb.english = wb.english.replace("-", "-" + w.english + "-"); paragraphwords.splice(i, 1); i--;  }   // i-fish-eat = i-fish-big-eat
                
            }

            // if oneida noun is alone it needs a Ka or O prefix
            if (w.partofspeech == "noun") {Nouns.forEach(n => {if(n.oneida == w.oneida) {w.oneida = n.oneidaprefix + w.oneida}})}

            i++;
        }

          // if (pronoun,noun next to eachother) { }
          // if (pronoun,noun,pronoun next to eachother) { }
   
        

        paragraphwords.shift(); // remove . at start
        paragraphwords.forEach(word => {
            var newspan = document.createElement('span');
            newspan.innerHTML = word.oneida + " "; newspan.title = word.english + "\n Part of Speech: " + word.partofspeech;
            righttextarea.appendChild(newspan);
            console.log(word.oneida + " = " + "word.english" + "(" + word.partofspeech + ")");
        })
        righttextarea.value = righttextarea.textContent.replace(/\s+/g, ' ').trim(); // Remove extra whitespaces
    }
    console.log("----------------------------");

    // ONEIDA TO ENGLISH ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    if (langtolang.textContent == "Oneida to English") { 

    }    
}
function Flip() { // Flip Languages ----------------------------------------
        if (langtolang.textContent == "English to Oneida") { langtolang.textContent = "Oneida to English"; document.getElementById("dabox").hidden = true; document.getElementById("dalable").hidden = true;} // flip to Oneida to English
        else {langtolang.textContent = "English to Oneida";}
        var temp = lefttextarea.textContent;
        lefttextarea.textContent = righttextarea.textContent; // flip text
        righttextarea.textContent = temp;
}
function TranslatetoOneida(word, table, partofspeech) {
    table.forEach(tableword => {if (word.english == tableword.english) {word.oneida = tableword.oneida; word.partofspeech = partofspeech;}})
   }