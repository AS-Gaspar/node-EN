const express = require('express')
const adminController = require('../controllers/admin')
const router = express.Router()

router.get('/add-product', adminController.getAddProduct)
router.get('/products', adminController.getProducts)
router.post('/add-product', adminController.postAddProduct)
router.get('/edit-product/:productId', adminController.getEditProduct)
router.post('/edit-product', adminController.postEditProduct)
<<<<<<< HEAD
router.post('/delete-product'), adminController.postDeleteProduct
=======
router.post('/delete-product', adminController.postDeleteProduct)
>>>>>>> 6361bd53d2eddcdf07ab315ace4af66f9641dd48

module.exports = router