function parseAndCheck(arr){
    const parsedArray = arr.map((item) => {
        const parsedValue = parseFloat(item);
        if (isNaN(parsedValue)){
            throw new Error("Invalid Number");
        }
        return parsedValue;
    });
    return parsedArray;
}