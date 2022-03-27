const mongoose = require("mongoose")

const connString = process.env.MONGO_URL || "mongodb://localhost/albums_db"

mongoose.connect(connString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


module.exports = mongoose.connection
