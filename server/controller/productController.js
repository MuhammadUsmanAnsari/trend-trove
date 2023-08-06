const AddProduct = require('../models/productModel')
const asyncHandler = require('express-async-handler')

const addProducts = asyncHandler(async (req, res) => {
    const { name, category, description, price, color, size, images, stock, userId } = req.body
    if (!name || !category || !description || !price || !color || !size || !images || !stock || !userId) {
        return res.status(400).json({ error: "Please enter all complete data" })
    } else {
        const products = await AddProduct.create({
            name, category, description, price, color, size, images, stock, userId, ratings: []
        })

        if (products) {
            res.status(201).json({ message: "Product created successfully" })
        } else {
            res.status(400).json({ error: "Something went wrong while adding product" })
        }
    }

})

// to get all products
const getAllProducts = async (req, res) => {
    try {

        let users = await AddProduct.find({});
        return res.status(200).json(users)

    } catch (error) {
        return res.status(500).json(error.message)
    }
}

const getAddedProducts = async (req, res) => {
    try {
        const products = await AddProduct.find({ userId: req.params.id })

        // let users = await AddProduct.find({});
        return res.status(200).json(products)

    } catch (error) {
        return res.status(500).json(error.message)
    }
}





module.exports = {
    addProducts,
    getAllProducts,
    getAddedProducts
}