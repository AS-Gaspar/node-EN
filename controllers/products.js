const products = []

exports.getAddProduct = (req, res) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formCSS: true,
        productCSS: true,
        activeAddProduct: true 
    })
}

exports.postAddProduct = (req, res) => {
    products.push({ title: req.body.title })
    res.redirect('/')
    console.log('shop.js', { product: req.body.title })
} 

exports.getProducts = (req, res) => {
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    })
}