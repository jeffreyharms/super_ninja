class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }


    sayName() {
        console.log(this.name);
    }


    showStats() {
        console.log("name: " + this.name, "health: " + this.health, "speed: " + this.speed, "strength: " + this.strength);
    }

    drinkSake() {
        this.health += 10;
        console.log(this.health);
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        super.health = 200;
        super.speed = 10;
        super.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("Live every week like it's Shark Week");
    }
}

const ninja1 = new Ninja("Raiden");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

const ninja2 = new Sensei("Splinter");
ninja2.sayName();
ninja2.speakWisdom();
ninja2.drinkSake();
ninja2.showStats();