function Translate() {
    var aave = true;

    if (aave == true) {// If Spanish to english  (dont need to know gender of noun,)
        document.getElementById("righttextarea").value = ""; // reset right textbox
        var paragraph = document.getElementById("lefttextarea").value; // get text from left textbox (text the person typed in)
        paragraph = paragraph.toLowerCase();
        const paragraphwords = paragraph.split(" "); // Splits paragraph using spaces. Puts each word in the array

        let creatediv = document.createElement('button'); creatediv.classList.add('noun'); creatediv.innerText = "hihihihi";

        let aave = [ // aave database ----------------------------------
            ["gonna", "finna"],
            ["going to", "finna"],
            ["want to", "wanna"],
            ["want a", "wanna"],
            ["will", "finna"],
            ["the", "da"],
            ["have", "got"],
            ["has", "got"],
            ["i dont", "ion"], // Negation
            ["i don't", "ion"],
            ["not", "aint"],
            ["arnt", "aint"],
            ["arn't", "aint"],
            ["their", "they"], // Pronouns
            ["you", "ya"],
            ["you're", "you"],
            ["youre", "you"],
            ["them", "'em"],
            ["hes", "he"], 
            ["youre", "you"],
            ["you're", "you"],
            ["were", "we"],
            ["we're", "we"],
            ["were", "was"], // Conjugation
            ["are", "is"],
            ["ask", "axe"],
            ["ing ", "in' "],
            ["that", "dat"],
            ["this", "dis"],
            ["they", "dey"],
            ["with", "wid"],
            ["of", "a"],
            ["dont", "don"],
            ["don’t", "don"],
            ["havent", "aint"],
            ["haven't", "aint"],
            ["my", "ma"],
        ]
        let phrases = [ // more that 1 word replacement database & fix exceptions ----------------------------------
            ["got been", "been"], // fix errors
            ["a a", "of a"],
            ["going to", "finna"], // other 2 word replacement
            ["you guys", "yall"],
            ["l ", "w "], // rules
            ["st ", " "],
        ]


        var wordbeforePartofSpeech = ""; var righttext = document.getElementById("righttextarea"); righttext.value = "";
        var i = 0;
        while (i < paragraphwords.length) {
            var word = paragraphwords[i]; var wordbefore = ""; 
            if (paragraphwords[i] != paragraphwords[0]) { wordbefore = paragraphwords[i - 1]; } var translatedword = "";


            for (var j = 0, len = aave.length; j < len; j++) // Search & replace words (Loop through each noun until match)
            {
                if (aave[j][0] === word) {
                    translatedword = aave[j][1]; righttext.value += translatedword + " "; document.getElementById("container").value = translatedword; document.getElementById("container").appendChild(creatediv); break;
                }
            }

            if (translatedword == "") { righttext.value += word + " "; }
            i++;
        }
        for (var k = 0, len = phrases.length; k < len; k++) // Search & replace words (Loop through each noun until match)
        {
            if (righttext.value.includes(phrases[k, 0])) { righttext.value = righttext.value.replace(phrases[k, 0], phrases[k, 1]); }
        }  
    }
}

function Flip() { // Flip Languages ----------------------------------------
    var lefttext = document.getElementById("lefttextarealanguage");
    var righttext = document.getElementById("righttextarealanguage");

    if (lefttext.textContent == "Spanish") { lefttext.textContent = "English"; righttext.textContent = "Spanish"; spanishtoenglish = false;} // flip to English to Spanish
    else if (lefttext.textContent == "English") { lefttext.textContent = "Spanish"; righttext.textContent = "English"; spanishtoenglish = true;}  // flip to Spanish to English
}