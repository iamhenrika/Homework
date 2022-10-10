// Practice What You Learned
// Static Methods and Properties
// class Governor {}
// There is only one Governor in the state, add static methods and properties you'd expect a Governor to have.
// log the properties and test the methods (don't instantiate)

class Governor {
    static age = 47;
    static gender = "Female";
    static race = "Black";
    static greetingOne () { "Hello, all. Thank you for taking the time to meet with me."};
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