const menuToggle = document.querySelector('#menu-toggle');
const btnMobile = document.querySelector('.btn-mobile');
const scrollBtn = document.querySelector('.btn-scroll');
const cursor = document.querySelector('.cursor');
     
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

$(document).ready(function () {
  $("a").click(function () {
    if ($(this).hasClass("same-box")) {
      $(".toggle:visible").slideUp();
      $($(this).attr("href")).slideDown();
      return false;
    }
    var myelement = $(this).attr("href");
    $(myelement).slideToggle("fast");
    $(".toggle:visible").not(myelement).slideUp();
  });
});