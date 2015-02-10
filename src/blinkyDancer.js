var BlinkyDancer = function(top, left, timeBetweenSteps){
  // this.oldStep refers to Dancer's step
  // This must be set before subclassing Dancer,
  // because otherwise there is no oldStep to refer to

  // this.oldStep = Dancer.prototype.step;
  Dancer.apply(this, arguments);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  // this.oldStep();
  Dancer.prototype.step();
  this.$node.addClass('flash animated infinite');
};
