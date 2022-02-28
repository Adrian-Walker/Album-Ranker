const db = require("../config/connectDb")
const Album = require("../models/album")

const albums = require("./albums.json")


// To Seed the database
db.once("open", async () => {
    try {
        await Album.deleteMany({})
        await Album.create(albums)
        console.log("db seeded")
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
})
