const cursos = [
    {
        id: 1,
        title: "Lógica de Programação",
        subtitle: "Pensando como um programador desde o início.",
        description: "Desenvolva habilidades de raciocínio lógico e aprenda os fundamentos da programação de forma prática e acessível. Este curso é ideal para iniciantes que desejam construir a base para qualquer linguagem de programação.",
        imagem: "/Frontend/img/cards/2.png",
        lammecs: ["Lancamentos", "Cursos longo periodo", "Meus cursos"],
        categoria: "Programação",
        metadata: {
            anoLancamento: 2005, 
            temporadas: 5, 
            episodios: 24
        },
        tags: ["6 Atividades", "17 Horas de vídeo", "14 recursos", "Certificado"],
    },
    {
        id: 2,
        title: "Curso de vendas no Automático",
        subtitle: "Aumente suas vendas com estratégias automáticas.",
        description: "Aprenda como configurar processos automatizados para vendas e melhore sua produtividade. Este curso fornece estratégias práticas para maximizar suas vendas com o mínimo de esforço manual.",
        imagem: "/Frontend/img/cards/3.png",
        lammecs: ["Em alta", "Cursos curto periodo"],
        categoria: "Negócios e Finanças",
        metadata: {
            anoLancamento: 2023,
            temporadas: 4,
            episodios: 8
        },
        tags: ["8 Atividades", "20 Horas de vídeo", "12 recursos", "Certificado"],
    },
    {
        id: 3,
        title: "O Poder da Venda",
        subtitle: "+2.000 de INDICAÇÕES | Alicia Martins®",
        description: "Descubra os segredos de vendas que realmente funcionam. Ideal para quem quer se destacar no mercado competitivo.",
        imagem: "/Frontend/img/cards/14.png",
        lammecs: ["Em alta", "Meus cursos", "cursos curto periodo", "Lancamentos"],
        categoria: "Negócios e Finanças",
        metadata: {
            anoLancamento: 2024,
            temporadas: 2,
            episodios: 10
        },
        tags: ["5 Atividades", "15 Horas de vídeo", "8 recursos", "Certificado"],
    },
    {
        id: 4,
        title: "Digital Marketing",
        subtitle: "Domine as estratégias digitais.",
        description: "Aprenda SEO, marketing de redes sociais e estratégias pagas para se tornar um profissional de marketing digital de destaque.",
        imagem: "/Frontend/img/cards/7.png",
        lammecs: ["Em alta", "Meus cursos", "cursos curto periodo"],
        categoria: "Marketing",
        metadata: {
            anoLancamento: 2024,
            temporadas: 2,
            episodios: 12
        },
        tags: ["10 Atividades", "25 Horas de vídeo", "20 recursos", "Certificado"],
    },
    {
        id: 5,
        title: "Adestrador de Cães",
        subtitle: "Treine cães como um profissional.",
        description: "Domine técnicas de adestramento que ajudam no comportamento e na interação dos cães com seus tutores.",
        imagem: "/Frontend/img/cards/18.png",
        lammecs: ["Lancamentos", "cursos curto periodo"],
        categoria: "Ensino e estudo acadêmico",
        metadata: {
            anoLancamento: 2024,
            temporadas: 1,
            episodios: 8
        },
        tags: ["8 Atividades", "18 Horas de vídeo", "6 recursos", "Certificado"],
    },
    {
        id: 6,
        title: "Como ser um Youtuber",
        subtitle: "Destaque-se no mundo do YouTube.",
        description: "Aprenda desde a criação de conteúdo até a monetização de vídeos na maior plataforma de streaming do mundo.",
        imagem: "/Frontend/img/cards/4.png",
        lammecs: ["Em alta", "Lancamentos", "cursos longo periodo"],
        categoria: "Fotografia e vídeo",
        metadata: {
            anoLancamento: 2024,
            temporadas: 6,
            episodios: 15
        },
        tags: ["10 Atividades", "30 Horas de vídeo", "12 recursos", "Certificado"],
    },
    {
        id: 7,
        title: "Programar Apps",
        subtitle: "Desenvolva seus próprios aplicativos.",
        description: "Desde o básico até a publicação na Play Store e App Store, este curso aborda tudo o que você precisa para criar apps.",
        imagem: "/Frontend/img/cards/10.png",
        lammecs: ["Meus cursos", "cursos longo periodo", "Em alta"],
        categoria: "Programação",
        metadata: {
            anoLancamento: 2022,
            temporadas: 5,
            episodios: 30
        },
        tags: ["12 Atividades", "40 Horas de vídeo", "15 recursos", "Certificado"],
    },
    {
        id: 8,
        title: "Fotografia",
        subtitle: "Transforme cliques em arte.",
        description: "Entenda os fundamentos da fotografia e as técnicas que fazem a diferença para amadores e profissionais.",
        imagem: "/Frontend/img/cards/16.png",
        lammecs: ["Cursos curto periodo"],
        categoria: "Fotografia e Vídeo",
        metadata: {
            anoLancamento: 2023,
            temporadas: 3,
            episodios: 25
        },
        tags: ["8 Atividades", "20 Horas de vídeo", "10 recursos", "Certificado"],
    },
    {
        id: 9,
        title: "Básico de Design Gráfico",
        subtitle: "Explore o mundo do design criativo.",
        description: "Aprenda ferramentas como Photoshop, Illustrator e Canva para criar peças incríveis.",
        imagem: "/Frontend/img/cards/6.png",
        lammecs: ["Em alta", "cursos curto periodo"],
        categoria: "Design",
        metadata: {
            anoLancamento: 2023,
            temporadas: 2,
            episodios: 12
        },
        tags: ["10 Atividades", "25 Horas de vídeo", "12 recursos", "Certificado"],
    },
    {
        id: 10,
        title: "Fitness",
        subtitle: "Saúde e bem-estar para o dia a dia.",
        description: "Estratégias práticas de exercícios físicos e nutrição para melhorar sua qualidade de vida.",
        imagem: "/Frontend/img/cards/19.png",
        lammecs: ["Em alta", "cursos curto periodo"],
        categoria: "Saúde",
        metadata: {
            anoLancamento: 2022,
            temporadas: 2,
            episodios: 20
        },
        tags: ["6 Atividades", "10 Horas de vídeo", "8 recursos", "Certificado"],
    },

    {
        id: 11,
        title: "Inglês Avançado",
        subtitle: "Domine o idioma com fluência e confiança.",
        description: "Aprimore suas habilidades em inglês com foco em conversação, escrita e compreensão avançada.",
        imagem: "/Frontend/img/cards/12.png",
        lammecs: ["Em alta","Lancamentos", "cursos longo periodo"],
        categoria: "Ensino e estudo acadêmico",
        metadata: {
            anoLancamento: 2023,
            temporadas: 8,
            episodios: 10
        },
        tags: ["12 Atividades", "30 Horas de vídeo", "10 recursos", "Certificado"],
    },
    {
        id: 12,
        title: "Modelagem de Projetos",
        subtitle: "Estruture suas ideias como um profissional.",
        description: "Aprenda a criar modelos de projetos eficazes para diversas áreas utilizando ferramentas e técnicas modernas.",
        imagem: "/Frontend/img/cards/8.png",
        lammecs: ["Cursos curto periodo"],
        categoria: "Projetos",
        metadata: {
            anoLancamento: 2024,
            temporadas: 2,
            episodios: 15
        },
        tags: ["8 Atividades", "25 Horas de vídeo", "12 recursos", "Certificado"],
    },
    {
        id: 13,
        title: "Aprenda a Tocar Violão",
        subtitle: "Domine os acordes e ritmos.",
        description: "Inicie sua jornada musical com um guia passo a passo para tocar violão de forma prática e divertida.",
        imagem: "/Frontend/img/cards/20.png",
        lammecs: ["Lancamentos", "Cursos curto periodo"],
        categoria: "Música",
        metadata: {
            anoLancamento: 2023,
            temporadas: 3,
            episodios: 8
        },
        tags: ["10 Atividades", "20 Horas de vídeo", "8 recursos", "Certificado"],
    },
    {
        id: 14,
        title: "Inteligência Artificial",
        subtitle: "Explore o futuro da tecnologia.",
        description: "Aprenda os conceitos básicos e avançados de IA, incluindo machine learning e redes neurais.",
        imagem: "/Frontend/img/cards/13.png",
        lammecs: ["Meus cursos", "cursos longo periodo"],
        categoria: "Tecnologia da informação",
        metadata: {
            anoLancamento: 2024,
            temporadas: 3,
            episodios: 30
        },
        tags: ["15 Atividades", "40 Horas de vídeo", "20 recursos", "Certificado"],
    },
    {
        id: 15,
        title: "Investimentos",
        subtitle: "Multiplique seu patrimônio.",
        description: "Entenda como investir de forma consciente em ações, renda fixa e outros mercados financeiros.",
        imagem: "/Frontend/img/cards/11.png",
        lammecs: ["Em alta", "cursos curto periodo"],
        categoria: "Negócios e finanças",
        metadata: {
            anoLancamento: 2024,
            temporadas: 3,
            episodios: 25
        },
        tags: ["8 Atividades", "30 Horas de vídeo", "10 recursos", "Certificado"],
    },
    {
        id: 16,
        title: "Banco de Dados",
        subtitle: "Gerencie informações como um especialista.",
        description: "Aprenda a criar, administrar e otimizar bancos de dados relacionais e não relacionais.",
        imagem: "/Frontend/img/cards/21.png",
        lammecs: ["Lancamento", "cursos longo periodo"],
        categoria: "Ciência de dados",
        metadata: {
            anoLancamento: 2024,
            temporadas: 8,
            episodios: 20
        },
        tags: ["10 Atividades", "35 Horas de vídeo", "12 recursos", "Certificado"],
    },
    {
        id: 17,
        title: "Ilustração Avançada",
        subtitle: "Aprimore seu talento artístico.",
        description: "Explore técnicas avançadas para criar ilustrações impressionantes usando ferramentas digitais e tradicionais.",
        imagem: "/Frontend/img/cards/22.png",
        lammecs: ["Em alta", "cursos curto periodo"],
        categoria: "Design",
        metadata: {
            anoLancamento: 2024,
            temporadas: 4,
            episodios: 12
        },
        tags: ["12 Atividades", "25 Horas de vídeo", "15 recursos", "Certificado"],
    },
    {
        id: 18,
        title: "Desenvolvimento de Jogos",
        subtitle: "Crie jogos que cativam e desafiam.",
        description: "Descubra como projetar e desenvolver jogos para diversas plataformas, utilizando engines populares como Unity e Unreal.",
        imagem: "/Frontend/img/cards/15.png",
        lammecs: ["Lancamento", "cursos longo periodo"],
        categoria: "Programação",
        metadata: {
            anoLancamento: 2023,
            temporadas: 12,
            episodios: 15
        },
        tags: ["15 Atividades", "50 Horas de vídeo", "18 recursos", "Certificado"],

    },
        {
          id: 19,
          title: "Matemática Básica",
          subtitle: "Fundamentos para quem quer entender a matemática.",
          description: "Este curso aborda os conceitos essenciais da matemática, como operações básicas, frações, porcentagens e geometria. Ideal para iniciantes ou quem precisa de uma base sólida para cursos mais avançados.",
          imagem: "/Frontend/img/cards/23.png",
          lammecs: ["Lancamentos", "Cursos longo período", "Em Alta"],
          categoria: "Matemática",
          metadata: {
            anoLancamento: 2015,
            temporadas: 2,
            episodios: 10
          },
          tags: ["7 Atividades", "8 Horas de vídeo", "6 recursos", "Certificado"]
        },
        {
          id: 20,
          title: "Física Quntica",
          subtitle: "Explore os fundamentos da física.",
          description: "Aprenda os conceitos de física Quântica. Este curso é uma introdução aos principais conceitos e teorias que governam o mundo físico ao nosso redor.",
          imagem: "/Frontend/img/cards/24.png",
          lammecs: ["Lancamentos", "Cursos longo período"],
          categoria: "Física",
          metadata: {
            anoLancamento: 2016,
            temporadas: 2,
            episodios: 12
          },
          tags: ["8 Atividades", "10 Horas de vídeo", "7 recursos", "Certificado"]
        },
        {
          id: 21,
          title: "Algoritmos e Estruturas de Dados",
          subtitle: "Conceitos fundamentais para programadores.",
          description: "Este curso ensina os principais algoritmos e estruturas de dados usados na programação, como listas, pilhas, filas, árvores e grafos. Perfeito para quem quer aprofundar seus conhecimentos de programação.",
          imagem: "/Frontend/img/cards/25.png",
          lammecs: ["Lançamentos", "Cursos longo período", "Meus cursos"],
          categoria: "Programação",
          metadata: {
            anoLancamento: 2020,
            temporadas: 3,
            episodios: 20
          },
          tags: ["10 Atividades", "15 Horas de vídeo", "9 recursos", "Certificado"]
        },
        {
          id: 22,
          title: "Introdução à Ciência de Dados",
          subtitle: "Comece sua jornada no mundo dos dados.",
          description: "Este curso abrange os fundamentos de Ciência de Dados, incluindo a coleta, limpeza e análise de dados. Aprenda a usar ferramentas como Python, pandas e matplotlib para análise de dados.",
          imagem: "/Frontend/img/cards/26.png",
          lammecs: ["Lancamentos", "Cursos longo período"],
          categoria: "Ciência de Dados",
          metadata: {
            anoLancamento: 2021,
            temporadas: 2,
            episodios: 15
          },
          tags: ["9 Atividades", "12 Horas de vídeo", "8 recursos", "Certificado"]
        },
        {
          id: 23,
          title: "Design Gráfico: Criando Identidades Visuais",
          subtitle: "Desenvolva suas habilidades em design visual.",
          description: "Aprenda a criar identidades visuais completas, incluindo logotipos, paletas de cores e tipografia, utilizando ferramentas como Illustrator e Photoshop.",
          imagem: "/Frontend/img/cards/27.png",
          lammecs: ["Lançamentos", "Cursos curto período", "Meus cursos", "Em Alta"],
          categoria: "Design",
          metadata: {
            anoLancamento: 2022,
            temporadas: 3,
            episodios: 18
          },
          tags: ["7 Atividades", "10 Horas de vídeo", "6 recursos", "Certificado"]
        },
        {
          id: 24,
          title: "Fotografia Digital: Técnicas Avançadas",
          subtitle: "Domine as técnicas de fotografia digital.",
          description: "Este curso avançado em fotografia digital abrange técnicas como fotografia de longa exposição, controle de luz e composição avançada. Ideal para quem já tem experiência e quer aprimorar suas habilidades.",
          imagem: "/Frontend/img/cards/28.png",
          lammecs: ["Cursos curto período"],
          categoria: "Fotografia e Vídeo",
          metadata: {
            anoLancamento: 2023,
            temporadas: 2,
            episodios: 12
          },
          tags: ["8 Atividades", "14 Horas de vídeo", "9 recursos", "Certificado"]
        },
        {
          id: 25,
          title: "Videomaker: Produção e Edição de Vídeo",
          subtitle: "Aprenda a criar vídeos de alta qualidade.",
          description: "Neste curso, você aprenderá a produzir e editar vídeos profissionais usando ferramentas como Adobe Premiere e Final Cut. Desde o planejamento até a finalização do vídeo.",
          imagem: "/Frontend/img/cards/29.png",
          lammecs: ["Lancamentos", "Cursos longo período", "Meus cursos"],
          categoria: "Fotografia e Vídeo",
          metadata: {
            anoLancamento: 2023,
            temporadas: 3,
            episodios: 15
          },
          tags: ["9 Atividades", "16 Horas de vídeo", "10 recursos", "Certificado"]
        },
        {
          id: 26,
          title: "Estatísticas e Análise de Dados",
          subtitle: "Torne-se um especialista em análise de dados.",
          description: "Este curso de estatísticas aborda análise de dados utilizando métodos estatísticos. Aprenda a calcular médias, desvios padrões e realizar testes estatísticos para interpretar grandes volumes de dados.",
          imagem: "/Frontend/img/cards/30.png",
          lammecs: ["Cursos longo período"],
          categoria: "Ciência de Dados",
          metadata: {
            anoLancamento: 2021,
            temporadas: 1,
            episodios: 10
          },
          tags: ["6 Atividades", "9 Horas de vídeo", "7 recursos", "Certificado"]
        },
        {
          id: 27,
          title: "Photoshop para Design Digital",
          subtitle: "Aperfeiçoe suas habilidades em edição digital.",
          description: "Este curso ensina o uso avançado do Photoshop para designers gráficos. Explore técnicas de manipulação de imagem, montagem e retoques digitais.",
          imagem: "/Frontend/img/cards/31.png",
          lammecs: ["Cursos curto período"],
          categoria: "Design",
          metadata: {
            anoLancamento: 2021,
            temporadas: 2,
            episodios: 14
          },
          tags: ["10 Atividades", "12 Horas de vídeo", "8 recursos", "Certificado"]
        }
];

