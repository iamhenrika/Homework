// Practice What You Learned
// Static Methods and Properties
// class Governor {}
// There is only one Governor in the state, add static methods and properties you'd expect a Governor to have.
// log the properties and test the methods (don't instantiate)

class Governor {
    static age = 47;
    static gender = "Female";
    static race = "Black";
    static greetingOne() { "Hello, all. Thank you for taking the time to meet with me." };
    static problem() { return "Stasi, what's today's headache?" };

}

console.log(Governor);
console.log(Governor.greetingOne());
console.log(Governor.problem());


// Inheritance
// Your base class
// Person{constructor(){}}
// Think of three properties all people share, set them with the constructor
// Think of three methods all people share
// Create a PostalWorker class that inherits from person, add some methods
// Create a Chef class that inherits from person, add some methods
// Create 2 PostalWorkers and 2 Chefs, log them and test all their methods

class Person {
    constructor(personName, personAge, personGender) {
        this.name = personName;
        this.age = personAge;
        this.gender = personGender
    }

    walk() {
        console.log("Let's go!");
    }
    sleep() {
        console.log("*yawn* I'm sleepy")
    }
    eat() {
        console.log("Ohhhhh, yummy!");
    }
}

class PostalWorker extends Person {
    deliveredMail() { console.log("I'm ready to drop off some letters"); }
    pickedUpMail() { console.log("Ohhh, this letter is going far away"); }
}

class Chef extends Person {
    chopsVegetables() { console.log("This is the best part"); }
    usesTheStove() { console.log("Ohhh, watch out. That's hot"); }
}

const postalWorkerOne = new PostalWorker("Stevens", 60, "Male");
const postalWorkerTwo = new PostalWorker("Williams", 34, "Female");
const chefOne = new Chef("Tamia", 40, "Female");
const chefTwo = new Chef("Juliette", 25, "Female");

console.log(postalWorkerOne);
console.log(postalWorkerTwo);
console.log(chefOne);
console.log(chefTwo);

postalWorkerOne.walk();
postalWorkerOne.sleep();
postalWorkerOne.eat();
postalWorkerOne.deliveredMail();
postalWorkerOne.pickedUpMail();

postalWorkerTwo.walk();
postalWorkerTwo.sleep();
postalWorkerTwo.eat();
postalWorkerTwo.deliveredMail();
postalWorkerTwo.pickedUpMail();

chefOne.walk();
chefOne.sleep();
chefOne.eat();
chefOne.chopsVegetables();
chefOne.usesTheStove();

chefTwo.walk();
chefTwo.sleep();
chefTwo.eat();
chefTwo.chopsVegetables();
chefTwo.usesTheStove();