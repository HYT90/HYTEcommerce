const bar = window.document.getElementById('bar');
const nav = window.document.getElementById('navbar');
const close = window.document.getElementById('close');

if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
}