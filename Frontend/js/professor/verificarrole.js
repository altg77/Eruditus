function verificarRole() {
    // Recupera os dados do usuário do localStorage
    const userData = JSON.parse(localStorage.getItem("userData"));

    console.log("Dados do usuário logado:", userData);

  
    if (userData && userData.username && userData.role) {
      // Verifica se o role do usuário é "admin" ou "user"
      if (userData.role === "admin") {
        // Usuário autorizado, redireciona para criar curso
        window.location.href = "/Frontend/dashboard.html";
      } else if (userData.role === "normal") {
        // Usuário não admin, redireciona para outra página
        window.location.href = "/Frontend/ensinenaplata.html";
      }
    } else {
      // Caso o usuário não esteja logado ou o role não esteja definido
      window.location.href = "/Frontend/ensinenaplata.html";
    }
  }
  