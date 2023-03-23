// Dynamic Header Nav -------------
try {
let layoutpagenav = document.getElementById("layoutpagenav");

layoutpagenav.innerHTML = `
<nav class="topnavbar"><h1 onclick="window.location.href='/index.html'">Jazmer World Music</h1><ul>
<li onclick="window.location.href='/language/indexlanguages.html'">Language</li>
<li onclick="window.location.href='/survival/indexsurvival.html'">Survival</li>
<li onclick="window.location.href='/music/indexmusic.html'">Music</li>
<li onclick="window.location.href='/apps/indexapps.html'">Apps</li>
<li onclick="window.location.href='/other/indexother.html'">Other</li>

</ul></nav>
<div class="topbackbutton" onclick="history.back()">Back</div>
`;
} catch {}

// Dynamic Body ------------------------------------
let layoutpagebody = document.getElementsByTagName("body")[0];
layoutpagebody.style = "background-color: black;";


// Dynamic Footer ----------------------------------
let layoutpageDate = new Date();
let layoutpageFooter = document.getElementsByTagName("footer")[0];
layoutpageFooter.innerHTML = "<p>Copyright &copy; "+layoutpageDate.getFullYear()+" - Conner Jasmer</p>";
layoutpageFooter.style = "text-align: center; padding: .4em; background-color: gold; border: .3em solid black; color: black;"; //CSS

function randomnum(min, max){return Math.floor(Math.random() * (max - min + 1)) + min}