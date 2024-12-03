function showAbout() {
    const contentList = document.querySelector(".content-list");
    contentList.innerHTML = ""; // Limpa o conteúdo atual

    contentList.innerHTML = `
        <div class="about">
            <p>
                Descubra os segredos das vendas de alto impacto com o curso "O Poder da Venda". 
                Este curso é ideal para quem deseja melhorar sua habilidade em vendas e alcançar 
                resultados excepcionais.
            </p>
        </div>
    `;
}