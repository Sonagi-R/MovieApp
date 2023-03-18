const express = require('express')
const cors = require('cors')

//routes
const movies = require('./Routes/movie')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/movies', movies)

module.exports = app