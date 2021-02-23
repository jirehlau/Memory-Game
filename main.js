//1. CONSTANT
	//Cell Boxes
	const card1 = "a";
	const card2 = "a";
	const card3 = "b";
	const card4 = "b";
	const card5 = "c";
	const card6 = "c";
	const card7 = "d";
	const card8 = "d";
	const card9 = "e";
	const card10 = "e";
	const card11 = "f";
	const card12 = "f";

//2. VARIABLES
	//Cell Boxes
		// let userSelection = "";
		// let userSelection1 = card1;
		// let userSelection2 = card2;
		// let userSelection3 = card3;
		// let userSelection4 = card4;
		// let userSelection5 = card5;
		// let userSelection6 = card6;
		// let userSelection7 = card7;
		// let userSelection8 = card8;
		// let userSelection9 = card9;
		// let userSelection10 = card10;
		// let userSelection11 = card11;
		// let userSelection12 = card12;

	//Flipping Variables
		let prevCard = "";
		let prevCell = null;
	 
	//TIME VARIABLES
		let timeLeft = 60;
	




// let time = 60;
// let clicks = 0;
// Let score = 0;
// let numOfCards = 12;

//3. ELEMENT REFERENCES	

	//Cell Boxes
	let c1 = document.getElementById("cell1");
	let c2 = document.getElementById("cell2");
	let c3 = document.getElementById("cell3");
	let c4 = document.getElementById("cell4");
	let c5 = document.getElementById("cell5");
	let c6 = document.getElementById("cell6");
	let c7 = document.getElementById("cell7");
	let c8 = document.getElementById("cell8");
	let c9 = document.getElementById("cell9");
	let c10 = document.getElementById("cell10");
	let c11 = document.getElementById("cell11");
	let c12 = document.getElementById("cell12");

	//TIMER ELEMENT REFERENCES
	let timer = document.getElementById("countDown");

	//RESET ELEMENT REFERENCES
	let reset = document.getElementById("resetButton");

	//SCORE ELEMENT REFERENCES
	let score = document.getElementById("scoreKeeper");



// let timeLeft = document.getElementById("countDown");

// let score = document.getElementById("scoreKeeper");
// let reset = document.getElementById("resetButton");


//4. EVENT LISTENERS
	//Cell Boxes
	c1.addEventListener("click", selectOneWasClicked);
	c2.addEventListener("click", selectTwoWasClicked);
	c3.addEventListener("click", selectThreeWasClicked);
	c4.addEventListener("click", selectFourWasClicked);
	c5.addEventListener("click", selectFiveWasClicked);
	c6.addEventListener("click", selectSixWasClicked);
	c7.addEventListener("click", selectSevenWasClicked);
	c8.addEventListener("click", selectEightWasClicked);
	c9.addEventListener("click", selectNineWasClicked);
	c10.addEventListener("click", selectTenWasClicked);
	c11.addEventListener("click", selectElevenWasClicked);
	c12.addEventListener("click", selectTwelveWasClicked);

	//TIMER EVENT LISTENER
	timer.addEventListener("click", timerStarts)

	//RESET EVENT LISTENER
	reset.addEventListener("click", resetButtonWasClicked)
	
	//SCORE EVENT LISTENER


//5. FUNCTIONS
//TIMER FUNCTION 
function timerStarts(){
	setInterval(function(){
		if(timeLeft <= 0){
			clearInterval(timerStarts);
			countDown.innerHTML = "Finished";
		}
		else {
			countDown.innerHTML = timeLeft + " Seconds Remaining"
		}
		timeLeft -= 1;
	}, 1000)

}

