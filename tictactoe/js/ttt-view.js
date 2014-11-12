(function (rootObject) {
  var TTT = rootObject.TTT = rootObject.TTT || {};
  
  var View = TTT.View = function ($el) {
    this.game = new TTT.Game();
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  };

  View.prototype.bindEvents = function () {
    var view = this;
    var $squareList = $('.square');
    _.each($squareList, function(square) {
      var $square = $(square);
      $square.on('click', view.makeMove.bind(view));
    });
  };

  View.prototype.makeMove = function (event) {

    var $square = $(event.currentTarget);
    var pos = _.map($square.attr('id').split(""), function(el) {
      return parseInt(el);
    });
     
    var lastToMove = this.game.currentPlayer;
    this.game.playMove(pos);
    $square.html("<div class='mark'>" + this.game.currentPlayer + "</div>");
    

    this.checkGameState(lastToMove);
  };

  View.prototype.setupBoard = function () {
    var squaresString = "";
    id="12"
    _.times(3, function(row) {
       var rowString = "<div class=row>";
      _.times(3, function(col) {
        rowString += "<div class='square' id='" + row + "" + col +  "'></div>";
      });
      squaresString += rowString + "</div>";
    });
    this.$el.html(squaresString);
  };
  
  View.prototype.checkGameState = function(lastToMove) {
    if (this.game.isOver()) {
      if (this.game.winner()) {
        var winner = (lastToMove === "x") ? "O" : "X";
        alert(winner + " has won!");
      } else {
        alert("Cat's Game!");
      }
      this.resetGame();
    }
  };
  
  View.prototype.resetGame = function(){
    $('.square').empty();
    this.setupBoard();
    this.bindEvents();
    this.binfd
    this.game = new TTT.Game();
  }
  
  
  
})(this);