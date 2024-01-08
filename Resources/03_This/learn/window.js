function whatIsThis() {
    console.log('The value of this is:' , this);
}


const obj = {
    color: "purple",
    age: 2,
    whatIsThis: whatIsThis
};


class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.whatIsThis = whatIsThis;
    }
}



const conan = {
    name: "Conan",
    city: "Los Angeles",
    sing: function(greeting){
        console.log(`${greeting}, This is `, this);
        return `${this.name} sings LA LA LA`;
    }
};


const lisa = {
    name: "Lisa",
    city: "Los Angeles",
};


//Testing out the call method
console.log('Testing the call method');
console.log(conan.sing("hi"));
console.log(conan.sing.call(lisa, "hi"));


console.log('Testing apply method');
console.log(conan.sing("yo"))
console.log(conan.sing.apply(lisa, ["Hello"]))
console.log('apply method is basically similiar to the call method, however it expects the parameters to the function as an array');


//Testing by calling Math.max() function with the an array as argument

arr = [10, 20, 99, 109, 95, -1, 100];

//Testing call method
console.log(Math.max.call(null, arr));

//Testing apply method
console.log(Math.max.apply(null, arr));



