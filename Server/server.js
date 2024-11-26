const express = require('express');
const path = require('path');

const app = express();

// Serve os arquivos estáticos da pasta 'Frontend'
app.use('/Frontend', express.static(path.join(__dirname, '../Frontend')));

// Rota para a página inicial
app.get('/Eruditus', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend', 'index.html'));
});

// Rota para a página de login
app.get('/Eruditus/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend', 'login.html'));
});

// Rota para a página de registro
app.get('/Eruditus/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend', 'registro.html'));
});

// Configuração do servidor para rodar na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});


