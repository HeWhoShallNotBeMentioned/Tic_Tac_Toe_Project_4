

(function(){
  //console.log("Inside the IIFE!");
  var player1 = new Player('Chewbacca', 'X');
  var player2 = new Player('Spock', 'O');
  var game = new Game(player1, player2);

  game.newGame();
  //debugger;
 }());
