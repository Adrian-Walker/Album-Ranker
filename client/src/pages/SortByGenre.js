import React, { useContext, useState, useEffect } from "react";
import Album from "../Components/Album";
import { AlbumsContext } from "../context/AlbumsContext";

const SortByGenre = () => {
  const { albums, deleteAlbum, SortByGenre, albumsByGenre } = useContext(AlbumsContext)

  useEffect(() => {
    SortByGenre()
  }, [])

  return (
    <div>
      <div className="album__role">
        {albumsByGenre.map(album => (
          <Album key={album._id} {...album} deleteAlbum={deleteAlbum} />
        ))}
      </div>
    </div>
  )
}

export default SortByGenre
