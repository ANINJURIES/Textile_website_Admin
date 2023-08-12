const fs = require('fs');
const data = JSON.parse(fs.readFileSync('/Users/Vedant/Documents/Vedant/Programming/React/Projects/NewTextile/back/data/data.json', 'utf-8'));
const products = data.products;

exports.createProduct = (req, res) => {
    console.log(req.body);
    products.push(req.body);
    res.send("Added")
}

exports.getProduct = (req, res) => {

    const id = +req.params.id;
    const response = products.find(p => p.id === id);
    res.send(response)

}

exports.getProducts = (req, res) => {

    // res.setHeader('Content-Type', 'application/json')  // just add in header json data is coming.
    res.send(products)
}

exports.replaceProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id)
    products.splice(productIndex, 1, { ...req.body, id: id })   // remember req.body
    res.send("Updated (put)")
}

exports.updateProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id)
    const product = products[productIndex];
    products.splice(productIndex, 1, { ...product, ...req.body })
    res.send("Updated (patch)")
}

exports.deleteProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id)
    const product = products[productIndex];
    products.splice(productIndex, 1)
    res.send("Deleted")
}
