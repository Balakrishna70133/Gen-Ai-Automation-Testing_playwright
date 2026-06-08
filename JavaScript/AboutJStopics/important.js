// function greet(name) {
//     return "Hello, " + name + "!";
// }

// const userName = "Bala";
// console.log(greet(userName));


// #data type examples in JavaScript
// let n = 10; // number
// let s = "Hello GFG"; // string
// let b = true; // boolean
// let f = function() { console.log("Hello GFG"); } // function
// let arr = [ 1, 2, 3, 4, 5 ];
// let obj = {name : "GFG"} 
// console.log(typeof n);
// console.log(typeof s);
// console.log(typeof b);
// console.log(typeof f);
// console.log(typeof arr); // in javascript  arrays are also objects
// console.log(typeof obj);

//functions example             
// function add(x, y){                  
//     return x + y;
// }
// console.log(add(12 ,13));

// // Recursion example
// function factorial(n) {
//     if (n === 0) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// console.log(factorial(5)); // Output: 120  //


// // Control flow example
// let n = 41;
// if (n > 40) {
//     console.log("n is large");
// }
// else {
//     console.log("n is small");
// }
// let a = [ 1, 2, 3, 4, 5 ];
// for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }
// }

//  // Objects example1:
// let person ={name: "Bala", age:23, city: "Hyderabad"};
//     console.log(person.city);
//  // Objects example2:(reference type)
// let obj1={"name":"Bala", "age":23, "city":"Hyderabad"};
//      obj2=obj1;
//      obj2.name="krishna";
//      console.log(obj1.name);

// Arrays example
// let fruits= ["apple", "banana", "papaya", "orange", "mango"];
//     console.log(fruits[4]);

//     // Array methods example
// let num = [1,2,3,4,5];
//          num.splice(3, 1); //
//          num.shift();
//          num.unshift();
//      console.log(num);

// Reference type example in arrays
// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// arr2.push(4);
// arr2.shift(); //
// console.log(arr1); // [2, 3, 4]

// // Promises examplese((resolve, reject) => {
//     let s = "HELLO GFG"
// let promise = new Promi;
//     if (s) {
//         resolve(s);
//     }
//     else {
//         reject("Some error Occured");
//     }
// }
// )
// promise.then((data) => 
// 	console.log(data)).catch((error) => 
//     	console.log(error));



// Example2: Simulating API data as an asynchronous operation using a promise example
// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//         let successful = true; // change to false to test error

//         setTimeout(() => {
//             if (successful) {
//                 resolve({ name: "lucky", age: 2, city: "Hyderabad"  });
//             } else {
//                 reject("Failed to fetch user data");
//             }
//          2000 }); // Simulating a delay of 2 seconds
//     });

// }
// // Using the promise
// fetchUserData()
//     .then((user) => {
//         console.log("User Data:", user);
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     });

// Objects example2:(reference type)
// let obj1={name:"bala", age:23, city:"Hyd"};
// let obj2=obj1;
// //    obj2= {name:"krishna", age:20, city:"Badvel"};
//     obj2.name="krishna";
//     obj2.city="Badvel";
//    console.log(obj1.name); // Output: krishna
//    console.log(obj1.age); // Output: 23
//    console.log(obj1.city); // Output: Badvel


// let add = (a, b) => {
//     return a + b;
// }
// console.log(add(7, 7));



// let b=[1, 2, 3, 4, 5];
// b.push(6);
// console.log(b);


// prime number code
// function isPrime(n) {
//     if (n <= 1) {
//         return false; // 0 and 1 are not prime numbers
//     }
//     if (n === 2) {
//         return true; // 2 is the only even prime number
//     }
//     if (n % 2 === 0) {
//         return false; // even numbers greater than 2 are not prime
//     }

//     for (let i = 3; i <= Math.sqrt(n); i += 2) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// prime code numbeers between 1 and 100
// let n=99;
// if (isPrime(n)) {
//     console.log(n + " is a prime number.");
// } else {
//     console.log(n + " is not a prime number.");
// }   
// for (let i = 1; i <= 100; i++) {
//     if (isPrime(i)) {
//         console.log(i + " is a prime number.");
//     }
// }


// give number is even or odd
// function isOddOrEven(num) {
//     // % is the modulo operator — gives the remainder after division
//     // Any number divided by 2 with remainder 0 is even
//     if (num % 2 === 0) {
//         console.log(num + " is Even");
//     } else {
//         console.log(num + " is Odd");
//     }
// }

