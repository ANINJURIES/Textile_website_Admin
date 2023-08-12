const express = require('express');
const cors = require('cors');
const server = express();
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('/Users/Vedant/Documents/Vedant/Programming/React/Projects/NewTextile/back/data/data.json', 'utf-8'));
const products = data.products;


// middlewares 
server.use(cors());
//bodyParser
server.use(express.json());



// Update (put) updates with new data while deleting previous
server.put('/products/:id', (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id===id)
    products.splice(productIndex,1,{...req.body, id:id})   // splice method is used to remove or replace element in array.
    res.send("Updated (put)")
  });

  // Update PATCH updates as replace what is mentioned do not deleted previous record and do not change anuthing in what is not mentioned in update
server.patch('/products/:id', (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id)
    const product = products[productIndex];
    products.splice(productIndex, 1, { ...product, ...req.body }) // splice method is used to remove or replace element in array.
    res.send("Updated (patch)")
});



server.listen(8080, (req,res) => {
    console.log("Server Started")

})

// slice method for array (from where to delete, till which number you want to delete, what to added)