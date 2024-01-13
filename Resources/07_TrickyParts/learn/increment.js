let x = 3;
console.log('Current val of x: ', x);

y = x++;
console.log('Current val of y: ', y);


console.log('Current val of x: ', x);
z = ++x;
console.log('Current val of z: ', z);


class Counter {
    current = 1;
    next() {
        return this.current++;
    }
}


counterObj = new Counter();
console.log(counterObj.next())
console.log(counterObj.next())
console.log(counterObj.next())