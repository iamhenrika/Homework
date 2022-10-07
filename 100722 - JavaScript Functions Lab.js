// For the exercises in this lab, create a JavaScript REPL from repl.it Links to an external site. -- you can name it "JavaScript Functions lab".

// As a reminder, this lab is not a deliverable.

// Links to an external site.

// Requirements
// Define and code the functions below.

// Define the functions using the approach as specified (either as a function expression or declaration).

// Be sure to number each function with a comment above it.

// After each function, call it at least once and console.logthe results.

// For example, here's the first function, our gift to you:

// Here are the functions:
// 1. (completed above) Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.

function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
  // or more "elegantly" using the fantastic ternary expression!
  // return  x >= y ? x : y;
}
console.log(maxOfTwoNumbers(3, 9))

// 2. Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

function maxOfThree(x, y, z) {
  if (x >= y && x >= z) {
    return x;
  } else if (y >= x && y >= z) {
    return y;
  } else {
    return z;
  }
}
console.log(maxOfThree(2, 3, 4))


// 3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

let isCharAVowel = function (character) {
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < vowels.length; i++) {
    if (character === vowels[i]) {
      return 'true';
    }
  }
  return 'false';
}
console.log(isCharAVowel('h'))

// 4. Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.

let arr = [2, 4, 5]
let sumArray = 0
for (let i = 0; i < arr.length; i++) {
  sumArray += arr[i]
}
console.log(sumArray)

// 5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product of those numbers. For example, multiplyArray([2, 4, 5]);would return 40.

function multiplyArray(num) {
  let product = 1;
  for (let i = 0; i < num.length; i++) {
    product = product * num[i]
  }
  return product;
}
console.log(multiplyArray([2, 4, 5]))

// 6. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.

let arrTwo = [14, 85, 37, 95];
let sumArgs = arrTwo.length;
console.log(sumArgs);

// 7. Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".

function reverseString(str) {
  let revString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revString += str[i];
  }
  return revString;
}
console.log(reverseString('supermodel'));


// 8. Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.

let array = ["Umbrella", "Location", "Xylophone", "Sunbathe"];
function longestStringInArray(array) {
  let longest = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i].length > longest.length) {
      longest = array[i];
    }
  }
  return longest;
}
console.log(longestStringInArray(array));

// 9. Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments, and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].
