console.log(NaN === NaN);

//use isNaN() 
//This returns true if n is NaN or is a value that cannot be coerced into a number;
console.log(isNaN(0));
console.log(isNaN("str"));

console.log(isNaN('8'));



//Number.isNaN 
//This returns true only if n is NaN - everything else returns false.
console.log(Number.isNaN('9'));
console.log(Number.isNaN('yoyo'));
console.log(Number.isNaN(0/0));