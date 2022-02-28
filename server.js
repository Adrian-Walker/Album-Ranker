const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

// Middleware
app.use(express.json())
app.use(morgan('dev'))



app.listen(9000, () => {
    console.log('The server is running on Port 8000')
})
