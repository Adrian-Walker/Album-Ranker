import React from "react";
import Like from "./Like";

function Album(props) {
    console.log(props, "props")

    const { artist, title, genre, releaseYear, albumImage } = props//.album

    return (
        <div className="album">
            <img src={albumImage} alt={title} className='albumImage' />
            <h1>Artist: {artist}</h1>
            <h3>Title: {title}</h3>
            <h3>Genre: {genre}</h3>
            <h3>Release Year: {releaseYear}</h3>
            <Like />
            <button
                onClick={() => props.deleteAlbum(props._id)}>Delete</button>
        </div>
    )

}

export default Album
