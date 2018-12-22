var LivingCreature = require("./class");

module.exports = class Grass extends LivingCreature {


    mult() {
        var zang = this.chooseCell(0);
        var empty = zang[Math.floor(Math.random()*zang.length)];
        this.multiply++;
        if (empty && this.multiply > 3) {
            Grassinit++;
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 1;
            var newGr = new Grass(newX, newY, 1);
            grassArr.push(newGr);


        }


    }

}