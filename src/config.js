const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        database: 'tropadigital',
        password: 'password',
    }
});

module.exports = knex;

