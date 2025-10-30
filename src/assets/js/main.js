/* --- ARQUIVO: main.js --- */

document.addEventListener('DOMContentLoaded', () => {

    // Função genérica para redirecionar
    const addRedirectListener = (elementId, url) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.addEventListener('click', (event) => {
                event.preventDefault(); // Impede a navegação padrão do <a>
                window.open(url, '_blank'); // Abre em uma nova aba
            });
        }
    };

    // Mapeamento dos botões e seus links
    addRedirectListener('instagram', 'https://www.instagram.com/ciliosporvivii?igsh=cjVtbThyMmdwenFu');
    addRedirectListener('whatsapp', 'https://wa.me/554991857441');
    addRedirectListener('maps', 'https://maps.google.com/?q=SEU+ENDEREÇO+AQUI'); // URL corrigida
});