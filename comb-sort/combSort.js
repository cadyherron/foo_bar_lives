

var combSort = function(array) {
  
  var gap = array.length;
  var shrink = 1.3;
  var swapped = true;

  while (gap > 1 || (swapped == true)) {
    swapped = false;

    var turtleGap = Math.floor(gap/shrink);

    // don't want gap to be 0
    if (turtleGap < 1) {
      turtleGap = 1;
    }
    
    for (var i = 0; i < array.length; i++) {

      // if later element is larger
      if ( array[i] > array[turtleGap] ) {
        var larger = array[i];
        array[i] = array[turtleGap];
        array[turtleGap] = larger;

        // we made a swap this time around
        swapped = true;
      } else {
        swapped = false;
      }
      i++;
    }

    gap -= 1;
  }
  
  return array;

};
