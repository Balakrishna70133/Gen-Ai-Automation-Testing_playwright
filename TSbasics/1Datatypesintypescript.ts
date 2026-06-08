// typescript datatypes

// # typescript: is just a layer on top of javascript , to give typings to the variabes. but when we executes it is altimately converted to javascript and finally javascript is executed in the browser or nodeJs.


// syntax for declaring a variable in typescript
// variable_name: datatype = value


let x:number=10;
let y:string="Bala krishna";
console.log(x + " " + y);


let a:boolean=true; 
console.log(a);   // true


let c:string="Hello world";
console.log(c);  // Hello world

let d:number=3.14;
console.log(d);  // 3.14

let M:number[]=[1,2,4,5,6,7];
console.log(M);  // [1, 2, 4, 5, 6, 7]

let z:any[]=[1,"Bala",true,3.14];  // any array type variable can hold any type of data.
console.log(z);  // [1, "Bala", true, 3.14]

let x7:[number,string,boolean]=[2,"Typescript",false]; //tuple type variable can hold a fixed number of values of different types.
console.log(x7);

// union array type variable can hold multiple values of muitiple data types.
let xy:(number|string)[]=[7,"Hello",14,"World",21,"playwright"]; // can hold multiple numbers and strings in the same array.
console.log(xy); // [7, "Hello", 14, "World", 21, "playwright"]

// union type variable can hold values of multiple datatypes.
let p:number | string=10; // can hold numbers or string values. 


// enum type variable can hold a set of named constant values
// enum contains fixed constants, it is used to define a set of named constants

enum  color{
    red,
    green,
    blue,
    yellow
}
let bc:color=color.red;
let de:color=color.green;
console.log(bc);

// functions
function addnumbers(a:number,b:number):number{
    return a+b;

}

// default parameters in function 
function addDefault(a:number,b:number=0):number{
    return a+b;
}


// objects
// syntax for creating an object in typescript
// let objectName: {property1:datatype, property2:datatype,.......}= {property1:value,......}
let person:{name:string, age:number}={
    name:"Bala",
    age:22
}
console.log(person);

// you will not see any chnages in objects bcz the syntax is same.


// interface : is for implementation.

interface person{
    name:string;
    age:number;
}

let bb:person={
    name:"Gopal",
    age:46
}
console.log(bb);