//RESET BUTTON FUNCTION
function resetButtonWasClicked(){
	c1.innerHTML = "<img src='back Logo.png' width='235px' height='220px'>";
	c2.innerHTML = "<img src='back Logo.png' width='235px' height='220px'>";
	c3.innerHTML = "<img src='back Logo.png' width='235px' height='220px'>";
	c4.innerHTML = "<img src='back Logo.png' width='235px' height='220px'>";
	c5.innerHTML = "<img src='back Logo.png' width='235px' height='220px'>";
	c6.innerHTML = "<img src='back Logo.png' width='235px' height='220px'>";
	c7.innerHTML = "<img src='back Logo.png' width='235px' height='220px'>";
	c8.innerHTML = "<img src='back Logo.png' width='235px' height='220px'>";
	c9.innerHTML = "<img src='back Logo.png' width='235px' height='220px'>";
	c10.innerHTML = "<img src='back Logo.png' width='235px' height='220px'>";
	c11.innerHTML = "<img src='back Logo.png' width='235px' height='220px'>";
	c12.innerHTML = "<img src='back Logo.png' width='235px' height='220px'>";
}



//FLIP FUNCTION 
	//CELL 1 FUNCTION
function selectOneWasClicked() {
		c1.innerHTML = "<img src='HTML Logo.png' width='235px' height='220px'>"; //selecting the innerHTML for Cell 1 and changing it to "A"
		if (prevCard ==="<img src='HTML Logo.png' width='235px' height='220px'>") { //This line is telling us if previous card equals to "1" OR if previous card is blank, nothing happens
			prevCard = ""; // this resets our state values to empty so we can start again
			prevCell = null;
			return;
		}
		if (prevCard === "") { // this is the first card
			prevCard = "<img src='HTML Logo.png' width='235px' height='220px'>";
			prevCell = c1;
		}
		// if(resetButtonWasClicked){
		// 	c1.innerHTML = "X";
		// }
		else {
			setTimeout(function() {
				c1.innerHTML = "<img src='back Logo.png' width='235px' height='220px'>"; //or else, if c1's innerHTML does not match, it will flip back to an X
				prevCell.innerHTML = "<img src='back Logo.png' width='235px' height='220px'>";
				prevCard = ""; // this resets our state values to empty so we can start again
				prevCell = null;
			}, 700) //This timer is for the card function to flip back it doesn't match
		}
}

	//CELL 2 FUNCTION

function selectTwoWasClicked() {
    c2.innerHTML = "<img src='HTML Logo.png' width='235px' height='220px'>";
	if(prevCard ==="<img src='HTML Logo.png' width='235px' height='220px'>") {
		prevCard = "";
		prevCell = null;
		return;
		}
	if (prevCard === ""){
		prevCard = "<img src='HTML Logo.png' width='235px' height='220px'>";
		prevCell = c2;	
	}
    else {
        setTimeout(function() {
			c2.innerHTML = "<img src='back logo.png' width='235px' height='220px'>";
			prevCell.innerHTML = "<img src='back Logo.png' width='235px' height='220px'>";
			prevCard = "";
			prevCell = null;
		}, 700)
    }
}



	//CELL 3 FUNCTION

function selectThreeWasClicked() {
	c3.innerHTML = "<img src='JS Logo.png' width='235px' height='220px'>";
	if (prevCard === "<img src='JS Logo.png' width='235px' height='220px'>") {
		prevCard = "";
		prevCell = null;
		return;
	}
	if (prevCard === "") {
		prevCard = "<img src='JS Logo.png' width='235px' height='220px'>";
		prevCell = c3;
	}
	else {
		setTimeout(function() {
			c3.innerHTML = "<img src='back logo.png' width='235px' height='220px'>";
			prevCell.innerHTML = "<img src='back Logo.png' width='235px' height='220px'>";
			prevCard = "";
			prevCell = null;
		}, 700)
	}
}

// 	//CELL 4 FUNCTION


function selectFourWasClicked() {
	c4.innerHTML = "<img src='JS Logo.png' width='235px' height='220px'>";
	if(prevCard === "<img src='JS Logo.png' width='235px' height='220px'>") {
		prevCard = "";
		prevCell = null;
		return;
	}
	if (prevCard === ""){
		prevCard = "<img src='JS Logo.png' width='235px' height='220px'>";
		prevCell = c4; 
	}
	else {
		setTimeout(function(){
			c4.innerHTML = "<img src='back Logo.png' width='235px' height='220px'>";
			prevCell.innerHTML = "<img src='back Logo.png' width='235px' height='220px'>";
			prevCard = "";
			prevCell = null;
		}, 700)
	}
}

	//CELL 5 FUNCTION