// Função para gerar os cards e redirecionar para detalhes.html
function gerarCards() {
    
    const fragmentos = {};

    // Criar fragmentos para cada categoria
    cursos.forEach(curso => {
        curso.lammecs.forEach(lammec => {
            const containerId = lammec.toLowerCase().replace(/ /g, "-");
            if (!fragmentos[containerId]) fragmentos[containerId] = document.createDocumentFragment();

            const card = document.createElement("div");
            card.className = "card";
            // Remover onclick do HTML e adicionar o evento de clique no JavaScript
            card.innerHTML = `
                <img src="${curso.imagem}" alt="Curso ${curso.categoria}">
            `;
        // Criação dos parâmetros que vamos passar na URL
                const urlParams = new URLSearchParams();
        
            card.addEventListener("click", () => {
                urlParams.append('id', curso.id);
                urlParams.append('title', curso.title);
                urlParams.append('title', curso.title);
                urlParams.append('imagem', curso.imagem); 
                urlParams.append('categoria', curso.categoria);
                urlParams.append('description', curso.description);
                urlParams.append('metadata', JSON.stringify(curso.metadata)); // Enviar os metadados como JSON
                urlParams.append('tags', curso.tags.join(", ")); // Convertendo o array de tags em string
            
                // Alterando a URL com pushState, mas também forçando a navegação
                const newUrl = `/Frontend/detalhes.html?${urlParams.toString()}`;
            
                // Usando location.href para redirecionar para a página de detalhes
                window.location.href = newUrl;  // Isso irá navegar para detalhes.html
            });

            fragmentos[containerId].appendChild(card);
        });
    });

    // Adicionar os fragmentos aos contêineres
    for (const [containerId, fragmento] of Object.entries(fragmentos)) {
        const container = document.querySelector(`#${containerId}`);
        if (container) container.appendChild(fragmento);
    }
}

