const mongoose = require('mongoose');
const emailValidator = require('email-validator');

const { Schema } = mongoose;

const productsSchema = Schema({
    name:{
        type: String,
        minlength: 2,
        required: true
    },
    email:{
        type: String,
        minlength: 2,
        validate: {
            validator: emailValidator.validate,
            message: "Invalid email",
            isAsync: false
        },
        required: true
    }
});

module.exports = productsSchema;