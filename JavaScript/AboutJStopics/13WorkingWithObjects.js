let person = {
    name: "Bala krishna ",
    Age: 23,
    city: "Badvel",
    Hobbies: ["cricket", "movies", "coding"],
    // methods
    greet: function() {
        console.log("Hello my name is " + this.name);
    },
    sayAge() {
        console.log("I'm " + this.Age + "years old");
    }
};
console.log(person.Age);