const carrosselIndices = {};

function updateCarouselButtons(lamecc) {
    const carousel = document.querySelector(`#${lamecc}`);
    const cards = carousel.querySelectorAll(".card");
    if (cards.length === 0) return;

    const cardWidth = cards[0].offsetWidth;
    const visibleCards = Math.floor(carousel.offsetWidth / cardWidth);
    const totalCards = cards.length;

    const currentIndex = carrosselIndices[lamecc] || 0;
    const prevButton = document.querySelector(`.prev[onclick*="${lamecc}"]`);
    const nextButton = document.querySelector(`.next[onclick*="${lamecc}"]`);

    // Atualiza a visibilidade dos botões
    prevButton.style.display = currentIndex > 0 ? "block" : "none";
    nextButton.style.display = (currentIndex + visibleCards) < totalCards ?  "block" : "none";
}

function moveCarousel(direction, lamecc) {
    const carousel = document.querySelector(`#${lamecc}`);
    if (!carousel) return;

    const cards = carousel.querySelectorAll(".card");
    if (cards.length === 0) return;

    const cardWidth = cards[0].offsetWidth + 10;  // Adicionando a margem no cálculo
    const totalCards = cards.length;
    const visibleCards = Math.floor(carousel.offsetWidth / cardWidth);

    if (!carrosselIndices[lamecc]) carrosselIndices[lamecc] = 0;

    carrosselIndices[lamecc] += direction;

    // Limitar o índice
    const maxIndex = Math.max(0, totalCards - visibleCards);
    carrosselIndices[lamecc] = Math.min(Math.max(carrosselIndices[lamecc], 0), totalCards - visibleCards);

    const translateX = carrosselIndices[lamecc] * cardWidth;
    carousel.style.transform = `translateX(-${translateX}px)`;

    updateCarouselButtons(lamecc);
}


