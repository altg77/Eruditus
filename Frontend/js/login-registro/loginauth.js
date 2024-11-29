document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const token = generateToken(username, password);

    // Simulação da verificação do token
    const validToken = "valid-token-123";

    if (token === validToken) {
        localStorage.setItem("username", username);
        window.location.href = "/Frontend/index.html"; // Redireciona para a página inicial
    } else {
        const errorMessage = document.getElementById("errorMessage");
        errorMessage.textContent = "Usuário ou senha incorretos. Criar conta?";
        errorMessage.innerHTML += `<br><a href="/Frontend/registro.html" style="color: #1d3557; text-decoration: none;">Criar Conta</a>`;
    }
});

function generateToken(username, password) {
    return username === "Freddy" && password === "adm123" ? "valid-token-123" : "invalid-token";
}
