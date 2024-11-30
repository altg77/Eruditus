document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;
    const newsCheckbox = document.getElementById("news-checkbox");

    const errorMessage = document.getElementById("errorMessage");

    // Verifica se o checkbox está marcado
    if (!newsCheckbox.checked) {
        errorMessage.textContent = "Você deve concordar com os Termos de Uso e Política de Privacidade.";
        return;
    }

    // Verifica se o nome de usuário já existe
    const validUsers = JSON.parse(localStorage.getItem("users")) || {};
    if (validUsers[newUsername]) {
        errorMessage.textContent = "Nome de usuário já existe!";
        return;
    }

    // Geração do token (usando username e password de forma consistente)
    const token = generateToken(newUsername, newPassword);

    // Adiciona novo usuário no localStorage
    validUsers[newUsername] = token;
    localStorage.setItem("users", JSON.stringify(validUsers));

    // Redireciona para a tela de login
    window.location.href = "/Frontend/login.html";
});

function generateToken(username, password) {
    // Gera um token baseado em username e senha (sem valores aleatórios)
    return `${username}-${password}`;
}
