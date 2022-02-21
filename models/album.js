const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Album Setup
const albumSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    genre: {
        type: String,
        required: true
    },

    releaseYear: {
        type: String,
        required: true
    },

})


module.exports = mongoose.model("Album", albumSchema)
