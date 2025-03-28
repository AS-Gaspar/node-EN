const http = require('http')
const path = require('path')

const express = require('express')

const bodyParser = require('body-parser')
const app = express()

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const PORT = 3000

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminData.routes)
app.use(shopRoutes)

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

 //const server = http.createServer(app)
 //server.listen(3000)
app.listen(PORT, () => {
    console.log(`Server listen on ${PORT}`)
})