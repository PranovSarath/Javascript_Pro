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

const btn = document.querySelector("#clickMe");

// btn.addEventListener("click", function(){
//     console.log("Clicked the button");
// });

btn.addEventListener("click", conan.sing.bind(conan));


