document.addEventListener("DOMContentLoaded", () => {
    // Pega o parâmetro 'id' da URL
    const urlParams = new URLSearchParams(window.location.search);
    const cursoId = urlParams.get('id');
    const cursoTitle = urlParams.get('title');
    const cursoDescription = urlParams.get('description');

    // Atualiza os detalhes do curso na página
    document.getElementById("curso-title").textContent = cursoTitle;
    document.getElementById("curso-description").textContent = cursoDescription;

    // Função de inscrição
    function inscreverCurso(cursoId) {
        if (!cursoId) {
            alert("ID do curso não encontrado!");
            return;
        }

        // Recupera as informações do usuário logado
        const userData = JSON.parse(localStorage.getItem("userData"));

        // Se o usuário não estiver logado, mostra um alerta
        if (!userData || !userData.username) {
            alert("Você precisa estar logado para se inscrever em um curso.");
            return;
        }

        // Recupera o usuário do localStorage com base no nome de usuário
        let user = JSON.parse(localStorage.getItem(userData.username));

        if (!user) {
            alert("Usuário não encontrado no localStorage!");
            return;
        }

        // Verifica se o curso já está na lista de cursos inscritos
        if (!user.cursosInscritos.includes(cursoId)) {
            user.cursosInscritos.push(cursoId); // Adiciona o ID do curso à lista de cursos inscritos
            localStorage.setItem(userData.username, JSON.stringify(user)); // Salva as alterações no localStorage
            alert(`Você se inscreveu no curso: ${cursoTitle}`);
        } else {
            alert("Você já está inscrito neste curso!");
        }
    }

    // Atualiza o botão de inscrição para chamar a função inscreverCurso com o ID do curso
    const inscreverBtn = document.getElementById("inscrever-bnt");
    if (inscreverBtn) {
        inscreverBtn.addEventListener("click", () => {
            inscreverCurso(cursoId); // Passa o id do curso ao clicar
        });
    }
});
