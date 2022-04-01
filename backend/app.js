const express = require('express')
const db = require('./db')
const app = express()




const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))

app.use(express.json())
const cors = require('cors')
require('dotenv').config()

const port = process.env.PORT ||5000
app.use(cors())

app.use(express.static('public'))
app.set('view engine', 'pug')
app.set('views', './views')

const product = require('./routes/product.js')
app.use('/products', product.router)

app.get('/', function (req, res) {
    res.send('hello world')
})


db.dbConnect().then(() => app.listen(port, () => {
    console.log('app is running on port 5000')
}))
