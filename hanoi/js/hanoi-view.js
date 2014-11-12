(function(rootObject){
  
  var Hanoi = rootObject.Hanoi = rootObject.Hanoi || {}; 
  
  var View = Hanoi.View = function(game, $el) {
    this.game = game;
    this.$el = $el;
    this.render();
  };
  
  View.prototype.render = function() {
    var towers = "";
    var pieces = "";
    var thisView = this;
    this.$el.empty();
    this.game.towers.forEach(function(tower, n) {
      thisView.$el.append(
        "<div class='tower' id='" + (n + 1) + "'></div>");
      tower.forEach(function(piece) {
        $('#' + (n + 1)).prepend(
          "<div class='piece' id='piece" + piece + "'></div>"
        );
      });
      thisView.addListener('#' + (n + 1));
    });
  };
  
  View.prototype.addListener = function(tower) {
    $(tower).on("click", this.clickTower.bind(this));
  }


  View.prototype.clickTower = function(event) {
    var $tower = $(event.currentTarget);
    if (this.fromTowerIdx != null) {
      console.log("second click");
      var targetTower = $tower.attr('id') - 1;
      this.makeMove(this.fromTowerIdx, targetTower);
      this.fromTowerIdx = null;
    } else {
      console.log("storing id");
      this.fromTowerIdx = $tower.attr('id') - 1;
      $tower.css("border-bottom", "4px solid #60D6A9");
    }  
  }

  View.prototype.makeMove = function(from, to) {
    if (this.game.move(from, to)) {
      this.render();
      if (this.game.isWon()) {
        alert("You win!");
        this.game = new Hanoi.Game();
        this.render();
      }
    } else {
      alert("Invalid Move!!");
    }
    
    
  };
  
})(this);