function selectFiveWasClicked(){
	c5.innerHTML = "<img src='CSS Logo.png' width='235px' height='220px'>"
	if(prevCard === "<img src='CSS Logo.png' width='235px' height='220px'>") {
		prevCard = "";
		prevCell = null;
		return;
	}
	if (prevCard === ""){
		prevCard = "<img src='CSS Logo.png' width='235px' height='220px'>";
		prevCell = c5;
	}
	else {
		setTimeout(function(){
			c5.innerHTML = "<img src='back Logo.png' width='235px' height='220px'>";
			prevCell.innerHTML = "<img src='back Logo.png' width='235px' height='220px'>";
			prevCard = "";
			prevCell = null;
		}, 700)
	}
}

	//CELL 6 FUNCTION

function selectSixWasClicked() {
	c6.innerHTML = "<img src='CSS Logo.png' width='235px' height='220px'>";
	if(prevCard === "<img src='CSS Logo.png' width='235px' height='220px'>"){
		prevCard = "";
		prevCell = null;
		return;
	}
	if (prevCard === ""){
		prevCard = "<img src='CSS Logo.png' width='235px' height='220px'>";
		prevCell = c6;
	}
	else {
		setTimeout(function() {
			c6.innerHTML = "<img src='back Logo.png' width='235px' height='220px'>";
			prevCell.innerHTML = "<img src='back Logo.png' width='235px' height='220px'>";
			prevCard = "";
			prevCell = null;
		}, 700)
	}
}

// 	//CELL 7 FUNCTION

function selectSevenWasClicked() {
	c7.innerHTML = "<img src='node-js Logo.png' width='235px' height='220px'>";
	if(prevCard === "<img src='node-js Logo.png' width='235px' height='220px'>") {
		prevCard = "";
		prevCell = null;
		return;
	}
	if(prevCard === "") {
		prevCard = "<img src='node-js Logo.png' width='235px' height='220px'>";
		prevCell = c7;
	}
	else {
		setTimeout(function(){
			c7.innerHTML = "<img src='back Logo.png' width='235px' height='220px'>";
			prevCell.innerHTML = "<img src='back Logo.png' width='235px' height='220px'>";
			prevCard = "";
			prevCell = null;
		}, 700)
	}
}

	//CELL 8 FUNCTION

function selectEightWasClicked() {
	c8.innerHTML = "<img src='node-js Logo.png' width='235px' height='220px'>";
	if(prevCard === "<img src='node-js Logo.png' width='235px' height='220px'>") {
		prevCard = "";
		prevCell = null;
		return;
	}
	if(prevCard === ""){
		prevCard = "<img src='node-js Logo.png' width='235px' height='220px'>";
		prevCell = c8;
	}
	else {
		setTimeout(function(){
			c8.innerHTML = "<img src='back Logo.png' width='235px' height='220px'>";
			prevCell.innerHTML = "<img src='back Logo.png' width='235px' height='220px'>";
			prevCard = "";
			prevCell = null;
		}, 700)
	}
}


// 	//CELL 9 FUNCTION

function selectNineWasClicked() {
	c9.innerHTML = "<img src='python Logo.png' width='235px' height='220px'>";
	if(prevCard === "<img src='python Logo.png' width='235px' height='220px'>"){
		prevCard = "";
		prevCell = null;
		return;
	}
	if (prevCard === "") {
		prevCard = "<img src='python Logo.png' width='235px' height='220px'>";
		prevCell = c9;
	}
	else {
		setTimeout(function(){
			c9.innerHTML = "<img src='back Logo.png' width='235px' height='220px'>";
			prevCell.innerHTML = "<img src='back Logo.png' width='235px' height='220px'>";
			prevCard = "";
			prevCell = null;
		}, 700)
	}
}


	//CELL 10 FUNCTION

