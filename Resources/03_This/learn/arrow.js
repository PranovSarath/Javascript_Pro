const add = (x, y) => x + y;

const multiply = (x, y) => {
    return x * y;
}


const add_1 = function (x, y){
    return x + y;
}

class Cat{
    constructor(firstName){
        this.firstName = firstName;
    }

    superGreet(){
        console.log(`#1: I am ${this.firstName}`);

        setTimeout(function(){
            console.log(`#2: I am ${this.firstName}`);
        }, 500);

        setTimeout(() =>{
            console.log(`#3: I am ${this.firstName}`);
        }, 5000);
    }
}

let kitty = new Cat("Kitty");
kitty.superGreet();