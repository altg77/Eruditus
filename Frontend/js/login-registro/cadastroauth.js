document.getElementById("signupForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Previne o envio do formulário padrão

  const newUsername = document.getElementById("newUsername").value.trim();
  const newPassword = document.getElementById("newPassword").value.trim();
  const termsCheckbox = document.getElementById("news-checkbox").checked; // Verifica se o checkbox está marcado
  const errorMessage = document.getElementById("errorMessage");

  // Verifica se o usuário preencheu os campos
  if (!newUsername || !newPassword) {
    errorMessage.textContent = "Por favor, preencha todos os campos.";
    return;
  }

  // Verifica se os termos foram aceitos
  if (!termsCheckbox) {
    errorMessage.textContent = "Você deve aceitar os termos e condições para continuar.";
    return;
  }

  // Verifica se o usuário já existe no localStorage
  if (localStorage.getItem(newUsername)) {
    errorMessage.textContent = "Usuário já cadastrado! Escolha outro nome.";
    return;
  }     

  // Gerar token para o novo usuário
  const token = generateToken();

  const user = {
    username: newUsername, // Armazena o nome de usuário
    password: newPassword,
    avatar: "", // A imagem de avatar será armazenada posteriormente
    token: token,
    role: "normal", // Adiciona o role "user" para o novo usuário
    cursosInscritos: [] // Lista para armazenar os IDs dos cursos ianscritos
  };

  // Salva o novo usuário no localStorage
  localStorage.setItem(newUsername, JSON.stringify(user));

  // Exibe uma mensagem de sucesso e redireciona para o login
  window.location.href = "/Frontend/login.html"; // Altere o caminho se necessário
});

// Função para gerar um token único (pode ser mais complexo em um sistema real)
function generateToken() {
  return Math.random().toString(36).substr(2); // Gera um token simples
}
