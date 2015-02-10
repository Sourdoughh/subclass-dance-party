var BlinkyDancer = function(top, left, timeBetweenSteps){
  // this.oldStep refers to Dancer's step
  // This must be set before subclassing Dancer,
  // because the Dancer.call() line will prevent
  // the subclassed object from taking
  // any other properties.
  this.oldStep = Dancer.prototype.step;

  Dancer.apply(this, arguments);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  this.oldStep();
  this.$node.toggle();
};
