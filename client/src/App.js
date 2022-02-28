import './style.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React, { useState } from 'react';
import Album from './Components/Album';
import axios from 'axios'
import Day from './pages/Day';
import Week from './pages/Week';
import Month from './pages/Month';
import Home from './pages/Home';



function App() {

  const [newAlbum, setAlbum] = useState([])

  function getAlbums() {
    axios.get('/albums')
      .then(res => setAlbum(res.data))
      .catch(err => console.log(err))
  }



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/day" element={<Day />} />
          <Route path="/week" element={<Week />} />
          <Route path="/month"  element={<Month />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
