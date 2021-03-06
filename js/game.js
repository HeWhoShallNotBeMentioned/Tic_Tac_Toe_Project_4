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

  boardArray.splice(this.position,1,this.symbol);
  console.log("inside win function boardArray:  ", boardArray);
  //console.log("result:  ", result);
  //console.log("curPlayBoxes:  ", curPlayBoxes);

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
          document.getElementById("message").innerHTML = "Winner";

       } else if (game.currentPlayer.symbol == "O") {
         // bring up the winner xopage and hide the board
         var hideBoard1 = document.getElementById('board');
         hideBoard1.style.display = 'none';
         var showFinish1 = document.getElementById('finish');
         showFinish1.style.display = 'block';
         // bring up the winner x page and hide the board
          document.getElementsByClassName("screen-win")[0].classList.add("screen-win-one");
          document.getElementById("message").innerHTML = "Winner";
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
      document.getElementById("message").innerHTML = "It's a tie!";
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

var clickNewGameButton = document.getElementById('finish-button');
clickNewGameButton.addEventListener("click", function(){
  var player1 = new Player('Chewbacca', 'X');
  var player2 = new Player('Spock', 'O');
  var game = new Game(player1, player2);
      boardArray = [-1,-1,-1,-1,-1,-1,-1,-1,-1];

      for(var i = 0; i < 9; i++){
        var dom = document.getElementById('box-' + i);
        this.spaces.push(new Space(i, dom, doTurn, win));
      }
  //game.newGame();
  //console.log("inside clickNewGameButton");


  var hideBoard = document.getElementById('board');
  hideBoard.style.display = 'block';
  var hideFinish = document.getElementById('finish');
  hideFinish.style.display = 'none';
  var deactiveO = document.getElementById("player1");
  deactiveO.classList.remove("active");
  var activateX = document.getElementById("player2");
  activateX.classList.add("active");

  for(var i = 0; i < 9; i++){
    var dom = document.getElementById('box-' + i);
      //console.log("inside", dom);
      dom.classList.remove("box-filled-2", "box-filled-1");
  }
  return boardArray;
});

//When start button is clicked, the board is shown and the start screen is hidden.
var clickStartButton = document.getElementById('start-button');
clickStartButton.addEventListener("click", function (){
  var hideBoard = document.getElementById('board');
  hideBoard.style.display = 'block';
  var hideStart = document.getElementById('start');
  hideStart.style.display = 'none';
});
