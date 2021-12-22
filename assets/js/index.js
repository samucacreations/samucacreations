const menuToggle = document.querySelector('#menu-toggle');
const btnMobile = document.querySelector('.btn-mobile');

btnMobile.addEventListener('click', () => {
    const visibility = menuToggle.getAttribute('data-visible');

   if (visibility === 'false'){
       menuToggle.setAttribute('data-visible', true);
       btnMobile.setAttribute('aria-expanded', true);
   } else if (visibility === "true"){
       menuToggle.setAttribute('data-visible', false);
       btnMobile.setAttribute('aria-expanded', false);
   }
});