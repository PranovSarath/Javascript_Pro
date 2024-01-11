async function getTriviaOfNumber(num){
    BASE_URL = " http://numbersapi.com";
    FETCH_TRIVIA_AS_JSON = `${BASE_URL}/${num}/trivia?json`;
    const response = await fetch(FETCH_TRIVIA_AS_JSON);
    if (!response.ok){
        throw new Error('HTTP error! ');
    }
    const data = await response.json();
//     const triviaText = data.text;
//     // console.log(`${num}:\t${triviaText}`);
//     return triviaText;
    return data;
}

const res =  getTriviaOfNumber(3);

