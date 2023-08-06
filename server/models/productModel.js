const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    category: {
        type: String,
        required: [true, 'Please add correct category']
    },
    description: {
        type: String,
        required: [true, 'Please add a description']
    },
    price: {
        type: Number,
        required: [true, 'Please add a price']
    },
    color: {
        type: String,
        required: [true, 'Please add a color']
    },
    size: {
        type: String,
        required: [true, 'Please add a size']
    },
    images: {
        type: Array,
        required: [true, 'Please add a images']
    },
    ratings: {
        type: Array,
    },
    stock: {
        type: Number,
    },
    userId: {
        type: String,
        required: [true, 'Please add a user information']
    },

}, {
    timeStamps: true
})

module.exports = mongoose.model('AddProduct', productSchema)