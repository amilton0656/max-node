const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node',
    password: '#Mysql313131'
})

module.exports = pool.promise()