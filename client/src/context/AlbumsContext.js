import React, { createContext, useState, useEffect } from 'react'
import axios from "axios"

export const AlbumsContext = createContext()

const AlbumsContextProvider = ({ children }) => {
  const [albums, setAlbums] = useState([])
  const [albumsByYear, setAlbumsByYear] = useState([])
  const [albumsByGenre, setAlbumsByGenre] = useState([])

  //Top albums State
  useEffect(() => {
    axios.get("/api/albums")
      .then(data => {
        setAlbums(data.data)
      })
      .catch(err => console.log(err))

    // Release Year State
    axios.get("/api/albums")
      .then(data => {
        setAlbumsByYear(data.data.sort((a, b) => a.releaseYear - b.releaseYear))
      })
      .catch(err => console.log(err))

    // Sort By Genre State
    axios.get("/api/albums")
      .then(data => {
        setAlbumsByGenre(data.data.sort((a, b) => {
          const genreA = a.genre.toUpperCase()
          const genreB = b.genre.toUpperCase()
          if (genreA > genreB) return 1
          else if (genreB > genreA) return -1
          else return 0
        }))
          .catch(err => console.log(err))
      })

  }, [])

  function deleteAlbum(albumId) {
    axios.delete(`api/albums/${albumId}`)
      .then(res => {
        setAlbums(prevAlbum => prevAlbum.filter(album => album._id !== albumId))
      })
      .catch(err => console.log(err))
  }

  function SortByGenre() {
    console.log("testing")
    setAlbums(prevAlbum => prevAlbum.sort(function (a, b) {
      const nameA = a.title.toUpperCase()
      const nameB = b.title.toUpperCase()
      if (nameA > nameB) return -1
      else if (nameB > nameA) return 1
      return 0
    }))
  }

  // function SortByYear() {
  //   setAlbums(prevAlbum => prevAlbum.sort((a, b) => a.releaseYear - b.releaseYear))
  // }


  return (
    <AlbumsContext.Provider value={{ albums, deleteAlbum, SortByGenre, albumsByYear, albumsByGenre }}>
      {children}

    </AlbumsContext.Provider>
  )
}

export default AlbumsContextProvider
