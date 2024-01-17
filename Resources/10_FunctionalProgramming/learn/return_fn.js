//Higher order functions
//A function that receives another function as an argument
//returns a function or does both.

function doTwice(func){
    func();
    func();
}


doTwice(function () {
    console.log("HELLO YOU PIG FACED RATE PERSON!");
});