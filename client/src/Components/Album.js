import React, { useState } from "react";

function Album(props) {
    const { artist, title, genre, releaseYear } = props

    return (
        <div className="album">
            <img src='' />
            <h1>Artist: {artist}</h1>
            <h3>Title: {title}</h3>
            <h3>Genre: {genre}</h3>
            <h3>Release Year: {releaseYear}</h3>
        </div>
    )

}

export default Album
