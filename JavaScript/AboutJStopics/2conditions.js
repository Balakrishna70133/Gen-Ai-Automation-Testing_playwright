"use strict"; // used for better error handling and to prevent accidental global variable declarations

const { version } = require("node:os");

// find a number is odd or even
let n = 10; 
// =: assignment operator
// ==: equality operator (compares values, performs type coercion if necessary)
// ===: strict equality operator (compares values and types, no type coercion)
// % used to find the remainder of the number
if (n % 2 == 1) { // if the remainder is 1, then the number is odd
    console.log("The number is odd.");
} else {
    console.log("The number is even.");
}

console.log(2==2); // true
console.log(2==3); // false
console.log(2=="2"); // true only compares values 
console.log(2==="2"); // false (no type coercion)

// find the largest of three numbers
let a=10;
let b=20;
let c=15;
if (a > b && a > c) {
    console.log("a is the largest");
} else if (b > a && b > c) {
    console.log("b is the largest");
} else {
    console.log("c is the largest");
}
    console.log("b is larger than a");



// find the big number b/w 2 numbers
let num1=7;
let num2=10;
if (num1 > num2) {
   console .log("num1 is larger than num2");
} else if (num1 < num2) {
    console.log("num2 is larger than num1");
}
else {
    console.log("num1 and num2 are equal");
}

// example of boolean variable

let isElementPresent = true; // boolean variable can only hold true or false
console.log(isElementPresent); // true
isElementPresent = false;
console.log(isElementPresent); // false 

// example of undefined variable
let A1;
console.log(A1); // undefined
console.log("type of A1 before assigning: " + typeof A1); // undefined
console.log("value of A1 after  assigning: " + A1); // undefined
A1 = 10;
console.log(A1);

// example of null variable
let data = null;
console.log(data); // null
console.log( typeof data); // object (this is a quirk in JavaScript, null is considered an object)

//value Assignment :numnber, string, boolean
//undefined,null
let num = 42;
let str = "Hello, World!";
let isTrue = true;
let isFalse = false;
console.log(num);
console.log(str);
console.log(isTrue);
console.log(isFalse);


// create an object with multiple data types
// let person = {
//     "name": "playwright",
//     "version'": "1.0",
//     "openSource": true,
//     "LanguageSupported": ["JavaScript", "Python", "C"],
//     "company": "Microsoft",
//     "foundeded": 1975
// }
// console.log(person.company);// Microsoft
// console.log(person.foundeded); // 1975
// console.log(person.openSource); // true
// console.log(person.LanguageSupported); // ["JavaScript", "Python", "C"]
// JSON: JavaScript Object Notation, a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is often used for transmitting data in web applications.
// accessing Array values: we use the index
// let languages = ["JavaScript", "Python", "C"];//
// accessing object values: we use the objectvariable.keyname



