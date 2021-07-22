const mongoose = require('mongoose');

const { Schema } = mongoose;

const productsSchema = Schema({
    title:{
        type: String,
        minlength: 2,
        required: true
    },
    id:{
        type: Number,
        required: true,
    },
    description:{
        type: String,
        minlength: 2,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now,
    },
    starred:{
        type: Boolean,
        default: false,
    },
});

module.exports = productsSchema;