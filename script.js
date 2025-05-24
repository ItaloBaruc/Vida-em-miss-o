function mostrarAlerta() {
    alert('Obrigado por entrar em contato! Responderemos em breve.');
}

function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

// Função simples para o carrossel
let currentIndex = 0;
const carrosselItems = document.querySelectorAll('.carrossel-item');
setInterval(() => {
    carrosselItems[currentIndex].style.transform = 'translateX(-100%)';
    currentIndex = (currentIndex + 1) % carrosselItems.length;
    carrosselItems[currentIndex].style.transform = 'translateX(0)';
}, 3000);

document.querySelectorAll('.topico-btn').forEach(botao => {
    botao.addEventListener('click', () => {
        const conteudo = botao.nextElementSibling;
        conteudo.classList.toggle('visivel');
    });
});

function mostrarAlerta() {
    document.getElementById("popup-contato").style.display = "block";
}

function fecharPopup() {
    document.getElementById("popup-contato").style.display = "none";
}
