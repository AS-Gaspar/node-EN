const fs = require("fs")
const path = require("path")

const pathFile = path.join(
  path.dirname(require.main.filename),
  "data",
  "cart.json"
)

module.exports = class Cart {
  static addProduct(id, productPrice) {
    // Fetch the previous cart
    fs.readFile(pathFile, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 }
      if (!err) {
        cart = JSON.parse(fileContent)
      }
      // Analyze the cart => find existing product
      const existingProductIndex = cart.products.findIndex(
        (prod) => prod.id === id
      )
      const existingProduct = cart.products[existingProductIndex]
      let updatedProduct
      // Add new product and increase quantity
      if (existingProduct) {
        updatedProduct = { ...existingProduct }
        updatedProduct.qty = updatedProduct.qty + 1
        cart.products = [...cart.products]
        cart.products[existingProductIndex] = updatedProduct
      } else {
        updatedProduct = { id: id, qty: 1 }
        cart.products = [...cart.products, updatedProduct]
      }
      cart.totalPrice = cart.totalPrice + +productPrice
      fs.writeFile(pathFile, JSON.stringify(cart), (err) => {
        console.log(err)
      })
    })
  }
  static deleteProduct(id, productPrice) {
    fs.readFile(pathFile, (err, fileContent) => {
      if (err) {
        return
      }
      const updatedCart = { ...JSON.parse(fileContent) }
      const product = updatedCart.products.find((prod) => prod.id === id)
      if (!product) {
        return
      }
      const productQty = product.qty
      updatedCart.products = updatedCart.products.filter(
        (prods) => prods.id !== id
      )
      updatedCart.totalPrice =
        updatedCart.totalPrice - productPrice * productQty

      fs.writeFile(pathFile, JSON.stringify(updatedCart), (err) => {
        console.log(err)
      })
    })
  }

  static getCart(callback) {
    fs.readFile(pathFile, (err, fileContent) => {
      const cart = JSON.parse(fileContent)
      if (err) {
        callback(null)
      } else {
        callback(cart)
      }
    })
  }
}
