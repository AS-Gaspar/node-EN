const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin')

const path = require('path');

const router = express.Router()

router.get('/', (req, res) => {
    const products = adminData.products
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    })
    console.log('shop.js', adminData.products)
})

module.exports = router