var LivingCreature = require("./class");


module.exports = class Kerpar1 extends LivingCreature {
    constructor(x, y, index) {
        super(x,y,index);
        this.multiply = 2;
        this.energy = 5;




    }

    mult() {
        var zang = this.chooseCell(0);
        var empty = zang[Math.floor(Math.random()*zang.length)];
        this.multiply++;
        if (empty && this.multiply > 10) {

            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 3;
            var newkerp1 = new Kerpar1(newX, newY);
            kerpar1Arr.push(newkerp1);


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

            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2],

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
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;

        }
    }

    eat() {
        var zang = this.chooseCell(3);
        var xt = zang[Math.floor(Math.random()*zang.length)];
        if (xt) {
            this.energy += 2;
            var newX = xt[0];
            var newY = xt[1];
            matrix[newY][newX] = 4;
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
        if (this.energy <= 1) {
            matrix[this.y][this.x] = 0;
            for (var i in kerpar1Arr) {
                if (kerpar1Arr[i].x == this.x && kerpar1Arr[i].y == this.y) {
                    kerpar1Arr.splice(i, 1)
                }
            }
        }



    }



}