/*Creating Classes & Factories
Links to an external site. Easy mode
Build this in repl.it
Links to an external site. Hard Mode (Practice Command Line, recall Git )
mkdir in your software_homework/unit_1 folder you made on saturday called w03d01
cd into that folder and run the command git init
touch a file called homework.js
open the file up in vs code
do your homework in this file
run your code periodically when you want by opening the terminal/hyper/vscode terminal and running node ~/software_homework/unit_1/w03d01/homework.jsthis assumes you followed all commands correctly
if for some reason you have an issue and you cannot do this successfully it's fine you made a mistake somewhere, you can get help at office hours, just submit your hw with repl.it, this is just a bonus, we'll be practicing this workflow in class during the upcoming weeks.
Follow the prompts to commit your work with git add -A&& git commit -m "Message Here"
When you are done with your hw, make an empty repository on github.comor github.comand then go through the steps to push your local git repository.
Remember again this a bonus
Your link to your github is what you submit
If at any point you get stuck and can't get unstuck, copy and paste your code to repl.it and submit that.
Git issues is not an acceptable reason to not turn in this assignment, the git work is a bonus.
Links to an external site. Note
There is a prompt below each section, for Hard Mode it will tell you to save, and commit your work for Easy Mode it will tell you to save and run your code in repl.it.
Links to an external site. */

// Hamster
// attributes:
// owner - string, initially set as an empty string
// name - string, set the name from parameter in constructor method
// price - integer, set as 15
// methods:
// wheelRun() - log "squeak squeak"
// eatFood() - log "nibble nibble"
// getPrice() - return the price

class Hamster {
    constructor(name) {
        this.owner = "";
        this.name = name;
        this.price = 15;
    }
    wheelRun() {
        console.log("squeak squeak");
    }
    eatFood() {
        console.log("nibble nibble");
    }
    getPrice() {
        return this.price;
    }
}

// 🔴 Hard Mode Save & Commit your work!
// Your commit message should read something like:
// "created hamster class"
// Easy Mode Make sure it works so far
// Links to an external site.


//Person attributes:
// name - set name from parameter in constructor method
// age - initially 0
// height - initially 0
// weight - initially 0
// mood - integer starting at 0 initially
// hamsters - empty array initially
// bankAccount - initially set to 0
// methods:
// getName() - returns name
// getAge() - returns age
// getWeight() - returns weight
// greet() - logs a message with person's name
// eat() - increment weight, increment mood
// exercise() - decrement weight
// ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
// buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())

class Person {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getWeight() {
        return this.weight;
    }
    greet() {
        console.log(`Hello, ${this.name}`);
    }
    eat(times) {
        for (let i = 0; i < times; i++) {
            this.weight++;
            this.mood++;
        }
    }
    exercise(times) {
        for (let i = 0; i < times; i++) {
            this.weight--;
        }
    }
    ageUp(years) {
        for (let i = 0; i < years; i++) {
            this.age++;
            this.height++;
            this.weight++;
            this.mood--;
            this.bankAccount += 10;
        }
    }
    buyHamster(hamster) {
        this.hamsters.push(hamster);
        this.mood += 10;
        this.bankAccount -= hamster.getPrice();
    }
}


// 🔴 Hard Mode Save & Commit your work!
// Your commit message should read something like:
// "created person class"
// Easy Mode Keep Going and save and run code
// Links to an external site.


//Create a Story with your Person class
// Feel free to update or add methods to automate some of these tasks.
// Instantiate a new Person named Timmy
// Age Timmy five years
// At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
// Now Timmy's a little heavier than  he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
// Age Timmy 9 years
// Create a hamster named "Gus"
// Set Gus's owner to the string "Timmy"
// Have Timmy "buy" Gus
// Age Timmy 15 years
// Have Timmy eat twice
// Have Timmy exercise twice

let timmy = new Person("Timmy");
timmy.ageUp(5);
timmy.eat(5);
timmy.exercise(5);
timmy.ageUp(9);

let gus = new Hamster("Gus");
gus.owner = "Timmy";
timmy.buyHamster(gus);
timmy.ageUp(15);
timmy.eat(2);
timmy.exercise(2);

// 🔴 Hard Mode Save & Commit your work!
// Your commit message should read something like:
// "created timmys story" Easy Mode Keep Going Save and Run Code
// Links to an external site.


// Chef Make Dinners
// class Dinner {}
// class Chef {}
// Chef should be a factory of Dinner
// Add a constructor to dinner that sets the string properties, appetizer, entree and dessert.
// Add a method on chef that takes three arguments and returns a new Dinner based on those arguments.
// Have the Chef create 3 dinners, log the dinners

class Dinner {
    constructor(appetizer, entree, dessert) {
        this.appetizer = appetizer,
            this.entree = entree,
            this.dessert = dessert
    }
}

class Chef {
    cook(appetizer, entree, dessert) {
        let newDinner = new Dinner(appetizer, entree, dessert)
        console.log(newDinner)
    }
}

const chefOne = new Chef('Henrika')

chefOne.cook('Vegetable Patter', 'Summer Salad', 'Vegan Cheesecake');
chefOne.cook('Guacamole and Chips', 'Paella', 'Flan');
chefOne.cook('Spring Salad', 'Mushroom Risotto', 'Tiramisu')

// 🔴 Hard Mode Save & Commit your work!
// Your commit message should read something like:
// "Dinner is served" Easy Mode Keep Going Save and Run Your Code
