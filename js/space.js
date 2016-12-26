var Space = function(position, dom, doTurn, win) {
    this.position = position;
    this.dom = dom;
    this.symbol = '';
    this.doTurn = doTurn;
    this.win = win;
    //this.boardArray =  [-1,-1,-1,-1,-1,-1,-1,-1,-1];
    var space = this;
    //console.log("this.win:  ", this.win);
    this.dom.addEventListener('click', function(event) {
        space.setContent('X');
        space.win();
  });

};
  Space.prototype.setContent = function(content) {
    var activePlayerSymbol = this.doTurn();

    if (!this.symbol) {
      this.symbol = activePlayerSymbol;
      // console.log("this.position:   ", this.position);
      // console.log("this.symbol:  ", this.symbol);

      //boardArray = boardArray.splice(this.position,1,this.symbol);
      //console.log("boardArray:  ", boardArray);
      if(this.symbol == "X") {
        var dId = this.dom.id;
        console.log("this.dom.id:" + dId);
        document.getElementById(dId).classList.add("box-filled-2");
      } else {
        var dId2 = this.dom.id;
        document.getElementById(dId2).classList.add("box-filled-1");
      }
    }

  };
