let largeNum = Number.MAX_VALUE;
console.log(largeNum)



//New DataType - BIGINT
//2 ways of declaring a BIGINT
//1. BigInt("124325462432143645");
//2. Append n at the end: 124325462432143645n
let bigint1 = BigInt('124325462432143645');
let bigint2 = 124325462432143645n;

console.log('BIGINT EQUALITY CHECKS!')
console.log(bigint1 === bigint2);

console.log(typeof bigint1);
console.log(BigInt.MAX_VALUE);