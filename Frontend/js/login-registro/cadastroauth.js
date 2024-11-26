document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const newUsername = document.getElementById("username").value;
    const newPassword = document.getElementById("password").value;

    if (Username && Password) {
        // Recupera os usuários do localStorage ou cria uma nova lista
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const userExists = users.some(user => user.username === newUsername);

        if (userExists) {
            document.getElementById("errorMessage").textContent = "Usuário já cadastrado.";
            document.getElementById("successMessage").textContent = "";
        } else {
            // Adiciona o novo usuário
            users.push({ username: newUsername, password: newPassword });
            localStorage.setItem("users", JSON.stringify(users));

            // Exibe mensagem de sucesso
            document.getElementById("successMessage").textContent = "Cadastro realizado com sucesso! Redirecionando para o login...";
            document.getElementById("errorMessage").textContent = "";

            // Redireciona para a página de login após 2 segundos
            setTimeout(() => {
                window.location.href = "login.html";
            }, 2000);
        }
    } else {
        document.getElementById("errorMessage").textContent = "Por favor, preencha todos os campos.";
    }
});

