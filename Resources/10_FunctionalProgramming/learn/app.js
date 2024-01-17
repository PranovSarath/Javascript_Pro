//Imperative Programmign
let sum = 0;
for(let i=1; i<=5; i++){
    sum += i;
}

//Functional Programming
[1,2,3,4,5].reduce((acc, val) => acc + val, 0);


const nums = [1,2,3,4,5,6,7,8,9];
//Imperative Approach
const evens = [];
for( let num in nums){
    if(num%2 === 0){
        evens.push(num);
    }
}


//Functional approach
nums.filter(n => n % 2 === 0);



//Imperative approach
let numbers = [1,2,3,4,5,6];
let max = numbers[0];
for (let i=1; i< numbers.length; i++){
    if (numbers[i > max]){
        max = numbers[i];
    }
}

console.log(max);

//FUnctional Approach
console.log(Math.max(...numbers));