// Função para verificar se o usuário está logado
function verificarUsuarioLogado() {
    const username = localStorage.getItem("username"); // Obtém o nome de usuário armazenado

    // Seleciona o elemento onde a topbar será carregada
    const topbarContainer = document.getElementById("topbar-container");

    if (username) {
        // Se o usuário estiver logado, carrega 'topbar.html'
        carregarTopbar("/Frontend/html/topbar.html", topbarContainer);
    } else {
        // Se não estiver logado, carrega 'topbarAuth.html'
        carregarTopbar("/Frontend/html/topbarAuth.html", topbarContainer);
    }
}

// Função para carregar um arquivo HTML dentro de um elemento
function carregarTopbar(arquivo, container) {
    fetch(arquivo)
        .then((response) => {
            if (!response.ok)
                throw new Error("Erro ao carregar o arquivo: " + response.statusText);
            return response.text();
        })
        .then((html) => {
            container.innerHTML = html; // Insere o conteúdo HTML no container
        })
        .catch((error) => console.error("Erro:", error));

    }
    
// Função para atualizar o username na topbar
    function atualizarUsername(username) {
        const usernameElement = document.getElementById("user-name"); // Seleciona o elemento onde o nome será exibido
        if (usernameElement) {
            usernameElement.textContent = username; // Substitui o conteúdo pelo nome do usuário
        }
 }


 function sair() {
    // Remove o username do localStorage
    localStorage.removeItem("username");

    verificarUsuarioLogado();
}



// Executa a verificação quando a página é carregada
document.addEventListener("DOMContentLoaded", verificarUsuarioLogado);
