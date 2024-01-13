setInterval(function(){
    console.log("It's been 2 seconds");
}, 2000);


function startCountdown(duration){
    let secondsRemaining = duration;
    setInterval(function(){
        h1 = document.getElementById('timer');
        h1.innerText = secondsRemaining;
        console.log(secondsRemaining--);
    }, 1000);
}