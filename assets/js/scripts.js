const menuMobileBtns = document.getElementsByClassName('btn-mobile-menu');  
function mobileMenu(){
    const menu = document.getElementById('nav-toggle'); 
    menu.classList.toggle('active'); 
}
menuMobileBtns.addEventListener('click', mobileMenu);
// music tocando
let tocando = document.getElementById('sound');
let playMusic = document.getElementById('play');
play.onclick = function(){
    if (tocando.paused){
        tocando.play();
        play.src = "vendor/play.svg";
    }else{
        tocando.pause();
        play.src = "vendor/paused.svg";
    }
}
