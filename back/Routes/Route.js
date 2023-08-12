const express = require('express')
const controllerProduct = require('../controller/product')
const serverRouter = express.Router();
// we are importing all crud operation function here fom controller prodcut.js 

//      C R U D OPERATION, 
serverRouter
    .post('/products', controllerProduct.createProduct)             // create 
    .get('/products/:id', controllerProduct.getProduct)              // read one
    .get('/', controllerProduct.getProducts)                         // read all
    .get('/products', controllerProduct.getProducts)                // read all
    .put('/products/:id', controllerProduct.replaceProduct)        // replace put method 
    .patch('/products/:id', controllerProduct.updateProduct)      // update patch method 
    .delete('/products/:id', controllerProduct.deleteProduct)    // delete mehtod 

// without semicon at end you can chain like above for server 
exports.routes = serverRouter; // you can also export like this.