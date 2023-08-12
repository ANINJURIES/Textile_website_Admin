const express = require('express');
const cors = require('cors');
const server = express();
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('/Users/Vedant/Documents/Vedant/Programming/React/Projects/NewTextile/back/data/data.json', 'utf-8'));
const product = data.products;


// middlewares 
server.use(cors());
//bodyParser
server.use(express.json());

//variables 

server.get('/', (req,res)=>{

    // res.setHeader('Content-Type', 'application/json')  // just add in header json data is coming.
    res.send("Hello")
})

//Create 
server.post('/products', (req, res) => {
    console.log(req.body);
    products.push(req.body);   
    // we are saying in post method what ever body content is we got push that data in product which is our data storage right now.
    res.status(201).json(req.body);
  });




server.listen(8080, (req,res) => {
    console.log("Server Started")

})

