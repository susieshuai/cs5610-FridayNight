const orderModel = require('../models/orderModel')

// CREATE one order
exports.createOrder = async (req, res) => {
    try {
        const order = new orderModel(
            {
                user: req.body.user,
                orderItems: req.body.orderItems,
                totalPrice: req.body.totalPrice,
            }
        )
        const newOrder = await order.save()
        res.send(newOrder)
    } catch (error) {
        console.log(error);
    }
}