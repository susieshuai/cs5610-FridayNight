const express = require('express')
const products = require('./data/products')
const connectDB = require('./database/connect')

require('dotenv').config();

const app = express()

app.get('/', (req, res) => {
    res.send('Hello')
})

app.get('/products', (req, res) => {
    res.json(products)
})

app.get('/products/:id', (req, res) => {
    const id = req.params.id
    const product = products.find(product => {
        return product._id === id
    })
    res.json(product)
})

// connect MongoDB then run server
connectDB().then(() =>
    app.listen(process.env.PORT || 5000, () => {
        console.log('server is running on port 5000');
    })
)