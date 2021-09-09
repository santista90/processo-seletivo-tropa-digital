const express = require('express');
const usuarios = require('./controllers/usuarios');
const enderecos = require('./controllers/enderecos');

const routes = express();

// Cadastrar Usuário
routes.post('/usuarios', usuarios.cadastrarUsuario);
// Listar Usuários
routes.get('/usuarios', usuarios.listarUsuarios);
// Obter Usuário
routes.get('/usuarios/:id_usuario', usuarios.obterUsuario);
// Deletar Usuário
routes.delete('/usuarios/:id_usuario', usuarios.excluirUsuario);
// Atualizar Usuário
routes.put('/usuarios/:id_usuario', usuarios.atualizarUsuario);

// Cadastrar Endereço
routes.post('/enderecos-usuario', enderecos.cadastrarEndereco);
// Listar Endereços
routes.get('/enderecos-usuario/:id_usuario', enderecos.listarEnderecos);
// Listar Endereços
routes.get('/enderecos-usuario/:id_endereco_usuario', enderecos.obterEndereco);
// Deletar Endereço
routes.delete('/enderecos-usuario/:id_endereco_usuario', enderecos.excluirEndereco);
// Atualizar Usuário
routes.put('/enderecos-usuario/:id_endereco_usuario', enderecos.atualizarEndereco);

module.exports = routes;