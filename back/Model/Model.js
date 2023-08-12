const mongoose = require('mongoose');
const { Schema } = mongoose;

// Schma 
const FabricSchema = new Schema({
    id: String,
    title: { type:String, required:true, unique:true},
    image: String,
    description: String,
    price: Number,
    stock: Number,
    discount: Number,
    fabricDensity: Number,
    fabricPorosity: Number,
    fabricBulkiness: Number,
    fabricThickness: Number,
    fabricStructure: String,
    fabricPattern: String

  });

// model on schema 

exports.FabricModel = mongoose.model('Fabric', FabricSchema);