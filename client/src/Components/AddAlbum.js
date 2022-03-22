import React, { useState } from "react"



export default function AddAlbum(props) {
    const initInputs = {
        title: props.title || "",
        genre: props.genre || "",
        releaseYear: props.releaseYear || "",
        artist: props.artist || "",
        albumImage: props.albumImage || ""

    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        //console.log(inputs)
        props.submit(inputs)
        // post request
        setInputs(initInputs)
    }

    return (
        <form className="album_input" onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                autoComplete="off"
                value={inputs.title}
                onChange={handleChange}
                placeholder="Title" />

            <input
                type="text"
                name="genre"
                autoComplete="off"
                value={inputs.genre}
                onChange={handleChange}
                placeholder="Genre" />
            <input
                type="text"
                name="releaseYear"
                autoComplete="off"
                value={inputs.releaseYear}
                onChange={handleChange}
                placeholder="Release Year" />

            <input
                type="text"
                name="artist"
                autoComplete="off"
                value={inputs.artist}
                onChange={handleChange}
                placeholder="Artist" />

            <input
                type="text"
                name="albumImage"
                autoComplete="off"
                value={inputs.albumImage}
                onChange={handleChange}
                placeholder="Copy Image Address" />

            <button>{props.btnText}Submit</button>
        </form>
    )
}
