(function(rootObj) {
  var SnakeGame = rootObj.SnakeGame = rootObj.SnakeGame || {};
  
  var View = SnakeGame.View = function($el) {
    this.$el = $el;
    this.setBoard();
    $(window).on('keydown', this.handleKeydown.bind(this))
    this.board = new SnakeGame.Board();
    this.pause = false;
    
    rootObj.setInterval(this.step.bind(this), 300);
  };
  
  View.prototype.handleKeydown = function(event) {
    if (event.keyCode === 32) {
      this.pauseToggle();
    } else {
      var keyDirs = { 37: 'L',
                      38: 'U', 
                      39: 'R', 
                      40: 'D',
                    };
      this.board.snake.turn(keyDirs[event.keyCode]);
    }
  };
  
  View.prototype.pauseToggle = function() {
    this.pause = (this.pause === false) ? true : false;
  }
  
  View.prototype.step = function() {
    if (this.pause === false) {
      this.board.moveSnake();
      this.board.renderBrowser();
      this.board.maybeAddApples();
      this.board.checkGameOver();
    }
  };
  
  View.prototype.setBoard = function() {
    var rowString = ""
    _.times(25, function(row){
      _.times(20, function(col) { 
        rowString += ("<div class='grid-square' id='Row" + row + "-Col" + col + "'></div>")
      });
    });
    this.$el.append($(rowString))
  };

})(this);