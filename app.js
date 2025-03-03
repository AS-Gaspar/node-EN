const http = require('http')
const express = require('express')
const app = express()
const PORT = 3000

app.use('/product-page', (req, res, next) => {
    console.log("In another middleware here")
    res.send('<h1>The product page</h1>')
})

app.use('/', (req, res, next) => {
    console.log("In another middleware here")
    res.send('<h1>Hello guys</h1>')
})

 //const server = http.createServer(app)
 //server.listen(3000)
 app.listen(PORT)