var Space = function(position, dom, doTurn) {
    this.position = position;
    this.dom = dom;
    this.symbol = '';
    this.doTurn = doTurn;
    var space = this;
    this.dom.addEventListener('click', function(event) {
        space.setContent('X');
  });
};
  Space.prototype.setContent = function(content) {
    var activePlayerSymbol = this.doTurn();

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

  // var d = document.getElementById("div1");
  // d.className += " otherclass";
