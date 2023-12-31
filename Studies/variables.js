// declration and assignment 
// var, let, const
// hoisting

/**
 * VARIABLES
 * 
 * 0. introductory section - summary of what a variable is
 *  variable is a named storage location that holds data or a value. 
 * It serves as a way to identify and reference a piece of memory where information can be stored and retrieved
 *  during the execution of a program. Variables provide a way to manipulate and work with data in a program.

 Variables have the following characteristics:
 * 
 * *1. explain declaration and assignment (give code example)
 * 
 * Name: A variable has a name, also known as an identifier, 
 * which is used to uniquely identify it in the program.

 *Type: Variables have a data type that defines the kind of data they can store. 
 Common data types include numbers, strings, booleans, objects, arrays, etc.

 *Value: Variables can store and hold a specific value or data. 
 The value can be assigned, updated, and retrieved during the program's execution.

 *Scope: The scope of a variable defines where in the program the variable can be accessed. 
 Variables can have global scope (accessible throughout the entire program) or local scope 
 (limited to a specific block or function).
 * 
 * 2. var, let, const(give code example)
 */
 var animal = "dog"

// Using let (for variables that can be reassigned)
 let animalTypes = ["mammal", "reptile", "birds"]

//  Using const (for variables with constant values)
 const animalObj = {
    animalName: "chicken",
    animalType: "bird",
    favFood: "worms"
 }

//3. hoisting(give code example)
// 