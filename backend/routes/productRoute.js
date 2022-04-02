const express = require('express')
const productController = require('../controllers/productController')
const productModel = require('../models/productModel')

const router = express.Router()

router.get('/', productController.getAllProducts)

router.get('/:id', productController.getOneProduct)

module.exports = router
