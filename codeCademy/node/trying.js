const prompt = require('prompt-sync')({sigint: true});

let number = prompt("Please type a number: ")
number = Number(number);

console.log(`The square of this number is -> ${number**2}`)