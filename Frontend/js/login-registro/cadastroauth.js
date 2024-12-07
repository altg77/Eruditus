document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;
    const newsCheckbox = document.getElementById("news-checkbox");

    const data = {
      username: newUsername,
      password: newPassword,
    };

    if (!newsCheckbox.checked) {
      errorMessage.textContent =
        "Você deve concordar com os Termos de Uso e Política de Privacidade.";
      return;
    }

    fetch("http://localhost:8080/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.status === 409) {
        const errorMessage = document.getElementById("errorMessage");
        errorMessage.textContent = "Nome de usuário já existe!";
        return;
      }
      return response.json();
    });
    window.location.href = "/Frontend/login.html";
  });
