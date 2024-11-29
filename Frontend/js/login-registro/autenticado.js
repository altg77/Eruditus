// updateUsername.js
window.addEventListener('load', function() {
    const username = localStorage.getItem('username');
    
    if (username) {
        // Exibe o perfil e esconde o botão "Entrar"
        document.getElementById('profile').style.display = 'block';
        document.getElementById('loginButton').style.display = 'none';

        // Atualiza o nome de usuário na topbar
        const nameUserElement = document.querySelector('.name-user');
        if (nameUserElement) {
            nameUserElement.textContent = username;
        }

        // Funcionalidade de Logout
        document.getElementById('logoutButton').addEventListener('click', function() {
            localStorage.removeItem('username'); // Remove o usuário do localStorage
            window.location.href = "/Frontend/index.html"; // Redireciona para a página inicial
        });
    } else {
        // Se não estiver logado, exibe o botão de "Entrar"
        document.getElementById('loginButton').style.display = 'block';
    }
});


