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

  // Salva o novo usuário no localStorage
  localStorage.setItem(newUsername, newPassword);

  // Exibe uma mensagem de sucesso e redireciona para o login
  window.location.href = "/Frontend/login.html"; // Altere o caminho se necessário
});
