const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Album Setup
const albumSchema = new Schema({
    artist: {
        type: String,
        required: true
    },
    albumImage: {
        type: String,
        required: true
    },

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

    reviews: [
        {
            rating: {
                type: String
            }
        }
    ]

})


module.exports = mongoose.model("Album", albumSchema)
