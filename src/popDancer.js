var PopDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
};

PopDancer.prototype = Object.create(Dancer.prototype);
PopDancer.prototype.constructor = PopDancer;

PopDancer.prototype.step = function(){
  this.$node.addClass('tada infinite animated');
};
