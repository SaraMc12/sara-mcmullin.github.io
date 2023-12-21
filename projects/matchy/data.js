/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {
  species: "species",
  name: "name",
  noises: []
 
}
console.log(noises)

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
noises = []
noises["woof"]
noises.push("meow")
noises.push("oink")
noises.push("chirp")
noises.unshift("moo")
noises.push("baaa")
console.log(noises)
console.log(noises.length)
console.log(noises.length -1)

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal.noises = noises
console.log(animal)




/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
let duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }
animals = [{ name: "Elephant", species: "Mammal" ,noises: ["Moo", "Honk", "Growl"]},
{ name: "Snake", species: "Reptile", noises: ["Moo", "Honk", "Growl"] },{name: "Tucan", species: "Bird", noises: ["Moo", "Honk", "Growl"]}]
animals.push(duck)
console.log(animals)



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var friends = []
console.log(friends)

function getRandom(animals){
  var animalSelector = Math.floor(Math.random() * animals.length);
  return animalSelector
}
var randomIndex = getRandom(animals)
friends.push(animals[randomIndex].name);
animals[0]["friends"] = friends;
console.log(friends)



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}