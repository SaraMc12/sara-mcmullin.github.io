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
    return customers_.reduce((femaleCustomers, customer) => {
      if (customer.gender === 'female') {
        femaleCount.push(customer);
      }
      return femaleCustomers;
    }, []);
  }
  
  
var oldestCustomer = function(customers) {
    let oldest = customers_.reduce((prev, curr) => {
        return (prev.age > curr.age) ? prev : curr;
      });
    
      return oldest.name;
    }
  

var youngestCustomer = function(customers){
    let youngest = customers_.reduce((prev, curr) => {
        return (prev.age < curr.age) ? prev : curr;
      });
  
      return youngest.name;
    }

    var averageBalance = function(customers) {
        const balances = customers.map(customer => {
          return parseFloat(customer.balance.replace('$', '').replace(',', ''));
        });
        const sum = balances.reduce((acc, curr) => acc + curr, 0)
        const roundedSum = Math.floor(sum)
      
        return roundedSum
      }

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

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
