function CreateNoise(pixamount){
    let pixsize = canvas.width/pixamount;

    // add clr1 clr2 parameters!
    for(iy = 0; iy<pixamount; iy++){
        for(ix = 0; ix<pixamount; ix++){

            let RGB = .1*ix*iy;
            //let RGB = (ix*1.01)+(iy*2);

            ctx.beginPath();
            ctx.fillStyle = `rgb(${RGB}, ${RGB}, ${RGB})`;
            ctx.fillRect(ix*pixsize, iy*pixsize, pixsize, pixsize);
            ctx.fill();
            ctx.closePath();
        }
    }
}