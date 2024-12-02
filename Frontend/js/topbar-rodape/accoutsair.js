function mostrarLogoutModal() {
    document.getElementById("logoutModal").style.display = "flex";
}

function esconderLogoutModal() {
    document.getElementById("logoutModal").style.display = "none";
}

function processeLogout() {
    const users = JSON.parse(localStorage.getItem("users")) || {};
    const activeUser = localStorage.getItem("activeUser");

    if (activeUser) {
        delete users[activeUser]; // Remove o token do usuário ativo
        localStorage.setItem("users", JSON.stringify(users));
    }
    localStorage.removeItem("activeUser"); // Limpa o usuário ativo
    esconderLogoutModal();
    verificarUsuarioLogado(); 
}