// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */

    function range(start, end) {
        // YOUR CODE GOES BELOW HERE //
        // first set up a seperate array to push into
        var rangeArray = [];
        // next set a contitional statment that start is either less than or equal to end
        if (start <= end) {
          // Loop from start to end  and push each number into the array
          for (let i = start; i <= end; i++) {
              rangeArray.push(i);
          }
      } else {
          // Create a second loop from end to start to push each number to the array
          for (let i = start; i >= end; i--) {
              rangeArray.push(i);
          }
          
      }
      return rangeArray;
      }
      
    
    
    
    // YOUR CODE GOES ABOVE HERE //






// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
