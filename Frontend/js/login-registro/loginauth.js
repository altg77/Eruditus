document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const token = generateToken(username, password);

    // Simulação da verificação do token (poderia ser substituído por API)
    const validToken = "valid-token-123";

    if (token === validToken) {
        localStorage.setItem("username", username);
        window.location.href = "/Frontend/index.html"; // Redireciona para outra página
    } else {
        const errorMessage = document.getElementById("errorMessage");
        errorMessage.textContent = "Usuário ou senha incorretos. Criar conta?";
        errorMessage.innerHTML += `<br><a href="/Frontend/registro.html" style="color: #1d3557; text-decoration: none;">Criar Conta</a>`;
    }
});

function generateToken(username, password) {
    // Token fictício para simular autenticação
    return username === "adm123" && password === "adm123" ? "valid-token-123" : "invalid-token";
}

window.addEventListener("load", function() {
    // Verificar se o usuário está logado e carregar o perfil
    const username = localStorage.getItem("username");

    if (username) {
        // Alterar o conteúdo do perfil com base nos dados armazenados
        document.querySelector(".name-user").textContent = username;
    }
});