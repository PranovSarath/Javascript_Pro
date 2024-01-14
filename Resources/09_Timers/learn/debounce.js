
function queryAPI(){
    // console.log('SEARCHING THE API');
    console.log('MAKING AN API REQUEST');
}

const searchInput = document.querySelector('#search');


let debounceTimeout ;

searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
        queryAPI();
    }, 500);
});