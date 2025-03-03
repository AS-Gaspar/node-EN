const http = require('http')

const express = require('express')

const app = express()

app.use((res, req, next) => {
    console.log("In the middleware here")
    next() // Faz seguir para o próximo objeto de solicitação ser executado
})

app.use((res, req, next) => {
    console.log("In another middleware here")
})

const server = http.createServer(app)

server.listen(3000)