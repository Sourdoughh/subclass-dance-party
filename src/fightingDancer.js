var FightingDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
};

FightingDancer.prototype = Object.create(Dancer.prototype);
FightingDancer.prototype.constructor = FightingDancer;

FightingDancer.prototype.step = function(){
  this.$node.addClass('flip animated infinite');
};
