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
console.log("inside Space.setContent");
    if (!this.symbol) {
      this.symbol = activePlayerSymbol;
      this.dom.innerHTML = this.symbol;
    }
  };
