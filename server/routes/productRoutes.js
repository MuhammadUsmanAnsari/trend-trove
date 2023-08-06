const express = require('express')
const router = express.Router()
const { addProducts, getAddedProducts, getAllProducts } = require('../controller/productController')

router.post('/add', addProducts)
router.get('/yours/:id', getAddedProducts)
router.get('/', getAllProducts)

module.exports = router