const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/albums_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

module.exports = mongoose.connection
