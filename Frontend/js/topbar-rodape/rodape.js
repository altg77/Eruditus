document.addEventListener("DOMContentLoaded", function () {
    fetch("/Frontend/html/rodapé.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("rodape-container").innerHTML = data;
        })
        .catch(error => console.error("Erro ao carregar o rodape:", error));
});