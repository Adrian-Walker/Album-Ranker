import './style.css';
import { route } from 'react-router-dom';
import React, { useState } from 'react';
import Album from './Components/Album';
import axios from 'axios'

const album = {
  Rap: [
    { artist: '1st album', title: '', album: '', releaseYear: '', rating: '7' },
    { artist: '1st album', title: '', album: '', releaseYear: '', rating: '7' }
  ],

  Country: [
    { artist: '1st album', title: '', album: '', releaseYear: '', rating: '7' },
    { artist: '1st album', title: '', album: '', releaseYear: '', rating: '7' }
  ],

  Soul: [
    { artist: '1st album', title: '', album: '', releaseYear: '', rating: '7' },
    { artist: '1st album', title: '', album: '', releaseYear: '', rating: '7' }
  ],
}

// var albums = Object.keys(albumLibrary);



function App() {

  const [newAlbum, setAlbum] = useState([])

  function getAlbums() {
    axios.get('/albums')
      .then(res => setAlbum(res.data))
      .catch(err => console.log(err))
  }



  return (
    <div className="App">
      <div>
        <Album />
      </div>
    </div>
  );
}

export default App;
