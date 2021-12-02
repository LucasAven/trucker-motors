const nav = document.getElementById('nav');
if(window.innerWidth >= 992){
  nav.classList.add('navbar-dark');
  nav.classList.remove('navbar-light');
  nav.classList.remove('shadow');
}
window.addEventListener("scroll",()=>{
  if(window.innerWidth >= 992){
    if(window.scrollY >= 100){
        nav.classList.add('scrolled-navbar');
        nav.classList.add('shadow');
        nav.classList.remove('navbar-dark');
        nav.classList.add('navbar-light');
      }
      else{
        nav.classList.remove('scrolled-navbar');
        nav.classList.remove('shadow');
        nav.classList.add('navbar-dark');
        nav.classList.remove('navbar-light');
      }
    }
});

document.querySelectorAll('a.smooth-scroll[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
  });
});

setTimeout(()=>{
  let w_btn = document.querySelector(".whatsapp-btn");
  w_btn.classList.remove("hide-wsp-btn");
 }, 3000);