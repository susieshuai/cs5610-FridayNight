const express = require('express')
const productRoute = require('./routes/productRoute')
const connectDB = require('./database/connect')

require('dotenv').config();

const app = express()

app.get('/', (req, res) => {
    res.send('Hello')
})

app.use('/products', productRoute)

// connect MongoDB then run server
connectDB().then(() =>
    app.listen(process.env.PORT || 5000, () => {
        console.log('server is running on port 5000');
    })
)