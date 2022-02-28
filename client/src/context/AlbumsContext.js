import React, { createContext, useState, useEffect } from 'react'
import axios from "axios"

export const AlbumsContext = createContext()

const AlbumsContextProvider = ({children}) => {
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        axios.get("/api/albums")
        .then(data => setAlbums(data.data))
        .catch(err => console.log(err))
    }, [])

  return (
    <AlbumsContext.Provider value={{ albums }}>
        {children}
    </AlbumsContext.Provider>
  )
}

export default AlbumsContextProvider
