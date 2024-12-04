const cursos = [
    // Lançamentos
    { id: 111, categoria: "Lancamentos", imagem: "/Frontend/img/cards/7.png", link: "/Frontend/detalhes.html" },
    { id: 121, categoria: "Lancamentos", imagem: "/Frontend/img/cards/4.png" },
    { id: 131, categoria: "Lancamentos", imagem: "/Frontend/img/cards/2.png" },
    { id: 141, categoria: "Lancamentos", imagem: "/Frontend/img/cards/2.png" },
    { id: 151, categoria: "Lancamentos", imagem: "/Frontend/img/cards/2.png" },
    { id: 161, categoria: "Lancamentos", imagem: "/Frontend/img/cards/2.png" },
    { id: 161, categoria: "Lancamentos", imagem: "/Frontend/img/cards/2.png" },

    // Meus Cursos
    { id: 212, categoria: "Meus Cursos", imagem: "/Frontend/img/cards/2.png" },
    { id: 222, categoria: "Meus Cursos", imagem: "/Frontend/img/cards/2.png" },
    { id: 232, categoria: "Meus Cursos", imagem: "/Frontend/img/cards/2.png" },
    { id: 242, categoria: "Meus Cursos", imagem: "/Frontend/img/cards/2.png" },
    { id: 243, categoria: "Meus Cursos", imagem: "/Frontend/img/cards/2.png" },

    // Em Alta
    { id: 313, categoria: "Em alta", imagem: "/Frontend/img/cards/2.png" },
    { id: 323, categoria: "Em alta", imagem: "/Frontend/img/cards/25.png" },
    { id: 333, categoria: "Em alta", imagem: "/Frontend/img/cards/25.png" },
    { id: 343, categoria: "Em alta", imagem: "/Frontend/img/cards/25.png" },
    { id: 353, categoria: "Em alta", imagem: "/Frontend/img/cards/25.png" },

    // Cursos Curto Período
    { id: 414, categoria: "Cursos curto periodo", imagem: "/Frontend/img/cards/2.png" },
    { id: 424, categoria: "Cursos curto periodo", imagem: "/Frontend/img/cards/2.png" },
    { id: 434, categoria: "Cursos curto periodo", imagem: "/Frontend/img/cards/2.png" },
    { id: 444, categoria: "Cursos curto periodo", imagem: "/Frontend/img/cards/2.png" },
    { id: 454, categoria: "Cursos curto periodo", imagem: "/Frontend/img/cards/2.png" },

    // Cursos Longo Período
    { id: 515, categoria: "Cursos longo periodo", imagem: "/Frontend/img/cards/2.png" },
    { id: 525, categoria: "Cursos longo periodo", imagem: "/Frontend/img/cards/2.png" },
    { id: 535, categoria: "Cursos longo periodo", imagem: "/Frontend/img/cards/2.png" },
    { id: 545, categoria: "Cursos longo periodo", imagem: "/Frontend/img/cards/2.png" },
    { id: 555, categoria: "Cursos longo periodo", imagem: "/Frontend/img/cards/2.png" },
    { id: 565, categoria: "Cursos longo periodo", imagem: "/Frontend/img/cards/2.png" },
];

function gerarCards() {
    const fragmentos = {};

    // Criar fragmentos para cada categoria
    cursos.forEach(curso => {
        const containerId = curso.categoria.toLowerCase().replace(/ /g, "-");
        if (!fragmentos[containerId]) fragmentos[containerId] = document.createDocumentFragment();

        const card = document.createElement("div");
        card.className = "card";
        if (curso.link) card.setAttribute("onclick", `window.location.href='${curso.link}'`);
        card.innerHTML = `<img src="${curso.imagem}" alt="Curso ${curso.categoria}">`;

        fragmentos[containerId].appendChild(card);
    });

    // Adicionar os fragmentos aos contêineres
    for (const [containerId, fragmento] of Object.entries(fragmentos)) {
        const container = document.querySelector(`#${containerId}`);
        if (container) container.appendChild(fragmento);
    }
}

const carrosselIndices = {};

function updateCarouselButtons(categoria) {
    const carousel = document.querySelector(`#${categoria}`);
    const cards = carousel.querySelectorAll(".card");
    if (cards.length === 0) return;

    const cardWidth = cards[0].offsetWidth;
    const visibleCards = Math.floor(carousel.offsetWidth / cardWidth);
    const totalCards = cards.length;

    const currentIndex = carrosselIndices[categoria] || 0;
    const prevButton = document.querySelector(`.prev[onclick*="${categoria}"]`);
    const nextButton = document.querySelector(`.next[onclick*="${categoria}"]`);

    // Atualiza a visibilidade dos botões
    prevButton.style.display = currentIndex > 0 ? "block" : "none";
    nextButton.style.display = currentIndex < totalCards - visibleCards ? "block" : "none";
}

function moveCarousel(direction, categoria) {
    const carousel = document.querySelector(`#${categoria}`);
    if (!carousel) return;

    const cards = carousel.querySelectorAll(".card");
    if (cards.length === 0) return;

    const cardWidth = cards[0].offsetWidth + 10;  // Adicionando a margem no cálculo
    const totalCards = cards.length;
    const visibleCards = Math.floor(carousel.offsetWidth / cardWidth);

    if (!carrosselIndices[categoria]) carrosselIndices[categoria] = 0;

    carrosselIndices[categoria] += direction;

    // Limitar o índice
    const maxIndex = Math.max(0, totalCards - visibleCards);
    carrosselIndices[categoria] = Math.min(Math.max(carrosselIndices[categoria], 0), totalCards - visibleCards);

    const translateX = carrosselIndices[categoria] * cardWidth;
    carousel.style.transform = `translateX(-${translateX}px)`;

    updateCarouselButtons(categoria);
}

// Inicializar os cards
document.addEventListener("DOMContentLoaded", () => {
    gerarCards();
    ["lancamentos", "meus-cursos", "em-alta", "cursos-curto-periodo", "cursos-longo-periodo"].forEach(categoria => {
        updateCarouselButtons(categoria);
    });
});
