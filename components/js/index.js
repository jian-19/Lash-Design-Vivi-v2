document.addEventListener('DOMContentLoaded', () => {

    // Adiciona interatividade aos botões de contato
    const instagramBtn = document.getElementById('instagram');
    const whatsappBtn = document.getElementById('whatsapp');
    const mapsBtn = document.getElementById('maps');

    instagramBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Impede a navegação padrão
        window.location.href = 'https://www.instagram.com/ciliosporvivii?igsh=cjVtbThyMmdwenFu';
    });

    whatsappBtn.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'https://wa.me/554991857441'
    });

    mapsBtn.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'https://maps.app.goo.gl/qJPpcLywoprzTJRa7';
    });

});

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