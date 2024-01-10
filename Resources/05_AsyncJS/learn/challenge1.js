BASE_URL = "http://numbersapi.com";


async function showNumberTrivia(fav_number){
    BASE_URL = " http://numbersapi.com";
    FETCH_TRIVIA_AS_JSON = `${BASE_URL}/${fav_number}/trivia?json`;
    try{
        const data = await fetch(FETCH_TRIVIA_AS_JSON);
        const triviaText = await data.text();
        console.log('TRIVIA about your favourite number:');
        console.log(triviaText);
    } catch(err){
        console.log('ERROR: ', err);
    }
}

showNumberTrivia(39);
