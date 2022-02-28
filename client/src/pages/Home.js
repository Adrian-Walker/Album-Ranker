import React, { useContext, useState } from "react";
import Album from "../Components/Album";
import { AlbumsContext } from "../context/AlbumsContext";

const Home = () => {
    const { albums } = useContext(AlbumsContext)
    console.log(albums)
    return (
        <div>
            <div className="album__role">
                {albums.map(album => (
                    <Album key={album._id} {...album} />
                ))}
            </div>
        </div>
    )
}

export default Home
