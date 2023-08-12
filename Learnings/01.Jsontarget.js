const express = require('express');
const cors = require('cors');
const server = express();
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('/Users/Vedant/Documents/Vedant/Programming/React/Projects/NewTextile/back/data/data.json', 'utf-8'));
const product = data.products;



server.get('/', (req,res)=>{

    res.send("Hello")
})

server.get('/products/:id', (req,res)=>{

        const id = +req.params.id;
        const response = product.find(p => p.id === id);    
        res.send(response);

})

server.listen(8080, (req,res) => {
    console.log("Server Started")

})


/* 

find() is a built-in JavaScript array method that searches through the array and returns the first element that satisfies a specified condition. It takes a callback function as an argument.

we are using arrow funciton as callback function here
*/ 