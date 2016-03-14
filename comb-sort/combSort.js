

var combSort = function(array) {
  
  var gap = array.length;
  var shrink = 1.3;
  var swapped = true;
  var i = 0;

  while (gap > 1 || (swapped == true)) {
    swapped = false;

    var turtleGap = Math.floor(gap/shrink);
    // don't want gap to be 0
    if (turtleGap < 1) {
      turtleGap = 1;
    }

    
    while ( i + turtleGap < array.length ) {
      // if later element is larger
      if ( array[i] > array[i+turtleGap] ) {
        var larger = array[i];
        array[i] = array[i+turtleGap];
        array[i+turtleGap] = larger;

        // we made a swap this time around
        swapped = true;
      }
      i++;
    }

    gap -= 1;
  }
  
  return array;

};
