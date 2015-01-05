# Snake and other games

Includes code for browser games in javascript: Snake, Tic-Tac-Toe, and Towers of Hanoi.  

The snake game is deployed! Play it at [jeffcaves.io](http//:www.jeffcaves.io/snake.html "Play the snake game").

## Features of the Snake game:

**1. Object oriented design.**
Classes are written for the `Board`, `Snake`, 'View' (the user interface), and 'Coords'. Each class is written a immediately-invoked function expression (IIFE) to avoid pollution of the global environment.  Game logic is divided among the classes as the names suggest.  'Coords' is a convenience class allowing simple access to the rows and columns of the board.  

**2. jQuery Library.**
jQuery is employed for convenient HTML document traversal and handling of keyboard input.  For example, the `renderBrowser` function, written on the `Board` prototype, uses simple jQuery functions like `#addClass` to translate between the state of the board (whether a grid square is empty or contains a snake or apple) and the board display:  

```javascript
  Board.prototype.renderBrowser = function() {
    for (var row = 0; row < this.numRows; row++) {
      for (var col = 0; col < this.numCols; col++) {
        $gridEl = $("#Row" + row + "-Col" + col);
        if (this.grid[row][col] === 'snake') {
          $gridEl.addClass("snake-square");
          $gridEl.removeClass("apple");
        } else if (this.grid[row][col] === 'apple') {
          $gridEl.addClass("apple");
        } else {
          $gridEl.removeClass("snake-square");
        }
      }
    }
  };
```

**3. How does the snake move?**
`#setInterval` calls `View.prototype.step` every 300 milliseconds to advance the game.  This function provides a convenient summary of the events of each step of the game:

```javascript
  View.prototype.step = function() {
    if (this.pause === false) {
      this.board.moveSnake();
      this.board.renderBrowser();
      this.board.maybeAddApples();
      this.board.checkGameOver();
    }
  };
```

The snake object points to an array of `Coords` objects (in `Snake.segments`) that describe the coordinates of each segment of the snake.  The snake segments are updated every step of the game by adding a segment to head of the snake based on the direction of motion.  Then, unless the snake has advanced into a square containing an apple, the last `Coord` (the snake's tail) is popped out of the `Snake.segments` array to advance the snake.    





