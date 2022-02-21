import './style.css';
import { route } from 'react-router-dom';
import React, { useState } from 'react';

const albumLibrary = [
  { name: '1st album', rating: '7' },
  { name: '1st album', rating: '7' },
  { name: '1st album', rating: '7' },
  { name: '1st album', rating: '7' },
  { name: '1st album', rating: '7' },
  { name: '1st album', rating: '7' }
]

var albums = Object.keys(albumLibrary);



function App() {

  const [newAlbum, setAlbum] = useState('')

  function OnClickHandler(unit) {
    setAlbum(unit);
  }

  return (
    <div className="App">

    </div>
  );
}

export default App;
