const express = require('express')
const orderController = require('../controllers/orderController')
const { protect } = require('../middleware/authMiddleware')

const router = express.Router()

router.post('/', protect, orderController.createOrder)
router.get('/:id', protect, orderController.getOrderById)
module.exports = router
