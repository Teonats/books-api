const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    Price: {
        type: Number,
        min: 1
    },
    quantity: {
        type: Number,
        required: true
    },
   
})

module.exports = mongoose.model('book', bookSchema)