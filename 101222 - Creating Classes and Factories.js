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