//PARA CATEGORIAS
// Extrai o parâmetro 'categoria' da URL
function getCategoriaDaURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('categoria'); // Ex: 'programação'
}

// Filtra os cursos pela categoria
function filtrarCursosPorCategoria(categoria) {
    return cursos.filter(curso => curso.categoria.toLowerCase() === categoria.toLowerCase());
}

// Gera os cards para a página categorias.html
function gerarCardsParaCategorias(cursosFiltrados) {
    const container = document.querySelector("#container"); // Contêiner onde os cards serão exibidos
    container.innerHTML = ""; // Limpa os cards existentes

    cursosFiltrados.forEach(curso => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${curso.imagem}" alt="${curso.categoria}">
        `;

        // Adiciona o evento de clique para redirecionar à página de detalhes
        card.addEventListener("click", () => {
            const urlParams = new URLSearchParams();
            urlParams.append('id', curso.id);
            urlParams.append('title', curso.title);
            urlParams.append('title', curso.title);
            urlParams.append('imagem', curso.imagem); 
            urlParams.append('categoria', curso.categoria);
            urlParams.append('description', curso.description);
            urlParams.append('metadata', JSON.stringify(curso.metadata)); // Enviar os metadados como JSON
            urlParams.append('tags', curso.tags.join(", ")); // Convertendo o array de tags em string

            // Redireciona para detalhes.html
            window.location.href = `/Frontend/detalhes.html?${urlParams.toString()}`;
        });

        container.appendChild(card); // Adiciona o card ao contêiner
    });
}


//PARA LAMMECS
// Extrai o parâmetro 'categoria' da URL
function getLammecsDaURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('lammecs');
}

// Filtra os cursos pela lammecs
function filtrarCursosPorLammecs(lammecs) {
    return cursos.filter(curso => curso.lammecs.some(item => item.toLowerCase() === lammecs.toLowerCase()));
}

// Gera os cards para a página categorias.html
function gerarCardsParaLammecs(lammecFiltrados) {
    const container = document.querySelector("#container"); // Contêiner onde os cards serão exibidos
    container.innerHTML = ""; // Limpa os cards existentes

    lammecFiltrados.forEach(curso => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${curso.imagem}" alt="${curso.categoria}">
        `;

        // Adiciona o evento de clique para redirecionar à página de detalhes
        card.addEventListener("click", () => {
            const urlParams = new URLSearchParams();
            urlParams.append('id', curso.id);
            urlParams.append('title', curso.title);
            urlParams.append('title', curso.title);
            urlParams.append('imagem', curso.imagem); 
            urlParams.append('categoria', curso.categoria);
            urlParams.append('description', curso.description);
            urlParams.append('metadata', JSON.stringify(curso.metadata)); // Enviar os metadados como JSON
            urlParams.append('tags', curso.tags.join(", ")); // Convertendo o array de tags em string

            // Redireciona para detalhes.html
            window.location.href = `/Frontend/detalhes.html?${urlParams.toString()}`;
        });

        container.appendChild(card); // Adiciona o card ao contêiner
    });
}

