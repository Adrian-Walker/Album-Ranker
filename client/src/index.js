import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import AlbumsContext from './context/AlbumsContext';


ReactDOM.render(<AlbumsContext>
    <App />
    </AlbumsContext>, document.getElementById('root'));
