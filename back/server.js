// MVC (model view controller file formatting)
// require('dotenv').config()
const express = require('express');
const cors = require('cors');
const server = express();
const serverRouter = require('./Routes/Route')
const mongoose = require('mongoose');


// connecting with db 

main().catch(err => console.log("err"));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  console.log("Database Connected")

}


// middlewares 
server.use(cors());
server.use(express.json());   //bodyParser

// to add more path in base path i.e http://localhost:8080 to http://localhost:8080/api we have setted as base address 
server.use('/api', serverRouter.routes)  // this calls our all routing from route.js


server.listen(8080, (req, res) => {
    console.log("Server Started")

})
