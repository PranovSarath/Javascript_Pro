class Cat{
    constructor(firstName){
        this.firstName = firstName;
    }

    dance(style= "tango"){
        return `Meow, I am ${this.firstName}` + ` and I like to ${style}`;
    }

    greet(){
        return "Hi there!";
    }
}