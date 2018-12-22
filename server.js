var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");


app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);
matrix = [];


Grassinit = 0;
Xotakerinit = 0;


io.on('connection', function (socket) {

});
var n = 30;
var m = 30;

grassArr = [];
xotakerArr = [];
gishatichArr = [];
kerpar1Arr = [];
kerpar2Arr = [];


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
            Grassinit++;
        }
        if (matrix[y][x] == 2) {
            var gr1 = new Xotaker(x, y, 2);
            xotakerArr.push(gr1);
            Xotakerinit++;
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

// exanakNow = "Dzmer"


// function exanak() {
//     if (exanakNow == "Ashun") {
//         exanakNow = "Dzmer";
//     }
//     if (exanakNow == "Dzmer") {
//         exanakNow = "Garun";
//     }
//     if (exanakNow == "Garun") {
//         exanakNow = "Amar";
//     }
//     if (exanakNow == "Amar") {
//         exanakNow = "Ashun";
//     }
//     //io.sockets.emit("exanakNow" , exanakNow)

// }

// setInterval(exanak, 6000)


// function drawServerayin() {

//     for (var i in grassArr) {
//         grassArr[i].mult();
//     }
//     for (var i in xotakerArr) {
//         xotakerArr[i].mult();
//         xotakerArr[i].move();
//         xotakerArr[i].eat();
//         xotakerArr[i].die();


//     }
//     for (var i in gishatichArr) {
//         gishatichArr[i].mult();
//         gishatichArr[i].eat();
//         gishatichArr[i].move();
//         gishatichArr[i].die();


//     }
//     for (var i in kerpar1Arr) {
//         kerpar1Arr[i].mult();
//         kerpar1Arr[i].eat();
//         kerpar1Arr[i].move();
//         kerpar1Arr[i].die();


//     }
//     for (var i in kerpar2Arr) {
//         //kerpar1Arr[i].mult();
//         kerpar2Arr[i].eat();
//         kerpar2Arr[i].move();
//         kerpar2Arr[i].die();


//     }
//     //console.log(matrix);
//     io.sockets.emit("matrix", matrix, exanakNow);

// }

// setInterval(drawServerayin, 200);


exanakNow = "Dzmer"



function wheter() {
    if (exanakNow == "Dzmer") {
        exanakNow = "Garun";
    }
    else if (exanakNow == "Garun") {
        exanakNow = "Amar";
    }
    else if (exanakNow == "Amar") {
        exanakNow = "Ashun";
    }
    else if (exanakNow == "Ashun") {
        exanakNow = "Dzmer";
    }
}
SpecialWeather = "LongNight";
function Special() {
    if (SpecialWeather == "LongNight") {
        SpecialWeather = "Morning";
    }
    else if (SpecialWeather == "Morning") {
        SpecialWeather = "LongNight";
    }

}


statistics = { "objarr": [] };



setInterval(function () {
    statistics.objarr.push({
        "Grass_Born": Grassinit,
        "Xotaker_Born": Xotakerinit,
        "Gishatich_quantity": gishatichArr.length,
        "Kerpar1_quantity": kerpar1Arr.length,
    })
    fs.writeFile("statistics.json", JSON.stringify(statistics, null, 3), function (err) {
        if (err) throw err;
    })
}, 13000);



function drawServerayin() {

    for (var i in grassArr) {

        mult = grassArr[i].multiply;
        if (SpecialWeather == "LongNight") {
            grassArr[i].multiply = mult / 2;


        }
        else {
            grassArr[i].multiply = mult * 2;
            grassArr[i].mult();
        }

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




    io.sockets.emit('send matrix', { "matrix": matrix, "exanakNow": exanakNow, "SpecialWeather": SpecialWeather });
}

setInterval(Special, 8000);
setInterval(wheter, 4000);
setInterval(drawServerayin, 200);