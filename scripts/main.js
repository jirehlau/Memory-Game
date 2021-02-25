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

// var myAudio = document.getElementById("audioId").autoplay = true;


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
		let timeLeft = 59;
		let timerRunning = false;
		let timerId;

	//SCORE VARIABLE
	let playScore = 0

	//AUDIO VAIRABLE
	var source = "song.mp3";
 	var audio = document.createElement("audio");

	audio.autoplay = true;

	audio.load()
		audio.addEventListener("load", function() { 
			audio.play(); 
		}, true);
	audio.src = source;


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
	let c13 = document.getElementById("cell13");
	let c14 = document.getElementById("cell14");
	let c15 = document.getElementById("cell15");
	let c16 = document.getElementById("cell16");

	//TIMER ELEMENT REFERENCES
	let timer = document.getElementById("countDown");


	//RESET ELEMENT REFERENCES
	let reset = document.getElementById("resetButton");


	//SCORE ELEMENT REFERENCES
	let scoreBoard = document.getElementById("scoreKeeper");

	//STATUS ELEMENT REFERENCES
	let status = document.getElementById("status");


	//MUSIC ELEMENT
	let musicId = document.getElementById("musicId")


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
	c13.addEventListener("click", selectThirteenWasClicked);
	c14.addEventListener("click", selectFourteenWasClicked);
	c15.addEventListener("click", selectFifteenWasClicked);
	c16.addEventListener("click", selectSixteenWasClicked);

	//TIMER EVENT LISTENER
	timer.addEventListener("click", timerStarts)


	//RESET EVENT LISTENER
	reset.addEventListener("click", resetButtonWasClicked)


	



//5. FUNCTIONS

//AUDIO FUNCTION


//FLIP FUNCTION 
	//CELL 1 FUNCTION
function selectOneWasClicked() {
	c1.innerHTML = "<img src='/assets/HTML Logo.png' width='235px' height='220px'>";
	if(prevCard ==="<img src='/assets/HTML Logo.png' width='235px' height='220px'>") {
		playScore += 2;
		scoreBoard.innerHTML = playScore;
		prevCard = "";
		prevCell = null;
		statusUpdate();
		return;
		}
	if (prevCard === ""){
		prevCard = "<img src='/assets/HTML Logo.png' width='235px' height='220px'>";
		prevCell = c1;	
	}
    else {
        setTimeout(function() {
			c1.innerHTML = "<img src='/assets/back logo.png' width='235px' height='220px'>";
			prevCell.innerHTML = "<img src='/assets/back Logo.png' width='235px' height='220px'>";
			prevCard = "";
			prevCell = null;
		}, 450)
	}
	if(!timerRunning){
		timerStarts();
		timerRunning = true;
		}
}

	//CELL 2 FUNCTION

function selectTwoWasClicked() {
    c2.innerHTML = "<img src='/assets/mongodb logo.png' width='235px' height='220px'>";
	if(prevCard ==="<img src='/assets/mongodb logo.png' width='235px' height='220px'>") {
		playScore += 2;
		scoreBoard.innerHTML = playScore;
		prevCard = "";
		prevCell = null;
		statusUpdate();
		return;
		}
	if (prevCard === ""){
		prevCard = "<img src='/assets/mongodb logo.png' width='235px' height='220px'>";
		prevCell = c2;	
	}
    else {
        setTimeout(function() {
			c2.innerHTML = "<img src='/assets/back Logo.png' width='235px' height='220px'>";
			prevCell.innerHTML = "<img src='/assets/back Logo.png' width='235px' height='220px'>";
			prevCard = "";
			prevCell = null;
		}, 450)
	}
	if(!timerRunning){
		timerStarts();
		timerRunning = true;
		}
}



	//CELL 3 FUNCTION

