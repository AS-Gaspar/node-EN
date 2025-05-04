const mariadb = require('mariadb')

const pool = mariadb.createPool({
    host: "localhost",
    user: "root",
    database: "node",
    password: "Alexa10!"
})