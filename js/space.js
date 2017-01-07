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
      this.dom.addEventListener('mouseover', function(event){
        console.log("inside space mouseover funtion");
        p1 = document.getElementById('player1');
        p2 = document.getElementById('player2');
        //console.log("active player symbol", p1);
        //console.log("active player symbol", p2);
        if(!this.classList.contains("box-filled-2") && !this.classList.contains("box-filled-1")){
          if(p2.classList.contains("active")){
            console.log("inside classList if for p2");
            this.style.backgroundImage = 'url(img/x.svg)';
          } else if(p1.classList.contains("active")) {
              this.style.backgroundImage = 'url(img/o.svg)';
          }
        }
          });

      this.dom.addEventListener('mouseout', function(){

        if(this.hasAttribute("style")){
          console.log("this:  ", this.dom);
          this.removeAttribute("style");
        }

      });


};
  Space.prototype.setContent = function(content) {
    var activePlayerSymbol = this.doTurn();

    if (!this.symbol) {
      this.symbol = activePlayerSymbol;





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