function selectThreeWasClicked() {
	c3.innerHTML = "<img src='/assets/JS Logo.png' width='235px' height='220px'>";
	if(prevCard === "<img src='/assets/JS Logo.png' width='235px' height='220px'>") {
		playScore += 2;
		scoreBoard.innerHTML = playScore;
		prevCard = "";
		prevCell = null;
		statusUpdate();
		return;
	}
	if (prevCard === ""){
		prevCard = "<img src='/assets/JS Logo.png' width='235px' height='220px'>";
		prevCell = c3; 
	}
	else {
		setTimeout(function(){
			c3.innerHTML = "<img src='/assets/back Logo.png' width='235px' height='220px'>";
			prevCell.innerHTML = "<img src='/assets/back Logo.png' width='235px' height='220px'>";
			prevCard = "";
			prevCell = null;
		}, 450)
	}
	if(!timerRunning){
		timerStarts();
		timerRunning = true;
		}
}

// 	//CELL 4 FUNCTION


function selectFourWasClicked() {
	c4.innerHTML = "<img src='/assets/angular logo.png' width='235px' height='220px'>";
	if(prevCard === "<img src='/assets/angular logo.png' width='235px' height='220px'>") {
		playScore += 2;
		scoreBoard.innerHTML = playScore;
		prevCard = "";
		prevCell = null;
		statusUpdate();
		return;
	}
	if (prevCard === ""){
		prevCard = "<img src='/assets/angular logo.png' width='235px' height='220px'>";
		prevCell = c4; 
	}
	else {
		setTimeout(function(){
			c4.innerHTML = "<img src='/assets/back Logo.png' width='235px' height='220px'>";
			prevCell.innerHTML = "<img src='/assets/back Logo.png' width='235px' height='220px'>";
			prevCard = "";
			prevCell = null;
		}, 450)
	}
	if(!timerRunning){
		timerStarts();
		timerRunning = true;
		}
}

	//CELL 5 FUNCTION

function selectFiveWasClicked(){
	c5.innerHTML = "<img src='/assets/CSS Logo.png' width='235px' height='220px'>"
	if(prevCard === "<img src='/assets/CSS Logo.png' width='235px' height='220px'>") {
		playScore += 2;
		scoreBoard.innerHTML = playScore;
		prevCard = "";
		prevCell = null;
		statusUpdate();
		return;
	}
	if (prevCard === ""){
		prevCard = "<img src='/assets/CSS Logo.png' width='235px' height='220px'>";
		prevCell = c5;
	}
	else {
		setTimeout(function(){
			c5.innerHTML = "<img src='/assets/back Logo.png' width='235px' height='220px'>";
			prevCell.innerHTML = "<img src='/assets/back Logo.png' width='235px' height='220px'>";
			prevCard = "";
			prevCell = null;
		}, 450)
	}
	if(!timerRunning){
		timerStarts();
		timerRunning = true;
		}
}

	//CELL 6 FUNCTION

function selectSixWasClicked() {
	c6.innerHTML = "<img src='/assets/react logo.png' width='235px' height='220px'>";
	if(prevCard === "<img src='/assets/react logo.png' width='235px' height='220px'>"){
		playScore += 2;
		scoreBoard.innerHTML = playScore;
		prevCard = "";
		prevCell = null;
		statusUpdate();
		return;
	}
	if (prevCard === ""){
		prevCard = "<img src='/assets/react logo.png' width='235px' height='220px'>";
		prevCell = c6;
	}
	else {
		setTimeout(function() {
			c6.innerHTML = "<img src='/assets/back logo.png' width='235px' height='220px'>";
			prevCell.innerHTML = "<img src='/assets/back logo.png' width='235px' height='220px'>";
			prevCard = "";
			prevCell = null;
		}, 450)
	}
	if(!timerRunning){
		timerStarts();
		timerRunning = true;
		}
}

// 	//CELL 7 FUNCTION

