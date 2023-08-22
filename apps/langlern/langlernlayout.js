const langlernnavbar = document.getElementById(`langlernnavbar`);

langlernnavbar.innerHTML = `
    <div class="langlernlayoutnav">
        <div onclick="window.location.href = './langlern.html'">Home</div>
        <div onclick="window.location.href = './sounds.html'">Sounds</div>
        <div onclick="window.location.href = './vocab.html'">Vocab</div>
        <div onclick="window.location.href = './languages.html'" id="navbarcurrentlang">Language</div>
    </div>
`;


// Dynamic Color Themes
const ColorThemes = [
    {name: "Gold", clr1: "#ffd700", clr2: "#daa520", clr3: "#B68711"},
    {name: "Dark", clr1: "#7e97a6", clr2: "#63686e", clr3: "#373640"},
    {name: "Blues", clr1: "#81FFFD", clr2: "#408ab4", clr3: "#34699a"},
    {name: "Greens", clr1: "#ACFF89", clr2: "#2D9500", clr3: "#1E6500"},
    {name: "Warm", clr1: "#FFA3A3", clr2: "#DC1717", clr3: "#6A0000"},
    {name: "Purples", clr1: "#E6A0FF", clr2: "#9500CB", clr3: "#50006D"},
  ];

document.documentElement.style.setProperty(`--color1`, `${localStorage.getItem('llcolor1') || '#ffd700'}`);
document.documentElement.style.setProperty(`--color2`, `${localStorage.getItem('llcolor2') || '#daa520'}`);
document.documentElement.style.setProperty(`--color3`, `${localStorage.getItem('llcolor3') || '#B68711'}`);



document.getElementById("navbarcurrentlang").innerHTML = localStorage.getItem('currentlang') || "spanish";