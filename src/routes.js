const express = require('express');
const usuarios = require('./controllers/usuarios');

const routes = express();

// Cadastrar Usuário
routes.post('/usuarios', usuarios.cadastrarUsuario);
// Listar Usuários
routes.get('/usuarios', usuarios.listarUsuarios);
// Obter Usuário
routes.get('/usuarios/:id_usuario', usuarios.obterUsuario);
// Deletar Usuário
routes.delete('/usuarios/:id_usuario', usuarios.excluirUsuario);


module.exports = routes;