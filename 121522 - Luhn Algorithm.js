/*
Write a function validCardthat takes a number as an argument and returns true for a valid number and false for an invalid number.

validCard(1234567890123456); //should be false
validCard(4408041234567893); //should be true
validCard(38520000023237); //should be true
validCard(4222222222222); //should be true
 
 */

let card = "";

function validCard(card) {
  let digits = card.length;

  let sum = 0;
  let second = false;
  for (let i = digits - 1; i >= 0; i--) {
    let digit = card[i].charCodeAt() - "0".charCodeAt();

    if (sum == true) digit = digit * 2;
    digit += parseInt(digit / 10, 10);
    digit += digit % 10;

    sum = !sum;
  }
  return sum % 10 == 0;
}

if (card) document.write("Valid card");
else document.write("Invalid card");

console.log(validCard("1234567890123456"));
console.log(validCard("4408041234567893"));
console.log(validCard("38520000023237"));
console.log(validCard("4222222222222"));
