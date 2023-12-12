// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  // use a for loop to iterate over the array

  for(let i = 0; i < array.length; i++){
    console.log(array[i])
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
// loop through array starting at the end and loop backwards
for(let i = array.length - 1; i >= 0; i--) {

console.log(array[i])
}

  }
  
  // YOUR CODE ABOVE HERE //



/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // I: it's an object so it's key value pairs
  // O: it's an array containing the object keys, so it needs to be somthing like this [key1:, key2]
  // C:?
  // E: ?
  // so, if this needs to output an array I will create an array for the keys to go into
  let keyArr = []
  // I loop thought the object keys
  for(let key in object){
  // I push the keys into the keyArr array
  keyArr.push(key)
  // return the keyArr array
   
    // console.log(object[key])
  }
  
  return keyArr
  
  // YOUR CODE ABOVE HERE //
}
console.log(getObjectKeys())
/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
// I: the input is an object so it has key value pairs
// O: the output is a console.log I think, where it prints the keys not the value pairs
// C: dont print the value pairs just the keys
// E: na
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  for(let key in object){
   console.log(object[key]);
    
  }
  }
  
  
  
  
  // YOUR CODE ABOVE HERE //


/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  for(let key in object){
    console.log(object[key])
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
