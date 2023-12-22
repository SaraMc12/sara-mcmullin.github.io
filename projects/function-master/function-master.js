//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// const { result } = require("lodash")

function objectValues(object) {
//    Input  Should take an object and return its values in an array
//    output return just the values inside the object as an array
//    concens  the values need to deeply equal the object
        let result = []
        for (let key in object){
          
          result.push(object[key])
              
        }        
         return result   

} 



//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    let result = []
    for(let key in object){
        result.push(key)
    }
    return result.join(" " )
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    result = []
    for(let key in object){
        if(typeof object[key] === "string"){
            result.push(object[key])
        }
    }
    return result.join( " ")
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)){
        return "array"
    }else{
        return "object"
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    let output = []

        var upperCase = string[0].toUpperCase()+ string.slice(1)
        output.push( upperCase)
        var joinString = output.join(string.length)

    return joinString
}


//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
//  Should take a string of words and return a string with all the words capitalized
// input is a string
// output is a string but capitalized
function capitalizeAllWords(string) {
    let char = string.split(" ");
    for (let i = 0; i < char.length; i++) {
      char[i] = char[i][0].toUpperCase() + char[i].slice(1);
    }
    let joinString = char.join(" ");
    return joinString;
  }
  
  console.log(capitalizeAllWords("hello world"));


//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object with a name property and return 'Welcome <Name>!'
// input is an object with a name property
// output is a welcome message with the name property
function welcomeMessage(object) {
    let objname = object.name
    let char = objname.split(" ");
    console.log(char)
       for (let i = 0; i < char.length; i++) {
        char[i] = char[i][0].toUpperCase() + char[i].slice(1);
     }
      let capName = char.join("");
    let message = "Welcome " + capName + "!";
    return message;
    }
//   console.log(welcomeMessage("sam"));
  
//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object with a name an a species and return '<Name> is a <Species>'
function profileInfo(object) {
let objName = object.name
let objSpecies = object.species

    let char = objName.split(" ");
   
      char[0] = char[0][0].toUpperCase() + char[0].slice(1);
    
    let char2 = objSpecies.split(" ");
   
      char2[0] = char2[0][0].toUpperCase() + char2[0].slice(1);
    
    let capName = char.join("");
    let capName2 = char2.join("");
    return (message = capName + " " + "is a" + " " + capName2);
  }
//   console.log(profileInfo("craig", "mammal"));
//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object, if this object has a noises array return 
// them as a string separated by a space, if there are no noises return 'there are no noises'
// input = {noises:["bark", "woof", "squeak","growl"]} an object with an array for a value and a key of noises
// output = "bark woof squeak growl" a string
function maybeNoises(object) {
let result = ""
let noises = object.noises
if(!object.noises){
 result = "there are no noises"
}

else if(noises.length > 0){
     result = noises.join(" ");
 }else {
    result = "there are no noises"  
 }
return result
}
console.log(maybeNoises({noises:[]}))
//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a string of words and a word and return true if <word> is in <string of words>, 
// otherwise return false."
function hasWord(string, word) {
    var data = string.split(' ');
    if(!data.includes(word)){
        return false
    }else if(data.includes(word))
    return true
}
// console.log(hasWord("hello world", "world"))
//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a name and an object and add the name to the object's friends array then return the object"
//  input = ("lester", {friends:[]}), a name and a freinds property
// output = ("jimmy", {friends:["bobby","jones"]}), {friends:["bobby", "jones", "jimmy"]} should add mew name in friends property
function addFriend (name, object) {
    if(object.hasOwnProperty("friends")){
         object.friends.push(name);
    }else{
        object.friends = [name];
    }
    return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//  Should take a name and an object and return true if <name> is a friend of <object> and false otherwise"
function isFriend(name, object) {
    return object.hasOwnProperty("friends") && object.friends.includes(name);
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a name and a list of people, and return a list of all the names that <name> is not friends with"
function nonFriends(name, array) {
   const nonFriendsList = [];
    for (let i = 0; i < array.length; i++) {
        const user = array[i];
        if (user.name === name) {
        }else if (!user.friends || !user.friends.includes(name)) {
            nonFriendsList.push(user.name);
        }
        }
        return nonFriendsList;
    }
    

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}