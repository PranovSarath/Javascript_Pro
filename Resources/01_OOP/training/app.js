console.log(1+1)
const key = "species"
const pet = {species: "Dog", name: "Elton", age: 1.5};

console.log(pet.age)
console.log(pet["age"])
console.log(pet[key])


pet.bark = function () {
    return "WOOF WOOF";
};
 