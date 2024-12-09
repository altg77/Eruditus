document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Previne o envio do formulário padrão

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("errorMessage");

  // Verifica se o usuário está registrado no localStorage
  const storedUser = JSON.parse(localStorage.getItem(username));

  if (storedUser && storedUser.password === password) {
    // Gerar um token de sessão (aqui estamos usando uma string aleatória para simplicidade)
    const token = generateToken();
    const role = storedUser.role;  // Certificando-se de pegar o 'role' ou atribuir "user" se não existir

    // Salvar o token e o username no localStorage
    localStorage.setItem("userData", JSON.stringify({ username, token, role // Pega o role do usuário armazenado
  }));

    // Login bem-sucedido, redireciona para a página principal
    window.location.href = "/Frontend/index.html"; // Alterar para o caminho da página principal
  } else {
    // Exibe mensagem de erro
    errorMessage.textContent = "Usuário ou senha incorretos. Criar conta?";
    errorMessage.innerHTML += `<br><a href="/Frontend/registro.html" style="color: #1d3557; text-decoration: none;">Criar Conta</a>`;
  }
});

// Função para gerar um token único (pode ser mais complexo em um sistema real)
function generateToken() {
  return Math.random().toString(36).substr(2); // Gera um token simples
}
