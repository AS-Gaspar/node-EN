const path = require('path')
const express = require('express')
const app = express()
const PORT = 3000
const db = require('./util/database')

app.set('view engine', 'ejs')
app.set('views', './views')

db.execute('SELECT * FROM products')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const errorRoutes = require('./controllers/404')

app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)
app.use(shopRoutes)
app.use(errorRoutes.errorPage)

app.listen(PORT, () => {
    console.log(`Server listen on ${PORT}`)
})
