const mongoose = require('mongoose');

const productsSchema = require('./schema.js');

const Product = mongoose.model("Products", productsSchema);

module.exports = Product;