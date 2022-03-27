require("dotenv").config({})
const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const albumRoutes = require("./routes/albumRouter")
const db = require("./config/connectDb")
const PORT = process.env.PORT || 9000
db.once("open", () => {
    console.log("database connected")
})

// Middleware
app.use(express.json())
app.use(morgan('dev'))


// Get Request
app.get("/", (req, res) => {
    res.send("welcome")
})
app.use("/api", albumRoutes)


app.listen(PORT, () => {
    console.log('The server is running on Port 9000')
})
