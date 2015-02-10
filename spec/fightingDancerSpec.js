describe('fightingDancer', function() {

  var fightingDancer;
  var timeBetweenSteps = 150;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    fightingDancer = new FightingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(fightingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that adds the tada class', function() {
    sinon.spy(fightingDancer.$node, 'addClass');
    fightingDancer.step();
    expect(fightingDancer.$node.addClass.called).to.be.true;
  });

});
