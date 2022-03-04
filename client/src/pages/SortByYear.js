import React, { useContext, useState } from "react";
import Album from "../Components/Album";
import { AlbumsContext } from "../context/AlbumsContext";

const SortByYear = () => {
  const { albums, deleteAlbum, SortByGenre, albumsByYear } = useContext(AlbumsContext)

  console.log(SortByGenre)
  return (
    <div>
      <div className="album__role">
        {albumsByYear.map(album => (
          <Album key={album._id} {...album} deleteAlbum={deleteAlbum} SortByGenre={SortByGenre} />
        ))}
      </div>
    </div>
  )
}

export default SortByYear
