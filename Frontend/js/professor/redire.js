document.getElementById("startButton").addEventListener("click", function () {
    // Recupera os dados do usuário do localStorage
    let userData = JSON.parse(localStorage.getItem("userData"));
    
    if (userData) {
      // Modifica a role do usuário para "admin"
      userData.role = "admin";
  
      // Atualiza os dados do usuário no localStorage
      localStorage.setItem("userData", JSON.stringify(userData));
  
      // Redireciona para a página de criar curso
      window.location.href = "/Frontend/dashboard.html";
    } else {
      // Usuário não está logado, redireciona para a tela de login
      window.location.href = "/Frontend/login.html";
    }
  });
  