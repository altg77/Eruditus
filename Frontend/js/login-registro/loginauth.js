document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const data = {
      username: username,
      password: password,
    };
    fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("");
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("authToken", data.token);
        window.location.href = "/Frontend/index.html";
      })
      .catch((error) => {
        const errorMessage = document.getElementById("errorMessage");
        errorMessage.textContent = "Usuário ou senha incorretos. Criar conta?";
        errorMessage.innerHTML += `<br><a href="/Frontend/registro.html" style="color: #1d3557; text-decoration: none;">Criar Conta</a>`;
      });
  });
