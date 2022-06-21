const txt = document.getElementById('tuser');
const btn = document.getElementById('btn1');
const out = document.getElementById('output');

function display1() {
    out.innerHTML = "Hello" + txt.value + ", welcome to the bootcamp";
}

btn.addEventListener('click',display1);