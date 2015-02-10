var PopDancer = function(top, left, timeBetweenSteps){
  // this.oldStep refers to Dancer's step
  // This must be set before subclassing Dancer,
  // because any properties set after Dancer.call()
  // will not be saved as part of the subclassed object.

  // this.oldStep = Dancer.prototype.step;
  Dancer.apply(this, arguments);
};

PopDancer.prototype = Object.create(Dancer.prototype);
PopDancer.prototype.constructor = PopDancer;

PopDancer.prototype.step = function(){
  // this.oldStep();
  this.$node.addClass('tada infinite animated');
};
