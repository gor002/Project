function setup() {
    frameRate(5);
    createCanvas(60 * side, 60 * side);
    background('#acacac');
}


socket = io();
side = 15;

function drawMatrix(matrix) {

    console.log(matrix);
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            if (matrix[y][x] == 2) {
                fill("yellow");
            }
            if (matrix[y][x] == 3) {
                fill("red");
            }
            if (matrix[y][x] == 4) {
                fill("blue");
            }
            if (matrix[y][x] == 5) {
                fill("black");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }

            rect(x * side, y * side, side, side);
            // fill("blue");
            // text(x + " , " + y, x * side + side / 2, y * side + side / 2);


        }
    }



}


socket.on("matrix", drawMatrix);