const lives = {
    title: "Live: Aula 1", 
    desc: "Desenvolva melhor seus conhecimentos.", 
    img: "path/to/image1.jpg"
};

const episodes = {
    1: [
        { title: "T1 EP.1: Introdução ao Conhecimento", desc: "Explore os conceitos fundamentais.", img: "path/to/image1.jpg" },
        { title: "T1 EP.2: Primeiros Passos", desc: "Descubra as bases para o sucesso.", img: "path/to/image2.jpg" }
    ],
    2: [
        { title: "T2 EP.1: Construindo Fundamentos", desc: "Fortaleça sua base de aprendizado.", img: "path/to/image3.jpg" },
        { title: "T2 EP.2: Explorando Novas Abordagens", desc: "Aprofunde-se em técnicas inovadoras.", img: "path/to/image4.jpg" }
    ],
    3: [
        { title: "T3 EP.1: Estratégias Efetivas", desc: "Desenvolva planos de ação impactantes.", img: "path/to/image5.jpg" },
        { title: "T3 EP.2: Superando Desafios", desc: "Encontre soluções para problemas comuns.", img: "path/to/image6.jpg" }
    ],
    4: [
        { title: "T4 EP.1: Técnicas Avançadas", desc: "Eleve seu conhecimento ao próximo nível.", img: "path/to/image7.jpg" },
        { title: "T4 EP.2: Inovação em Prática", desc: "Descubra como aplicar ideias criativas.", img: "path/to/image8.jpg" }
    ],
    5: [
        { title: "T5 EP.1: Networking e Colaboração", desc: "Aprenda a trabalhar em equipe e conectar-se.", img: "path/to/image9.jpg" },
        { title: "T5 EP.2: Liderança no Aprendizado", desc: "Desenvolva habilidades para liderar projetos.", img: "path/to/image10.jpg" }
    ],
    6: [
        { title: "T6 EP.1: Análise de Cenários", desc: "Entenda como tomar decisões informadas.", img: "path/to/image11.jpg" },
        { title: "T6 EP.2: Planejamento Estratégico", desc: "Desenvolva um planejamento eficaz.", img: "path/to/image12.jpg" }
    ],
    7: [
        { title: "T7 EP.1: Criatividade Aplicada", desc: "Use a criatividade para resolver problemas.", img: "path/to/image13.jpg" },
        { title: "T7 EP.2: Pensamento Crítico", desc: "Analise e interprete situações complexas.", img: "path/to/image14.jpg" }
    ],
    8: [
        { title: "T8 EP.1: Foco no Resultado", desc: "Mantenha o objetivo em mente durante o processo.", img: "path/to/image15.jpg" },
        { title: "T8 EP.2: Feedback e Melhoria", desc: "Aprenda com experiências para aprimorar.", img: "path/to/image16.jpg" }
    ],
    9: [
        { title: "T9 EP.1: Ferramentas Essenciais", desc: "Domine as principais ferramentas disponíveis.", img: "path/to/image17.jpg" },
        { title: "T9 EP.2: Metodologias de Sucesso", desc: "Implemente processos comprovados.", img: "path/to/image18.jpg" }
    ],
    10: [
        { title: "T10 EP.1: Gestão de Tempo", desc: "Organize suas prioridades de forma eficaz.", img: "path/to/image19.jpg" },
        { title: "T10 EP.2: Sustentando o Progresso", desc: "Garanta continuidade e consistência.", img: "path/to/image20.jpg" }
    ],
    11: [
        { title: "T11 EP.1: Impacto Social", desc: "Entenda como gerar impacto positivo.", img: "path/to/image21.jpg" },
        { title: "T11 EP.2: Ética e Profissionalismo", desc: "Mantenha padrões elevados em seu trabalho.", img: "path/to/image22.jpg" }
    ],
    12: [
        { title: "T12 EP.1: Recapitulando Conquistas", desc: "Reveja o que foi alcançado até agora.", img: "path/to/image23.jpg" },
        { title: "T12 EP.2: Próximos Passos", desc: "Prepare-se para os desafios futuros.", img: "path/to/image24.jpg" }
    ]
};

function showEpisodes() {
    const season = document.getElementById("season-select").value;
    const contentList = document.querySelector(".content-list");
    contentList.innerHTML = ""; // Limpa o conteúdo atual

    // Adiciona a live no início da lista
    const liveElement = document.createElement("div");
    liveElement.classList.add("episode", "live");  // Aplica a mesma classe de estilo dos episódios
    liveElement.innerHTML = `
        <img src="${lives.img}" alt="${lives.title}">
        <div class="episode-info">
            <div class="episode-title">${lives.title}</div>
            <div class="episode-desc">${lives.desc}</div>
        </div>
    `;
    contentList.appendChild(liveElement);

    //Modificar 
    const selector = document.querySelector(".actividade-selector");
    selector.style.display = "none"; 

    // Alterar a navegação para Episódios ao selecionar a temporada
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('selected');
    });

    // Adiciona a classe "selected" no item de Episódios
    const episodeNavItem = document.querySelector('.nav-item[href="#episodios"]');
    episodeNavItem.classList.add('selected');

    // Adiciona os episódios da temporada selecionada
    episodes[season].forEach(episode => {
        const episodeElement = document.createElement("div");
        episodeElement.classList.add("episode");

        episodeElement.innerHTML = `
            <img src="${episode.img}" alt="${episode.title}">
            <div class="episode-info">
                <div class="episode-title">${episode.title}</div>
                <div class="episode-desc">${episode.desc}</div>
            </div>
        `;
        contentList.appendChild(episodeElement);
    });
}
