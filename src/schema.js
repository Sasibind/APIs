const mongoose = require('mongoose');

const { Schema } = mongoose;

const productsSchema = Schema({
    "id":{
        type: Number,
        required: true,
    },
    "description":{
        type: String,
        minlength: 2,
        required: true,
    },
    "date":{
        type: Date,
        default: Date.Now,
    },
    "starred":{
        type: Boolean,
        default: false,
    },
});

module.exports = productsSchema;