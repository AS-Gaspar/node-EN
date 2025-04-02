const path = require('path')

const express = require('express')

const rootDir = require('../util/path')

const products = []

const router = express.Router()

router.get('/add-product', (req, res) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formCSS: true,
        productCSS: true,
        activeAddProduct: true 
    })
})

// Http method to filter: app.get .post .patch .put .delete
router.post('/add-product', (req, res) => {
    products.push({ title: req.body.title })
    res.redirect('/')
})

exports.routes = router
exports.products = products 