
// 
const flags = [ // Order to show in dropdown box
{name: "blank", paramsdrawstripes: [1, "", ["white"]]},
{name: "france", paramsdrawstripes: [3, "vertical", ["blue", "white", "red"]]},
{name: "germany", paramsdrawstripes: [3, "horizontal", ["black", "red", "yellow"]]},
{name: "italy", paramsdrawstripes: [3, "vertical", ["green", "white", "red"]]},
{name: "ireland", paramsdrawstripes: [3, "vertical", ["green", "white", "orange"]]},
{name: "spain", paramsdrawstripes: [4, "horizontal", ["red", "yellow", "yellow", "red"]]},
{name: "portugal", paramsdrawstripes: [3, "vertical", ["green", "red", "red"]]},
{name: "romania", paramsdrawstripes: [3, "vertical", ["blue", "yellow", "red"]]},

{name: "russia", paramsdrawstripes: [3, "horizontal", ["white", "blue", "red"]]},
{name: "poland", paramsdrawstripes: [2, "horizontal", ["white", "red"]]},
{name: "ukraine", paramsdrawstripes: [2, "horizontal", ["blue", "yellow"]]},
{name: "sweden", paramsdrawstripes: [1, "horizontal", ["blue"]], paramsdrawshape: ["cross", ["yellow"]]},
{name: "finland", paramsdrawstripes: [1, "horizontal", ["white"]], paramsdrawshape: ["cross", ["blue"]]},
{name: "denmark", paramsdrawstripes: [1, "horizontal", ["red"]], paramsdrawshape: ["cross", ["white"]]},
{name: "estonia", paramsdrawstripes: [3, "horizontal", ["blue", "black", "white"]]},
{name: "latvia", paramsdrawstripes: [5, "horizontal", ["red", "red", "white", "red", "red"]]},
{name: "lithuania", paramsdrawstripes: [3, "horizontal", ["yellow", "green", "red"]]},
{name: "greece", paramsdrawstripes: [9, "horizontal", ["blue", "white"]], paramsdrawshape: ["cornerbox", ["blue"]]},
{name: "uae", paramsdrawstripes: [3, "horizontal", ["green", "white", "black"]], paramsdrawshape: [4, "vertical", ["red", "rgba(100, 100, 100, 0)", "rgba(100, 100, 100, 0)", "rgba(100, 100, 100, 0)"]]},
{name: "israel", paramsdrawstripes: [5, "horizontal", ["blue", "white", "white", "white", "blue"]]},
{name: "algeria", paramsdrawstripes: [2, "vertical", ["green", "white"]]},
{name: "nigeria", paramsdrawstripes: [3, "vertical", ["green", "white"]]},
{name: "indonesia", paramsdrawstripes: [2, "horizontal", ["red", "white"]]},
{name: "thailand", paramsdrawstripes: [6, "horizontal", ["red", "white", "blue", "blue", "white", "red"]]},
{name: "usa", paramsdrawstripes: [13, "horizontal", ["red", "white"]], paramsdrawshape: ["cornerbox", ["blue"]]},
{name: "colombia", paramsdrawstripes: [4, "horizontal", ["yellow", "yellow", "blue", "red"]]},
{name: "peru", paramsdrawstripes: [3, "vertical", ["red", "white"]]},
];

const htmlflagslist = document.getElementById("htmlflagslist");
flags.forEach(f => {
    htmlflagslist.innerHTML += "<option>" + f.name + "</option>";
})

// Instructions on how to make the flags using my functions
htmlflagslist.addEventListener("change", flagchanged)
function flagchanged(){

    let theflag = flags[0];
    flags.forEach(f => {if(f.name == htmlflagslist.value){ theflag = f; }})

    drawstripes(theflag.paramsdrawstripes[0], theflag.paramsdrawstripes[1], theflag.paramsdrawstripes[2])
    if(theflag.paramsdrawshape != null){drawshape(theflag.paramsdrawshape[0], theflag.paramsdrawshape[1]);}
}

// Button Clicks
function btnFill(){
    const fillamount = parseInt(document.getElementById("fillamount").value) || 3;
    let filldirection = "horizontal";
    if(document.getElementById("filldirection").checked){ filldirection="vertical"; }
    const fillcolors = document.getElementById("fillcolors").value.split(",") || ["red"];
    

    drawstripes(fillamount, filldirection, fillcolors);
}
function applyclick(){
canvas.style.width = inputwidth.value + "px";
canvas.style.height = inputheight.value + "px";
}
// Main Functions
function drawstripes(amount, direction, colors){
    if (direction == "vertical") {
        var xstart = 0; var count = 0;
        for (var i = 0; i < amount; i++) { 
            
            // Color (if more stripes than colors, it repeats)
            ctx.fillStyle = colors[count];
            if(count < colors.length - 1) {count++;}
            else {count = 0;}

            ctx.beginPath();
            ctx.fillRect(xstart, 0, canvas.width / amount + 1, canvas.height); // +1 covers empty gap
            ctx.closePath(); 
            xstart += (canvas.width / amount); // change start x position for next stripe
        }
    }
    else{ // Horizontal is default
        var ystart = 0; var count = 0;
        for (var i = 0; i < amount; i++) { 
   
            // Color (if more stripes than colors, it repeats)
            ctx.fillStyle = colors[count];
            if(count < colors.length - 1) {count++;}
            else {count = 0;}

            ctx.beginPath();
            ctx.fillRect(0, ystart, canvas.width, canvas.height / amount + 1); // +1 covers empty gap
            ctx.closePath(); 
            ystart += (canvas.height / amount); // change start y position for next stripe
        }
    }
}
function drawshape(shape, color){
ctx.beginPath();
ctx.fillStyle = color[0];


if (shape == "moonstar"){}
if (shape == "cross"){
    var linewidth = canvas.height / 4;
    ctx.fillRect(canvas.width / 4, 0, linewidth, canvas.height); // Vertical
    ctx.fillRect(0, (canvas.height / 2) - linewidth / 2, canvas.width, linewidth); // Horizontal
}
if (shape == "cornerbox"){ ctx.fillRect(0, 0, canvas.width / 3, canvas.height / 2);}

ctx.closePath(); 
}
drawstripes(1, "vertical", ["white"]);

function download(){
var link = document.createElement('a');
  link.download = 'filename.png';
  link.href = document.getElementById('canvas').toDataURL()
  link.click();
}
