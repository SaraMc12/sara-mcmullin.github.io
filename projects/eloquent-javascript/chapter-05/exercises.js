// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arr) {
  return arr.reduce((newArr, element) => {
    if (Array.isArray(element)) {
      newArr = newArr.concat(flatten(element));
    } else {
      newArr.push(element);
    }
    return newArr;
  }, []);
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(test, value, update, body) {
  value = []
  for(let test = 0; test < value; i++){
    if (!test(value[i])) {
      return false;
    }for(let j = 0; j < body; j++){
      if( body === value){
        value.push(update(value))
      }
    } 
    return value
   }

}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(arr, test) {
for(let i = 0; i < arr.length; i++){
  if(!test(arr[i])){
    return false
  }
}
return true
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
// I have all the directons for the text using uniode, with the return values
// Next Write a function that computes the dominant writing direction in a string of text. 
function dominantDirection( uniCode) {
      if ((uniCode >= 0x0600 && uniCode <= 0x06FF) || (uniCode >= 0x0750 && uniCode <= 0x077F) || (uniCode >= 0xFB50 && uniCode <= 0xFDFF) || (uniCode >= 0xFE70 && uniCode <= 0xFEFF)) {
        return "rtl"; // Right-to-left script range
      } else if ((uniCode >= 0x0041 && uniCode <= 0x007A) || (uniCode >= 0x00C0 && uniCode <= 0x017F) || (uniCode >= 0x2000 && uniCode <= 0x2CFF)) {
        return "ltr"; // Left-to-right script range
      } else if ((uniCode >= 0x2800 && uniCode <= 0x28FF)) {
        return "ttb"; // Top-to-bottom script range
      } else {
        return "unknown";
      }
      
    const textReducer = uniCode.reduce((acc, currentValue) =>{
      return acc += currentValue
      }, "")

        // I think this will have the map function, but the book say using reduce is a hint
      }
    


console.log(dominantDirection(test))

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
