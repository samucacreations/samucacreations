const menuMobile = document.querySelector(".toggle");
const navList = document.querySelector(".nav-list");
const navToggle = document.querySelector(".toggle");

//ativando o menu toggle
menuMobile.onclick = function(){
    menuMobile.classList.toggle("active")
}

// ativando a nav lista.
navToggle.addEventListener("click", () => {
    const visibility = navList.getAttribute('data-visible');

    if (visibility === "false"){
        navList.setAttribute('data-visible', true);
    }else if (visibility === "true"){
        navList.setAttribute('data-visible', false);
    }
});
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
