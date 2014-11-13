(function(rootObj) {
  var SnakeGame = rootObj.SnakeGame = rootObj.SnakeGame || {};
  var Coord = SnakeGame.Coord;

  var DIRS = {"U": new Coord(-1, 0), "D": new Coord(1, 0), 
              "L" : new Coord(0, -1), "R": new Coord(0, 1) 
              }; 
  
  var Snake = SnakeGame.Snake = function(dir, segments) {
    this.dir = dir;
    this.segments = segments;
    console.log(DIRS);
  }
  
  Snake.prototype.move = function() {
    console.log("Direction: " + this.dir);
    var thisSnake = this;
    this.segments.forEach(function(segment) {
      segment.plus(DIRS[thisSnake.dir]);
    });
  }
  
  Snake.prototype.turn = function(dir) {
    this.dir = dir;
  }
  
})(this);