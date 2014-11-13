(function(rootObj) {
  var SnakeGame = rootObj.SnakeGame = rootObj.SnakeGame || {};
  
  var Coord = SnakeGame.Coord = function(row, col) {
    this.row = row;
    this.col = col;
  }
  
  Coord.prototype.plus = function(coord) {
    console.log("adding " + coord.row + " to " + this.row);
    this.row += coord.row;
     console.log("adding " + coord.col + " to " + this.col);
    this.col += coord.col;
  }
  
  Coord.prototype.toString = function() {
    return this.row + ", " + this.col;
  }

})(this);