async function getTriviaOfNumber(num){
    BASE_URL = " http://numbersapi.com";
    FETCH_TRIVIA_AS_JSON = `${BASE_URL}/${num}/trivia?json`;
    const response = await fetch(FETCH_TRIVIA_AS_JSON);
    if (!response.ok){
        throw new Error('HTTP error! ');
    }
    const data = await response.json();
    const triviaText = data.text;
    // console.log(`${num}:\t${triviaText}`);
    return triviaText;
}


async function showNumberRace(numbers){
    const triviaPromises = numbers.map(number => getTriviaOfNumber(number));

    try{
        const winningTrivia = await Promise.race(triviaPromises);
        console.log('The first trivia to arrive is: ');
        console.log(winningTrivia);
    } catch(err){
        console.log('Error fetching trivia: ', err);
    }
}

showNumberRace([3, 13, 24, 14]);