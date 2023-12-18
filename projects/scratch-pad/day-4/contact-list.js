// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    var contacts = {}
        contacts.id = id,
        contacts.nameFirst= nameFirst,
        contacts.nameLast= nameLast
        
        return contacts
    }
// make a factory function
//  I the input takes in id, nameFirst, nameLast(should it take in the makeContact function?)
// O: it should add a contact, remove a contact, find a contact and print a contact

// make factory function 
function makeContactList(id, nameFirst, nameLast) {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];  
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact){
            contacts.push(contact);
            
        },
        findContact: function(fullName){
            console.log("hello")
            // Input: takes in a pramater of the first and last name of the contact
            // Output: the first and last name of the contact combined
            // loop through list of contacts
            // if first name matches first name and last name matches last name than equals fullname
            for(let i = 0; i < contacts.length; i++){
                console.log(contacts[i].nameFirst)
                console.log(contacts[i].nameLast)
                  if(fullName === contacts[i].nameFirst + " "+ contacts[i].nameLast){  
                    return contacts[i]        
                  }
                    
            }
            return undefined
          
        
        },removeContact: function(contact){
            for(let i = 0; i < contacts.length; i++){
                if(contact.nameFirst === contacts[i].nameFirst && contact.nameLast === contacts[i].nameLast){
                 contacts.splice(i, 1 )
                }
            }
            
        
        },printAllContactNames: function(){
            // set up a seperate variable for the printed contacts
            let result = '';
        // use forEach to create a callback function to execute for each element in the array
      contacts.forEach((contact, index) => {
        // create variable for combining nameLast and nameFirst into a full name for the contact list using template literal (something I use to do at work which is why I remember anything about it.)
        const fullName = `${contact.nameFirst} ${contact.nameLast}`;
        result += fullName;
        // check entire contact list and print with new line
        if (index < contacts.length - 1) {
          result += '\n';
        }
      });
            return result
        }

    } 

}


// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
