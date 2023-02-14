var justcanvas = document.getElementById("mycanvas");
var canvas = document.getElementById("mycanvas").getContext("2d");
var rangebar = document.getElementById("rangebar");
var rangebar2 = document.getElementById("rangebar2");

var colors = ["red", "yellow", "orange", "blue", "pink", "purple"]


var playercolor = "black";
canvas.fillStyle = "black";

function generate() {
    // canvas.fillStyle = canvas.fillStyle == "#000000"? "#ff0000" : "#000000";
   
   

    // Erase & draw new
    canvas.fillStyle = "black";
    // canvas.rect(0, 0, justcanvas.width, justcanvas.height);
    // canvas.fill();
    

    var playerx = 300;
    var playery = 200;

for (var i = 0; i < 500; i++) { 
    var r = Math.floor(Math.random() * 3) + 1;

    // if (r == 1) {playery -= 4;} // UP
    if (r == 1) {playery += 4;} // DOWN
    if (r == 2) {playerx -= 4;} // LEFT
    if (r == 3) {playerx += 4;} // RIGHT

        // Boundries
    if (playerx > justcanvas.width - 20) {playerx = justcanvas.width - 20;}
    if (playerx < 0) {playerx = 0;}
    if (playery > justcanvas.height - 20) {playery = justcanvas.height - 20;}
    if (playery < 0) {playery = 0;}
    
    canvas.fillStyle = "blue";
    canvas.rect(playerx,playery,rangebar.value,rangebar2.value)
    canvas.fill();
};
}