var Dancer = function(top, left, timeBetweenSteps) {
  this.dancer = {};

  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  this.$node = $('<span class="dancer"></span>');

  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function(){
  // setTimeout is in the global scope,
  // so we need to bind "this" to the Dancer context
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
