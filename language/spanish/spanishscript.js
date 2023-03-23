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

    const SpanishVerbEndings = [ // all spanish verb endings ----------------------------------
        { spanish: "r�", english: "I will" },      //Future I will (ar/er/ir)
        { spanish: "r�s", english: "you will" },    //Future you will (ar/er/ir)
        { spanish: "r�n", english: "they will" },    //Future they will (ar/er/ir)
        { spanish: "r�", english: "s/he/it will" }, //Future he/she/it will (ar/er/ir)
        { spanish: "r�mos", english: "we will" },   //Future we will (ar/er/ir)
        { spanish: "r�is", english: "yall will" },  //Future yall will (ar/er/ir)
        { spanish: "r�amos", english: "we would" },     //Conditional we would (ar/er/ir)
        { spanish: "r�as", english: "you would" },      //Conditional you would (ar/er/ir)
        { spanish: "r�an", english: "they would" },     //Conditional they would (ar/er/ir)
        { spanish: "r�ais", english: "yall would" },    //Conditional yall would (ar/er/ir)
        { spanish: "r�a", english: "s/he/it would" },   //Conditional s/he/it would (ar/er/ir)
        { spanish: "aron", english: "they past" },     //Past they past (ar)
        { spanish: "ieron", english: "they past" },     //Past they past (er/ir)
        { spanish: "ar", english: "to" },   //Infinite ar
        { spanish: "er", english: "to" },   //Infinite er
        { spanish: "ir", english: "to" },   //Infinite ir
        { spanish: "amos", english: "we" },   //Present we
        { spanish: "emos", english: "we" },   //Present we
        { spanish: "imos", english: "we" },   //Present we
        { spanish: "ando", english: "ing" },  //Continuous ar
        { spanish: "iendo", english: "ing" }, //Continuous er/ir
        { spanish: "o", english: "I" },       //Present I
        { spanish: "steis", english: "yall" },   //Past yall (ar/er/ir)
        { spanish: "aste", english: "you past" },   //Past you (ar)
        { spanish: "iste", english: "you past" },   //Past you (er/ir)
        { spanish: "as", english: "you" },   //Present you (ar)
        { spanish: "es", english: "you" },   //Present you (er/ir)
        { spanish: "an", english: "they" },   //Present they (ar)
        { spanish: "en", english: "they" },   //Present they (er/ir)
        { spanish: "a", english: "s/he/it" },   //Present s/he/it (ar)
        { spanish: "e", english: "s/he/it" },   //Present s/he/it (er/ir)
        { spanish: "�is", english: "yall" },   //Present yall (ar)
        { spanish: "eis", english: "yall" },   //Present yall (ar)
        { spanish: "is", english: "yall" },   //Present yall (ar)
        { spanish: "�", english: "I past" },   //Past I (ar)
        { spanish: "�", english: "I past" },   //Past I (er/ir)
        { spanish: "i�", english: "s/he/it past" },   //Past s/he/it (ar)
        { spanish: "�", english: "s/he/it past" },   //Past s/he/it (ar)
        { spanish: "eron", english: "they past" },   //Past s/he/it (ar)
        { spanish: "aron", english: "they past" },   //Past s/he/it (ar)
        { spanish: "iron", english: "they past" },   //Past s/he/it (ar)
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

function Translate() {
    righttextarea.textContent = ""; // resets bottom textbox


    // SPANISH TO ENGLISH -------------------------------------------------------------------------------------------------------------------------------------------------
    if (langtolang.textContent == "Spanish to English") {// If Spanish to english  (dont need to know gender of noun,) ---------------------------------------------------------------------
        var ogparagraphwords = document.getElementById("lefttextarea").value.toLowerCase().split(" "); // get text from left textbox (text the person typed in)
        let paragraphwords = [,,]; // the main array thats translated
        for (var word of ogparagraphwords) { paragraphwords.push({spanish: word, english: "", partofspeech: "other"})}  // fills new array based on old one

        // Search for words ---------------------------------------------- loops thru every word, sets the english word
        paragraphwords.forEach(word => { 
            // Nouns.forEach(noun => { if (word.spanish == noun.spanish) word.english = noun.english; word.partofspeech = "noun"; })
            TranslateWord(Nouns, word, "noun");
            //IrregNounEnding(word, "s", "", "s"); IrregNounEnding(word, "es", "", "s"); // check plural s at end
            //if (word.spanish.slice(-3) == "ito" || word.spanish.slice(-3) == "ita") {  IrregNounEnding(word, word.spanish.slice(-3), "little", "");} // check plural es at end 
            //if (word.spanish.slice(-4) == "itos" || word.spanish.slice(-4) == "itas") {  IrregNounEnding(word, word.spanish.slice(-4), "little", "");} // check plural es at end 
            TranslateWord(Adjectives, word, "adjective");
            TranslateWord(Adverbs, word, "adverb");
            TranslateWord(importantwords, word, "other");

            // Artical
            if (word.spanish == "el" || word.spanish == "la" || word.spanish == "los" || word.spanish == "las") {word.english = "the"; word.partofspeech == "artical";}
            if (word.spanish == "un" || word.spanish == "una") {word.english = "a"; word.partofspeech == "artical";}
            if (word.spanish == "unos" || word.spanish == "unas") {word.english = "some"; word.partofspeech == "artical";}


            SpanishVerbEndings.forEach(ending => { // VERBS  loop thru endings
            if (word.spanish.slice(ending.spanish.length * -1) == ending.spanish && word.english == "") // if spanish word has the ending. IF ENDING FOUND. Trabajas has as
            { 
                Verbs.forEach(verb => {if(word.spanish.slice(0, word.spanish.length - ending.spanish.length) == verb.spanish.slice(0, verb.spanish.length - 2)) // if (trabaj = trabaj) remove ar ending
                {word.english = ending.english + " " + verb.english; word.partofspeech = "pronoun verb"; if (word.english.includes("past")) {word.english += "ed";}}
                })
            }})
            if (word.english == "") { word.english = word.spanish;} // if english not found just set it to spanish word
        })

       var wordbefore = [,,];
       paragraphwords.forEach(w => { // Which words to swap
        var temp;
         if (wordbefore.wordbefore = "adjective" + w.partofspeech == "noun") {temp = w;  Object.assign(w, wordbefore); Object.assign(wordbefore, temp) }
         if (wordbefore.wordbefore = "pronoun" + w.partofspeech == "verb") {paragraphwords.values(w) = {"","",""};}
        })

        // This would be extrmly simple
         // if (paragraphwords.values().includes(/\w/, /\w/,'noun')) {console.log("won nounnn");}

        // if (Object.values(paragraphwords[3]) == 'casa', 'house','noun') {console.log("YESSSSSSSSSSSSSSSSSSSSS333333333");}
        // if (paragraphwords.values() == {spanish: 'casa', english: 'house', partofspeech: 'noun'}) {console.log("YESSSSSSSSSSSSSSSSSSSSS333333333");}
        // if (paragraphwords.includes({spanish: /\w/, english: /\w/, partofspeech: 'noun'})) { console.log("YESSSSSSSSSSSSSSSSSSS111"); }

        paragraphwords.forEach(word => {
            var newspan = document.createElement('span');
            newspan.innerHTML = word.english + " "; newspan.title = word.spanish + "\n Parte de Speech: " + word.partofspeech;
            righttextarea.appendChild(newspan);
            console.log(word.english + " = " + word.spanish + " (" + word.partofspeech) + ")";
        })
        righttextarea.value = righttextarea.textContent.replace(/\s+/g, ' ').trim(); // Remove extra whitespaces

    }
    







    // ENGLISH TO SPANISH---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    if (langtolang == "English to Spanish") { // If English to Spanish  (need to know gender of spanish noun,) -----------------------------------------------------------------------------------------------------
        var paragraph = document.getElementById("lefttextarea").value; // get text from left textbox & set it to "paragraph" (text the person typed in)
        paragraph = paragraph.toLowerCase();                           // lowercase
        const ogparagraphwords = paragraph.split(" "); // Splits paragraph using spaces. Puts each word in the array
        let paragraphwords = [{ spanish: "", english: "", partofspeech: "" }]; // the main array thats translated

        for (var j = 0, len = sayings.length; j < len; j++) // Search sayingsenglsih
        { if (paragraph.includes(sayings[j][0])) { paragraph = paragraph.replace(sayings[j][0], sayingsenglsih[j][1]); } }


        var i = 0;
        while (i < paragraphwords.length) { // LOOP LOOP LOOP LOOP LOOP LOOP LOOP LOOP LOOP LOOP LOOP LOOP LOOP LOOP LOOP LOOP LOOP LOOP LOOP LOOP LOOP LOOP LOOP LOOP LOOP LOOP LOOP LOOP LOOP 
            var word = paragraphwords[i].english; var wordbefore = ""; var isplural = false; ispossessivepronoun = false; isarticle = false; isadjective = false; // vars
            var translatedword = ""; var isnoun = false; var isverb = false; var isconjunction = false; var ispronoun = false; var ispasttense = false; // vars
            if (paragraphwords[i] != paragraphwords[0]) { wordbefore = paragraphwords[i - 1]; }  // word before

            // Contex Section ------------------------------------------------------------------------------
            if (wordbeforePartofSpeech == "pronoun") { isverb = true; } // is a Verb (not 100 accurate)
            if (wordbeforePartofSpeech == "article") { isnoun = true; } // is a Noun (not 100 accurate)
            if (word == "the") { isarticle = true; translatedword = "el"; } // is a article
            if (word == "a") { isarticle = true; translatedword = "un"; } // is a article
            if (isverb == true && word.slice(-2) == "ed") { word = word.replace(word.slice(-2), ""); ispasttense = true; } // is Past tense


            // Search Word Section --------------------------------------------------------------------------------------
            if (TranslateWord(word, Nouns, "spanish") != "") { translatedword = TranslateWord(word, Nouns, "spanish"); }
            if (TranslateWord(word, Nouns, "spanish") != "") { translatedword = TranslateWord(word, importantwords, "spanish"); }
            if (TranslateWord(word, "spanish") != "") { translatedword = TranslateWord(word, Verbs, "spanish"); }
            if (TranslateWord(word, "spanish") != "") { translatedword = TranslateWord(word, Pronouns, "spanish"); }
            if (TranslateWord(word, "spanish") != "") { translatedword = TranslateWord(word, Adjectives, "spanish"); }
            if (TranslateWord(word, "spanish") != "") { translatedword = TranslateWord(word, Adverbs, "spanish"); }
            // Can simplify the != statements?????


            // When Found ----------------------------------------------------------------------------
            if (isnoun == true) { // if Noun ---------------------------------------------------------
                var isfemale = false; if (translatedword.slice(-1) == "a" || translatedword.slice(-2) == "as") { isfemale = true; } // check word gender

                if (wordbeforePartofSpeech == "article") {
                    if (isfemale) {
                        if (wordbefore == "el") { wordbefore = "la"; paragraphwords[i - 1] = "la"; }
                        if (wordbefore == "un") { wordbefore = "una"; paragraphwords[i - 1] = "una"; }
                    }
                    if (isplural) {
                        if (isfemale) {
                            if (wordbefore == "la") { wordbefore = "las"; paragraphwords[i - 1] = "las"; }
                            if (wordbefore == "una") { wordbefore = "unas"; paragraphwords[i - 1] = "unas"; }
                        }
                        else {
                            if (wordbefore == "el") { wordbefore = "los"; paragraphwords[i - 1] = "los"; }
                            if (wordbefore == "un") { wordbefore = "unos"; paragraphwords[i - 1] = "unos"; }
                        }
                    }
                }
                wordbeforePartofSpeech = "noun";
                if (translatedword != "") { paragraphwords[i] = translatedword; } else { paragraphwords[i] = word; } // Done
            }
            else if (isverb == true) { // if Verb -------------------------------------------------------
                var isimperfectpasttense = false; var isconditional = false; // tenses
                var isarverb = false; var iserverb = false; var isirverb = false; // verb endings


                if (translatedword.slice(-2) == "ar") { isarverb = true; }      // check if ar
                else if (translatedword.slice(-2) == "er") { iserverb = true; } // check if er
                else if (translatedword.slice(-2) == "ir") { isirverb = true; } // check if ir

                if (wordbefore == "to") { paragraphwords[i - 1] = ""; } // Infinite,     dont do any change, keep ending
                else if (wordbeforePartofSpeech == "pronoun") { translatedword = translatedword.replace(translatedword.slice(-2), ""); }  // Need to conjugate, Remove ending (ar,er,ir)
                else { } // else just assume its infinite and do nothing



                // Past Tense ------------------------------------------------------------------------------------------------------------
                if (ispasttense == true) {
                    if (iserverb == true || isirverb == true) {
                        if (wordbefore == "yo") { translatedword += "�"; }  // You (er & ir)
                        if (wordbefore == "tú") { translatedword += "iste"; }  // You (er & ir)
                        if (wordbefore == "�l" || wordbefore == "ella" || wordbefore == "lo") { translatedword += "i�"; }  // he/she/it (er & ir)
                        if (wordbefore == "nosotros") { translatedword += "imos"; }
                        if (wordbefore == "vosotros") { translatedword += "isteis"; } // Yall
                        if (wordbefore == "ellos") { translatedword += "ieron"; }  // they (er & ir)
                    }
                    else {
                        if (wordbefore == "yo") { translatedword += "�"; }     // I
                        else if (wordbefore == "tú") { translatedword += "aste"; }  // You
                        else if (wordbefore == "�l" || wordbefore == "ella" || wordbefore == "lo") { translatedword += "�"; } // He/she/it
                        else if (wordbefore == "nosotros") { translatedword += "amos"; } // We
                        else if (wordbefore == "vosotros") { translatedword += "asteis"; } // Yall
                        else if (wordbefore == "ellos") { translatedword += "aron"; } // They
                    }
                }
                else { // Present Tense -----------------------------------------------------------------------------------------------

                    if (iserverb == true || isirverb == true) {
                        if (wordbefore == "yo") { translatedword += "o"; }   // I
                        else if (wordbefore == "t�") { translatedword += "es"; }  // You (er & ir)
                        else if (wordbefore == "�l" || wordbefore == "ella" || wordbefore == "lo") { translatedword += "e"; }  // he/she/it (er & ir)
                        else if (wordbefore == "ellos") { translatedword += "en"; }  // they (er & ir)
                        else if (iserverb == true && wordbefore == "nosotros") { translatedword += "emos"; }
                        else if (isirverb == true && wordbefore == "nosotros") { translatedword += "imos"; }
                        else if (iserverb == true && wordbefore == "nosotros") { translatedword += "emos"; }
                    }
                    else {
                        if (wordbefore == "yo") { translatedword += "o"; }     // I
                        else if (wordbefore == "t�") { translatedword += "as"; }  // You
                        else if (wordbefore == "�l" || wordbefore == "ella" || wordbefore == "lo") { translatedword += "a"; } // He/she/it
                        else if (wordbefore == "nosotros") { translatedword += "amos"; } // We
                        else if (wordbefore == "vosotros") { translatedword += "ais"; } // Yall
                        else if (wordbefore == "ellos") { translatedword += "an"; } // They 
                    }
                }




                paragraphwords[i] = translatedword;
                wordbeforePartofSpeech = "verb";
            }
            else if (isarticle == true) { // Ariticle
                paragraphwords[i] = translatedword;
                wordbeforePartofSpeech = "article";
            }
            else if (ispronoun == true) {
                paragraphwords[i] = translatedword;
                wordbeforePartofSpeech = "pronoun";
            }
            else if (isarticle == true) {
                paragraphwords[i] = translatedword;
                wordbeforePartofSpeech = "article";
            }
            else if (isadjective == true) {
                paragraphwords[i] = translatedword;
                wordbeforePartofSpeech = "adjective";
            }
            else {
                paragraphwords[i] = word;
                wordbeforePartofSpeech = "n/a";
            }
            i++
        }
        var x = 0;
        while (x < paragraphwords.length) { righttextarea.value += paragraphwords[x] + " "; x++ }
        righttextarea.value = righttextarea.value.replace(/\s+/g, ' ').trim(); // Remove extra whitespaces
        // negative command = flip ending for subjunctive
    }
}

