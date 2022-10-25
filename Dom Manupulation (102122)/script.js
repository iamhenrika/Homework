let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

//DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the #main-title ID element. Remember there are a couple of ways to query id. Change the text of the title to something shorter.
const mainEl = document.getElementById('main-title')

mainEl.textContent = `Welcome to DOM's`

// Select the body and change the background-color to a new color of your choice.
const bodyEl = document.querySelector('body')
bodyEl.style.backgroundColor = "darkblue"

// Select DOM's Favorite Things list and remove the last list item.
const favoriteEl = document.querySelector("li:last-child")
//console.log(favoriteEl)

favoriteEl.parentElement.removeChild(favoriteEl)
// Select all .special-title class elements and change their font-size to 2rem. Remember you might have to iterate through the list of elements

const titleEL = document.querySelectorAll(".special-title")
console.log(titleEL)
titleEL.forEach(function(size){
  size.style.fontSize = '2rem'
})
 
//Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.
const pastEl = document.querySelector('#past-races')
console.log(pastEl)
if (pastEl.hasChildNodes()){
  pastEl.removeChild(pastEl.children[3])
}

// Let's add to DOM's Past Races list. Create a new <li> element, change the new <li> text to the name of a city, and append it to the Past Races list.
const newListEl = document.createElement("li")
newListEl.textContent = 'New York City'
pastEl.append(newListEl)

// Create a new .blog-post corresponding to the new city added in Part 6. You will have to create a new <div> with class of .blog-post, a new <h2> with text, and a new <p> with some text. Think about what order you want to create the elements, and what order you want to append them in.
const blogdivEl = document.createElement('div')
blogdivEl.className = 'blog-post'
console.log(blogdivEl)
const blogH2El = document.createElement('h2')
blogH2El.textContent = "Welcome to the City that does not SLEEP!"
const blogPEl = document.createElement('p')
blogPEl.textContent = " ENJOY!"
blogdivEl.append(blogH2El , blogPEl)
console.log(blogdivEl)
newListEl.append(blogdivEl)
console.log(newListEl)

// When you reload the page, the script.js file loads a random DOM quote. Let's play with the included function:
const randomQuote = function() {
  document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
};
const quoteEl= document.querySelector("#quote-title")
quoteEl.addEventListener('click',randomQuote)

// Select all .blog-postclass elements. Iterate through the list of .blog-postclass elements and apply two event handlers to each node. The first event handler should be listening for mouseoutevents while the second handler should be listening for mouseenterevents.
// The mouseouthandler should toggle the class .purple
// The mouseenterhandler should toggle the class .red
const blogClassEl = document.querySelectorAll(".blog-post")
console.log(blogClassEl)

blogClassEl.forEach(function(mouse){
  mouse.addEventListener("mouseout",function(){
    mouse.classList.toggle = ('purple')
  })
 mouse.addEventListener("mouseenter", function(){
  mouse.classList.toggle ('red')
 })
 
})