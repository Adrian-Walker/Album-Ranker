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


module.exports = albumRouter
