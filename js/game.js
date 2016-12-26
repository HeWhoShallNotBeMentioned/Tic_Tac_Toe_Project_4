var Game = function(playerOne, playerTwo) {
this.playerOne = playerOne;
this.playerTwo = playerTwo;
this.currentPlayer = playerTwo;
this.spaces = [];

document.getElementsByClassName("players")[1].classList.add("active");
  var boardArray = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
 var game = this;
 var doTurn = function() {
   if (game.currentPlayer == playerOne ) {
     document.getElementsByClassName("players")[1].classList.add("active");
     document.getElementsByClassName("players")[0].classList.remove("active");
     game.currentPlayer = playerTwo;
   } else {
     document.getElementsByClassName("players")[0].classList.add("active");
     document.getElementsByClassName("players")[1].classList.remove("active");
     game.currentPlayer = playerOne;
   }
   return game.currentPlayer.symbol;
};

var win = function() {
  console.log("inside win");
  console.log("this.position:   ", this.position);
  console.log("this.symbol:  ", this.symbol);
  console.log("boardArray:  ", boardArray);
  boardArray.splice(this.position,1,this.symbol);
  console.log("boardArray:  ", boardArray);
};

 for(var i = 0; i < 9; i++){
   var dom = document.getElementById('box-' + i);
   this.spaces.push(new Space(i, dom, doTurn, win));
 }

};

Game.prototype.newGame = function () {
  //Hides the board to start the game
  var hideBoard = document.getElementById('board');
  hideBoard.style.display = 'none';

};



//When start button is clicked, the board is shown and the start screen is hidden.
var clickStartButton = document.getElementById('start-button');
clickStartButton.addEventListener("click", function (){
  var hideBoard = document.getElementById('board');
  hideBoard.style.display = 'block';
  var hideStart = document.getElementById('start');
  hideStart.style.display = 'none';
});
