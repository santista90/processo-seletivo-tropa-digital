const express = require('express');
const usuarios = require('./controllers/usuarios');

const routes = express();

// Cadastrar Usuário
routes.post('/usuarios', usuarios.cadastrarUsuario);


module.exports = routes;