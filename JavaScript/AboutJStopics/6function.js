// create a prime number with a function 
// Example: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
// function isPrime(n) {
    
//     for (let i = 2; i < n/2 ; i++) {
//         if (n % i == 0) {
//              console.log(n +" is not a prime number.");
//             return false;
//         }
//     }
//     console.log(n +" is a prime number.");
//     return true;
// }
//  let result = isPrime(11);
//  console.log(result); // true
//  console.log(isPrime(13)); // true
//  console.log(isPrime(15)); // false



// // Check whether a number is Prime or Not
function prompt(question) {
    return new Promise((resolve) => { // create a new promise beacuse user input takes time , so we need to wait until user type something.
        const readline = require('readline').createInterface({ // readline is a built-in module in node.js, read input from the keyboard and display output to the terminal.
            input: process.stdin, //keyboard input
            output: process.stdout // terminal output
        });
        readline.question(question, (answer) => { // show question in terminal and wait for user input. Ex: "Enter a number to check if it is prime or not: "
            readline.close(); // After taking input, then it will stop input process and close terminal reading.
            resolve(answer); // send the entered value back Ex:7 it is going to show on the terminal

        });
    });
}
const findPrimeNumber = async () => { // async function is used because we are using await inside the function.
    let number = await prompt("Enter a number to check if it is prime or not: "); //


let isPrime = true; //

for (let i = 2; i < number; i++) {

    if (number % i === 0) { // === is used for strict equality check, it checks both value and type
        isPrime = false;
        break;
    }
}

if (isPrime && number > 1) { // meaning f this line checks the two conditions first is isPrime should be true and second is number should be greater than 1 because 0 and 1 are not prime numbers.   
    console.log(number + " is Prime Number");
} else {
    console.log(number + " is NOT Prime Number");
}
}

findPrimeNumber(); // call the function to execute the code.



