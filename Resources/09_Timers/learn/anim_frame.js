const boxInterval = document.getElementById("boxInterval");
const boxAnimationFrame = document.getElementById("boxAnimationFrame");

let intervalAngle = 0;

function animateWithInterval(){
    boxInterval.style.transform = "rotate(" + intervalAngle + "deg)";
    intervalAngle += 2;
}

setInterval(animateWithInterval, 16); //60 FPS (appoximately)