function selectSevenWasClicked() {
	c7.innerHTML = "<img src='/assets/node-js logo.png' width='235px' height='220px'>";
	if(prevCard === "<img src='/assets/node-js logo.png' width='235px' height='220px'>") {
		playScore += 2;
		scoreBoard.innerHTML = playScore;
		prevCard = "";
		prevCell = null;
		statusUpdate();
		return;
	}
	if(prevCard === ""){
		prevCard = "<img src='/assets/node-js logo.png' width='235px' height='220px'>";
		prevCell = c7;
	}
	else {
		setTimeout(function(){
			c7.innerHTML = "<img src='/assets/back logo.png' width='235px' height='220px'>";
			prevCell.innerHTML = "<img src='/assets/back logo.png' width='235px' height='220px'>";
			prevCard = "";
			prevCell = null;
		}, 450)
	}
	if(!timerRunning){
		timerStarts();
		timerRunning = true;
		}
}

	//CELL 8 FUNCTION

function selectEightWasClicked() {
	c8.innerHTML = "<img src='/assets/python logo.png' width='235px' height='220px'>";
	if(prevCard === "<img src='/assets/python logo.png' width='235px' height='220px'>") {
		playScore += 2;
		scoreBoard.innerHTML = playScore;
		prevCard = "";
		prevCell = null;
		statusUpdate();
		return;
	}
	if(prevCard === ""){
		prevCard = "<img src='/assets/python logo.png' width='235px' height='220px'>";
		prevCell = c8;
	}
	else {
		setTimeout(function(){
			c8.innerHTML = "<img src='/assets/back logo.png' width='235px' height='220px'>";
			prevCell.innerHTML = "<img src='/assets/back logo.png' width='235px' height='220px'>";
			prevCard = "";
			prevCell = null;
		}, 450)
	}
	if(!timerRunning){
		timerStarts();
		timerRunning = true;
		}
}


// 	//CELL 9 FUNCTION

function selectNineWasClicked() {
	c9.innerHTML = "<img src='/assets/python logo.png' width='235px' height='220px'>";
	if(prevCard === "<img src='/assets/python logo.png' width='235px' height='220px'>"){
		playScore += 2;
		scoreBoard.innerHTML = playScore;
		prevCard = "";
		prevCell = null;
		statusUpdate();
		return;
	}
	if (prevCard === "") {
		prevCard = "<img src='/assets/python logo.png' width='235px' height='220px'>";
		prevCell = c9;
	}
	else {
		setTimeout(function(){
			c9.innerHTML = "<img src='/assets/back logo.png' width='235px' height='220px'>";
			prevCell.innerHTML = "<img src='/assets/back logo.png' width='235px' height='220px'>";
			prevCard = "";
			prevCell = null;
		}, 450)
	}
	if(!timerRunning){
		timerStarts();
		timerRunning = true;
		}
}


	//CELL 10 FUNCTION

function selectTenWasClicked() {
	c10.innerHTML = "<img src='/assets/node-js logo.png' width='235px' height='220px'>";
	if(prevCard === "<img src='/assets/node-js logo.png' width='235px' height='220px'>"){
		playScore += 2;
		scoreBoard.innerHTML = playScore;
		prevCard = "";
		prevCell = null;
		statusUpdate();
		return;
	}
	if(prevCard === ""){
		prevCard = "<img src='/assets/node-js logo.png' width='235px' height='220px'>";
		prevCell = c10;
	}
	else {
		setTimeout(function(){
			c10.innerHTML = "<img src='/assets/back logo.png' width='235px' height='220px'>";
			prevCell.innerHTML = "<img src='/assets/back logo.png' width='235px' height='220px'>";
			prevCard = "";
			prevCell = null;
		}, 450)
	}
	if(!timerRunning){
		timerStarts();
		timerRunning = true;
		}
} 


	//CELL 11 FUNCTION

