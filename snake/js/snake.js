(function(rootObj) {
  var SnakeGame = rootObj.SnakeGame || {};
  var Coord = SnakeGame.Coord;
  var DIRS = { "U": new Coord(-1, 0), 
               "D": new Coord(1, 0), 
               "L": new Coord(0, -1), 
               "R": new Coord(0, 1) 
            }; 
  
  var Snake = SnakeGame.Snake = function(dir, segments) {
    this.dir = dir;
    this.segments = segments;
    console.log(DIRS);
  }
  
  Snake.prototype.move = function(board) {
    var oldSegs = this.segments.slice(0);
    var newHead = this.segments[0].plus(DIRS[this.dir]);
    var newSquare = board.grid[newHead.row][newHead.col];
    this.segments.unshift(newHead);
    
    
   
    if (newSquare !== 'apple') { this.segments.pop() }
    
     if (newSquare === 'snake') { 
       alert("Game over. The snake has hit itself, which is fatal for a 2-dimensional snake.")
       board.newGame(); 
     }
    
    _.each(oldSegs, function(coord) {
      board.grid[coord.row][coord.col] = '';
    });
    
    _.each(this.segments, function(coord) {
      board.grid[coord.row][coord.col] = 'snake';
    });
  };
  
  Snake.prototype.turn = function(dir) {
    this.dir = dir;
  }

  Snake.prototype.oppositeDir = function() {
    switch (this.dir) {
      case "L":
       return "R";
      case "R":
       return "L";
      case "U":
       return "D";
      case "D":
       return "U";
    }
  }
  
})(this);