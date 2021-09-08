const yup = require('./config');

const schemaCadastrarEndereco = yup.object().shape({
    id_usuario: yup.number().integer().required(),
    logradouro: yup.string().required(),
    numero: yup.string().required(),
    cidade: yup.string().required(),
    uf: yup.string().required(),
    cep: yup.string().required(),
    bairro: yup.string().required(),
    complemento: yup.string()
});


module.exports =  schemaCadastrarEndereco;