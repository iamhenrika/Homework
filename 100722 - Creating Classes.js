// Creating Classes
// You will be working with this class
// class Cat {)
// give the class at least 3 properties
// give the class at least 3 methods
// create two instances of the class (two cats)
// log both instances to see their properties
// invoke each method from both instances

class Cat {
    constructor(name, breed, gender, age) {
        this.catName = name;
        this.catBreed = breed;
        this.catGender = gender;
        this.catAge = age;
    }

    eat() {
        console.log("Meow, that's good!");
    }

    sleep() {
        console.log("*yawn* I'm tired. . .");
    }

    jump() {
        console.log("*bounce, bounce, bounce* . . .Oops, did I drop that :/");
    }

}

const luca = new Cat("Luca", "Calico", "Male", 2)
console.log(luca);

const lady = new Cat("Lady", "Black", "Female", 7)
console.log(lady);

luca.eat();
luca.sleep();
luca.jump();

lady.eat();
lady.sleep();
lady.jump();

//class Pirate { constructor() {}
// Create 3 properties that are set by the constructor
// Create 3 methods
// Instantiate 2 arraysof 3 pirates, name the arrays after your favorite pirate ships, jollyRoger and blackPearl
// Loop over each array and print 3 properties of each pirate

class Pirate {
    constructor(pirateName, legs, country) {
        this.pirateName = pirateName;
        this.pirateLegs = pirateLegs;
        this.pirateCountry = pirateCountry;
    }

    fight() {
        console.log("You're going to regret this!");
    }
    drink() {
        console.log("A fine brandy that is.");
    }
    curse() {
        console.log("(&^*%^&%^&$... Oops, there's a lady present");
    }
}

const jollyRoger = [];
const blackPearl = [];

jollyRoger[0] = new Pirate("The Captain", 2, "From Portugal");
jollyRoger[1] = new Pirate("Number One", 1, "From Spain");
jollyRoger[2] = new Pirate("The Cook", 1, "From The West Indies");

blackPearl[0] = new Pirate("The Captain", 2, "From Hispaniola");
blackPearl[1] = new Pirate("Newest Crew Member", 2, "From England");
blackPearl[2] = new Pirate("The Naviagtor", 2, "France");

const pirateShips = [jollyRoger, blackPearl];

pirateShips.forEach(function (ship) {
    for (let x = 0; x < ship.length; x++) {
        console.log(ship[x]);
    }
}
);

console.log(pirateShips);

let arrayOfPirateShips = ([jollyRoger, blackPearl]);
arrayOfPirateShips.forEach(function (pirateShips) {
    console.log(pirateShips)
}
)