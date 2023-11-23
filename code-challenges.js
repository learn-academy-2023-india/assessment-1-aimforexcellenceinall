// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Run the file with the following command: $ node code-challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:
// input: two strings 
// output: determine the longest string of the two strings
// conditional statement to evaluate the string length 
// compare the string lengths
// return the longest string

const longestString = (str1, str2) => {
    if(str1.length > str2.length) {
        return str1
    }
    else {
        return str2
    }
}
console.log("The longest string is", longestString(fruit1, fruit2))
// --> The longest string is banana
console.log("The longest string is", longestString(fruit3, fruit4))
// --> The longest string is cherry

// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Pseudo code:
// input: two arrays 
// output: combine the length of the arrays
// set a function that takes the two arrays
// concatenate the arrays 
// return the combined array length

function combineArraysNewLength (padres1984WorldSeriesRuns, padres1998WorldSeriesRuns) {
    let combinedArrays = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
    return combinedArrays.length
}
console.log("The length of the combined array is", combineArraysNewLength(padres1984WorldSeriesRuns, padres1998WorldSeriesRuns))
// --> The length of the combined array is 9

// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "LEARN 2023"
// Expected output: "3202 NRAEL"

// Pseudo code:
// input: a string
// output: reverse the string letters
// split the string into an array of characters
// reverse the array
// join the characters into a string
// return the reversed string

const reverseCohort = currentCohort.split("").reverse().join("")
console.log("The reversed string is", reverseCohort)
// --> The reversed string is 3202 NRAEL

// --------------------3) Use a for loop to log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: 13 5 -5 27

// Pseudo code:
// input: an array
// output: log the odd numbers
// interate through the array elements
// conditional statement to check for an odd number (a nonzero remainder)
// return the odd numbers

for(let i = 0; i < stockExchange.length; i++) {
    if(stockExchange[i] % 2 !== 0) {
        console.log("The odd numbers are", stockExchange[i])
    }
}
// --> The odd numbers are 13, 5, -5, 27