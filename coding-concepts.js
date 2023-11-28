// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer: A new array length with indigo added to the end.
// b) Verify and explain: 5; .push is a mutator that adds a value onto the end of an array and outputs the new array length.

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: The total number of string characters, or the string length.
// b) Verify and explain: 10; the length property of a string is an informational command that returns the string length or 
//                        the number of array elements.

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: The "o" of Hello.
// b) Verify and explain: o; bracket notation dynamically accesses any character in a string.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: "Ruby".
// b) Verify and explain: Ruby; an index is the location, like an address, of an array value (arrays are zero indexed and
//                        increase by one whole number for each new element).

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())

// a) Your answer: Error message: undefined; toUpperCase() is inapplicable directly to an array.
// b) Verify and explain: TypeError: weekendDays.toUpperCase is not a function; the toUpperCase() method converts a string 
//                        to uppercase letters, but does not change the original string. The .map() method of an array can
//                        create a new array by calling a function on each array element, returning each value of a string
//                        converted into uppercase.


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: Number.
// b) Verify and explain: number; the length property of an array is a number.
