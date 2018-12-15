var LivingCreature = require("./class");


module.exports = class Xotaker extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.multiply = 1;
        this.energy = 3;



    }

    mult() {
        var zang = this.chooseCell(0);
        var empty = zang[Math.floor(Math.random()*zang.length)];
        if (empty && this.multiply > 8) {

            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 2;
            var newXt = new Xotaker(newX, newY);
            xotakerArr.push(newXt);


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
            [this.x + 1, this.y + 1]
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
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;

        }
    }

    eat() {
        this.multiply++;
        var zang = this.chooseCell(1);
        var gr = zang[Math.floor(Math.random()*zang.length)];
        if (gr) {
            this.energy++;
            var newX = gr[0];
            var newY = gr[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
                }
            }

            this.y = newY;
            this.x = newX;




        }
    }

    die() {
        if (this.energy < 0) {
            matrix[this.y][this.x] = 0;
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1)
                }
            }
        }



    }




}