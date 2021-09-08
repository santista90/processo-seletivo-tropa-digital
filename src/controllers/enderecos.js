const knex = require('../config');
const schemaCadastrarEndereco = require('../validation/schemaCadastrarEndereco');



const cadastrarEndereco = async (req, res) => {
    const { id_usuario, logradouro, numero, cidade, uf, cep, bairro, complemento } = req.body;

    try {
        await schemaCadastrarEndereco.validate(req.body);

        const usuario = await knex('usuarios').where({ id_usuario });

        if(usuario.length === 0){
            return res.status(400).json("Usuário não encontrado");
        }

        
        const endereco = await knex('endereco_usuarios').insert({ id_usuario, logradouro, numero, cidade, uf, cep, bairro, complemento });


        if (endereco.length === 0) {
            return res.status(400).json("O Endereço não foi cadastrado.");
        }

        return res.status(200).json("Ação Realizada com sucesso");

    } catch (error) {
        return res.status(400).json(error.message);
    }
}


module.exports = {
    cadastrarEndereco
}