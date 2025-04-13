const Product = require('../models/product')

exports.getAddProduct = (req, res) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        editing: false
    })
}

exports.getProducts = (req, res) => {
    Product.fetchAll((products) => {
        res.render('admin/products', {
            prods: products,
            pageTitle: 'Admin products',
            path: '/admin/products',
        })
    })
}

exports.getEditProduct = (req, res) => {
    const editMode = req.query.edit
    if (!editMode) {
        return res.redirect('/')
    }
    const prodId = req.params.productId
    Product.findById(prodId, product => {
        if (!product) {
            return res.redirect('/')
        }
        res.render('admin/edit-product', {
            pageTitle: 'Edit Product',
            path: '/admin/edit-product',
            editing: editMode,
            product: product
        })
    })
}

exports.postEditProduct = (req, res) => {
    const prodId = req.body.productId 
    const updateTitle = req.body.title
    const updateImageUrl = req.body.imageUrl
    const updateDescription = req.body.description
    const updatePrice = req.body.price
    const updateProduct = new Product(
        prodId,
        updateTitle,
        updateImageUrl,
        updateDescription,
        updatePrice
    )
    updateProduct.save()
    res.redirect('/admin/products')
}

exports.postDeleteProduct = (req, res) => {
    const prodId = res.body.productId
    Product.deleteById(prodId)
    res.redirect('/admin/products')
}

exports.postAddProduct = (req, res) => {
    const title = req.body.title
    const imageURL = req.body.imageUrl
    const description = req.body.description
    const price = req.body.price
    const product = new Product(null, title, imageURL, description, price)
    product.save()
    res.redirect('/')
}