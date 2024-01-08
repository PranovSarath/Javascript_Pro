//binding arguments 
function applySalesTax(taxRate, price){
    return price + price * taxRate;
}


const applyCASalesTax = applySalesTax.bind(null, 0.0725);
const applyMTSalesTax = applySalesTax.bind(null, 0.0);


console.log(applyCASalesTax(100));

console.log(applyMTSalesTax(100));


function multiply(a, b){
    return a * b;
}

const double = multiply.bind(null, 2);

console.log(double(100));


