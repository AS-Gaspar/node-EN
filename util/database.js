const mysql = require('mysql2')

const pool = mysql.createPool({
    host: "localhost",
    user: "alexandre",
    database: "node",
    password: "Alexa10!"
})

module.exports = pool.promise()