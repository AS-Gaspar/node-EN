const Product = require("../models/product")
const Cart = require("../models/cart")

exports.getProducts = (req, res) => {
  Product.findAll()
    .then((products) => {
       res.render("shop/product-list", {
        prods: products,
        pageTitle: "All products",
        path: "/shop/product-list"
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.getProduct = (req, res) => {
  const prodId = req.params.productId
  Product.findAll({where: { id: prodId } })
    .then(products => {
      res.render("shop/product-detail", {
        product: products[0],
        pageTitle: products[0].title,
        path: "/products",
      })
    })
    .catch((err) => console.log(err))
}

exports.getIndex = (req, res) => {
  Product.findAll()
    .then((products) => {
      res.render("shop/index", {
        prods: products,
        pageTitle: "Shop",
        path: "/shop/procuct-list",
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.getCart = (req, res) => {
  Cart.getCart((cart) => {
    Product.fetchAll((products) => {
      const cartProducts = []
      for (product of products) {
        const cartProductData = cart.products.find(
          (prod) => prod.id === product.id
        )
        if (cartProductData) {
          cartProducts.push({ productData: product, qty: cartProductData.qty })
        }
      }
      res.render("shop/cart", {
        path: "/cart",
        pageTitle: "Your Cart",
        products: cartProducts,
      })
    })
  })
}

exports.postCart = (req, res) => {
  const prodId = req.body.productId
  Product.findByPk(prodId, (product) => {
    Cart.addProduct(prodId, product.price)
  })
  res.redirect("/cart")
}

exports.postCartDeleteProduct = (req, res) => {
  const prodId = req.body.productId
  Product.findByPk(prodId, (product) => {
    Cart.deleteProduct(prodId, product.price)
    res.redirect("./cart")
  })
}

exports.getOrders = (req, res) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Orders",
  })
}

exports.getCheckout = (req, res) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  })
}
