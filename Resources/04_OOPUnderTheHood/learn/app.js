const myObj = {
    color: "purple",
    score: 99,
    greet() {
        console.log('Hi!');
    }
}


// class Dog{
//     constructor(name, breed){
//         this.name = name;
//         this.breed = breed;
//     }

//     bark(){
//         return `${this.name} says woof!`;
//     }

//     sleep(){
//         return `${this.name} is sleeping`;
//     }
// }

// function Dog(name, breed){
//     console.log('This is:', this);
//     this.name = name;
//     this.breed = breed;

//     this.bark = function(){
//         return `${this.name} says woof!`;
//     }

//     this.sleep = function(){
//         return `${this.name} is sleeping;`
//     }
// }

// function User(name, email){
//     this.name = name;
//     this.email = email;
//     this.isAdmin = false;
// }