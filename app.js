const http = require('http')
const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const rootDir = require('./util/path')

const shopRoutes = require('./routes/shop')
const adminRoutes = require('./routes/admin')

const PORT = 3000

app.use(bodyParser.urlencoded({extended: false}))

app.use(shopRoutes)
app.use('/admin', adminRoutes)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
})

 //const server = http.createServer(app)
 //server.listen(3000)
 app.listen(PORT)