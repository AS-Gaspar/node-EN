// Arquivo que será executado em um cpc em um servidor no final
const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method ,req.headers)
})

server.listen(3000)