const boxInterval = document.getElementById("boxInterval");
const boxAnimationFrame = document.getElementById("boxAnimationFrame");

let intervalAngle = 0;
let animationFrameAngle = 0;

function animateWithInterval(){
    boxInterval.style.transform = "rotate(" + intervalAngle + "deg)";
    intervalAngle += 2;
}

setInterval(animateWithInterval, 7); //60 FPS (appoximately)


let previousTime;
//define function to work with requestAnimationFrame
function animateWithAnimationFrame(currentTime){
    console.log(currentTime - previousTime);
    previousTime = currentTime;
    boxAnimationFrame.style.transform = "rotate(" + animationFrameAngle + "deg)";
    animationFrameAngle += 2;
    requestAnimationFrame(animateWithAnimationFrame);
}

//call requestAnimationFrame
requestAnimationFrame(animateWithAnimationFrame);