document.addEventListener("DOMContentLoaded", function () {
    fetch("/Frontend/html/topbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("topbar-container").innerHTML = data;
        })
        .catch(error => console.error("Erro ao carregar o topbar:", error));
});