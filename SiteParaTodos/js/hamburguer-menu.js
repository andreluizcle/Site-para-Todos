document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.querySelector(".hamburger-icon");
    const navMenu = document.querySelector(".nav-menu");

    // Abre/Fecha o menu ao clicar no ícone
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("is-active");
        navMenu.classList.toggle("is-active");
    });

    // Opcional: Fecha o menu se clicar em um link
    document.querySelectorAll(".nav-menu li a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("is-active");
            navMenu.classList.remove("is-active");
        });
    });
});
