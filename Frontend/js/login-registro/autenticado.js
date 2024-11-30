function verificarAutenticacao() {
    const activeUser = localStorage.getItem("activeUser"); // Usuário ativo
    const users = JSON.parse(localStorage.getItem("users")) || {}; // Todos os usuários
    const token = users[activeUser]; // Token do usuário ativo

    // Simula a validação do token
    if (!token || generateToken(activeUser, null) !== token) {
        console.warn("Autenticação inválida. Redirecionando para a página de login.");
        window.location.href = "/Frontend/login.html"; // Redireciona se inválido
    } else {
        console.log(`Usuário autenticado: ${activeUser}`);
        verificarUsuarioLogado(); // Atualiza a interface
    }
}

function verificarUsuarioLogado() {
    const activeUser = localStorage.getItem("activeUser");
    const topbarContainer = document.getElementById("topbar-container");

    if (activeUser) {
        carregarTopbar("/Frontend/html/topbar.html", topbarContainer);
        atualizarUsername(activeUser);
    } else {
        carregarTopbar("/Frontend/html/topbarAuth.html", topbarContainer);
    }
}

function carregarTopbar(arquivo, container) {
    fetch(arquivo)
        .then((response) => {
            if (!response.ok) throw new Error("Erro ao carregar o arquivo: " + response.statusText);
            return response.text();
        })
        .then((html) => {
            container.innerHTML = html;
        })
        .catch((error) => console.error("Erro:", error));
}

function atualizarUsername(username) {
    const interval = setInterval(() => {
        const usernameElement = document.getElementById("user-name");
        if (usernameElement) {
            clearInterval(interval);
            usernameElement.textContent = username || "Visitante";
        }
    }, 100);
}

function sair() {
    const users = JSON.parse(localStorage.getItem("users")) || {};
    const activeUser = localStorage.getItem("activeUser");

    if (activeUser) {
        delete users[activeUser]; // Remove o token do usuário ativo
        localStorage.setItem("users", JSON.stringify(users));
    }
    localStorage.removeItem("activeUser"); // Limpa o usuário ativo
    verificarUsuarioLogado(); 
}

// Executa a verificação ao carregar
document.addEventListener("DOMContentLoaded", verificarUsuarioLogado());
