function queryAPI(searchTerm, color){
    // console.log('SEARCHING THE API');
    //console.log('MAKING AN API REQUEST');
    console.log(`Searching the API for ${searchTerm}`);
    console.log(`Color argument is ${color}`);
}

const searchInput = document.querySelector('#search');

// let debounceTimeout ;
// searchInput.addEventListener('input', () => {
//     clearTimeout(debounceTimeout);
//     debounceTimeout = setTimeout(() => {
//         queryAPI();
//     }, 500);
// });

function debounce(callback, delay){
    let timeoutId;
    return (...args) => {
        if(timeoutId){
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            callback(...args);
        }, delay)
    }
}

const debouncedQueryAPI = debounce(queryAPI, 300);




searchInput.addEventListener("input", (evt) => {
    //debouncedQueryAPI();
    debouncedQueryAPI(evt.target.value, "cyan");
})