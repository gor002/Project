
var matrix = [];

var n = 60;
var m = 60;



var side = 15;


var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var kerpar1Arr = [];
var kerpar2Arr = [];

function setup() {
    for (var i = 0; i < n; i++) {
        matrix[i] = [];
        for (var e = 0; e < m; e++) {
            matrix[i][e] = [];
            matrix[i][e] = random(0, 7)
            matrix[i][e] = parseInt(matrix[i][e])
        }
    }
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {


            if (matrix[y][x] == 1) {
                var gr1 = new Grass(x, y, 1);
                grassArr.push(gr1);
            }
            if (matrix[y][x] == 2) {
                var gr1 = new Xotaker(x, y, 2);
                xotakerArr.push(gr1);
            }
            if (matrix[y][x] == 3) {
                var gr1 = new Gishatich(x, y, 3);
                gishatichArr.push(gr1);
            }
            if (matrix[y][x] == 4) {
                var gr1 = new Kerpar1(x, y, 4);
                kerpar1Arr.push(gr1);
            }
            if (matrix[y][x] == 5) {
                var gr1 = new Kerpar2(x, y, 5);
                kerpar2Arr.push(gr1);
            }

        }

    }
    console.log(grassArr);






    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');




}


function draw() {

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

    for (var i in grassArr) {
        grassArr[i].mult();
    }
    for (var i in xotakerArr) {
        xotakerArr[i].mult();
        xotakerArr[i].move();
        xotakerArr[i].eat();
        xotakerArr[i].die();


    }
    for (var i in gishatichArr) {
        gishatichArr[i].mult();
        gishatichArr[i].eat();
        gishatichArr[i].move();
        gishatichArr[i].die();


    }
    for (var i in kerpar1Arr) {
        kerpar1Arr[i].mult();
        kerpar1Arr[i].eat();
        kerpar1Arr[i].move();
        kerpar1Arr[i].die();


    }
    for (var i in kerpar2Arr) {
        //kerpar1Arr[i].mult();
        kerpar2Arr[i].eat();
        kerpar2Arr[i].move();
        kerpar2Arr[i].die();


    }

}


