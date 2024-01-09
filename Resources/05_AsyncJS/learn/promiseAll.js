const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

const lotsOfFetchCalls = [fetch(`${BASE_URL}/1`),
fetch(`${BASE_URL}/2`),
fetch(`${BASE_URL}/3`),
fetch(`${BASE_URL}/4`),
fetch(`${BASE_URL}/5`),
fetch(`${BASE_URL}/6`)];

Promise.all(lotsOfFetchCalls).then((results) => {
    console.log("Promise.all() is done and resolved");
    console.log(results);
}
).catch((err) => {
    console.log('One of the promises was rejected');
    console.log(err);
})
