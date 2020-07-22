var Scissors = document.getElementById('Scissors').addEventListener("click", run);
var Rock = document.getElementById('Rock').addEventListener("click", run);
var Paper = document.getElementById('Paper').addEventListener('click', run);


var computerChoice;
var playerChoice;

var player = document.getElementById('Player Choice');
var computer = document.getElementById('Computer Choice');
var outcome = document.getElementById('result');

function run() {
  	playerChoice = this.innerText;
  	computerGamble();
  	compare();
}
function computerGamble() {
  	var dice = Math.random();
	if (dice <= 0.33) {
		computerChoice = "Rock";
    } else if (dice > 0.33 && dice <= 0.66) {
    	computerChoice = "Paper";
    } else {
    	computerChoice = "Scissors";
    }
 }
 
 function compare() {
 	player.innerHTML = "You have chosen " + playerChoice;
 	computer.innerHTML = "Computer chooses " + computerChoice;
function computerGamble() {
  	var dice = Math.random();
	if (dice <= 0.33) {
		computerChoice = "Rock";
    } else if (dice > 0.33 && dice <= 0.66) {
    	computerChoice = "Paper";
    } else {
    	computerChoice = "Scissors";
    }
 }
 
if (playerChoice == computerChoice) {
 		result.innerHTML = "Tie ";
 		
 	} else if (playerChoice === "Scissors" && computerChoice === "Rock") {
 		result.innerHTML = "You lose!";
 	} else if (playerChoice === "Paper" && computerChoice === "Rock") {
 		outcome.innerHTML = "You won!";
 	

 	} else if (playerChoice === "Rock" && computerChoice === "Scissors") {
 		outcome.innerHTML = "You won!";
 	} else if (playerChoice === "Paper" && computerChoice === "Scissors") {
 		result.innerHTML = "You lose!";

 	} else if (playerChoice === "Rock" && computerChoice === "Paper") {
 		result.innerHTML = "You lose!";
 	} else if (playerChoice === "Scissors" && computerChoice === "Paper") {
 		result.innerHTML = "You won!";
 	}
 }
