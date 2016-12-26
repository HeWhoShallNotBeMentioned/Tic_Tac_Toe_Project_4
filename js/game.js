var Game = function(playerOne, playerTwo) {
this.playerOne = playerOne;
this.playerTwo = playerTwo;
this.currentPlayer = playerTwo;
this.spaces = [];

document.getElementsByClassName("players")[1].classList.add("active");
  var boardArray = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
  var symbol = this.symbol;
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
  var result = [];
  var curPlayBoxes = [];
  var winningCombos = [[0, 1, 2], [3, 4, 5,], [6, 7, 8], [0, 3, 6], [1, 4 ,7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  console.log("inside win");
  console.log("this.position:   ", this.position);
  console.log("this.symbol:  ", this.symbol);
  console.log("boardArray:  ", boardArray);

  boardArray.splice(this.position,1,this.symbol);
  console.log("boardArray:  ", boardArray);

  for (var i = 0; i < boardArray.length; i++) {
    if (this.symbol == boardArray[i]) {
      curPlayBoxes.push(i);
    }
  }
  console.log("Current Player Boxes:  ", curPlayBoxes);
  winningCombos.forEach(function(combo) {
    for (var i = 0; i <3; i++) {
      result[i] = (curPlayBoxes).includes(combo[i]); //gets results for each winning combination
    }
    if ((result[0] === true) && (result[1] === true) && (result[2] === true)) {
       console.log("current player wins:  ", game.currentPlayer.symbol);
       //console.log("current player", currentPlayer);
    }
  });


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
