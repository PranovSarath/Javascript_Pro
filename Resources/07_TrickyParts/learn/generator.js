function* evens(n) {
    while (true){
        yield n;
        n += 2;
    }
}


console.log(evens(8))

console.log(evens(8).next())


const evenGen = evens(10)
console.log(evenGen.next())
console.log(evenGen.next())
console.log(evenGen.next())


function* myCats(){
    yield "Blue";
    yield "Kitty";
    yield "Cream";
    yield "Creedence";
}


const catGenerator = myCats();

console.log(catGenerator.next())
console.log(catGenerator.next())
console.log(catGenerator.next())
console.log(catGenerator.next())
console.log(catGenerator.next())
console.log(catGenerator.next())


function* fibonacci(){
    let a = 0, b = 1;

    while (true){
        yield a;
        [a, b] = [b, a + b];
    }
}


console.log('FIBONACCI');
const fib = fibonacci();

for(let i=0; i<20; i++){
    console.log(fib.next().value);
}