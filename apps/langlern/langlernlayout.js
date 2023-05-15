const langlernnavbar = document.getElementById(`langlernnavbar`);

document.head.innerHTML += `
<style>
.langlernlayoutnav{
    width: 100%;
    min-width: 100%;
    background-color: goldenrod;
    display:flex;
    justify-content: space-evenly;
}
.langlernlayoutnav div{
    padding: .5em;
    border-radius: 10%;
    background-color: gold;
    display:flex; 
    margin: .2em 0em .2em 0em;
    transition: .2s;
}
.langlernlayoutnav div:hover{
    border-radius: 30%;
    background-color: gold;
    cursor: pointer;
}
.thebutton{
    width: 100%;
    min-width: 100%;
    height: 2.5em;
    background-color: gold;
}
</style>
`;
langlernnavbar.innerHTML = `
    <div class="langlernlayoutnav">
        <div onclick="window.location.href = './langlern.html'">Home</div>
        <div onclick="window.location.href = './sounds.html'">Sounds</div>
        <div onclick="window.location.href = './vocab.html'">Vocab</div>
        <div onclick="window.location.href = './languages.html'" id="navbarcurrentlang">Language</div>
    </div>
`;

document.getElementById("navbarcurrentlang").innerHTML = localStorage.getItem('currentlang') || "spanish";