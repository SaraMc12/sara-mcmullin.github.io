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
// Variable hoisting is a behavior where variable declarations are moved to the top of their 
//  scope during the compilation phase.
//  This means that you can use a variable before it's declared in your code, 
// 
// **The key points about variable hoisting:
// /
// Variable declarations (using var, let, or const) are hoisted to the top of their containing scope
   console.log(a); // undefined (variable is declared but not initialized)
    var a = 5;

// Hoisting is applied separately for each scope (function or global scope). 
// Variables declared inside a function are hoisted to the top of that function's scope.
function example() {
   console.log(b); // undefined (variable is declared but not initialized)
   var b = 10;
 }

// Variables declared with let and const are hoisted, 
// but they are not initialized with undefined as in the case of var.
//  This is known as the "temporal dead zone."
// Attempting to access a variable declared with let or const before its declaration results in a ReferenceError.
console.log(c); // ReferenceError: Cannot access 'c' before initialization
let c = 15;