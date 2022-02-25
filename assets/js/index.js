const menuToggle = document.querySelector('#menu-toggle');
const btnMobile = document.querySelector('.btn-mobile');
const scrollBtn = document.querySelector('.btn-scroll');
const cursor = document.querySelector('.cursor');
        
document.addEventListener('mousemove', (e) => {
    cursor.style.left = (e.pageX - 10)+ 'px';
    cursor.style.top = (e.pageY - 10)+ 'px';
})
btnMobile.addEventListener('click', () => {
    const visibility = menuToggle.getAttribute('data-visible');

   if (visibility === 'false'){
       menuToggle.setAttribute('data-visible', true);
       menuToggle.classList.contains('active');
       btnMobile.setAttribute('aria-expanded', true);
   } else if (visibility === "true"){
       menuToggle.setAttribute('data-visible', false);
       btnMobile.setAttribute('aria-expanded', false);
   }
});

scrollBtn.addEventListener('click', () => {
    window.scroll({ top: 0, behavior: 'smooth'})
});