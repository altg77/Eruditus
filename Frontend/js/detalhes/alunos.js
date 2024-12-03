const students = Array.from({ length: 20 }, (_, i) => `Aluno ${i + 1}`);

function showStudents() {
    const contentList = document.querySelector(".content-list");
    contentList.innerHTML = ""; // Limpa o conteúdo atual

    students.forEach(student => {
        const studentElement = document.createElement("div");
        studentElement.classList.add("student");
        studentElement.textContent = student;
        contentList.appendChild(studentElement);
    });
}
