const professor = "Alicia Martins"; // Nome do professor
const students = [
    "Ana Souza", "Carlos Silva", "Fernanda Oliveira", "Gabriel Costa", "Isabela Santos",
    "João Pereira", "Juliana Rocha", "Lucas Lima", "Mariana Alves", "Miguel Souza",
    "Paula Costa", "Pedro Oliveira", "Raquel Fernandes", "Ricardo Lima", "Roberta Dias",
    "Sabrina Rocha", "Thiago Martins", "Vanessa Alves", "Vinícius Lima", "Vitoria Silva"
];

function showStudents() {
    const contentList = document.querySelector(".content-list");
    contentList.innerHTML = ""; // Limpa o conteúdo atual

    // Exibe o nome do professor acima da lista de alunos
    const professorElement = document.createElement("div");
    professorElement.classList.add("professor");
    professorElement.textContent = `Professor(a): ${professor}`;
    contentList.appendChild(professorElement);

    // Exibe a lista de alunos
    const studentsTitle = document.createElement("h3");
    studentsTitle.textContent = "Alunos:";
    contentList.appendChild(studentsTitle);

    students.forEach(student => {
        const studentElement = document.createElement("div");
        studentElement.classList.add("student");
        studentElement.textContent = student;
        contentList.appendChild(studentElement);
    });
}
