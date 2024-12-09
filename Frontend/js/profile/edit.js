// Função para disparar o seletor de arquivos
function triggerFileInput() {
  document.getElementById("file-input").click();
}

// Atualiza o avatar ao selecionar uma imagem
document.getElementById("file-input").addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      // Atualiza a imagem do avatar na página
      const newAvatar = e.target.result;
      document.getElementById("profile-avatar").src = newAvatar;

      // Obtém o nome de usuário e atualiza o avatar desse usuário no localStorage
      const currentUsername = JSON.parse(localStorage.getItem("userData")).username;
      if (currentUsername) {
        const user = JSON.parse(localStorage.getItem(currentUsername));
        if (user) {
          user.avatar = newAvatar; // Atualiza o avatar
          localStorage.setItem(currentUsername, JSON.stringify(user)); // Salva a mudança no localStorage
        }
      }
    };

    reader.readAsDataURL(file);
  }
});

// Salva as mudanças do nome ou avatar do usuário
document.getElementById("save-button").addEventListener("click", function () {
  const newName = document.getElementById("profile-name").value.trim(); // Pega o nome editado
  const userData = JSON.parse(localStorage.getItem("userData"));

  if (userData && userData.username) {
    const currentUsername = userData.username;
    const user = JSON.parse(localStorage.getItem(currentUsername));

    if (user) {
      // Se o nome foi alterado
      if (newName && newName !== currentUsername) {
        user.username = newName; // Atualiza o nome do usuário
      }

      // Salva as mudanças no localStorage
      localStorage.setItem(newName || currentUsername, JSON.stringify(user)); // Salva o usuário com o novo nome ou o nome antigo

      // Atualiza o userData se o nome foi alterado
      if (newName && newName !== currentUsername) {
        userData.username = newName; // Atualiza o nome no userData
        localStorage.setItem("userData", JSON.stringify(userData)); // Salva as mudanças no userData
        localStorage.removeItem(currentUsername); // Remove o nome antigo
      }

      // Volta para a página anterior ou para a principal
      if (document.referrer) {
        window.location.href = document.referrer;
      } else {
        window.location.href = "/Frontend/index.html";
      }
    }
  }
});

// Cancelar e voltar para a página anterior
document.getElementById("cancel-button").addEventListener("click", function () {
  if (document.referrer) {
    window.location.href = document.referrer; // Volta para a página anterior
  } else {
    window.location.href = "/Frontend/index.html"; // Caso não haja uma página anterior, vá para o index
  }
});

// Excluir perfil
document.getElementById("delete-button").addEventListener("click", function () {
  const userData = JSON.parse(localStorage.getItem("userData"));

  if (userData && userData.username) {
    // Exibe uma caixa de confirmação antes de excluir
    const confirmDelete = confirm("Deseja realmente excluir seu perfil? Esta ação não pode ser desfeita.");
    
    if (confirmDelete) {
      const currentUsername = userData.username;
      localStorage.removeItem(currentUsername); // Remove o perfil do usuário do localStorage
      localStorage.removeItem("userData"); // Remove o userData do localStorage

      // Redireciona para a página inicial ou qualquer outra página
      window.location.href = "/Frontend/index.html";
    }
  }
});


// Carregar o avatar e o nome salvo ao carregar a página
window.onload = function () {
  const userData = JSON.parse(localStorage.getItem("userData"));
  if (userData && userData.username) {
    const currentUsername = userData.username;
    const user = JSON.parse(localStorage.getItem(currentUsername));
    if (user) {
      document.getElementById("profile-avatar").src = user.avatar || "/Frontend/img/perfis/semfoto.png"; // Exibe o avatar do usuário
      document.getElementById("profile-name").value = user.username; // Exibe o nome do usuário
    }
  }
};
