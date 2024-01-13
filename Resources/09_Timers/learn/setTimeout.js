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