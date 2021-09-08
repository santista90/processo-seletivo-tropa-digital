const express = require('express');
const usuarios = require('./controllers/usuarios');

const routes = express();

// Cadastrar Usuário
routes.post('/usuarios', usuarios.cadastrarUsuario);
// Listar Usuários
routes.get('/usuarios', usuarios.listarUsuarios);


module.exports = routes;