// const fs = require('fs');
// const data = JSON.parse(fs.readFileSync('/Users/Vedant/Documents/Vedant/Programming/React/Projects/NewTextile/back/data/data.json', 'utf-8'));
// const products = data.products;
const Fabrics = require("../Model/Model")
const Fabric = Fabrics.FabricModel

exports.createProduct = (req, res) => {

    const FabricData = new Fabric(req.body)   // w have created FabricData object from model, now working on that.

    // .then and .catch handles promises as .then handles fullfilled promise and .catch handles rejected promise
    FabricData.save()
        .then(() => {
            console.log('Save operation');
            res.json(req.body)
        })
        .catch((error) => {
            console.error('An error occurred during save:', error);
            res.send("Error Occured")
        });

}

exports.getProduct = async (req, res) => {

    const id = req.params.id;
    const response = await Fabric.findById(id);
    res.send(response)

}

exports.getProducts = async (req, res) => {

    // res.setHeader('Content-Type', 'application/json')  // just add in header json data is coming.
    const response = await Fabric.find();
    res.send(response)

}

exports.replaceProduct = async (req, res) => {  // put

    const id = req.params.id;
    const options = { new: true }  // to print new updated value in response

    try {
        const response = await Fabric.findOneAndReplace({ _id: id }, req.body, options)
        res.send(response)
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
}

exports.updateProduct = async (req, res) => {  // patch
    const id = req.params.id;
    const options = { new: true }  // to print new updated value in response

    try {
        const response = await Fabric.findOneAndUpdate({ _id: id }, req.body, options)
        res.send(response)
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
}

exports.deleteProduct = async (req, res) => { // delete 
    const id = req.params.id;


    try {
        const response = await Fabric.findOneAndDelete({ _id: id })
        res.send(response)
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
}
