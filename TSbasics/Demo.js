function add(a, b) {
    return a+b;
}
console.log(add(5,10));
console.log(add(5));
console.log(add("hello",10,15));


                      //drawbacks of javascript
 // it does give any error if pass less or more parameters than defined in the function.
 // it will not even give an error if we pass a different type of parameters than defined in the function.
 // there is no type safety in javascript, 
 // which means that we can assign any type of value to a variable and it will not give any error.
 // this can lead to bugs and errors in the code.
