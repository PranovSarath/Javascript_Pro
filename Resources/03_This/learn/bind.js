
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


const sing = conan.sing;

console.log(sing());

const sing_binded = conan.sing.bind(conan);
console.log(sing_binded());


const lsing = conan.sing.bind(lisa);
console.log(lsing());
