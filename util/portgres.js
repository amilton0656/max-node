
const Client = require('pg').Client

const cliente = new Client({
    user: 'postgres',
    password: 'cotaatoc',
    host: 'localhost',
    port: '5432',
    database: 'cota'
})

cliente.connect()
cliente.query('select nome from empreendimentos')
.then(result => {
    console.log(result)
})

module.exports = cliente

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node',
//     password: '#Mysql313131'
// })

// module.exports = pool.promise()

// let { Client } = require('pg');
//   conn = new Client({
//     host: 'localhost',
//     database: 'cota',
//     user: 'postgres',
//     password: 'cotaatoc',
//     port: 5432,
//   });
//   conn.connect();