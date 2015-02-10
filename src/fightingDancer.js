var FightingDancer = function(top, left, timeBetweenSteps){
  // this.oldStep refers to Dancer's step
  // This must be set before subclassing Dancer,
  // because any properties set after Dancer.call()
  // will not be saved as part of the subclassed object.

  //this.oldStep = Dancer.prototype.step;
  Dancer.apply(this, arguments);
};

FightingDancer.prototype = Object.create(Dancer.prototype);
FightingDancer.prototype.constructor = FightingDancer;

// FightingDancer.prototype.step = function(){
//   this.$node.toggle();
// };

FightingDancer.prototype.step = function(){
  //this.oldStep();
  this.$node.addClass('flip animated infinite');
};
