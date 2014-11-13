(function(rootObj) {
  var SnakeGame = rootObj.SnakeGame = rootObj.SnakeGame || {};
  
  var Snake = SnakeGame.Snake;
  
  var Board = SnakeGame.Board = function() {
    this.grid = this.newGrid();
    this.snake = this.starterSnake();
  }
  
  Board.prototype.starterSnake = function() {
    var segs = [];
    var thisBoard = this;
    _.times(4, function(n){
      segs.push(new SnakeGame.Coord(10 + n, 10));
      thisBoard.grid[10 + n][10] = "S";
    });
    
    return new Snake("U", segs);
  };
  
  Board.prototype.newGrid = function() {
    var newArray = new Array(20);
    newArray = _.map(newArray, function(el){
      return new Array(20);
    });
    return newArray;
  };
  
  Board.prototype.render = function() {
    var boardString = "\n";
    _.each(this.grid, function(row) {
      _.each(row, function(el) {
        if (el === undefined) {
          boardString += " .";
        } else {
          boardString += el;
        }
      });
      boardString += "\n";
    });
    console.log(boardString);
    console.log("Snake head: " + this.snake.segments[0].toString());
    return boardString;
  };

  Board.prototype.moveSnake = function() {
    var segs = this.snake.segments;
    var thisBoard = this;
    _.each(segs, function(coord) {
      thisBoard.grid[coord.row][coord.col] = undefined;
    });
    
    this.snake.move();
    segs = this.snake.segments;
    _.each(segs, function(coord) {
      thisBoard.grid[coord.row][coord.col] = "S";
    });
  };

})(this);