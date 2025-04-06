const fs = require('fs')
const path = require('path')

const pathFile = path.join(
    path.dirname(require.main.filename),
    'data',
    'products.json'
)

const getProductsFromFile = cb => {
    fs.readFile(pathFile, (err, fileContent) => {
        if (err) {
            cb([])
        } else {
            cb(JSON.parse(fileContent))
        }
    })
}

module.exports = class Product {
    constructor(t) {
        this.title = t
    }

    save() {
        getProductsFromFile(products => {
            products.push(this)
            fs.writeFile(pathFile, JSON.stringify(products), (err) => {
                console.log(err)
            })
        })
    }

    static fetchAll(cb) {
        getProductsFromFile(cb)
    }
}