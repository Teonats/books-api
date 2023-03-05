const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const bookRoutes = require ('./controllers/book')

const app = express()

//middlewares
app.use(express.json())

//routes
app.use('/book', bookRoutes)

// db connection
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`listening on port ${PORT}`)) 