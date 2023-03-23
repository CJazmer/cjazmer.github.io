function Translate() {
    var englishtolakota = true;
    if (document.getElementById("lefttextarealanguage").textContent == "English") { englishtolakota = true }      // Left Language Spanish & Right Language English -> Left Language English & Right Language Spanish
    else if (document.getElementById("lefttextarealanguage").textContent == "Lakota") { englishtolakota = false }      // Left Language Spanish & Right Language English -> Left Language English & Right Language Spanish
    var righttextarea = document.getElementById("righttextarea");

    let Verbs = [ // Verb database ----------------------------------
        { english: "want", lakota: "_či", class: 1 },
        { english: "like", lakota: "hí", class: 1 },
        { english: "eat", lakota: "yútA", class: 3 },
        { english: "drink", lakota: "atké", class: 1 },
        { english: "love", lakota: "the_ȟíla", class: 1 },

    ]

    let Nouns = [ // Noun 
        { english: "water", lakota: "mni"}, // Water & Food -----------------------------------
        { english: "food", lakota: "wóyute" },
        { english: "meat", lakota: "tȟaló" },
        { english: "fruit", lakota: "waskúyeča" },
        { english: "house", lakota: "" },
        { english: "friend", lakota: "" },
        { english: "family", lakota: "tiwáhe" },
        { english: "everyone", lakota: "iyúha" },
        { english: "thunder", lakota: "wakiŋyaŋ" },
        { english: "", lakota: "" },
        { english: "", lakota: "" },
    ]
    let adjetives = [ // Noun 
        { english: "red", lakota: "ša" },
        { english: "orange", lakota: "ziša" },
        { english: "yellow", lakota: "zi" },
        { english: "green", lakota: "tozi" },
        { english: "blue", lakota: "to" },
        { english: "black", lakota: "sapa" },
        { english: "white", lakota: "ska" },

    ]
    // -------------- Pronouns are start of verb ----------------------------------------------------------
    let pronouns = [ // objective pronouns (Factual, Unbiased)  ----------------------------------
        { english: "i", lakotaclass1: "wa", lakotaclass2: "bl", lakotaclass3: "ma",},
        { english: "you", lakotaclass1: "ya", lakotaclass2: "l", lakotaclass3: "na", },
        { english: "he", lakotaclass1: "", lakotaclass2: "", lakotaclass3: "", },
    ]
    
    let realpronouns = [ // normal pronouns (Not necessary)  ----------------------------------
        
    ]
    let pronouns2people = [ // 2 people pronouns (lakota to subject pronoun to object pronoun)  ----------------------------------
        { lakota: "ci", english1: "i", english2: "you" , lakotapi: "" },
        { lakota: "ci", english1: "i", english2: "yall", lakotapi: "pi" },
        { lakota: "maya", english1: "you", english2: "me", lakotapi: "" },
        { lakota: "maya", english1: "yall", english2: "i", lakotapi: "pi" },
        { lakota: "ya", english1: "you", english2: "him", lakotapi: "" },
        { lakota: "ya", english1: "you", english2: "her", lakotapi: "" },
        { lakota: "ya", english1: "you", english2: "it", lakotapi: "" },
        { lakota: "wica", english1: "he", english2: "them", lakotapi: "" },
        { lakota: "wica", english1: "she", english2: "them", lakotapi: "" },
        { lakota: "wica", english1: "it", english2: "them", lakotapi: "" },
        { lakota: "wica", english1: "they", english2: "them", lakotapi: "pi" },
        { lakota: "un", english1: "we", english2: "him", lakotapi: "pi" },
        { lakota: "un", english1: "we", english2: "her", lakotapi: "pi" },
        { lakota: "un", english1: "we", english2: "it", lakotapi: "pi" },
        { lakota: "ni", english1: "she", english2: "yall", lakotapi: "pi" },
        { lakota: "ni", english1: "he", english2: "yall", lakotapi: "pi" },
        { lakota: "ni", english1: "it", english2: "yall", lakotapi: "pi" },
        { lakota: "wicawa", english1: "i", english2: "them", lakotapi: "" },
        { lakota: "wicaya", english1: "you", english2: "them", lakotapi: "" },


    ]
    let possessivepronouns = [ // subjective pronouns (Not sure, Opinion, What you think)  ----------------------------------
        { english: "my", lakota: "mitáwa"},
        { english: "your", lakota: ""},

    ]

    let importantwords = [ // Common words database ----------------------------------
        { english: "hi", lakota: "háu"},
        { english: "hello", lakota: "háu"},
        { english: "yes", lakota: "haŋ"},
        { english: "no", lakota: "hiya"},
        { english: "and", lakota: "na"},
        { english: "or", lakota: "naíŋš"},
        { english: "this", lakota: "lé"},
        { english: "that", lakota: "hé"},
        { english: "here", lakota: "lél"},
        { english: "there", lakota: "hél"},
        { english: "because", lakota: "icíŋ"},
        { english: "but", lakota: "éyas"},

    ]

    
    let extra = [ // extra database ----------------------------------
        { english: "i", lakota: "", partofspeech: ""},
        { english: "you", lakota: "", partofspeech: "" },

    ]

    let sayings = [ // sayings & irregulars ----------------------------------
        { english: "there is", lakota: "hay"},
        { english: "there's", lakota: "hay"},
    ]

    document.getElementById("righttextarea").textContent = "";   // reset right textbox
    var paragraph = document.getElementById("lefttextarea").value.toLowerCase() + " ."; // get text from left textbox (text the person typed in)
    for (var j = 0, len = sayings.length; j < len; j++) { if (paragraph.includes(sayings[j].english)) { paragraph = paragraph.replace(sayings[j].english, sayings[j].lakota); } }
    var ogparagraphwords = paragraph.split(" ");
    let paragraphwords = [{ english: "", lakota: "", partofspeech: "", verbclass: 1}]; // Splits paragraph using spaces. Puts each word in the array
    for (var j = 0, len = ogparagraphwords.length; j < len; j++) { paragraphwords.push({ english: ogparagraphwords[j], lakota: "", partofspeech: "other" }) }; // Removes extra blank at start of array

    //--------------------------------------------------------------------------------------------------------------
    // ENGLISH TO ONEIDA -------------------------------------------------------------------------------------------------------------------------------------------------
    if (englishtolakota == true) {// If Spanish to english  (dont need to know gender of noun,) ---------------------------------------------------------------------
        
            // Search for Word and translate it & get info  ------------------------------------------------------------------------------------------
            Search(pronouns,"pronoun");
            Search(possessivepronouns, "possessivepronoun");
            Search(importantwords, "other");
            Search(adjetives, "adjetive");
            Search(Nouns,"noun");
            Search(Verbs,"verb");


        var i = 0; // Extra junk ------------------------------------------------------------------
        while (i < paragraphwords.length) {
            var word = paragraphwords[i].english;
            if (word == "a") { paragraphwords[i].lakota = "waŋ"; paragraphwords[i].partofspeech = "artical" }
            if (word == "the") { paragraphwords[i].lakota = "kiŋ"; paragraphwords[i].partofspeech = "artical" }
            if (word == "me" || word == "you" || word == "him" || word == "her") { paragraphwords[i].partofspeech = "pronoun"; }
            if (word == "dont" || word == "don't" || word == "not") { translatedword = " "; paragraphwords[i].partofspeech = "negation"; }
            if (word == "has" || word == "goes" || word == "does") { paragraphwords[i].partofspeech = "verb"; if (word == "has") { paragraphwords[i].english = "have"; paragraphwords[i].lakota = "ayʌ"; } if (word == "does") { paragraphwords[i].english = "do"; paragraphwords[i].lakota = "eeeee"; } if (word == "goes") { paragraphwords[i].english = "go"; paragraphwords[i].lakota = "eeee"; }}

            i++;
        }

        /*// Rearrange ----------------------------------------------------------
        var sentenceorder = ["noun", "verb"]   // the order: noun adjective pronoun-verb
        paragraphwords.sort((a, b) => sentenceorder.indexOf(a.partofspeech) - sentenceorder.indexOf(b.partofspeech)); // Rearranges the words to fit the order
*/



        i = 1; // -----------------------------------------------------------------------------------------------------------------------------
        while (i+1 < paragraphwords.length) { // When Found & know the Part of Speech -----------------------------------------------------
            if (paragraphwords[i].partofspeech == "noun") {
                if (paragraphwords[i - 1].partofspeech == "artical") { [paragraphwords[i - 1], paragraphwords[i]] = [paragraphwords[i], paragraphwords[i-1]];} // Flip
                if (paragraphwords[i - 1].partofspeech == "adjetive") { [paragraphwords[i - 1], paragraphwords[i]] = [paragraphwords[i], paragraphwords[i - 1]]; } // Flip
                if (paragraphwords[i - 1].partofspeech == "possessivepronoun") { [paragraphwords[i - 1], paragraphwords[i]] = [paragraphwords[i], paragraphwords[i - 1]]; } // Flip
            }
            else if (paragraphwords[i].partofspeech == "verb") { // Verb ----------------------------------------------------------
                // 2 people pronouns
                if (paragraphwords[i - 1].partofspeech === "pronoun" && paragraphwords[i + 1].partofspeech === "pronoun") {
                    for (var j = 0, len = pronouns2people.length; j < len; j++) {
                        if (paragraphwords[i - 1].english == pronouns2people[j].english1 && paragraphwords[i + 1].english == pronouns2people[j].english2) { paragraphwords[i].lakota = pronouns2people[j].lakota + "-" + paragraphwords[i].lakota; paragraphwords[i].partofspeech = "pronoun-verb"; paragraphwords[i].english = "(" + pronouns2people[j].english1 + " to " + pronouns2people[j].english2 + ")-" + paragraphwords[i].english; break; }
                    }
                    if (paragraphwords[i - 1].partofspeech == "pronoun") { paragraphwords.splice(i - 1, 1); i--; }
                    if (paragraphwords[i + 1].partofspeech == "pronoun") { paragraphwords.splice(i + 1, 1); }
                }
                else {   // 1 person pronouns
                        for (var j = 0, len = pronouns.length; j < len; j++) {
                            if (paragraphwords[i - 1].english == pronouns[j].english) {
                                if (paragraphwords[i].verbclass == 2) { paragraphwords[i].lakota = paragraphwords[i].lakota.replace("_", pronouns[j].lakotaclass3 + "-"); }
                                if (paragraphwords[i].verbclass == 3) { paragraphwords[i].lakota = paragraphwords[i].lakota.replace("_", pronouns[j].lakotaclass2 + "-"); }
                                else { paragraphwords[i].lakota = paragraphwords[i].lakota.replace("_", "-" + pronouns[j].lakotaclass1 + "-"); }

                                paragraphwords[i].partofspeech = "pronoun-verb"; paragraphwords[i].english = pronouns[j].english + "-" + paragraphwords[i].english; paragraphwords.splice(i - 1, 1); i--; break;
                            } // Remove/splice extra pronoun
                        }
                }
                paragraphwords[i].lakota = paragraphwords[i].lakota.replace("_",""); // remove placeholder
            }
            
            i++;
        }
       




        paragraphwords.splice(paragraphwords.length - 1, 1); // remove extra pronoun
        var x = 0;
        while (x < paragraphwords.length) {
            var newspan = document.createElement('span');
            newspan.innerHTML = paragraphwords[x].lakota + " "; newspan.title = paragraphwords[x].english + "\n Part of Speech: " + paragraphwords[x].partofspeech;
            righttextarea.appendChild(newspan);
            if (paragraphwords[x].verbclass != undefined) { console.log(paragraphwords[x].lakota + " = " + paragraphwords[x].english + " (" + paragraphwords[x].partofspeech + ") " + "Verb class: " + paragraphwords[x].verbclass) }
            else { console.log(paragraphwords[x].lakota + " = " + paragraphwords[x].english + " (" + paragraphwords[x].partofspeech + ")")}
            x++;
        }
        righttextarea.value = righttextarea.textContent.replace(/\s+/g, ' ').trim(); // Remove extra whitespaces
    }
    console.log("----------------------------");

    // ONEIDA TO ENGLISH ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    if (englishtolakota == false) { // If English to Spanish  (need to know gender of spanish noun,) -----------------------------------------------------------------------------------------------------

    }
    // Searches given table for a matching word and gives the translation if found.
    function Search(tablename,partofspeech) {
        var i = 0; var word = paragraphwords[i].english;

        while (i < paragraphwords.length) {
            word = paragraphwords[i].english;
            for (var j = 0, len = tablename.length; j < len; j++) { if (tablename[j].english === word) { paragraphwords[i].lakota = tablename[j].lakota; paragraphwords[i].partofspeech = partofspeech; break; } }
            if (paragraphwords[i].lakota == "") { paragraphwords[i].lakota = word; }
            if (paragraphwords[i].partofspeech == "verb") {
                paragraphwords[i].verbclass = 1;
                if (tablename[j].class != undefined) { paragraphwords[i].verbclass = tablename[j].class; }
            }
            i++;
        }
        var testword = ""; if (word.slice(-1) == "s") { testword = word.slice(0, -1); } else { testword = word; }
        // for 3nd person singular conjugation eats s at end and plural in english

        return word;
    }
}
function Flip() { // Flip Languages ----------------------------------------
        var lefttext = document.getElementById("lefttextarealanguage"); var lefttextarea = document.getElementById("lefttextarea");
        var righttext = document.getElementById("righttextarealanguage"); var righttextarea = document.getElementById("righttextarea");
        lefttextarea
        if (lefttext.textContent == "English") { lefttext.textContent = "Lakota"; righttext.textContent = "English"; englishtolakota = false; document.getElementById("dabox").hidden = true; document.getElementById("dalable").hidden = true;} // flip to Lakota to English
        else if (lefttext.textContent == "Lakota") { lefttext.textContent = "English"; righttext.textContent = "Lakota"; englishtolakota = true; document.getElementById("dabox").hidden = true; document.getElementById("dalable").hidden = true;}  // flip to English to Lakota
        var temp = lefttextarea.textContent;
        lefttextarea.textContent = righttextarea.textContent; // flip text
        righttextarea.textContent = temp;
}
function removethedash() {
    var paragraphwordsss = righttextarea.textContent;
    paragraphwordsss = paragraphwordsss.replace("-", "");
    righttextarea.textContent = paragraphwordsss;
}