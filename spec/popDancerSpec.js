describe('popDancer', function() {

  var popDancer;
  var timeBetweenSteps = 150;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    popDancer = new PopDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(popDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that adds the tada class', function() {
    sinon.spy(popDancer.$node, 'addClass');
    popDancer.step();
    expect(popDancer.$node.addClass.called).to.be.true;
  });

});