function selectElevenWasClicked() {
	c11.innerHTML = "<img src='/assets/react logo.png' width='235px' height='220px'>";
	if(prevCard === "<img src='/assets/react logo.png' width='235px' height='220px'>"){
		playScore += 2;
		scoreBoard.innerHTML = playScore;
		prevCard = "";
		prevCell = null;
		statusUpdate();
		return;	
	}
	if(prevCard === ""){
		prevCard = "<img src='/assets/react logo.png' width='235px' height='220px'>";
		prevCell = c11;
	}
	else {
		setTimeout(function(){
			c11.innerHTML = "<img src='/assets/back logo.png' width='235px' height='220px'>";
			prevCell.innerHTML = "<img src='/assets/back logo.png' width='235px' height='220px'>";
			prevCard = "";
			prevCell = null;
		}, 450)
	}
	if(!timerRunning){
		timerStarts();
		timerRunning = true;
		}
}


	//CELL 12 FUNCTION

function selectTwelveWasClicked() {
	c12.innerHTML = "<img src='/assets/CSS Logo.png' width='235px' height='220px'>";
	if(prevCard === "<img src='/assets/CSS Logo.png' width='235px' height='220px'>"){
		playScore += 2;
		scoreBoard.innerHTML = playScore;
		prevCard = "";
		prevCell = null;
		statusUpdate();
		return;
	}
	if(prevCard === "") {
		prevCard = "<img src='/assets/CSS Logo.png' width='235px' height='220px'>";
		prevCell = c12; 
	}
	else{
		setTimeout(function(){
			c12.innerHTML = "<img src='/assets/back logo.png' width='235px' height='220px'>";
			prevCell.innerHTML = "<img src='/assets/back logo.png' width='235px' height='220px'>";
			prevCard = "";
			prevCell = null;
		}, 450)
	}
	if(!timerRunning){
		timerStarts();
		timerRunning = true;
		}
}

	//CELL 13 FUNCTION
function selectThirteenWasClicked() {
	c13.innerHTML = "<img src='/assets/angular logo.png' width='235px' height='220px'>";
	if(prevCard === "<img src='/assets/angular logo.png' width='235px' height='220px'>"){
		playScore += 2;
		scoreBoard.innerHTML = playScore;
		prevCard = "";
		prevCell = null;
		statusUpdate();
		return;
	}
	if(prevCard === "") {
		prevCard = "<img src='/assets/angular logo.png' width='235px' height='220px'>";
		prevCell = c13; 
	}
	else{
		setTimeout(function(){
			c13.innerHTML = "<img src='/assets/back logo.png' width='235px' height='220px'>";
			prevCell.innerHTML = "<img src='/assets/back logo.png' width='235px' height='220px'>";
			prevCard = "";
			prevCell = null;
		}, 450)
	}
	if(!timerRunning){
		timerStarts();
		timerRunning = true;
		}
}



	//CELL 14 FUNCTION
function selectFourteenWasClicked() {
	c14.innerHTML = "<img src='/assets/JS Logo.png' width='235px' height='220px'>";
	if(prevCard === "<img src='/assets/JS Logo.png' width='235px' height='220px'>"){
		playScore += 2;
		scoreBoard.innerHTML = playScore;
		prevCard = "";
		prevCell = null;
		statusUpdate();
		return;
	}
	if(prevCard === "") {
		prevCard = "<img src='/assets/JS Logo.png' width='235px' height='220px'>";
		prevCell = c14; 
	}
	else{
		setTimeout(function(){
			c14.innerHTML = "<img src='/assets/back logo.png' width='235px' height='220px'>";
			prevCell.innerHTML = "<img src='/assets/back logo.png' width='235px' height='220px'>";
			prevCard = "";
			prevCell = null;
		}, 450)
	}
	if(!timerRunning){
		timerStarts();
		timerRunning = true;
		}
}




	//CELL 15 FUNCTION
