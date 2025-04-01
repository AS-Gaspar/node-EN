const http = require('http')
const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')
app.set('views', './views')

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const PORT = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminData.routes)
app.use(shopRoutes)

app.use((req, res) => {
    res.status(404).render('404', { pageTitle: "Page not found!"} )
})

 //const server = http.createServer(app)
 //server.listen(3000)
app.listen(PORT, () => {
    console.log(`Server listen on ${PORT}`)
})