//PARA PESQUISAS
// Exibe o overlay da pesquisa
function abrirPesquisa() {
    document.getElementById('pesquisa-overlay').style.display = 'block';
}

// Fecha o overlay da pesquisa
function fecharPesquisa() {
    document.getElementById('pesquisa-overlay').style.display = 'none';
}

// Atualiza a lista de sugestões enquanto o usuário digita
document.getElementById('pesquisa-input').addEventListener('input', function () {
    const input = this.value.toLowerCase();
    const sugestoesList = document.getElementById('sugestoes-list');
    sugestoesList.innerHTML = ''; // Limpa sugestões anteriores

    if (input) {
        const sugestoes = cursos.filter(curso => curso.title.toLowerCase().includes(input));
        sugestoes.forEach(curso => {
            const li = document.createElement('li');
            li.textContent = curso.title;
            li.style.cursor = "pointer";
            li.style.padding = "5px 10px";
            li.style.border = "1px solid #ccc";
            li.style.borderRadius = "4px";
            li.style.marginBottom = "5px";
            li.style.background = "#f9f9f9";

            li.addEventListener('click', () => {
                // Redireciona para pesquisas.html com os parâmetros do curso
                const urlParams = new URLSearchParams({
                    id: curso.id,
                    title: curso.title,
                    categoria: curso.categoria,
                    imagem: curso.imagem,
                    description: curso.description
                });
                window.location.href = `/Frontend/pesquisas.html?${urlParams.toString()}`;
            });

            sugestoesList.appendChild(li);
        });
    }
});

