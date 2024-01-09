const btn = document.querySelector('#btn');

function sayHi(){
    alert('Yo!');
}

btn.addEventListener("click", sayHi);

//setInterval(sayHi, 3000);

setTimeout(sayHi, 5000);