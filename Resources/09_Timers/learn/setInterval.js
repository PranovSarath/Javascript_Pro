setInterval(function(){
    console.log("It's been 2 seconds");
}, 2000);


function startCountdown(duration){
    let secondsRemaining = duration;
    h1 = document.getElementById('timer');
    h1.innerText = secondsRemaining;
    const timer = setInterval(function(){
        h1 = document.getElementById('timer');
        h1.innerText = secondsRemaining;
        console.log(secondsRemaining--);

        if (secondsRemaining < 0){
            clearInterval(timer);
            h1.innerText = "YOUR TIME IS UP!";
        }
    }, 1000);
    
}