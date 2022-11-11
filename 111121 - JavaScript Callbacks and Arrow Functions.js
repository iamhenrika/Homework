// JavaScript Callbacks and Arrow Functions

/*Purpose From Curriculum Development Team: This material was meant to be a resource for learners to refer to later, but we'll briefly introduce/review these concepts, so we're familiar with them. This builds on Mod 1 knowledge and prepares learners for backend development.

What's a Callback Function and when Are They Used?
A callback function, or "callback", is a function being passed to another function as an argument

Since you've already used the array forEach method before, you've already used a callback!

Don't run the following, let's just read the code…
*/

const colors = ['red', 'green', 'blue'];

colors.forEach(function(color, idx) {
  console.log(`${idx + 1} - ${color}`);
});


/*In the above, the anonymous inline function being passed to forEach as its one and only argument - is a callback function.

Of course, when a function takes a callback as input, it is likely doing so with the intention of invoking that callback at some point in time.

VOCAB: In computer science, a function that accepts a function as input or returns a function is also known as a higher order function.

In addition to using callbacks functions with forEach, you also used them when you added event listeners in your Tic-Tac-Toe game like so:

gameboard.addEventListener('click', handleClick);

Now let's look at a more comprehensive example of how we can use callbacks by trying out this code: */

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function compute(a, b, op) {
  return op(a, b);
}

let result1 = compute(10, 5, add);
let result2 = compute(10, 5, subtract);




//Review Questions to turn in:

// ❓ When the add and subtract functions are passed as arguments to the compute function - they are ___ functions.

// They are called a callback function.




/*Also, note that we are passing named functions (add& sum) instead of using an anonymous inline function like with the forEach earlier.

One of the best ways to learn about callbacks is to first understand their use-cases.

Here are three use-cases for callback functions:

To provide a function to be called by a higher-order function such as forEach or the compute function we wrote above.

To provide a function to be executed each time an event happens - just like with the addEventListener example above.

To provide a function to be executed when an asynchronous process has completed.

Using Callbacks with Array Iterator Methods
One of the most popular use-cases for callback functions is to provide them to iterator methods on arrays.

As we've seen, calling the forEach method is a great way to iterate over all of the elements in an array.

JavaScript has designed the forEach method to:

Accept a callback function as an argument, and
Invoke that callback once for each element in the array
How many times would the anonymous callback function below be called?**:
*/

const flowers = ['rose', 'orchid', 'daisy'];

flowers.forEach(function(flower, idx) {
  console.log(`${idx + 1}) ${flower}`);
});

/* Using Callbacks with Asynchronous Functions
What's an "asynchronous" method?

Before we can clearly understand what "asynchronous" means, it will help to confirm what synchronous code is.

Synchronous Code Execution
So far, most of the code we've written is synchronous code.

Synchronous code is when a line of code completely finishes executing before the next line of code runs.

For example:
*/

const colors = ['red', 'green', 'blue'];

console.log('BEFORE the forEach...');

colors.forEach(function(color, idx) {
    console.log(`${idx + 1} - ${color}`);
});

console.log('AFTER the forEach...');
/*

This is exactly what you would expect - right?

Asynchronous Code
Unlike the synchronous code we saw above, the code following an asynchronous function call continues to run before the async function finishes.

For example:
*/

console.log('Code before the asynchronous function call');

setTimeout(function() {
  console.log('setTimeout code')
});

console.log('Code after the asynchronous function call');


/* We use setTimeout to "simulate" asynchronous code.

Why do Asynchronous Functions exist?
Asynchronous functions are necessary in JavaScript because JS runs on a single CPU thread dedicated to handling events, running your code, painting the screen, etc.

Now imagine calling a function that gets data from a database. From the CPU point of view, the database will take an eternity to return the data.

If the CPU were to wait until the data came back, nothing else could be done and the browser would freeze up!

JavaScript avoids forcing the CPU to wait for "long-running" input/output operations, such as fetching data across the Internet.

A good example of JavaScript's asynchronous programming model is the browser itself when it is fetching images as a page loads. The browser does not load one image at a time - that would be horrifically slow! Instead, it kicks off the requests for the images in parallel (at the same time).

How does the browser know when an image has been retrieved and is ready to be painted? By implementing callbacks and something known as the 
event loopLinks to an external site.
 (in this video, Jake Archibald from Google does an amazing job demonstrating the browser's event loop).

Using Callbacks to Work with Asynchronous Code
JavaScript provides two ways to run a function after an asynchronous operation completes its long running process:

Callbacks
Promises

A Simulated Asynchronous Example
The getFriends() function below is synchronous. It returns an array of friends immediately when invoked, and everything works just peachy:
*/

