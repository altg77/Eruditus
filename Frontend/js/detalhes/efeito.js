// Função para marcar o item selecionado
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        // Remove a classe "selected" de todos os itens
        document.querySelectorAll('.nav-item').forEach(navItem => navItem.classList.remove('selected'));

        // Adiciona a classe "selected" ao item clicado
        item.classList.add('selected');
    });
});
