
// let numbers=[3,6,9,12,15];
// console.log(numbers.includes(3)); // true
// console.log(numbers.includes(10)); // false
// // for loop: to loop specified number of times
// // for (initialization; condition; increment/decrement) {



// // initialization: executed once at the beginning of the loop, used to initialize a counter variable
// // Print number 10 for 5 times
// for (let i = 1; i <= 5; i++) {
//     console.log(10);
// }
// // print numbers from 1 to 10
// for(let i=1;i<=10;i++){
//     console.log(i);
    
// }
// // print numbers from 10 to 1
// for (let i=10;i>=1;i--){
//     console.log(i);
    
// }
// // print odd numbers between 1 to 30
// for(let i=1;i<=30;i+=2){
//     console.log(i);
    
// }
// // print even numbers between 1 to 30
// for(let i=2;i<=30;i+=2){
//     console.log(i);
    
// }
// // print odd numbers with standard logic
// for(let i=1;i<=30;i++){
//     if(i%2==1){
//         console.log(i);
//     }
// }


// print 2 table from 1 to 10
// for(let i=1;i<=10;i++){
//     console.log("2 x " + i + " = " + (2*i)); // 2 x 1 = 2, 2 x 2 = 4, 2 x 3 = 6, ..., 2 x 10 = 20
// }


// // print 5 table from 1 to 10
// for (let i=1;i<=10;i++) {
//     console.log("5 X "+ i + " = " + (5*i)); // 5 x 1 = 5, 5 x 2 = 10, 5 x 3 = 15, ..., 5 x 10 = 50
// }


let data = [10, 20, 30, 40, 50];
let userData = {
    name: "bala",
    age: 23,
    city: "Hyd"
};
for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
}

// for (let i in data) {
//     console.log(data[i]);
// }

// for (let x of data) {
//     console.log(x);
//     console.log(userData);//
// }

//for in loop is used to iterate over the properties of an object
//for of loop is used to iterate over the values of an iterable object like array, string, etc.
// for of loop cannot be used to iterate over the properties of an object, it will throw an error
// for each loop is used to iterate over the elements of an array, it takes a callback function as an argument and executes that function for each element in the array




    function factorial(n) {
      let result = 1;
      for (let i = 1; i <= n; i++) result *= i;
      return result;
    }

    function isLeapYear(year) {
      return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
    }

    const out = [];
    out.push("factorial(5) = " + factorial(5));

    const years = [2000, 1900, 2024, 2023, 1600, 2100];
    years.forEach(y => out.push(y + " → " + (isLeapYear(y) ? "Leap Year" : "Not Leap Year")));

    out.push('');
    out.push('Comparisons:');
    out.push("5 == '5' → " + (5 == '5'));
    out.push("5 === '5' → " + (5 === '5'));
    out.push("0 == false → " + (0 == false));
    out.push("0 === false → " + (0 === false));
    out.push("null == undefined → " + (null == undefined));
    out.push("null === undefined → " + (null === undefined));
    out.push("'' == false → " + ('' == false));
    out.push("'' === false → " + ('' === false));
    out.push("1 == true → " + (1 == true));
    out.push("1 === true → " + (1 === true));

    console.log(out.join('\n'));