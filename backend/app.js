const express = require('express')
const path = require('path')
const productRoute = require('./routes/productRoute')
const connectDB = require('./database/connect')

require('dotenv').config();

const app = express()

app.use('/products', productRoute)

// deployment prep
// resolve current dir name
const __direcname = path.resolve()

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__direcname, '/frontend/build')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__direcname, 'frontend/build/index.html'))
    })
} else {
    app.get('/', (req, res) => {
        res.send('Hello')
    })
}

// connect MongoDB then run server
connectDB().then(() =>
    app.listen(process.env.PORT || 5000, () => {
        console.log('server is running on port 5000');
    })
)