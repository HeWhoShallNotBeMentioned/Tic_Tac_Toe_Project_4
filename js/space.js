var Space = function(position, dom, doTurn, win) {
    this.position = position;
    this.dom = dom;
    this.symbol = '';
    this.doTurn = doTurn;
    this.win = win;
    var space = this;
    this.dom.addEventListener('click', function(event) {
        space.setContent('X');
  });
};
  Space.prototype.setContent = function(content) {
    var activePlayerSymbol = this.doTurn();
    var checkWin = this.win();
    if (!this.symbol) {
      this.symbol = activePlayerSymbol;
      if(this.symbol == "X") {
        var dId = this.dom.id;
        document.getElementById(dId).classList.add("box-filled-2");
      } else {
        var dId2 = this.dom.id;
        document.getElementById(dId2).classList.add("box-filled-1");
      }
    }
  };