function Flip() { // Flip Languages ----------------------------------------
    var langtolang = document.getElementById("langtolang");

    if (langtolang.textContent == "Spanish to English") { langtolang.textContent = "English to Spanish";} // flip to English to Spanish
    else if (langtolang.textContent == "English to Spanish") { langtolang.textContent = "Spanish to English";}  // flip to Spanish to English
}

// searches through table/array for word, returns "" if not found.
function TranslateWord(word, fromtable, tolanguage) {
    tolanguage = tolanguage.toLowerCase();
    if (word == null) { word = "";}
    var theword = "";
    if (tolanguage = "english") {
        for (var j = 0, len = fromtable.length; j < len; j++) { // loop through each array row
            if (fromtable[j].spanish === word) { theword = fromtable[j].english; break; } // if found set the word
        }
    }
    else if (tolanguage = "spanish") {
        for (var j = 0, len = fromtable.length; j < len; j++) { // loop through each array row
            if (fromtable[j].english === word) { theword = fromtable[j].spanish; break; } // if found set the word
        }
    }
    return theword;
}
// Checks if theres a spanish verb ending. Enter array item and itll be modified
function TranslateVerb(arrayitem) {
    for (var i = 0; i < spanishverbendings.length - 1;) { // Lup thru spanishverbendings check if match
        if (arrayitem.spanish.slice(-2) == spanishverbendings[i].spanish) // IF has verb ending
        {
            arrayitem.english = spanishverbendings[i].english + " " + arrayitem.english; // EX. you work
            arrayitem.partofspeech += "-pronoun"; // verb-pronoun
        }
        if (arrayitem.spanish.slice(-2) == "ar" || arrayitem.spanish.slice(-2) == "er" || arrayitem.spanish.slice(-2) == "ir") {
            arrayitem.english =  " " + arrayitem.english; // EX. you work
            arrayitem.partofspeech += "-pronoun"; // verb-pronoun
        }
    }

    return arrayitem;
}
function isarticle(spanishword) {
    var bool = false;
    if (spanishword == "el" || spanishword == "la" || spanishword == "los" || spanishword == "las") { bool = true; }
    return bool;
}
// if word is not "" it will not do anything
function TranslateWord(table, word, partofspeech) {
    if (word.english == "") { table.forEach(tableword => { 
        if (word.spanish == tableword.spanish) 
        word.english = tableword.english; word.partofspeech = partofspeech; }) }
}
function IrregNounEnding(word, ending, beginingtoadd, endingtoadd) {
    var endinglength = ending.length; if (ending.length > 1) { endinglength = ending.length}
    if (word.english == "" && word.spanish.slice(endinglength * -1) == ending) // if eng not found yet and last letters match ending
     { Nouns.forEach(noun => { 
        if (word.spanish.slice(0, word.spanish.length - endinglength) == noun.spanish) { // default
            word.english = beginingtoadd + " " + noun.english + endingtoadd; word.partofspeech = "noun";} 
       else if (word.spanish.slice(0, word.spanish.length - endinglength) + ending.slice(endinglength - 1,endinglength) == noun.spanish) { // If ito ending
        {word.english = beginingtoadd + " " + noun.english + endingtoadd; word.partofspeech = "noun";}   
    }
        }) } // Remove s from end to remove plural check it
}
function TranslateWordWithEnding(word, ending, beginingtoadd, endingtoadd) {
    var endinglength = ending.length; if (ending.length > 1) { endinglength = ending.length}
    if (word.english == "" && word.spanish.slice(endinglength * -1) == ending) // if eng not found yet and last letters match ending
     { Nouns.forEach(noun => { 
        if (word.spanish.slice(0, word.spanish.length - endinglength) == noun.spanish) { // default
    }
        }) } // Remove s from end to remove plural check it
}
