var thename = document.getElementById("thename");
var thenumber = document.getElementById("thenumber");
var thegender = document.getElementById("thegender");
var thejob = document.getElementById("thejob");
var theage = document.getElementById("theage");

var malenames = ["Matt","David","Brian","Will", "Brice", "Alex", "Eric", "Lance", "Tony", "Robert"];
var femalenames = ["Paula", "Liz", "Marge", "Kendall", "Alana", "Ali", "Ana", "Savanah", "Addie", "Cara"];
var lastnames = ["Vega", "Smith", "Gonzalez", "Wood", "Williams"];
var jobs = ["cook at resturant", "Waitress", "Computer Programmer", "Teacher", "Fastfood Worker"];
var states = ["California", "Wisconsin", "Illinois", "Washington", "Florida"]
var consonant = ["b", "d", "f", "g", "k", "l", "m", "n", "p", "t", "w"]
var vowels = ["a", "e", "i", "o", "u"]


function MakePerson() {


    let person1 = new person(
        malenames[RandomWholeNum(0,malenames.length - 1)], // First Name
        lastnames[RandomWholeNum(0, lastnames.length - 1)], // Last Name
        "male", 
        MakeRandomNumber(),
        jobs[RandomWholeNum(0, jobs.length - 1)], // Job
        RandomWholeNum(19,70),
            );

    if (Math.random(0, 1) == 0) { // Male
    }
    

    thename.textContent = person1.fname + " " + person1.lname;
    thenumber.textContent = person1.number;
    thegender.textContent = person1.gender;
    thejob.textContent = person1.job;
    theage.textContent = person1.age;

}
function MakeRandomNumber() {
    var number = "";
    for (var i = 1; i <= 7; i++) {
        if (i == 4) {number += "-";}
        number += RandomWholeNum(0, 9).toString()
    }
    return number
}

class person {
    constructor(fname, lname, gender, number, job, age) {
        this.fname = fname;
        this.lname = lname;
        this.gender = gender;
        this.number = number;
        this.job = job;
        this.age = age;
    }

}

function FakeLanguageText() { 
    UpdateData();
    try {
    var numofwordsobj = document.getElementById("numofwords");
    var maxobj = document.getElementById("max");
    var minobj = document.getElementById("min");
    var numofwords = parseInt(numofwordsobj.value);
    var max = parseInt(maxobj.value);
    var min = parseInt(minobj.value);
 
    if (max >= min && max >= 0 && min >= 0)
    {RandomWords(numofwords, min, max);}
    else if (isNaN(max) && isNaN(min) && isNaN(numofwords) == false) { // if user only inputs numofwords
        RandomWords(numofwords, 4, 10)
        minobj.value = "4";
        maxobj.value = "10";
    }
    else {throw(e)}
    }
    catch(e) { // default if userInput not valid
        var numofwordsss = RandomWholeNum(6, 20);
        RandomWords(numofwordsss, 4, 10); 
        numofwordsobj.value = numofwordsss;
        minobj.value = "4";
        maxobj.value = "10";
    } 
    
}


function RandomWholeNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function RandomNickname(syllables) {
    UpdateData()
    var name = "";
    if (syllables == 0 || syllables == null) { syllables = 2; } // validation

    for (var i = 0; i < syllables; i++) {
        name += consonant[RandomWholeNum(0, consonant.length - 1)];
        name += vowels[RandomWholeNum(0, vowels.length - 1)];
    }
    return name;
}
function UniqueName() {
    document.getElementById("theuniquename").textContent = CapitalizeWord(RandomNickname(2)) + " " + CapitalizeWord(RandomNickname(3));
}
function RandomWords(numofwords, silblsmin, silblsmax) {
    var text = ""; document.getElementById("thefakelanguage").textContent = "";
    for (var i = 0; i < numofwords; i++) {
        document.getElementById("thefakelanguage").textContent += RandomNickname(RandomWholeNum(silblsmin, silblsmax)) + " ";
    }
}
function CapitalizeWord(word) {
    var first = word.charAt(0).toUpperCase()
    word = first + word.substring(1, word.length);
    return word
}
function UpdateData() {
    vowels = ["a", "e", "i", "o", "u"];
    var vs = document.querySelectorAll(".vowel");
    vs.forEach(v => {if (v.checked) {vowels.push(v.value.toString())}})
    
    
    consonant = ["b", "d", "f", "g", "k", "l", "m", "n", "p", "t", "w", "v"];
    var cs = document.querySelectorAll(".consonant");
    cs.forEach(c => {if (c.checked) {consonant.push(c.value.toString())}})
}