// isOddOrEven(4);
// isOddOrEven(7);

// //reverse a string problem
// function reverseString(str) {
//     let reversed = "";
//     for (let i = str.length -1; i>=0; i--) {
//         reversed=reversed + str[i];

//     }
//     return reversed;
// }
// console.log(reverseString("BALA KRISHNA")); // Output: ANHSIRK ALAB


// // FIND THE LARGETS NUMBER IN AN ARRAY
// function findLargest(arr) {
//     let largest=arr[0];
//     for (let i=0; i<arr.length; i++) {
//         if (arr[i] > largest) {  // this line tells bigger than  largest variable.
//             largest=arr[i];
//         }
//     }
//     return largest;

// }
// console.log(findLargest([12, 22, 33, 44, 55, 4, 7, 13, 99])); // Output: 99


// // count vowels in  a string
// function countVowels(str) {
//     let count=0;
//     let vowels="aeiouAEIOU";
//     for (let i=0; i<str.length; i++) {
//         if (vowels.includes(str[i])) { // this line checks if the current character is a vowel by checking if it is included in the string of vowels.
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels("stylishstar bala")); // Output: 4


// // check palindrome or not
// function ispalindrome(str) {
//     let reversed="";
//     for (let i=str.length-1; i>=0; i--) {
//         reversed=reversed + str[i];
//     }
//     if (str=== reversed) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(ispalindrome("madam")); // Output: true
// console.log(ispalindrome("racecar")); // Output: true
// console.log(ispalindrome("hello")); // Output: false

// factorial of a number 
// function factorial(n) {
//     let result = 1; //

//     for (let i = 1; i <= n; i++) {
//         result = result * i; 
//     }

//     return result;
// }

// console.log(factorial(5)); // Output: 120

// // Nth fibonacci number
// function fibonacci(n) {
//     let first = 0;
//     let second = 1;

//     if (n === 0) {
//         return first;
//     }

//     if (n === 1) {
//         return second;
//     }

//     for (let i = 2; i <= n; i++) {
//         let next = first + second;
//         first = second;
//         second = next;
//     }

//     return second;
// }

// console.log(fibonacci(4));


// remove duplicates from Array
// function removeDuplicates(arr) {
//     let Bala = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (!Bala.includes(arr[i])) {
//             Bala.push(arr[i]);
//         }
//     }

//     return Bala;
// }

// console.log(removeDuplicates([2, 3, 4, 5, 5, 6, 6, 7, 8]));


// //Capitalize First Letter of Every Word
// function capitalizeWords(sentence) {
//     let words = sentence.split(" ");
//     let result = [];

//     for (let i = 0; i < words.length; i++) {
//         let capitalized =
//             words[i][0].toUpperCase() + words[i].slice(1);

//         result.push(capitalized);
//     }

//     return result.join(" ");
// }

// console.log(capitalizeWords("hello world"));



// factorial problem 
function factorial(n) {
    let result = 1; //

    for (let i = 1; i <= n; i++) {
        result = result * i; 
    }

    return result;
}

console.log(factorial(5)); // Output: 120 




 function isLeapYear(year) {
    // Rule 1: divisible by 4 → leap year
    // Rule 2: but divisible by 100 → NOT a leap year
    // Rule 3: unless also divisible by 400 → IS a leap year
    // So 2000 = leap (400), 1900 = not leap (100 but not 400), 2024 = leap (4)
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(year + " is a Leap Year");
    } else {
        console.log(year + " is not a Leap Year");
    }
}


isLeapYear(2000);
isLeapYear(1900);
isLeapYear(2024);
isLeapYear(2023);
isLeapYear(1600);
isLeapYear(2100);



// == checks VALUE only — JavaScript converts types before comparing (type coercion)
// === checks VALUE AND TYPE — no conversion, strict comparison

console.log("5 == '5'          →", 5 == "5");    // true  — "5" converted to number 5
console.log("5 === '5'         →", 5 === "5");   // false — number vs string, different types
console.log("0 == false        →", 0 == false);  // true  — false converts to 0
console.log("0 === false       →", 0 === false); // false — number vs boolean
console.log("null == undefined →", null == undefined);  // true  — special JS rule
console.log("null === undefined→", null === undefined); // false — different types
console.log("'' == false       →", "" == false);  // true  — both convert to 0
console.log("'' === false      →", "" === false); // false — string vs boolean
console.log("1 == true         →", 1 == true);   // true  — true converts to 1
console.log("1 === true        →", 1 === true);  // false — number vs boolean





