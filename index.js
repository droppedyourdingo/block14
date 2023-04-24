// Tab 1 Only Odds

//create a const array with numbers and a 2nd empty one
//for loop to start at 0, for the length of the array
//take each number in the array and modulus by 2, if leftover of 1 then add to new array
//show output for new array

const numArray = [70, 42, 55, 81, 21, 91, 34]
const oddArray = []

for (let i = 0 ; i < numArray.length; i++) {
    if (numArray[i] % 2 === 1) {
        oddArray.push(numArray[i])
    }
}
console.log(oddArray)

// Tab 2 Vowel versus Consonant

//create a const variable for a string
//create two let variables for consonant and vowel counts
//for loop to start at 0, for each character of the string
//if letter is a vowel add 1 to vowel, if consonant add 1 to consonant
//show output for word and numbers of vowel and consonant

const word = "textbook"

let vowel = 0
let consonant = 0

for (let i = 0; i < word.length; i++) {
    if (word[i] === "a") {
        vowel++
    } else if (word[i] === "e") {
        vowel++
    } else if (word[i] === "i") {
        vowel++
    } else if (word[i] === "o") {
        vowel++
    } else if (word[i] === "u") {
        vowel++
    } else {
        consonant++
    }   
}
console.log(word + " has " + consonant + " consonants and " + vowel + " vowels")

// Tab 3 Reverse Array

//const array for numbers to reverse
//const empty array
//for loop, take each value in array, add it to beginning of new array
//output the new array

const oldArray = [1, -1, 2, -3, 5, -8, 13]
const newArray = []

for (let i = 0; i < oldArray.length; i++) {
    newArray.unshift(oldArray[i])
}
console.log(newArray)

// Tab 4 FizzBuzz

//for loop, from 1 to 100
//if multiple of 3 and 5, then fizzbuzz
//else if multiple 5, print buzz
//else if multiple 3, print fizz
//else print number

for (let i = 1; i < 101; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
        console.log("FizzBuzz")
    } else if (i % 5 == 0) {
        console.log("Buzz")
    } else if (i % 3 == 0) {
        console.log("Fizz")
    } else {
        console.log(i)
    }
}