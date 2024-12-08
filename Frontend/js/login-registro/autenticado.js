function verificarUsuarioLogado() {
    const activeUser = JSON.parse(localStorage.getItem("userData")); // Buscar os dados do usuário com token
    const topbarContainer = document.getElementById("topbar-container");
    
    if (activeUser && activeUser.token) {
      carregarTopbar("/Frontend/html/topbar.html", topbarContainer);
      atualizarUsername(activeUser.username); // Passar o nome de usuário para a função
    } else {
      carregarTopbar("/Frontend/html/topbarAuth.html", topbarContainer);
    }
  }
  
  function carregarTopbar(arquivo, container) {
    fetch(arquivo)
      .then((response) => {
        if (!response.ok) throw new Error("Erro ao carregar o arquivo: " + response.statusText);
        return response.text();
      })
      .then((html) => {
        container.innerHTML = html;
      })
      .catch((error) => console.error("Erro:", error));
  }
  
  function atualizarUsername(username) {
    const interval = setInterval(() => {
      const usernameElement = document.getElementById("user-name");
  
      if (usernameElement) {
        clearInterval(interval);
        usernameElement.textContent = username || "Visitante"; // Se não houver nome, coloca "Visitante"
      }
    }, 100);
  }
  
  // Verificar autenticação ao carregar a página
  document.addEventListener("DOMContentLoaded", function() {
    verificarUsuarioLogado(); // Atualiza o topo
  });
  