function selectTenWasClicked() {
	c10.innerHTML = "<img src='python Logo.png' width='235px' height='220px'>";
	if(prevCard === "<img src='python Logo.png' width='235px' height='220px'>"){
		prevCard = "";
		prevCell = null;
		return;
	}
	if(prevCard === ""){
		prevCard = "<img src='python Logo.png' width='235px' height='220px'>";
		prevCell = c10;
	}
	else {
		setTimeout(function(){
			c10.innerHTML = "<img src='back Logo.png' width='235px' height='220px'>";
			prevCell.innerHTML = "<img src='back Logo.png' width='235px' height='220px'>";
			prevCard = "";
			prevCard = null;
		}, 700)
	}
} 


	//CELL 11 FUNCTION

function selectElevenWasClicked() {
	c11.innerHTML = "<img src='react Logo.png' width='235px' height='220px'>";
	if(prevCard === "<img src='react Logo.png' width='235px' height='220px'>"){
		prevCard = "";
		prevCell = null;
		return;	
	}
	if(prevCard === ""){
		prevCard = "<img src='react Logo.png' width='235px' height='220px'>";
		prevCell = c11;
	}
	else {
		setTimeout(function(){
			c11.innerHTML = "<img src='back Logo.png' width='235px' height='220px'>";
			prevCell.innerHTML = "<img src='back Logo.png' width='235px' height='220px'>";
			prevCard = "";
			prevCard = null;
		}, 700)
	}
}


	//CELL 12 FUNCTION

function selectTwelveWasClicked() {
	c12.innerHTML = "<img src='react Logo.png' width='235px' height='220px'>";
	if(prevCard === "<img src='react Logo.png' width='235px' height='220px'>"){
		prevCard = "";
		prevCell = nulll
		return;
	}
	if(prevCard === "") {
		prevCard = "<img src='react Logo.png' width='235px' height='220px'>";
		prevCell = c12; 
	}
	else{
		setTimeout(function(){
			c12.innerHTML = "<img src='back Logo.png' width='235px' height='220px'>";
			prevCell.innerHTML = "<img src='back Logo.png' width='235px' height='220px'>";
			prevCard = "";
			prevCell = null;
		}, 700)
	}
}










// we are going to add an event listener click, so each time you click a card, it will flip over

// if two cards with the same letter is selected, it will be a match and it will stay flipped open and add 1 point to the total score
// but if the card doesn't match it will flip right back


// time will start when the first card is clicked

// if you don't match it by the minute mark, you will receive an alert saying "you lost/please try again"



// CONSTANT

// const card1 = "a";
// const card2 = "a";
// const card3 = "b";
// const card4 = "b";

// Define required variables used to track the state of the game

// Let score = 0;
// numOfCards = 12;

// when the game starts there is no user selection
// letUserSelection = "" for the beginning of the game

// userSelection1 = card1
// userSelection2 = card2
// countDownTime = 1:00


// Reference all cell's and do even listeners (DOM)


//FUNCTIONS

// flip()
	// everytime a card is clicked, the specific card you clicked will flip
		// use get Element, event listener, then referencing the DOM
	// maximum number of 2 flips per turn 

// checkMatch ()
// 1. check if the 2 cards matches
// 	a. if the 2 cards match, it will stay opened
// 	b. if the 2 cards do not match, it will flip back

	
// timer()
// 1. Once you click on the first card, the timer will begin to coutndown
// 2. Once the timer reaches "0" an alert will pop up saying "time is up" 
// 	a. alert()
// 3. if you beat the game before the timer is done, the time will stop. 

// reset()
// 1. Reset the game whether you are finished or not. once it resets timer will go back to 1 minute and all cards will be flipped back

// score()
// every time a pair of cards is matched, it will add 1 point