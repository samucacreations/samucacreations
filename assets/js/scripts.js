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
