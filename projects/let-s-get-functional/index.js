// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("underbar");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./sara-mcmullin.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
let males = _.filter(array, (customer)=> customer.gender ==="male")
return males.length
};

var femaleCount = function(array) {
  return array.reduce((femaleCount, customer) => {
    if (customer.gender === 'female') {
      femaleCount.push(customer);
    }
    return femaleCount;
  }, []).length
};


var oldestCustomer = function(array) {
  let oldest = array.reduce((prev, curr) => {
    return (prev.age > curr.age) ? prev : curr;
  });

  return oldest.name;
};
  

var youngestCustomer = function(array){
    let youngest = array.reduce((prev, curr) => {
        return (prev.age < curr.age) ? prev : curr;
      });
  
      return youngest.name;
    }

    var averageBalance = function(array){
      const totalBalance = array.reduce((acc, customer) => {
        return acc + parseFloat(customer.balance.replace('$', '').replace(',', ''));
      
    }, 0);
      return totalBalance / array.length;
    };
    
    console.log(averageBalance(customers));
    

var firstLetterCount = function(array, letter){
  const result = array.filter(customer => customer.name.charAt(0).toUpperCase() === letter.toUpperCase());
  return result.length;
  }

  const friendFirstLetterCount = function(array, customer, letter) {
    let count = 0;
    // checking to see if customers.friends is an array 
    if (customer && customer.friends && Array.isArray(customer.friends)) {
      customer.friends.forEach(function(friend) {
        if (friend.name && typeof friend.name === 'string' && friend.name.toUpperCase().charAt(0) === letter.toUpperCase()) {
          count++;
        }
      });
    }
    return count;
  };

const friendsCount = function(array, name) {
  return array.filter(customer => {
    for (let i = 0; i < customer.friends.length; i++) {
      if (customer.friends[i].name === name) {
           return true; // Return true if the friend is found
         }
       }
        return false; // Return false if the friend is not found in the loop
     })
    .map(customer => customer.name);
  };
  
var topThreeTags;
// = customers.reduce(function(arr1, arr2){
//   if(customer.tags.length === customer.tags.length){
//     arr2.push(arr1)
//   }
// },[])

var genderCount = function(array) {
  return array.reduce((genderCount, customer) => {
    if (customer.gender === 'female') {
      if (genderCount['female'] === undefined) {
        // this felt weird to me but it's common practice to initialize the count as 1 according to my research.
        // also when I originally set it to zero evertthing kept failing.
        
        genderCount['female'] = 1;
      } else {
         genderCount['female']++;
      }
    } else if (customer.gender === 'male') {
      if (genderCount['male'] === undefined) {
         genderCount['male'] = 1;
      } else {
        genderCount['male']++;
      }
    } else if (customer.gender === 'non-binary') {
      if (genderCount['non-binary'] === undefined) {
        genderCount['non-binary'] = 1;
      } else {
         genderCount['non-binary']++;
      }
    }
    return genderCount;
  }, {});
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
