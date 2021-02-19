//1. CONSTANT
Score
gridBox
gameCell
Timer




//2. VARIABLES
// let memCards = ["a","a","b","b","c","c","d","d","e","e","f","f"]

let gameScore = 0
let timerClock = 1000 * 60 // 1000 = 1 second in JS

//3. ELEMENT REFERENCES

//we are going to reference the elements in the HTML file and replace it with a variable


//4. EVENT LISTENERS





//5. FUNCTIONS










// pseudo code

// Game Grid: We are going to define the variables using an array and list out all the possible options that are going to be in the game

// variables: score, reset button, time count, card flip

// we are going to add an event listener click, so each time you click a card, it will flip over

// if two cards with the same letter is selected, it will be a match and it will stay flipped open and add 1 point to the total score
// but if the card doesn't match it will flip right back


// time will start when the first card is clicked

// if you don't match it by the minute mark, you will receive an alert saying "you lost/please try again"





1) Define required constants
const card1 = "a";
const card2 = "b";
const card3 = "b";
const card4 ="a";

// 2) Define required variables used to track the state of the game
// Score
// Time
// state to track the correct pairs (How is this information going to go to the computer? Square 1 is A and square 3 is A...etc)
// use 12 variables (card1, card2) and then card1 could represent the letter A
computer must also know what the user has currently got correct

3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.


4) Upon loading the app should:
	4.1) Initialize the state variables
	4.2) Render those values to the page
	4.3) Wait for the user to click a square


5) Handle a player clicking a square


6) Handle a player clicking the replay button