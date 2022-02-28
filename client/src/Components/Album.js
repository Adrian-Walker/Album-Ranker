import React from "react";

function Album(props) {
    console.log(props)

    const { artist, title, genre, releaseYear, albumImage } = props

    return (
        <div className="album">
            <img src={albumImage} alt={title} />
            <h1>Artist: {artist}</h1>
            <h3>Title: {title}</h3>
            <h3>Genre: {genre}</h3>
            <h3>Release Year: {releaseYear}</h3>
            <button>Like</button>
            <button>Dislike</button>
        </div>
    )

}

export default Album
