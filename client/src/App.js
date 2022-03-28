import './style.css';
import { Link, Routes, Route, BrowserRouter, generatePath, } from 'react-router-dom';
import React, { useState } from 'react';
import Album from './Components/Album';
import axios from 'axios'
import SortByGenre from './pages/SortByGenre';
import SortByYear from './pages/SortByYear';
import Home from './pages/Home';
import AddAlbum from './Components/AddAlbum';
import { axiosInstance } from './services/api';
// import { AlbumsContext } from './context/AlbumsContext';


function App() {

  const [newAlbum, setAlbum] = useState([])



  function addNewAlbum(newAlbum) {
    axiosInstance.post("/api/albums", newAlbum)
      .then(res =>
        setAlbum(prevAlbum => [...prevAlbum, res.data])
      )
      .catch(err => console.log(err))
  }

  function deleteAlbum(albumId) {
    axiosInstance.delete(`api/album/${albumId}`)
      .then(res => {
        setAlbum(prevAlbum => prevAlbum.filter(album => album._id !== albumId))
      })
      .catch(err => console.log(err))
  }



  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul className='nav'>
            <li><Link to="/">Top Albums</Link></li>
            <li><Link to="SortByGenre">Sort By Genre</Link></li>
            <li><Link to="SortByYear">Sort By Year</Link></li>
          </ul>
        </nav>

        <AddAlbum submit={addNewAlbum} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SortByGenre" element={<SortByGenre />} />
          <Route path="/SortByYear" element={<SortByYear />} />
        </Routes>

        {
          newAlbum.map(album =>
            <Album
              // {...album}
              key={album._id}
              deleteAlbum={deleteAlbum} album={album} />)
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
