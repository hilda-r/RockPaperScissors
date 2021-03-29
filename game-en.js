// JavaScript Document
var win = 0;
var lose = 0;
var draw = 0;

var playerChoice = document.getElementsByClassName("choice");
var restartButton = document.getElementById("reset");


var roundChoices = document.getElementById("round-choices");
var roundResults = document.getElementById("round-results");
var totalResults = document.getElementById("total-results");
var score = document.getElementById("score");


function Game(playerChoice) {
	function randomComputerChoice(objects) {
		return Math.floor(Math.random() * objects);
	}
	var computerChoice = ["rock", "paper", "scissors"];
	var randomInt = randomComputerChoice(computerChoice.length);
	var computer = computerChoice[randomInt];
	this.computer = computer;
	
	this.player = playerChoice;
	
		
	this.playGame = function() {
		var htmlString = "";
		if (this.player === "rock" && this.computer === "rock"  || this.player === "scissors" && this.computer === "scissors" || this.player === "paper" && this.computer === "paper") {
			draw++;
			htmlString += "It's a tie";
			return htmlString;
		}
		if (this.player === "rock" && this.computer === "scissors") { 
			win++;
			htmlString += "Player won";
			return htmlString;
		}
		if (this.player === "scissors" && this.computer === "rock") { 
			lose++;
			htmlString += "Player lost";
			return htmlString;
		}
		if (this.player === "paper" && this.computer === "rock") {
			win++;
			htmlString += "Player won";
			return htmlString;
		}
		if (this.player === "rock" && this.computer === "paper") {
			lose++;
			htmlString += "Player lost";
			return htmlString;
		}
		if (this.player === "scissors" && this.computer === "paper") {
			win++;
			htmlString += "Player won";
			return htmlString;
		}
		if (this.player === "paper" && this.computer === "scissors") {
			lose++;
			htmlString += "Player lost";
			return htmlString;
		}
	}
	this.roundChoices = function() {
		var htmlString = "Players choice: " + this.player + "<br>Computers choice: " + this.computer;
		return htmlString;
	}
	this.totalResults = function() {
		var point = " points";
		if ((win-lose) === 1) {
			point = " point";
		}
		if ((lose-win) === 1) {
			point = " point";
		} 
		
		if (win === 3) {
			var htmlString = "Congratulations! You beat the computer by " + (win-lose) + point;
			return htmlString;
		}
		else {
			var htmlString = "Sorry, you lost by " + (lose-win) + point;
			return htmlString; 
		}
	}
	this.score = function() {
		var htmlString = win + " - " + lose;
		return htmlString;
	}
}


for (var i = 0; i < playerChoice.length; i++) {
	playerChoice[i].onclick = function(event) {
		if ((win <3) && (lose <3)){
			var button = event.target;
			var game = new Game(button.attributes["alt"].value);
			roundResults.innerHTML = game.playGame();
			roundChoices.innerHTML = game.roundChoices();
			score.innerHTML = game.score();
		}
		if (win === 3 || lose === 3) {
			totalResults.innerHTML = game.totalResults();	
		}
	}
}

//Restart knapp som laddar om fönstret
restartButton.onclick = function() {
	window.location.reload();	
}