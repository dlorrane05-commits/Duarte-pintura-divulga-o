document.addEventListener('DOMContentLoaded', function() {
    // 1. ANIMAÇÃO DE CORES NO TÍTULO (h1)
    const titleElement = document.getElementById('site-title');
    // Agora, buscamos o <span> que contém o texto, dentro do <h1>
    const textSpan = titleElement.querySelector('span');

    // Cores de destaque para a animação (Amarelo, Branco, Marrom)
    const colors = ['#FFD700', '#FFFFFF', '#A0522D']; 

    let colorIndex = 0;

    function animateTitleColor() {
        if (textSpan) {
            // Aplica a cor atual da lista APENAS no <span> (o texto)
            textSpan.style.transition = 'color 0.5s ease-in-out';
            textSpan.style.color = colors[colorIndex];
        }
        
        // Passa para a próxima cor
        colorIndex = (colorIndex + 1) % colors.length;
    }

    // Inicializa a animação e a repete a cada 3 segundos
    animateTitleColor(); 
    setInterval(animateTitleColor, 3000); 

    // 2. SCROLL SUAVE
    // Faz o scroll da página ser suave ao clicar nos links da navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Previne o comportamento padrão (pulo instantâneo)
            e.preventDefault();

            // Rola suavemente até a seção de destino
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});