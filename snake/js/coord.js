(function(rootObj) {
  var SnakeGame = rootObj.SnakeGame = rootObj.SnakeGame || {};
  
  var Coord = SnakeGame.Coord = function(row, col) {
    this.row = row;
    this.col = col;
  };
  
  Coord.prototype.plus = function(coord) {
    return new Coord(this.row + coord.row, this.col + coord.col);
  };
  
  Coord.prototype.toString = function() {
    return this.row + ", " + this.col;
  };

})(this);