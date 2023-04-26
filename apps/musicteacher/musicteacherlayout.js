const eeeeee = document.getElementById("musicnav");
eeeeee.innerHTML = `<button onclick='window.location.href="/index.html"'>Exit</button><button onclick='window.location.href="./musicteacher.html"'>Home</button>`;


// CSS
document.head.innerHTML += `
<style>
*{
    font-family:sans-serif;
}
#musicnav{
    width: 100%;
    padding: .5em 0em .5em 0em;
    min-width: 100%;
    background-color: green;
    display:flex;
    justify-content: space-evenly;
}
#musicnav button{
width: 8em;
height: 2em;
}
</style>
`;