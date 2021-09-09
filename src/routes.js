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
// Deletar Endereço
routes.delete('/enderecos-usuario/:id_endereco_usuario', enderecos.excluirEndereco);
// Atualizar Endereço
routes.put('/enderecos-usuario/:id_endereco_usuario', enderecos.atualizarEndereco);
// Listar Endereços
routes.get('/enderecos-usuario/:id_usuario', enderecos.listarEnderecos);
// Obter Endereços
routes.get('/enderecos-usuario/:id_endereco_usuario', enderecos.obterEndereco);

module.exports = routes;