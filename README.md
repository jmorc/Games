# Snake and other games

This repo contains Snake, Tic-Tac-Toe, and Towers of Hanoi games, implemented in the browser.  

The snake game is deployed at [jeffcaves.io](http//:www.jeffcaves.io/snake.html "Play the snake game"). Give it a try!

## Features of the Snake game:

**1. Object oriented design.**
Classes are written for the `Board`, `Snake`, `View` (user interface), and `Coords`. Each class is written as an immediately-invoked function expression (IIFE) to limit pollution of the global environment.  Game logic is divided among the classes as the class names suggest.  'Coords' is a convenience class that allows simple access to the rows and columns of the board.  

**2. jQuery Library.**
jQuery is employed for convenient HTML document traversal and handling of keyboard input.  For example, the `renderBrowser` function, written on the `Board` prototype, uses jQuery functions like `#addClass` and #removeClass`. These functions assign the desired classes to the squares of the board (reflecting whether a grid square is empty, or contains a snake segment, or an apple). The state of the board squares is maintained `Board.grid`.  

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
Using`setInterval`, `View.prototype.step` is called every 300 milliseconds to advance the game.  This calls a series of functions:

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

The snake object points to an array of `Coords` objects, `Snake.segments`, that describe the coordinates of each segment of the snake.  `moveSnake` updates the segments by adding a segment to head of the snake, based on the snake's direction of motion, `Snake.dir`.  Then, the final `Coord` (the snake's tail) is popped out of the `Snake.segments`. By adding a head segment and popping out the tail, the length of the snake does not change.  In the special case when the snake advances into an apple square, the tail is not popped off.  Consequently, the snake grows one segment longer.    





