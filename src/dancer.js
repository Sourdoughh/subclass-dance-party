var Dancer = function(top, left, timeBetweenSteps) {
  this.dancer = {};

  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  this.animal = this.chooseAnimal();
  this.$node = $('<div class="dancer"><img src="images/' + this.animal + '.png"/></div>');
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function(){
  // setTimeout is in the global scope,
  // so we need to bind "this" to the Dancer context
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var barHeight = $('#bar').height();
  if(top < barHeight){
    top += barHeight;
  }
  // var windowWidth = $(window).width();
  // var windowHeight = $(window).height();
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.chooseAnimal = function(){
  var animals = ['armadillo', 'elephant', 'fish', 'harpseal', 'horse', 'husky', 'pig', 'raccoon', 'shark-pink', 'shark'];
  return animals[Math.floor(Math.random() * (animals.length - 0) + 0)];
};
