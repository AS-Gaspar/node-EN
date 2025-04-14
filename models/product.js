const fs = require('fs')
const path = require('path')
<<<<<<< HEAD

=======
>>>>>>> 6361bd53d2eddcdf07ab315ace4af66f9641dd48
const Cart = require('./cart')

const pathFile = path.join(
    path.dirname(require.main.filename),
    'data',
    'products.json'
)

const getProductsFromFile = callback => {
    fs.readFile(pathFile, (err, fileContent) => {
        if (err) {
            callback([])
        } else {
            callback(JSON.parse(fileContent))
        }
    })
}

module.exports = class Product {
    constructor(id, title, imageUrl, description, price) {
        this.id = id,
            this.title = title,
            this.imageUrl = imageUrl,
            this.description = description,
            this.price = price
    }

    save() {
        getProductsFromFile(products => {
            if (this.id) {
                const existingProductIndex = products.findIndex(
                    prod => prod.id === this.id
                )
                const updatedProducts = [...products]
                updatedProducts[existingProductIndex] = this
                fs.writeFile(pathFile, JSON.stringify(updatedProducts), err => {
                    console.log(err)
                })
            } else {
                this.id = Math.random().toString()
                products.push(this)
                fs.writeFile(pathFile, JSON.stringify(products), err => {
                    console.log(err)
                })
            }
        })
    }

    static deleteById(id) {
        getProductsFromFile(products => {
            const product = products.find(prod => prod.id === id)
            const updatedProducts = products.filter(prod => prod.id !== id)
            fs.writeFile(pathFile, JSON.stringify(updatedProducts), err => {
                if (!err) {
                    Cart.deleteProduct(id, product.price)
                }
            })
        })
    }

    static fetchAll(callback) {
        getProductsFromFile(callback)
    }

    static findById(id, callback) {
        getProductsFromFile(products => {
            const product = products.find(product => product.id === id)
            callback(product)
        })
    }
}