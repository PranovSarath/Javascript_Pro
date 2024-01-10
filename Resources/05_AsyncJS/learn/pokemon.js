const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const url = `${BASE_URL}/1`;

// fetch(url).then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// });


// fetch(url)
//     .then((res) => console.log(res))
//     .catch((res) => console.log(res));

// fetch(`${BASE_URL}/1`)
// .then((res) => {
//     console.log('RESPONSE 1', res);
//     fetch(`${BASE_URL/2}`)
//         .then((res2) => {
//             console.log('RESPONSE 2 ', res2);
//             fetch(`${BASE_URL/3}`)
//             .then((res3) => {
//                 console.log('RESPONSE 3 ', res3);
//                 fetch(`${BASE_URL/4}`)
//                     .then((res4) => {
//                         console.log('RESPONSE 4 ', res4);
//                     })
//                     .catch((err) => console.log(err));
//             })
//             .catch((err) => console.log(err));
//         })
//         .catch((err) => console.log(err));
// }
// )
// .catch((err) => console.log(err));



fetch(`${BASE_URL}/1`).then((res1) => {
    console.log('RESPONSE 1 ', res1);
    return fetch(`${BASE_URL}/2`);
})
.then((res2) => {
    console.log('RESPONSE 2', res2);
    return fetch(`${BASE_URL}/3`);
})
.then((res3) => {
    console.log('RESPONSE 3', res3);
    return fetch(`${BASE_URL}/4`);
})
.then((res4) => {
    console.log('RESPONSE 4', res4);
})
.catch((err) => {
    console.log('IN THE CATCH! ERROR: ', err);
});



async function getFourPokemon(){
    try{
       const result = await fetch(`${BASE_URL}/1`);
        console.log('YO ', result);

        const res2 = await fetch(`${BASE_URL}/2`);
        console.log(res2);

        const res3 = await fetch(`${BASE_URL}/3`);
        console.log(res3);

        const res4 = await fetch(`${BASE_URL}/4`);
        console.log(res4);
    } 
    catch(err){
        console.warn('We got an error: ', err);
    }
}


async function getFakeWebsite() {
    try{
        const res1 = await fetch('https://nope.nope');
        console.log(res1);
    }
    catch(e){
        console.log('SOMETHING WENT WRONG!');
        console.log(e);
    }
}

hello()

