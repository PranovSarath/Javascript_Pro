setTimeout(function(){
    console.log('YOUR TIME IS UP');
}, 4000);


function showNotification(message, duration=5000){
    const notification = document.createElement("DIV");
    notification.innerText = message;
    notification.className = "notification";
    document.body.appendChild(notification);

    setTimeout(function(){
        notification.remove();
    }, duration)
}


const cancelButton = document.querySelector('#cancel');


const timeoutId = setTimeout(() => {
    window.location.href = "https://www.google.com";

}, 3000);


cancelButton.addEventListener("click", () => {
    clearTimeout(timeoutId);
    console.log('Aborted the redirection!');
})



