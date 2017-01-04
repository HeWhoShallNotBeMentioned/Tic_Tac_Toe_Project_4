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
  // console.log("inside win");
  // console.log("this.position:   ", this.position);
  // console.log("this.symbol:  ", this.symbol);
  // console.log("boardArray:  ", boardArray);

  boardArray.splice(this.position,1,this.symbol);
  // console.log("boardArray:  ", boardArray);

  for (var i = 0; i < boardArray.length; i++) {
    if (this.symbol == boardArray[i]) {
      curPlayBoxes.push(i);
    }
  }
  // console.log("Current Player Boxes:  ", curPlayBoxes);
  winningCombos.forEach(function(combo) {
    for (var i = 0; i <3; i++) {
      result[i] = (curPlayBoxes).includes(combo[i]); //gets results for each winning combination
    }
    if ((result[0] === true) && (result[1] === true) && (result[2] === true)) {
      //  console.log("current player wins:  ", game.currentPlayer.symbol);
       if (game.currentPlayer.symbol == "X") {
         var hideBoard = document.getElementById('board');
         hideBoard.style.display = 'none';
         var showFinish = document.getElementById('finish');
         showFinish.style.display = 'block';
         // bring up the winner x page and hide the board
          document.getElementsByClassName("screen-win")[0].classList.add("screen-win-two");

         game.resetBoard();
       } else if (game.currentPlayer.symbol == "O") {
         // bring up the winner xopage and hide the board
         var hideBoard1 = document.getElementById('board');
         hideBoard1.style.display = 'none';
         var showFinish1 = document.getElementById('finish');
         showFinish1.style.display = 'block';
         // bring up the winner x page and hide the board
          document.getElementsByClassName("screen-win")[0].classList.add("screen-win-one");
          game.resetBoard();
       }
    }
    if (!boardArray.includes(-1)){
      //bring up the tie screen and hide the board
      var hideBoard2 = document.getElementById('board');
      hideBoard2.style.display = 'none';
      var showFinish2 = document.getElementById('finish');
      showFinish2.style.display = 'block';
      // bring up the winner x page and hide the board
      document.getElementsByClassName("screen-win")[0].classList.add("screen-win-tie");
      game.resetBoard();
    }


  function resetBoard() {
    boardArray = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
    this.currentPlayer = playerTwo;
    var hideBoard = document.getElementById('board');
    hideBoard.style.display = 'none';
    var hideFinish = document.getElementById('finish');
    hideFinish.style.display = 'none';
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
  //Hides the finish text block to start the game
  var hideFinish = document.getElementById('finish');
  hideFinish.style.display = 'none';
};



//When start button is clicked, the board is shown and the start screen is hidden.
var clickStartButton = document.getElementById('start-button');
clickStartButton.addEventListener("click", function (){
  var hideBoard = document.getElementById('board');
  hideBoard.style.display = 'block';
  var hideStart = document.getElementById('start');
  hideStart.style.display = 'none';
});
