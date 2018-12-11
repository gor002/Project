var LivingCreature = require("./class");


module.exports = class Kerpar2 extends LivingCreature {
    constructor(x, y, index) {
        super(x,y,index);
        this.multiply = 1;
        this.energy = 3;




    }

    mult() {
        var zang = this.chooseCell(0);
        var empty = zang[Math.floor(Math.random()*zang.length)];
        this.multiply++;
        if (empty && this.multiply > 16) {

            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 3;
            var newkerp2 = new Kerpar2(newX, newY);
            kerpar2Arr.push(newkerp2);


        }


    }


    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],

        ];

    }


    chooseCell(character) {
        this.getNewDirections();
        return super.chooseCell(character);
    }


    move() {
        var zang = this.chooseCell(0);
        var empty = zang[Math.floor(Math.random()*zang.length)];
        this.energy--;
        if (empty) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;

        }
    }

    eat() {
        var zang = this.chooseCell(4);
        var xt = zang[Math.floor(Math.random()*zang.length)];
        var zang1 = this.chooseCell(3);
        var xt1 = zang1[Math.floor(Math.random()*zang1.length)];


        if (xt) {
            this.energy += 1;
            var newX = xt[0];
            var newY = xt[1];
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;
            for (var i in kerpar1Arr) {
                if (kerpar1Arr[i].x == newX && kerpar1Arr[i].y == newY) {
                    kerpar1Arr.splice(i, 1)
                }
            }

            this.y = newY;
            this.x = newX;




        }
        if (xt1) {
            this.energy += 1;
            var newX = xt1[0];
            var newY = xt1[1];
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == newX && gishatichArr[i].y == newY) {
                    gishatichArr.splice(i, 1)
                }
            }

            this.y = newY;
            this.x = newX;




        }





    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in kerpar2Arr) {
                if (kerpar2Arr[i].x == this.x && kerpar2Arr[i].y == this.y) {
                    kerpar2Arr.splice(i, 1)
                }
            }
        }



    }



}