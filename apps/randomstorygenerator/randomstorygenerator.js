var textbox = document.getElementById("textarea");
var textbox2 = document.getElementById("textarea2");
var numofwords = document.getElementById("numofwords");

var sentence = "";
var noun = [
    { noun: "dandruff", iscountable: true, isinteractable: true, isgrabable: true },
    { noun: "desk", iscountable: true, isinteractable: true, isgrabable: true },
    { noun: "patio", iscountable: true, isinteractable: true, isgrabable: false },
]
var nounlanguage = ["arabic", "croatian", "cantonese", "albanian", "hebrew", "ancient albanian sign language", "old norse", "ancient greek"]
var verb = [
    { verb: "run", ismoving: true, isaffectingsomething: false, isbad: false },
    { verb: "fly", ismoving: true, isaffectingsomething: false, isbad: false },
    { verb: "punch", ismoving: false, isaffectingsomething: true, isbad: true },
    { verb: "burn", ismoving: false, isaffectingsomething: true, isbad: true },
    { verb: "stab", ismoving: false, isaffectingsomething: true, isbad: true },
    { verb: "repare", ismoving: false, isaffectingsomething: true, isbad: false },
]

var country = [
    { country: "Albania", nationality: "albanian" },
    { country: "Bosnia", nationality: "bosnian" },
    { country: "Croatia", nationality: "croatian" },
    { country: "Yemen", nationality: "yemani" },
    { country: "Bulgaria", nationality: "bulgarian" },
    { country: "Trukey", nationality: "turkish" },
    { country: "Israel", nationality: "jewish" },


]
var adjective = [
    { adjective: "homemade", isbad: false, issight: false },
    { adjective: "dusty", isbad: true, issight: true },
    { adjective: "greasy", isbad: true, issight: true },
    { adjective: "smelly", isbad: true, issight: false },

]
var adjectivepeople = ["old", "naked", "handicapped", "obese", "racist"]
var nounjob = ["president", "CEO", "cartel leader",]
var nounstructure = ["bridge", "patio", "highway", "skyscraper"]

var verb1 = verb[Math.floor(Math.random() * verb.length)]
var noun1 = noun[Math.floor(Math.random() * noun.length)]
var job = nounjob[Math.floor(Math.random() * nounjob.length)];
var adjective1 = adjective[Math.floor(Math.random() * adjective.length)]
var country1 = country[Math.floor(Math.random() * country.length)];
var verbdobadthing = ["saying the N word", "promoting turkish propoganda", "convincing kids to run away from home", "debarking an entire forest in northern " + country[Math.floor(Math.random() * country.length)].country,];
var sentencesomeonedoingwrong = [
    "the " + country1.nationality + " president was caught " + verbdobadthing[Math.floor(Math.random() * verbdobadthing.length)] + " and had to step down. We are desprate and need a leader!"

]
var sentencestartday = [
    "I got woken up by the smell of " + noun1.noun + "s so I got dressed and went outside",
    "I woke up under a " + nounstructure[Math.floor(Math.random() * nounstructure.length)]
]

var sentencegohomeandgetmotivation = [
    "When I got home my mother was sleeping on the couch. 'The TV was on before and a '"
]
var sentence = [
    "If you or a loved one has ever injested " + noun[Math.floor(Math.random() * noun.length)].noun + " fragments you may be entitled to financial compensation",
]


function GenerateStory() {
    sentence = sentencestartday[Math.floor(Math.random() * sentencestartday.length)] + ". I picked up a news paper by my feet and it said ";
    sentence += sentencesomeonedoingwrong[0];


    // fix irregular stuff
    sentence = sentence.replace("dandruffs", "dandruff");

    textbox.textContent = sentence;
}
function GenerateSentence() {
    sentence = sentence[Math.floor(Math.random() * sentence.length)];
    textbox.textContent = sentence;
}



function GenerateSentenceWordbyWord() {
    var numofwords = parseInt(numofwords.textContent);
    var sentence = "";
    var sentencewords = [{ word: "the", partofspeech: "artical" }]

    for (var i = 0; i < numofwords; i++) {
        if (i != 0) {
            if (sentencewords[i - 1].partofspeech = "artical") { sentencewords[i].word = GetWord("noun")}
       else if (sentencewords[i - 1].partofspeech = "noun") { sentencewords[i].word = GetWord("verb") }
        }
    }
    for (var i = 0; i < sentencewords; i++) {
        sentence += sentencewords[i].word + " ";
    }
    textarea2.textContent = sentence;
}

// returns random word
function GetWord(partofspeech) {
    var partofspeech = "other";
    if (wordbefore = "noun") { pickedword = noun[Math.random(0, noun.length - 1)] }
    else if (wordbefore = "verb") { pickedword = verb[Math.random(0, verb.length - 1)] }
    return partofspeech;
}