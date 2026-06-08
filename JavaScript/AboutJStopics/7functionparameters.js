// write a function to pass an array and addition of all the values.
// Example1: sumArray([1, 2, 3, 4, 5]) should return 15.
// function sumArray(numArr) {
//     let sum = 0;
//     for (let i = 0; i < numArr.length; i++) {
//         sum += numArr[i]; // sum = sum + numArr[i]
//     }
//     return sum;
// }
// let numbers = [1, 2, 3, 4, 5];
// let result = sumArray(numbers);
// console.log(result); // 15


// // example2: // f
// function sumArray(...numArr) { //... is a rest parameter.
//     // crate a variable to store the sum of all the values in the array.
//     let sum=0;

//     for (let v of numArr) {
//         // console.log(v);
//         sum=sum+v; // update the sum with new  value  as loop iterates through the array. Ex: sum = 0 + 15 = 15, then sum = 15 + 25 = 40, then sum = 40 + 35 = 75, then sum = 75 + 45 = 120, then sum = 120 + 55 = 175. 
//     }
//     console.log(sum); // print final value after for the loop is completed. Ex: 175
// }
// let num = [15, 25, 35, 45, 55]; 
// sumArray(2, 4, 6, 8, 10, 14, 28, 55); //
// sumArray(...num); // 175, ... is a spread operator, it takes the elements of the array and passes them as individual arguments to the function. Ex: sumArray(15, 25, 35, 45, 55) is the same as sumArray(...num) where num is the array [15, 25, 35, 45, 55].


// write a function to find the factors and return all factors of a number in an array.
// function findFactors(num) {
//     let factors=[];
//     for (let i=1; i<= num; i++) {
//         if (num % i ===0) {
//             // factors.push(i)
//         factors[factors.length] = i; // Add the factor to the factors array. Ex: factors[0] = 1, factors[1] = 2, factors[2] = 3, factors[3] = 4, factors[4] = 5, factors[5] = 6, factors[6] = 7, factors[7] = 8, factors[8] = 9, factors[9] = 10.
//         }
//     }
//     return factors; // return all the factors.
// }
// console.log(findFactors(99)); // [1, 3, 9, 11, 33] 



// rest parameter, spread operator, default parameter
// Rest parameter : It allows us to pass any no.of values while calling the function.
// Spread operator: It allows us to pass an array as individual arguments to the function. Ex: sumArray(...num) is the same as sumArray(15, 25, 35, 45, 55) where num is the array [15, 25, 35, 45, 55].
// Default parameter: It allows us to set a default value for a parameter in case no argument is passed while calling the function. Ex: function greet(name = "Guest") { console.log("Hello, " + name); } greet(); // Hello, Guest



// // example of rest parameter. 
// let arr=[1, 2, 3, 4, 5];
// console.log(arr); // [1, 2, 3, 4, 5]
// console.log(...arr); // 1 2 3 4 5, ... is a spread operator, it takes the elements of the array and passes them as individual arguments to the console.log function. Ex: console.log(1, 2, 3, 4, 5) is the same as console.log(...arr) where arr is the array [1, 2, 3, 4, 5].


// let [a, b, c, d, e] = [...arr]// destructuring assignment, it allows us to unpack values from arrays or properties from objects into distinct variables. Ex: a = 1, b = 2, c = 3, d = 4, e = 5.
// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // 3
// console.log(d); // 4
// console.log(e); // 5


// default parameter: we can set the default values for the parameters.
// if we pass the values , it will be executed with the default values.
// if we do not pass the values, it wil be executed with the default values. Ex: function greet(name = "Guest") { console.log("Hello, " + name); } greet(); // Hello, Guest
// function add(a = 5, b = 10,c) { // default values for a and b are set to 5 and 10 respectively. Ex: add() will return 15 because both a and b are 5 and 10, add(5) will return 15 because a is 5 and b is 10, add(5, 10) will return 15 because a is 5 and b is 10.
//     return a +  b+c;
// }
// console.log(add(12, 13, undefined)); // this will print 25 because a is 12 and b is 13, so the sum is 25.
// // console.log(add(undefined, 3)); // 15 this will print bcz default values are used.
// console.log(add(undefined, undefined)); // 13 this wil print 13 because default value of b is 13 here.
// console.log(add(2)); // in this default thing if don't pass the value for the parameter it will take the default values.


//# Arrow function : it is a shorter syntax for the writing function in javascript. Ex: const add = (a, b) => a + b; is the same as function add(a, b) { return a + b; }.
 // it does not have its own this keyword.
 // it is not suitable for the methods in objects.
 // it is not suitable for the constructors in objects. Ex: const Person = (name, age) => { this.name = name; this.age = age; } is not a valid constructor function because arrow functions do not have their own this keyword. We should use regular function for constructors in objects. Ex: function Person(name, age) { this.name = name; this.age = age; } is a valid constructor function because it has its own this keyword.
 setTimeout(function (){
    console.log("This is Bala krishna from kadapa!"); // this will print "Hello, World!" after 2 seconds.
 }, 2000); // setTimeout is a built-in function in javascript.
            // its takes function as first and time in milliseconds as second parameter.
            // anonomous funtion is used  to write withoout any name.

// Example of callback function.
function calculator(a, b, operation) {
    operation(a, b);
            }
calculator(7, 5, function (x, y){ 
        console.log("Addiction: " +(x + y));
} );    
calculator(7, 5, (x, y) => x+y); // this will print 12


let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (num) { // forEach is a built-in method in javascript, it takes a callback function as an argument and executes the callback function for each element in the array. Ex: numbers.forEach(function(num) { console.log(num); }) will print each element of the numbers array on a new line.
    console.log(num);
});