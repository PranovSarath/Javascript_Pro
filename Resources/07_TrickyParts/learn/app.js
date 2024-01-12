console.log(0.1 + 0.2 ); //floating point imprecision;

function areFloatsEqual(a, b, epsilon= 1e-10){
    return Math.abs(a-b) < epsilon;
}

console.log(areFloatsEqual(0.3, 0.1+0.2));