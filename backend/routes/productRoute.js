const express = require('express')
const productController = require('../controllers/productController')

const router = express.Router()

router.get('/', productController.getAllProducts)
router.get('/top', productController.getTopProducts)
router.get('/:id', productController.getOneProduct)

router.get('/search/:searchCriteria', productController.getSearchProducts)

router.post('/:id/reviews', productController.createReview)

module.exports = router
