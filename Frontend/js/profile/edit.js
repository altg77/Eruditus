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
  
        // Salva o novo avatar no localStorage
        localStorage.setItem("profileAvatar", newAvatar);
      };
      reader.readAsDataURL(file);
    }
  });

  // Salvar as mudanças e voltar para a página anterior
document.getElementById("save-button").addEventListener("click", function () {
    if (document.referrer) {
      window.location.href = document.referrer; // Volta para a página anterior
    } else {
      window.location.href = "/Frontend/index.html"; // Caso não haja uma página anterior, vá para o index
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
  

  // Carregar o avatar salvo ao carregar a página
window.onload = function () {
    const savedAvatar = localStorage.getItem("profileAvatar");
    if (savedAvatar) {
      document.getElementById("profile-avatar").src = savedAvatar;
    }
  };
