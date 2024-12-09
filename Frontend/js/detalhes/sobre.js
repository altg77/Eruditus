function showAbout() {
    const contentList = document.querySelector(".content-list");
    contentList.innerHTML = ""; // Limpa o conteúdo atual

    contentList.innerHTML = `
        <div class="about">
            <p>
                Mais informações,Breve
            </p>
        </div>
    `;
}