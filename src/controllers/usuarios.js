const knex = require('../config');


const cadastrarUsuario = async (req, res) => {
    const { nome, sobrenome, email, telefone, cpf } = req.body;

    try {

        const emailExistente = await knex('usuarios').where({ email }).first();
        const cpfExistente = await knex('usuarios').where({ cpf }).first();

        console.log(emailExistente)

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

        return res.status(200).json('Usuário cadastrado com sucesso.');

    } catch (error) {
        return res.status(400).json(error.message);
    }
}


module.exports = {
    cadastrarUsuario
}