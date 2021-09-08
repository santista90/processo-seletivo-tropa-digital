const knex = require('../config');
const schemaCadastrarUsuario = require('../validation/schemaCadastrarUsuario');


const cadastrarUsuario = async (req, res) => {
    const { nome, sobrenome, email, telefone, cpf } = req.body;

    try {
        await schemaCadastrarUsuario.validate(req.body);

        const emailExistente = await knex('usuarios').where({ email }).first();
        const cpfExistente = await knex('usuarios').where({ cpf }).first();

        if (emailExistente) {
            return res.status(400).json("O email já existe");
        }

        if (cpfExistente) {
            return res.status(400).json("CPF já cadastrado");
        }

        const usuario = await knex('usuarios').insert({ nome, sobrenome, email, telefone, cpf });


        if (usuario.length === 0) {
            return res.status(400).json("O Usuário não foi cadastrado.");
        }

        return res.status(200).json("Ação Realizada com sucesso");

    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const listarUsuarios = async (req, res) => {

    try {

        const usuarios = await knex('usuarios');

        if(usuarios.length === 0){
            return res.status(400).json("Não possui usuarios cadastrados");
        }

        return res.status(200).json(usuarios);

    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const obterUsuario = async (req, res) => {
    const { id_usuario } = req.params;

    try {

        const usuario = await knex('usuarios').where({ id_usuario });

        if(usuario.length === 0){
            return res.status(400).json("Usuário não encontrado");
        }

        return res.status(200).json(usuario);

    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const excluirUsuario = async (req, res) => {
    const { id_usuario } = req.params;

    try {

        const usuario = await knex('usuarios').where({ id_usuario }).del();

        if(!usuario){
            return res.status(400).json("Usuário não encontrado");
        }

        return res.status(200).json("Usuário Excluido com sucesso");

    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const atualizarUsuario = async (req, res) => {
    const { nome, sobrenome, email, telefone, cpf } = req.body;
    const { id_usuario } = req.params;

    try {

        const usuarioEncontrado = await knex('usuarios').where({ id_usuario }).first();

        if (!usuarioEncontrado) {
            return res.status(400).json("Usuário não existe");
        }

        const emailExistente = await knex('usuarios').where({ email }).first();
        const cpfExistente = await knex('usuarios').where({ cpf }).first();

        if (emailExistente) {
            return res.status(400).json("O email já existe");
        }

        if (cpfExistente) {
            return res.status(400).json("CPF já cadastrado");
        }

        const usuarioAtualizado = await knex('usuarios').where({ id_usuario }).update({ nome, sobrenome, email, telefone, cpf });

        if (!usuarioAtualizado) {
            return res.status(400).json("O Usuário não foi atualizado.");
        }

        return res.status(200).json("Ação Realizada com sucesso");

    } catch (error) {
        return res.status(400).json(error.message);
    }
}


module.exports = {
    cadastrarUsuario,
    listarUsuarios,
    obterUsuario,
    excluirUsuario,
    atualizarUsuario
}