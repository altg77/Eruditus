// Captura os parâmetros da URL
const urlParams = new URLSearchParams(window.location.search);

const cursoId = urlParams.get('id'); // Captura o ID do curso
const cursoTitle = urlParams.get('title');
const imageUrl = urlParams.get('imagem'); 
const cursoDescription = urlParams.get('description');
const cursoMetadata = urlParams.get('metadata');
const cursoTags = urlParams.get('tags');


document.body.style.backgroundImage = `linear-gradient(to left, rgba(0, 0, 0, 0.9) 40%, rgba(0, 0, 0, 1)), url('${imageUrl}')`;
document.body.style.backgroundSize = 'cover';  // Garante que a imagem cubra toda a tela
document.body.style.backgroundPosition = 'center center';  // Centraliza a imagem
    

// Preenche os dados na página
document.getElementById("curso-title").textContent = cursoTitle || "Título não disponível";
document.getElementById("curso-description").textContent = cursoDescription || "Descrição não disponível";
document.getElementById("curso-metadata").textContent = cursoMetadata || "Informações adicionais não disponíveis";
document.getElementById("curso-tags").innerHTML = cursoTags ? cursoTags.split(",").map(tag => `<span>${tag}</span>`).join('') : "Tags não disponíveis";


function getUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
        id: urlParams.get('id'),
        title: urlParams.get('title'),
        imagem: urlParams.get('imagem'),
        description: urlParams.get('description'),
        metadata: JSON.parse(urlParams.get('metadata')), // Parse do JSON
        tags: urlParams.get('tags'),
    };
}

function renderMetadata() {
    const params = getUrlParams();
    const cursoMetadata = params.metadata 
        ? `${params.metadata.anoLancamento} | ${params.metadata.temporadas} Temporada(s) |  ${params.metadata.episodios} Episódios` 
        : "Informações adicionais não disponíveis";

    document.getElementById("curso-metadata").textContent = cursoMetadata;

    // Remover temporadas superiores ao número de temporadas disponíveis
    const select = document.getElementById("season-select");
    const temporadas = params.metadata?.temporadas || 0;

    Array.from(select.options).forEach(option => {
        if (parseInt(option.value) > temporadas) {
            select.removeChild(option);
        }
    });
}

document.addEventListener("DOMContentLoaded", renderMetadata);
