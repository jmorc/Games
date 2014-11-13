(function(rootObj) {
  var SnakeGame = rootObj.SnakeGame = rootObj.SnakeGame || {};
  
  var View = SnakeGame.View = function($el) {
    this.$el = $el;
    this.board = new SnakeGame.Board();
    this.bindKeyHandlers();
    
    rootObj.setInterval(this.step.bind(this), 1000);
  };
  
  
  
  View.prototype.bindKeyHandlers = function() {
    var board = this.board;

    key("up, w", board.snake.turn("U"));
    key("down, s", board.snake.turn("D"));
    key("right, d", board.snake.turn("R"));
    key("left, a", board.snake.turn("L"));
  };

  View.prototype.step = function() {
    this.board.moveSnake();
    this.board.render();
  };

})(this);