(function(rootObj) {
  var SnakeGame = rootObj.SnakeGame = rootObj.SnakeGame || {};
  
  var Snake = SnakeGame.Snake;
  
  var Board = SnakeGame.Board = function() {
    this.grid = this.newGrid();
    this.snake = this.starterSnake();
  };
  
  
  Board.prototype.maybeAddApples = function() {
    if (_.random(1, 15) === 15) {
      _(3).times(function(){ 
        var row = _.random(0, 24);
        var col = _.random(0, 19);
        $appleEl = $("#Row" + row + "-Col" + col);
        $appleEl.addClass("apple")
      });
    }
  };
  
  Board.prototype.starterSnake = function() {
    var segs = [];
    var thisBoard = this;
    _.times(4, function(n){
      segs.push(new SnakeGame.Coord(10 + n, 10));
      thisBoard.grid[10 + n][10] = "S";
    });
    
    return new Snake("U", segs);
  };
  
  Board.prototype.checkGameOver = function() {
    var headRow = this.snake.segments[0].row;
    var headCol = this.snake.segments[0].col; 
    var dir = this.snake.dir;
    if ((headRow == 0 && dir === 'U') || (headRow == 24 && dir === 'D')) {
      alert("Loser!!! Row out of bounds.")
      this.newGame();
    } else if (headCol < 0 || headCol > 19) {
      alert("Loser!!! Col out of bounds.")
      this.newGame();
    }
  };
    
  Board.prototype.newGame = function() {
    location.reload();  
  };
  
  Board.prototype.newGrid = function() {
    var gridArray = []
    for (var i = 0; i < 25; i++) {
      gridArray.push([])
    }
    _.each(gridArray, function(el) {
      for (var i = 0; i < 20; i++) {
        el.push(0);
      };
    });
    return gridArray;
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

  Board.prototype.renderBrowser = function() {
    for (var row = 0; row < 25; row++) {
      for (var col = 0; col < 20; col++) {
        $gridEl = $("#Row" + row + "-Col" + col);
        if (this.grid[row][col] === 1) {
          $gridEl.addClass("snake-square");
        } else {
          $gridEl.removeClass("snake-square");
        }
      }
    }
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
      thisBoard.grid[coord.row][coord.col] = 1;
    });
  };

})(this);