var LivingCreature = require("./class");


module.exports = class Gishatich extends LivingCreature{
    constructor(x, y, index) {
        super(x,y,index)
        this.multiply = 2;
        this.energy = 12;

       

    }

    mult() {
        var zang = this.chooseCell(0);
        var empty = zang[Math.floor(Math.random()*zang.length)];
        this.multiply++;
        if (empty && this.multiply > 13) {

            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 3;
            var newGish = new Gishatich(newX, newY);
            gishatichArr.push(newGish);


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

            [this.x - 3, this.y - 3],
            [this.x, this.y - 3],
            [this.x + 3, this.y - 3],
            [this.x - 3, this.y],
            [this.x + 3, this.y],
            [this.x - 3, this.y + 3],
            [this.x, this.y + 3],
            [this.x + 3, this.y + 3]
        ];

    }


    chooseCell(character) {
        this.getNewDirections();
        return super.chooseCell(character);
    }


    move() {
        var zang = this.chooseCell(0,1);
        var empty = zang[Math.floor(Math.random()*zang.length)];
        this.energy--;
        if (empty) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;

        }
    }

    eat() {
        var zang = this.chooseCell(2);
        var xt = zang[Math.floor(Math.random()*zang.length)];
        if (xt) {
            this.energy += 2;
            var newX = xt[0];
            var newY = xt[1];
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
                    xotakerArr.splice(i, 1)
                }
            }

            this.y = newY;
            this.x = newX;




        }
    }

    die() {
        if (this.energy < 0) {
            matrix[this.y][this.x] = 0;
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1)
                }
            }
        }



    }



}