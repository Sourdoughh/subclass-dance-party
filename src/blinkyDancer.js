var BlinkyDancer = function(top, left, timeBetweenSteps){
  // this.oldStep refers to Dancer's step
  // This must be set before subclassing Dancer,
  // because any properties set after Dancer.call()
  // will not be saved as part of the subclassed object.

  console.log(this);
  this.oldStep = Dancer.prototype.step;
  Dancer.apply(this, arguments);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  this.oldStep();
  this.$node.toggle();
};
