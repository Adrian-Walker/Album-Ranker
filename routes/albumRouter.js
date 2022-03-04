const express = require('express')
const { append } = require('express/lib/response')
const album = require('../models/album.js')
const albumRouter = express.Router()
const Album = require('../models/album.js')

// Get All
albumRouter.get("/albums", async (req, res) => {
    try {
        const albums = await Album.find({})
        res.status(200).json(albums)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Get One
albumRouter.get("/albums/:id", async (req, res) => {
    try {
        const album = await Album.findById(req.params.id)
        res.status(200).json(album)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Delete One
albumRouter.delete("/albums/:id", async (req, res,) => {
    try {
        const album = await Album.findByIdAndDelete(req.params.id)
        res.status(200).json(album)
    } catch (err) {
        return res.status(200).send(`Successfully deleted ${id.Album} from the database`)
    }
})

// Create New Album
albumRouter.post("/albums", async (req, res) => {
    try {
        const body = {
            artist: req.body.artist,
            albumImage: req.body.albumImage,
            title: req.body.title,
            genre: req.body.genre,
            releaseYear: req.body.releaseYear
        }
        const newAlbum = await Album.create(body)
        res.status(200).json(newAlbum)
    } catch (error) {
        res.status(500).json(err)
    }
})


module.exports = albumRouter
