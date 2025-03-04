const http = require('http')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

const shopRoutes = require('./routes/shop')
const adminRoutes = require('./routes/admin')

const PORT = 3000

app.use(bodyParser.urlencoded({extended: false}))

app.use(shopRoutes)
app.use('/admin', adminRoutes)

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found!</h1>')
})

 //const server = http.createServer(app)
 //server.listen(3000)
 app.listen(PORT)