// Synchronous function
function getFriends() {
  return ['Fred', 'Barney'];
}

// Get the friends
let friends = getFriends();

// The friends array is ready to work with because getFriends
// is synchronous and returned the array of friends we wanted
friends.forEach(function(friend) {
  console.log(friend);
});

// Now let's use a setTimeout within getFriends() to simulate a long-running asynchronous function (as if we were fetching the data across a network):

// asynchronous function
function getFriendsAsync() {
  // Using setTimeout to make getFriendsAsync
  // behave like a long-running database operation
  setTimeout(function() {
    return ['Fred', 'Barney'];
  }, 0);
}

// Will friends have an array after this line of code runs?
let friends = getFriendsAsync();

// The following will cause an error because
// friends is not an array yet
friends.forEach(function(friend) {
  console.log(friend);
})

/* Running the above code will generate an error because the friends variable will not be an array of data before we call forEach on it.

What's a programmer to do?

Callbacks to the Rescue
We're going to make it possible to work with the getFriendsAsync function by refactoring it to accept a callback function as follows:
*/

// Refactor to accept a callback function
// to be called when the data is ready
function getFriendsAsync(cb) {
  setTimeout(function() {
    // pass the results to the provided callback
    cb(['Fred', 'Barney']);
  }, 0);
}

// Execute and provide it with an anonymous callback function
// to be called by the getFriendsAsync function
getFriendsAsync(function(friends) {
  friends.forEach(function(friend) {
    console.log(friend);
  });
});
/*
The getFriendsAsync function has been refactored to accept a callback function, which it invokes at the appropriate time - in this case, when the setTimeout times out.

Note how getFriendsAsync calls the callback passed to it and provides it with the array of friends as an argument - good stuff! This is a common pattern when calling an asynchronous process.

Functions that are asynchronous must be designed to either:

Accept a callback function, or
Return a promise

Intro to Arrow Functions:
Arrow functions have a more terse syntax than regular functions (function keyword)
*/

// regular function
let squares = [1, 2, 3].map(function (x) { return x * x });
// arrow function
let squares = [1, 2, 3].map(x => x * x);

// A single parameter need not be wrapped in parens:
x => { ... }  // one parameter
() => { ... }  // no parameters
(x, y) => { ... }  // two or more parameters



// The statement block of an arrow function behaves just like that of a regular function:
const getGrade = score => {
  if (score === 100) return 'A+';
  score = Math.floor(score / 10);
  return ['F', 'F', 'F', 'F', 'F', 'F', 'D', 'C', 'B', 'A'][score];
};

// If there's only a single expression (not a statement), curly braces are optional:
const logThis = () => { console.log(this) };
const logThis = () => console.log(this);

// Arrow functions will implicitly return the result of an expression without a block (braces):
const add = (x, y) => { return x + y };

// Ideal single-statement arrow function
const add = (x, y) => x + y;

// Returns undefined (blocks are like reg functions)
const add = (x, y) => { x + y };

// Syntax error, must be an expression
const add = (x, y) => return x + y;

//To implicitly return a JS object, wrap it in parens to avoid the curly braces of the object being interpreted as a statement block:
let todos = ['Buy milk', 'Mow lawn'];

// Below line of code won't work - looks like a statement block
// let todoObjects = todos.map(todo => {todo: todo, done: false});

// Wrap the implicit returned object in parens
let todoObjects = todos.map(todo => ({todo: todo, done: false}));

// All arrow functions are expressions. There's no such thing as an arrow function definition/declaration.
// Nope, syntax error (no declarations for arrow functions)
add(x, y) => x + y;

// This is what you want - a function expression
const add = (x, y) => x + y;




// Review Questions to turn in
// ❓ In your own words describe what the term "implicit return" means.


//❓ Describe what a callback function is in your own 