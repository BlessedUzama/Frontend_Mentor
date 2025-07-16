let button1 = document.getElementById('btn1')
let button2 = document.getElementById("btn2");


function handleClick1() {
    alert('Nothing bad will happen to you.')
}

function handleClick2() {
    alert('WATCH OUTTT!!!!!...')
}

button1.addEventListener('click', handleClick1)
button2.addEventListener('click', handleClick2)