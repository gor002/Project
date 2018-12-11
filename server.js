var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);
var matrix = [];




var n = 60;
var m = 60;

var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var kerpar1Arr = [];
var kerpar2Arr = [];


for (var i = 0; i < n; i++) {
    matrix[i] = [];
    for (var e = 0; e < m; e++) {
        matrix[i][e] = [];
        matrix[i][e] = Math.round(Math.random() * 8);
        matrix[i][e] = parseInt(matrix[i][e])
    }
}


var Grass = require("./Grass.js");
var Xotaker = require("./Xotaker.js");
var Gishatich = require("./Gishatich.js");
var Kerpar1 = require("./Kerpar1.js");
var Kerpar2 = require("./Kerpar2.js");



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




function drawServerayin() {





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
    console.log(matrix);

}

setInterval(drawServerayin, 100);



