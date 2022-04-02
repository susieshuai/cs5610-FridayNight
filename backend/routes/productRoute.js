const express = require('express')
const productModel = require('../models/productModel')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const products = await productModel.find({})
        res.json(products)
    } catch (error) {
        console.log(error);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const product = await productModel.findById(id)
        if (!product) {
            console.log('no item found with this id');
        }
        else {
            res.json(product)
        }
    } catch (error) {
        console.log(error);
    }
})

module.exports = router
