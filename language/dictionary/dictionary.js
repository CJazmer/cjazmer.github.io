langtolang = document.getElementById("languages");
searchbar = document.getElementById("searchbar");

var spanish = [
    { english: "thing", spanish: "cosa", spanish2: "vaina", partofspeech: "noun" },
    { english: "water", spanish: "agua", spanish2: "vaina", partofspeech: "noun"},
    { english: "sand", spanish: "arena", spanish2: "", partofspeech: "noun"},
    { english: "moon", spanish: "luna", spanish2: "", partofspeech: "noun"}, 
    { english: "sun", spanish: "sol", spanish2: "", partofspeech: "noun" },
    { english: "star", spanish: "estrella", spanish2: "", partofspeech: "noun" },

]
var russian = [
    { english: "language", russian: "я́зык (yazeek)", partofspeech: "noun" },
    { english: "sun", russian: "сóлнце (solntsye)", partofspeech: "noun" },
    { english: "moon", russian: "луна (luna)", partofspeech: "noun" },
    { english: "star", russian: "звезда (zvyezda)", partofspeech: "noun" },
    { english: "bird", russian: "птица (pteetsa)", partofspeech: "noun" },


]
var arabic = [
    { english: "sun", arabicmsa: "shams شَمْس", partofspeech: "noun" },
    { english: "moon", arabicmsa: "qamar قَمَر", partofspeech: "noun" },
    { english: "star", arabicmsa: "najma نَجْمة", partofspeech: "noun" },
    { english: "sky", arabicmsa: "samaa سَماء", partofspeech: "noun" },
]
var oneida = [
    { english: "fish", oneida: "kʌ́tsi (gadjee)", partofspeech: "noun" },
    { english: "bird", oneida: "otsiˀtʌ́haˀ (ojeetaha)", partofspeech: "noun" },
    { english: "dog", oneida: "é·lhal (élhal)", partofspeech: "noun" },
    { english: "cat", oneida: "takó·s (dakósh)", partofspeech: "noun" },
    { english: "turtle", oneida: "aˀno·wál (a'nowál)", partofspeech: "noun" },
    { english: "bear", oneida: "ohkwa·lí (okwali)", partofspeech: "noun" },
    { english: "wolf", oneida: "othahyu·ní· (odayuní)", partofspeech: "noun" },

    { english: "big", oneida: "owa·nʌ́ (owaná)", partofspeech: "noun" },
    { english: "small", oneida: "á", partofspeech: "noun" },


    { english: "family", oneida: "kahwa·tsíleˀ (gawájeele)", partofspeech: "noun" },

]
var outputnewword = document.getElementById("outputnewword");
outputnewword.value = "";
var word = ""; var ogword = "";
var exampleenglish = document.getElementById("exampleenglish");
var exampleotherlang = document.getElementById("exampleotherlang");

function Search() {
    Reset();
    outputnewword.textContent = "";
    word = document.getElementById("searchbar");
  ogword = document.getElementById("searchbar");

    if (langtolang.value == "English to Spanish") { SearchEnglishtoSpanish(); }
    else if (langtolang.value == "English to Russian") { SearchEnglishtoRussian(); }
    else if (langtolang.value == "English to Arabic") { SearchEnglishtoArabic(); }
    else if (langtolang.value == "English to Oneida") { SearchEnglishtoOneida(); }
    document.getElementById("outputogword").textContent = ogword.value;
}
function SearchEnglishtoSpanish() {
    var i = 0;
    while (i < spanish.length) {
        if (word.value == spanish[i].english) {
            outputnewword.textContent = spanish[i].spanish;
            exampleotherlang.textContent = spanish[i].examplespanish;
            exampleenglish.textContent = spanish[i].exampleenglish;

            exampleenglish.textContent = exampleenglish.textContent.replace("_", spanish[i].english);
            exampleotherlang.textContent = exampleotherlang.textContent.replace("_", spanish[i].spanish);

            break;
        }
        i++;
    }
    if (outputnewword.textContent == "") { outputnewword.textContent = "Not found" }


}
function SearchEnglishtoArabic() {
    for (var w of arabic) { if (word.value == w.english) { outputnewword.textContent = w.arabicmsa};}
    if (outputnewword.textContent == "") { outputnewword.textContent = "Not found" }
}
function SearchEnglishtoRussian() {
    for (var w of russian) { if (word.value == w.english) { outputnewword.textContent = w.russian};}
    if (outputnewword.textContent == "") { outputnewword.textContent = "Not found" }
}

function SearchEnglishtoOneida() {
    for (var w of oneida) { if (word.value == w.english) { outputnewword.textContent = w.oneida};}
   //  var i = 0; while (i < oneida.length) { if (word.value == oneida[i].english) { outputnewword.textContent = oneida[i].oneida; break; }i++;}
    // oneida.forEach(w => { if (word.value == w.english) { outputnewword.textContent = w.oneida};})
    // outputnewword.textContent = oneida.filter(w => word.value == w.english).oneida; // if typed in word = english word in database

    if (outputnewword.textContent == "") { outputnewword.textContent = "Not found" }

}
function Reset() {
    outputnewword.textContent = "";
    outputnewword.textContent = "";
    exampleenglish.textContent = "";
    exampleotherlang.textContent = "";

}


function suggestions() {
output = document.getElementById("suggestions");
         if (langtolang.value == "English to Spanish") { suggestions2(spanish);}
    else if (langtolang.value == "English to Russian") { suggestions2(russian);}
    else if (langtolang.value == "English to Arabic") { suggestions2(arabic);}
    else if (langtolang.value == "English to Oneida") { suggestions2(oneida);}


}
function suggestions2(langtable) {
output.textContent = "";
langtable.forEach(i => { if (i.english.includes(searchbar.value) ) {output.textContent += i.english + " | ";}})
output.textContent = output.textContent.slice(0, -2);
}
function updatelang() {document.getElementById("selectedlanguage").textContent = langtolang.value;}