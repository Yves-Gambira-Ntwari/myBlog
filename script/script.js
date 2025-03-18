const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const nav = document.querySelector('.navigation');
const wholeNav = document.querySelector('nav');
const mode = document.querySelector('.mode');

menu.addEventListener('click', ()=>{
  nav.style.width = '100%'
  nav.style.paddingLeft = '15px'
})

close.addEventListener('click', ()=>{
  nav.style.width = '0%'
  nav.style.paddingLeft = '0px'
})

window.addEventListener('scroll', ()=>{
  if(window.scrollY >=70){
    wholeNav.classList.add('scroll-active');
  }else{
    wholeNav.classList.remove('scroll-active');
  }
  
})


mode.addEventListener('click', ()=>{

  document.body.classList.toggle('dark-mode')
  if(document.body.classList.contains('dark-mode')){

    mode.classList.add('mode-btn-white')
  } else{
    mode.classList.remove('mode-btn-white')
  }
})

