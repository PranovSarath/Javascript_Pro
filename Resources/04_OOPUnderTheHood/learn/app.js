// const myObj = {
//     color: "purple",
//     score: 99,
//     greet() {
//         console.log('Hi!');
//     }
// }


class Dog{
    constructor(name, breed){
        this.name = name;
        this.breed = breed;
    }

    bark(){
        return `${this.name} says woof!`;
    }

    sleep(){
        return `${this.name} is sleeping`;
    }
}


class GuideDog extends Dog{
    constructor(name, breed, owner){
        super(name, breed);
        this.owner = owner;
    }

    alert(){
        return `${this.name} alerts you to danger, Good dog!`;
    }
}


// function Dog(name, breed){
//     console.log('This is:', this);
//     this.name = name;
//     this.breed = breed;
// }

// Dog.prototype.bark = function(){
//     return `${this.name} says woof!`;
// }

// Dog.prototype.sleep = function(){
//     return `${this.name} is sleeping;`
// }

// function User(name, email){
//     this.name = name;
//     this.email = email;
//     this.isAdmin = false;
// }