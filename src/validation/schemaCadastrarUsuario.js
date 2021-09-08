const yup = require('./config');

const schemaCadastrarUsuario = yup.object().shape({
    nome: yup.string().required(),
    sobrenome: yup.string().required(),
    email: yup.string().email().required(),
    telefone: yup.string().required(),
    cpf: yup.string().required()
});


module.exports =  schemaCadastrarUsuario;