const express = require('express')
const productController = require('../controllers/productController')
const { protect } = require('../middleware/authMiddleware')

const router = express.Router()

router.get('/', productController.getAllProducts)

router.get('/:id', productController.getOneProduct)

router.get('/search/:searchCriteria', productController.getSearchProducts)

router.post('/:id/reviews', protect, productController.createReview)

module.exports = router
