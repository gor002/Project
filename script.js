var socket = io();
var side = 15;
var n = 30;
var m = 30;

function setup() {
    frameRate(5);
    createCanvas(n * side, m * side);
    background("#acacac");
}







function drawMatrix(obj) {
    // if(obj.SpecialWeather == "LongNight"){
    //     background("black");
    // }
    // else{
    //     background("yellow");
    // }

    console.log(obj.exanakNow);
    console.log(obj.SpecialWeather);
    for (var y = 0; y < obj.matrix.length; y++) {
        for (var x = 0; x < obj.matrix[y].length; x++) {

            if (obj.matrix[y][x] == 1 && obj.exanakNow == "Dzmer") {
                fill("white");
            }
            if (obj.matrix[y][x] == 1 && obj.exanakNow == "Garun") {
                fill("GreenYellow");
            }
            if (obj.matrix[y][x] == 1 && obj.exanakNow == "Amar") {
                fill("Orange");
            }

            if (obj.matrix[y][x] == 1 && obj.exanakNow == "Ashun") {
                fill("brown");
            }
            if (obj.matrix[y][x] == 2) {
                fill("yellow");
            }
            if (obj.matrix[y][x] == 3) {
                fill("red");
            }
            if (obj.matrix[y][x] == 4) {
                fill("blue");
            }
            if (obj.matrix[y][x] == 5) {
                fill("DarkBlue");
            }
            else if (obj.matrix[y][x] == 0) {
                if (obj.SpecialWeather == "LongNight") {
                    fill("black");
                }
                else {
                    fill("#acacac");
                }
            }

            rect(x * side, y * side, side, side);
            // fill("blue");
            // text(x + " , " + y, x * side + side / 2, y * side + side / 2);


        }
    }



}


socket.on("send matrix", drawMatrix);