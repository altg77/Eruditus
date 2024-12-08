function mostrarLogoutModal() {
    document.getElementById("logoutModal").style.display = "flex";
}

function esconderLogoutModal() {
    document.getElementById("logoutModal").style.display = "none";
}

function processeLogout() {
    localStorage.removeItem("userData"); // Limpa o usuário ativo

    esconderLogoutModal();
    verificarUsuarioLogado(); 
}