function inscreverUsuarioNoCurso(cursoId) {
    if (!cursoId) {
      alert("Erro: ID do curso não encontrado.");
      return;
    }
  
    // Obter dados do usuário logado
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      const currentUser = JSON.parse(localStorage.getItem(userData.username)) || {};
      currentUser.cursosInscritos = currentUser.cursosInscritos || [];
  
      // Adicionar curso à lista de cursos inscritos
      if (!currentUser.cursosInscritos.includes(cursoId)) {
        currentUser.cursosInscritos.push(cursoId);
        localStorage.setItem(userData.username, JSON.stringify(currentUser));
        alert(`Você se inscreveu com sucesso no curso de ID: ${cursoId}`);
      } else {
        alert("Você já está inscrito neste curso.");
      }
    } else {
      alert("Erro: Usuário não encontrado.");
    }
  }
  

  
function mostrarCursosDoUsuario() {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (!userData || !userData.username) {
      alert("Nenhum usuário logado.");
      return;
    }
  
    const storedUser = JSON.parse(localStorage.getItem(userData.username));
    if (!storedUser || !storedUser.cursosInscritos || storedUser.cursosInscritos.length === 0) {
      alert("Nenhum curso inscrito encontrado para este usuário.");
      return;
    }
  
    // Buscar cursos inscritos no array global 'cursos'
    const cursosInscritos = storedUser.cursosInscritos.map((id) => 
      cursos.find((curso) => curso.id === id)
    ).filter(curso => curso); // Filtra possíveis valores null ou undefined
  
    // Renderizar na interface
    const cursosContainer = document.getElementById("cursosContainer");
    cursosContainer.innerHTML = ""; // Limpar o container antes de adicionar novos cursos
  
    cursosInscritos.forEach((curso) => {
      if (curso) {
        const cursoHTML = `
          <div class="curso-card">
            <img src="${curso.imagem}" alt="${curso.title}" class="curso-imagem"/>
        `;
        cursosContainer.innerHTML += cursoHTML;
      }
    });
  }
  
  function redirecionarParaCurso(cursoId) {
    // Redireciona para a página de detalhes do curso
    window.location.href = `/detalhes.html?id=${cursoId}`;
  }
  
  

  // Função para abrir o modal
function abrirModal() {
    const modal = document.getElementById("novo-curso-container");
    modal.style.display = "flex";
  }
  
  // Função para fechar o modal
  function fecharModal() {
    const modal = document.getElementById("novo-curso-container");
    modal.style.display = "none";
  }
  
  // Função para adicionar um curso
  function adicionarCurso() {
    const title = document.getElementById("curso-title").value;
    const subtitle = document.getElementById("curso-subtitle").value;
    const description = document.getElementById("curso-description").value;
    const imagem = document.getElementById("curso-imagem").value || "/Frontend/img/default.png";
    const categoria = document.getElementById("curso-categoria").value;
    const anoLancamento = document.getElementById("curso-ano").value;
    const tags = document.getElementById("curso-tags").value.split(",").map(tag => tag.trim());
  
    const novoCurso = {
      id: cursos.length + 1, // ID automático
      title,
      subtitle,
      description,
      imagem,
      categoria,
      metadata: { anoLancamento: Number(anoLancamento) },
      tags
    };
  
    cursos.push(novoCurso); // Adiciona ao array de cursos
    carregarCursos(); // Atualiza a lista de cursos
    fecharModal(); // Fecha o modal
  }
  
  

  