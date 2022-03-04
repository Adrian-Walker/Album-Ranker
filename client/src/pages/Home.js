import React, { useContext, useState } from "react";
import Album from "../Components/Album";
import { AlbumsContext } from "../context/AlbumsContext";
// import SortByGenre from "./SortByGenre";

const Home = () => {
    const { albums, deleteAlbum, SortByGenre } = useContext(AlbumsContext)
    return (
        <div>
            <div className="album__role">
                {albums.map(album => (
                    <Album key={album._id} {...album} deleteAlbum={deleteAlbum} />
                ))}
            </div>
        </div>
    )
}

export default Home
