const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

const results = [];
// fetch(`${BASE_URL}/1`).then((res) => {results.push(res);
// console.log('REQUEST 1 finished');});

// fetch(`${BASE_URL}/2`).then((res) => {results.push(res);
//     console.log('REQUEST 2 finished');});

// fetch(`${BASE_URL}/3`).then((res) => {results.push(res);
//     console.log('REQUEST 3 finished');});


async function getPokemon1(){
    const res = await fetch(`${BASE_URL}/1`);
    results.push(res);
    console.log('REQUEST 1 finished');
}

async function getPokemon2(){
    const res = await fetch(`${BASE_URL}/2`);
    results.push(res);
    console.log('REQUEST 2 FINISHED');
}

async function getPokemon3(){
    const res = await fetch(`${BASE_URL}/3`);
    results.push(res);
    console.log('REQUEST 3 finished');
}

getPokemon1();
getPokemon2();
getPokemon3();


//async pattern: sequential calls

async function get3PokemonInSequence(){
    const res1 = await fetch(`${BASE_URL}/1`);
    console.log('REQUEST 1 SEQ FINISHED');
    const res2 = await fetch(`${BASE_URL}/2`);
    console.log('REQUEST 2 SEQ FINISHED');
    const res3 = await fetch(`${BASE_URL}/3`);
    console.log('REQUEST 3 SEQ FINISHED');

    const results = [res1, res2, res3];
}

get3PokemonInSequence();