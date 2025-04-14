const express = require('express');
const shopController = require('../controllers/shop')
const router = express.Router()

router.get('/', shopController.getIndex)

router.get('/products', shopController.getProducts)
router.get('/products/:productId', shopController.getProduct)
router.get('/cart', shopController.getCart)
router.post('/cart', shopController.postCart)
<<<<<<< HEAD
=======
router.post('/cart-delete-item', shopController.postCartDeleteProduct)
>>>>>>> 6361bd53d2eddcdf07ab315ace4af66f9641dd48
router.get('/orders', shopController.getOrders)
router.get('/checkout', shopController.getCheckout)

module.exports = router