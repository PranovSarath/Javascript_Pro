BASE_URL = "http://numbersapi.com";


async function showNumberTrivia(fav_number){
    BASE_URL = " http://numbersapi.com";
    FETCH_TRIVIA_AS_JSON = `${BASE_URL}/${fav_number}/trivia?json`;
    try{
        const response = await fetch(FETCH_TRIVIA_AS_JSON);
        if (!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const triviaText = data.text;
        console.log('TRIVIA about your favourite number:');
        console.log(triviaText);
    } catch(err){
        console.log('ERROR: ', err);
    }
}

showNumberTrivia(13);
