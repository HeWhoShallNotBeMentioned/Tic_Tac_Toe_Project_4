var Game = function(playerOne, playerTwo) {
this.playerOne = playerOne;
this.playerTwo = playerTwo;
this.currentPlayer = playerTwo;
this.spaces = [];
document.getElementsByClassName("players")[1].classList.add("active");

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
console.log("Inside win");

  var currentBoard = [],
      winningCombos = [[0, 1, 2], [3, 4, 5,], [6, 7, 8], [0, 3, 6], [1, 4 ,7], [2, 5, 8], [0, 4, 8], [2, 4, 6]],
      gameStatus =  false;

  currentBoard = document.getElementsByClassName("box");
  console.log("current board: ", currentBoard);
  console.log("tyoeof:  ",typeof currentBoard);
  for (var prop in currentBoard) {
    console.log(prop);

  }
  var currentBoardChildNodes = currentBoard.childNodes;
  console.log("board child nodes:  ",currentBoardChildNodes);

  winningCombos.forEach(function(combo) {
    for (var i = 0; i <3; i++) {
      //result[i] = (spaces).includes(combo[i]); //gets results for each winning combination
    }
    // if ((result[0] === true) && (result[1] === true) && (result[2] === true)) {
    //    gameStatus = "current player wins"; //
    //    console.log("current player", currentPlayer);
    // }
 });
 console.log("current player", game.currentPlayer);
 console.log("gameStatus: ", gameStatus);
 return gameStatus;
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
