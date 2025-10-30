
// Seleciona o ícone do hambúrguer e o menu de navegação
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Adiciona um evento de clique ao ícone do hambúrguer
hamburger.addEventListener("click", () => {
    // Alterna a classe 'active' no ícone e no menu
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Fecha o menu quando um dos links é clicado
document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));