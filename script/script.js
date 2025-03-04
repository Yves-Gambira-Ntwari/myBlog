const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const nav = document.querySelector('.navigation');

menu.addEventListener('click', ()=>{
  nav.style.width = '100%'
  nav.style.paddingLeft = '15px'
})

close.addEventListener('click', ()=>{
  nav.style.width = '0%'
  nav.style.paddingLeft = '0px'
})