function selectFifteenWasClicked() {
	c15.innerHTML = "<img src='/assets/mongodb logo.png' width='235px' height='220px'>";
	if(prevCard === "<img src='/assets/mongodb logo.png' width='235px' height='220px'>"){
		playScore += 2;
		scoreBoard.innerHTML = playScore;
		prevCard = "";
		prevCell = null;
		statusUpdate();
		return;
	}
	if(prevCard === "") {
		prevCard = "<img src='/assets/mongodb logo.png' width='235px' height='220px'>";
		prevCell = c15; 
	}
	else{
		setTimeout(function(){
			c15.innerHTML = "<img src='/assets/back logo.png' width='235px' height='220px'>";
			prevCell.innerHTML = "<img src='/assets/back logo.png' width='235px' height='220px'>";
			prevCard = "";
			prevCell = null;
		}, 450)
	}
	if(!timerRunning){
		timerStarts();
		timerRunning = true;
		}
}



	//CELL 16 FUNCTION
function selectSixteenWasClicked() {
	c16.innerHTML = "<img src='/assets/HTML Logo.png' width='235px' height='220px'>";
	if(prevCard === "<img src='/assets/HTML Logo.png' width='235px' height='220px'>"){
		playScore += 2;
		scoreBoard.innerHTML = playScore;
		prevCard = "";
		prevCell = null;
		statusUpdate();
		return;
	}
	if(prevCard === "") {
		prevCard = "<img src='/assets/HTML Logo.png' width='235px' height='220px'>";
		prevCell = c16; 
	}
	else{
		setTimeout(function(){
			c16.innerHTML = "<img src='/assets/back logo.png' width='235px' height='220px'>";
			prevCell.innerHTML = "<img src='/assets/back logo.png' width='235px' height='220px'>";
			prevCard = "";
			prevCell = null;
		}, 450)
	}
	if(!timerRunning){
		timerStarts();
		timerRunning = true;
		}
}







//RESET BUTTON FUNCTION
function resetButtonWasClicked(){
	c1.innerHTML = "<img src='/assets/back logo.png' width='235px' height='220px'>";
	c2.innerHTML = "<img src='/assets/back logo.png' width='235px' height='220px'>";
	c3.innerHTML = "<img src='/assets/back logo.png' width='235px' height='220px'>";
	c4.innerHTML = "<img src='/assets/back logo.png' width='235px' height='220px'>";
	c5.innerHTML = "<img src='/assets/back logo.png' width='235px' height='220px'>";
	c6.innerHTML = "<img src='/assets/back logo.png' width='235px' height='220px'>";
	c7.innerHTML = "<img src='/assets/back logo.png' width='235px' height='220px'>";
	c8.innerHTML = "<img src='/assets/back logo.png' width='235px' height='220px'>";
	c9.innerHTML = "<img src='/assets/back logo.png' width='235px' height='220px'>";
	c10.innerHTML = "<img src='/assets/back logo.png' width='235px' height='220px'>";
	c11.innerHTML = "<img src='/assets/back logo.png' width='235px' height='220px'>";
	c12.innerHTML = "<img src='/assets/back logo.png' width='235px' height='220px'>";
	c13.innerHTML = "<img src='/assets/back logo.png' width='235px' height='220px'>";
	c14.innerHTML = "<img src='/assets/back logo.png' width='235px' height='220px'>";
	c15.innerHTML = "<img src='/assets/back logo.png' width='235px' height='220px'>";
	c16.innerHTML = "<img src='/assets/back logo.png' width='235px' height='220px'>";
	prevCard = "";
	prevCell = null;
	clearInterval(timerId);
	timeLeft = 59;
	timer.innerHTML = "60 Seconds Remaining";
	timerRunning = false;
	scoreBoard.innerHTML = 0;
	playScore = 0;
	status.innerHTML = "..."
}

//TIMER FUNCTION 
function statusUpdate(){
	if (playScore == 16){
		status.innerHTML = alert("You have won");
		clearInterval(timerId);
		timerRunning = false;
	}
	else {
	}
}


function timerStarts(){
	timerId = setInterval(function(){
		console.log(setInterval, timeLeft)
		if(timeLeft <= 0){
			clearInterval(timerId);
			countDown.innerHTML = alert('YOU LOST!!!');
		}
		else {
			countDown.innerHTML =  timeLeft + " Seconds Remaining"
		}
		timeLeft -= 1;
	}, 1000)
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