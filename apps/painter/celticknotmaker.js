// Makes a Grid of evenly spaced vertical and horizontal lines
// MakeGrid(5, 5, `green`, 1);

function btnGrid(){
    let gridnumcolumns = document.getElementById("gridnumcolumns");
    let gridnumrows = document.getElementById("gridnumrows");
    let gridcolor = document.getElementById("gridcolor");
    let gridwidth = document.getElementById("gridwidth");

    for(s=0; s<3; s++){ // paint 3 times sense the lines are dull
        MakeGrid(parseInt(gridnumcolumns.value)||5, parseInt(gridnumrows.value)||5, gridcolor.value||"black", parseInt(gridwidth.value)||2)
    }
}

function MakeGrid(numcolumns, numrows, color1, linewidth){
    let startx = canvas.width/(numcolumns+1);
    let starty = canvas.height/(numrows+1)
    // Columns
    for(i = 0; i < numcolumns; i++){
        ctx.beginPath();
        ctx.fillStyle = color1;
        ctx.fillRect(startx + ((i*startx)-linewidth/2), 0, linewidth, canvas.height);
        ctx.stroke();
    }
    // Rows
    for(i = 0; i < numrows; i++){
        ctx.beginPath();
        ctx.fillStyle = color1;
        ctx.fillRect(0, starty + ((i*starty)-linewidth/2), canvas.width, linewidth);
        ctx.stroke();
    }
}

// -----------------------------------------------------------
// MakeCelticKnot(7, 4, 14, 2, `lime`, 10, true);


function btnKnot(){
let knotnumcolumns = parseInt(document.getElementById("knotnumcolumns").value) || 4;
let knotnumrows = parseInt(document.getElementById("knotnumrows").value) || 4;
let knotcolor = document.getElementById("knotcolor").value || "#22cc00";
let knotoutlinewidth = parseInt(document.getElementById("knotoutlinewidth").value) || 2;
let knothasweave = false;
if(document.getElementById("knothasweave").checked){knothasweave=true;}

    MakeCelticKnot(knotnumcolumns, knotnumrows, 14, knotoutlinewidth, knotcolor, 10, knothasweave);
}

function MakeCelticKnot(numcolumns, numrows, linewidth, outlinewidth, color1, themargin, hasweave){
    let startx = canvas.width/(numcolumns+1);
    let starty = canvas.height/(numrows+1)

    // Columns
    for(i = 0; i < numcolumns; i++){
        ctx.beginPath();
        ctx.fillStyle = color1;
        ctx.fillRect(startx + ((i*startx)-linewidth/2), themargin, linewidth, canvas.height - themargin*2);
        
        ctx.fillStyle = `black`;
        ctx.fillRect(startx + ((i*startx)-linewidth/2), themargin, outlinewidth, canvas.height - themargin*2);
        ctx.fillRect(startx + ((i*startx)-linewidth/2)+linewidth, themargin, outlinewidth, canvas.height - themargin*2);
        ctx.stroke();
    }
    // Rows
    for(i = 0; i < numrows; i++){
        ctx.beginPath();
        ctx.fillStyle = color1;
        ctx.fillRect(themargin, starty + ((i*starty)-linewidth/2), canvas.width - themargin*2, linewidth);

        ctx.fillStyle = `black`;
        ctx.fillRect(themargin, starty + ((i*starty)-linewidth/2), canvas.width - themargin*2, outlinewidth);
        ctx.fillRect(themargin, starty + ((i*starty)-linewidth/2)+linewidth, canvas.width - themargin*2, outlinewidth);

        ctx.stroke();
    }

     // Creates overlap effect by covering certain black lines
     let shift = 0;
if(hasweave){
    for(r = 0; r < numrows; r++){
        for(c = 0; c < numcolumns; c++){
            if((c % 2) == 0){
                tempx = startx + startx*shift;

                // Cover with green
                ctx.fillStyle = color1;
                ctx.fillRect(tempx + ((c*tempx)-linewidth/2)+2, starty + ((r*starty)-linewidth/2), linewidth-2, 2);
                ctx.fillRect(tempx + ((c*tempx)-linewidth/2)+2, starty + ((r*starty)-linewidth/2)+linewidth, linewidth-2, 2);

                // Cover with black
                ctx.fillStyle = "black";
                ctx.fillRect(tempx + ((c*tempx)-linewidth/2), starty + ((r*starty)-linewidth/2), outlinewidth, linewidth);
                ctx.fillRect(tempx + ((c*tempx)-linewidth/2) + linewidth, starty + ((r*starty)-linewidth/2), outlinewidth, linewidth);
            }
        }
        if(shift == 0){shift = 1}
        else{shift = 0}
    }
}
    ctx.beginPath();
        ctx.fillStyle = color1;
        ctx.linewidth = outlinewidth;
        //ctx.fillRect(themargin, themargin, canvas.width - themargin*2, linewidth);
        ctx.fillRect(themargin, themargin-linewidth, canvas.width - themargin*2, linewidth);
        ctx.fillRect(themargin-linewidth, canvas.height - themargin, canvas.width, linewidth);

        ctx.fillRect(themargin-linewidth, themargin-linewidth, linewidth, canvas.height);
        ctx.fillRect(canvas.width - themargin, themargin-linewidth, linewidth, canvas.height);

        ctx.stroke();
}