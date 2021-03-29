// JavaScript Document
var win = 0;
var lose = 0;
var draw = 0;

//hämta information från HTML dokumentet för knapparna
var playerChoice = document.getElementsByClassName("choice");
var restartButton = document.getElementById("reset");

//hämta information från HTML dokumentet för där texten ska stå
var roundChoices = document.getElementById("round-choices");
var roundResults = document.getElementById("round-results");
var totalResults = document.getElementById("total-results");
var score = document.getElementById("score");


function Game(playerChoice) {
	//skapar slumpmässigt val till datorn
	function randomComputerChoice(objects) {
		return Math.floor(Math.random() * objects);
	}
	var computerChoice = ["sten", "sax", "påse"];
	var randomInt = randomComputerChoice(computerChoice.length);
	var computer = computerChoice[randomInt];
	this.computer = computer;
	
	this.player = playerChoice;
	
	//jämför spelarens val med datorns val, tilldelar poäng och skriver ut vem som vann omgången	
	this.playGame = function() {
		var htmlString = "";
		if (this.player === "sten" && this.computer === "sten"  || this.player === "sax" && this.computer === "sax" || this.player === "påse" && this.computer === "påse") {
			draw++;
			htmlString += "Oavgjort";
			return htmlString;
		}
		if (this.player === "sten" && this.computer === "sax") { 
			win++;
			htmlString += "Du vann den här omgången";
			return htmlString;
		}
		if (this.player === "sax" && this.computer === "sten") { 
			lose++;
			htmlString += "Du förlorade den här omgången";
			return htmlString;
		}
		if (this.player === "påse" && this.computer === "sten") {
			win++;
			htmlString += "Du vann den här omgången";
			return htmlString;
		}
		if (this.player === "sten" && this.computer === "påse") {
			lose++;
			htmlString += "Du förlorade den här omgången";
			return htmlString;
		}
		if (this.player === "sax" && this.computer === "påse") {
			win++;
			htmlString += "Du vann den här omgången";
			return htmlString;
		}
		if (this.player === "påse" && this.computer === "sax") {
			lose++;
			htmlString += "Du förlorade den här omgången";
			return htmlString;
		}
	}
	//skriver ut spelarens val och datorns val
	this.roundChoices = function() {
		var htmlString = "Ditt val: " + this.player + "<br>Datorns val: " + this.computer;
		return htmlString;
	}
	//kollar vem som vann och skriver ut resultatet
	this.totalResults = function() {
		if (win === 3) {
			var htmlString = "Grattis! Du vann mot datorn med " + (win-lose) + " poäng";
			return htmlString;
		}
		else {
			var htmlString = "Tyvärr, du förlorade mot datorn med " + (lose-win) + " poäng";
			return htmlString; 
		}
	}
	//skriver ut poängställningen
	this.score = function() {
		var htmlString = win + " - " + lose;
		return htmlString;
	}
}

//loopar igenom knapparna och använder alt värdet på knappen man trycker på och använder som playerChoice i konstruktor funktionen Game så länge som win/lose är mindre än 3
//om win/lose är 3, skriv ut totala resultatet
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