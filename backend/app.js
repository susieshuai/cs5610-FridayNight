const express = require('express')
const path = require('path')
const productRoute = require('./routes/productRoute')
const userRoute = require('./routes/userRoute')
const connectDB = require('./database/connect')
const bodyParser = require('body-parser')

require('dotenv').config();

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/products', productRoute)
app.use('/users', userRoute)

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

app.use((err, req, res, next) => {
	const result = JSON.parse(err);
	let params = [];
	for (let attr in result) {
		if (attr != 'path') {
			params.push(attr + '=' + result[attr]);
		}
	}
	res.redirect(`${result.path}?${params.join('&')}`);
})

// connect MongoDB then run server
connectDB().then(() =>
    app.listen(process.env.PORT || 5000, () => {
        console.log('server is running on port 5000');
    })
)