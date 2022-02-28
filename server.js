const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const albumRoutes = require("./routes/albumRouter")
const db = require("./config/connectDb")
db.once("open", () => {
    console.log("database connected")
})

// Middleware
app.use(express.json())
app.use(morgan('dev'))


// Get Request
app.use("/api", albumRoutes)

app.listen(9000, () => {
    console.log('The server is running on Port 9000')
})
