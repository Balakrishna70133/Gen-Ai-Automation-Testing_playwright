// class in javaScript
class user {

    
    constructor(name, age, city){
        this.name=name;
        this.age=age;
        this.city=city;
    }
    greet() {
        console.log(" Hello, my name is "+ this.name);
    }
}
let user1=new user("Bala krishna", 22, "Badvel");
console.log(user1.name);
console.log(user1.age);
user1.greet();