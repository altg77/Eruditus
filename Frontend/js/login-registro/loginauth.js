document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const errorMessage = document.getElementById("errorMessage");

    // Recupera os usuários do localStorage
    const validUsers = JSON.parse(localStorage.getItem("users")) || {};

    // Geração do token no login (com base no username e password)
    const token = generateToken(username, password);

    // Verifica se o username existe e se o token está correto
    if (validUsers[username] === token) {
        // Atualiza o usuário ativo
        localStorage.setItem("activeUser", username);

        // Redireciona para a página inicial
        window.location.href = "/Frontend/index.html";
    } else {
        errorMessage.textContent = "Usuário ou senha incorretos. Criar conta?";
        errorMessage.innerHTML += `<br><a href="/Frontend/registro.html" style="color: #1d3557; text-decoration: none;">Criar Conta</a>`;
    }
});

function generateToken(username, password) {
    // Gera um token baseado em username e senha (sem valores aleatórios)
    return `${username}-${password}`;
}
