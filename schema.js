const mongoose = require("mongoose");

const {Schema} = mongoose;

const productsSchema = new Schema({
    Name: {
        type: String,
        minlingth: 2,
        required: true
    },
    Email : {
        type: String,
        minlingth: 2,
        required: true
    },
    
})

module.exports = productsSchema