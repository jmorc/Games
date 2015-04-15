# Snake and other games

This repo contains Snake, Tic-Tac-Toe, and Towers of Hanoi games, implemented in the browser.  

The snake game is deployed on my personal website [jeffcaves.io](http://www.jeffcaves.io/snake.html "Play the snake game"). Give it a try!

## Features of the Snake game:

**1. Object oriented design.**
Classes are written for the `Board`, `Snake`, `View` (user interface), and `Coords`. Each class is written as an immediately-invoked function expression (IIFE) to limit pollution of the global environment.  

**2. jQuery Library.**
jQuery is employed for HTML document traversal.  For example, the `renderBrowser` function, written on the `Board` prototype, uses the jQuery functions `addClass` and `removeClass`:

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

**3. How does the game progress?**
`View.prototype.step` is called every 300 milliseconds to advance the game.  This calls a series of functions that move the snake, render the game, randomly add apples to the board, and check for game-ending conditions:

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





