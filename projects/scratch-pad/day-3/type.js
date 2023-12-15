// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
// research date object and how to determine if its a ninstance of the date object
// how to determin is somethikng is a instance of the date object
// to dertiermin if something is NOT an instance of the date object
function isArray(value) {
    // YOUR CODE BELOW HERE //
    return Array.isArray(value)
    // look for the method that exists to solve this
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    // checking to see if object value is an an object
    // checking to see if value is not an array by using the isArray method
    // checking to see if object is not an array or a date, using the Object.prototype.toString.call method 
    if (value !== null && typeof value === 'object' && !Array.isArray(value) && Object.prototype.toString.call(value) === '[object Object]') {
        return true;
      } else {
        return false;
      }
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // its similar to what I did above but i dont know what acollection is
    if (value !== null && typeof value === 'object' && value instanceof Date === false ){
    return true;
} else if(Array.isArray(value)) {
  return true
}else{
  return false
}
    
}   
    // YOUR CODE ABOVE HERE //


/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    // checking to see if value is array by using isArray()
    if (Array.isArray(value)) {
        return "array";
      } else if (value instanceof Date) {
        return "date";
      } else if (value === null) {
        return "null";
      } else {
        return typeof value;
      }
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
