document.addEventListener("DOMContentLoaded", () => {
    // 1. Seleciona o container que faz o scroll e o ícone que vai sumir
    const container = document.querySelector('.container-cards');
    const iconeDica = document.querySelector('.icone-scroll-dica');

    // 2. Verifica se os elementos existem na página (evita erros se não houver cards)
    if (container && iconeDica) {
        
        // 3. Adiciona um ouvinte de evento para quando o usuário rolar o container
        container.addEventListener('scroll', () => {
            
            // Pega a quantidade de pixels que o usuário já rolou para a direita
            const pixelsRolados = container.scrollLeft;

            // 4. Lógica para Sumir ou Aparecer
            if (pixelsRolados > 30) {
                // Se rolou mais de 30px, faz o ícone SUMIR (fade-out)
                iconeDica.style.opacity = '0';
                iconeDica.style.pointerEvents = 'none'; // Impede cliques nele enquanto invisível
            } else {
                // Se voltou para o início (quase 0), faz o ícone APARECER (fade-in)
                iconeDica.style.opacity = '1';
                iconeDica.style.pointerEvents = 'auto'; // Reativa o toque/clique
            }
        });
    }
});