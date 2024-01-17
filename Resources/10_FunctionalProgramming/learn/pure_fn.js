let value = 2;
function squareAndUpdateValue(num){
    value = num * num;
    return value;
}

function square(num){
    return num * num;
}


const colors = ["red", "orange"];
function addToArray(arr, value){
    return arr.push(value);
}

console.log(addToArray(colors, "yellow"));

function pureAddToArray(arr, value){
    return [...arr, value];
}

console.log(pureAddToArray(colors, "yellow"));