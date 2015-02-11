$(document).ready(function(){
  window.dancers = [];

  $('.addDancerButton').on('click', function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      ($('body').height() * 0.6) * Math.random(),
      ($('body').width() * 0.6) * Math.random(),
      Math.random() * 1000
    );




    $('body').append(dancer.$node);

    dancer.$node.mouseover(function(){
      var pair = $(this).nearest('.dancer');

      $(this).addClass('sparkles');
      pair.addClass('sparkles');

      $(this).siblings().not(pair).removeClass('sparkles');
    });
  });

  $('#lineUp').click(function(){
    var windowHeight = $(window).height();

    var dancers = $('.dancer');
    dancers.css({
      'left': 0,
      'display': 'block'
    });
    //dancers.removeClass('flip').addClass('shake');
    var top = $('#bar').height(); // height of top bar
    var maxWidth = 0;

    dancers.each(function(){
      var currentDancer = $(this);
      // if(currentDancer.width() > maxWidth){
      //   maxWidth = currentDancer.width();
      // }

      // if((currentDancer.height() + top) > windowHeight){
      //   top = $('#bar').height();
      //   currentDancer.css('left', maxWidth);
      // }

      // currentDancer.css('top', top);
      // top += currentDancer.outerHeight();
      currentDancer.css({
        'position': 'static',
        'display': 'inline-block'
      });
      currentDancer.children('img').css('width', '100px');
    });
  });
});

//select all dancers in the window.dancer array
//







