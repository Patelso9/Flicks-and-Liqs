import React, {useState, useEffect} from 'react';
// import axios from 'axios';
import './App.css';
// import Movie from './components/Movie/Movie';

function App() {

  return (
    <div className="flicksnliqs-app">
      <h1>Flicks N Liqs startup page using react!</h1>
      <div className="movie-app">
        <div className="movie-search"></div>
        <div className="movie-random"></div>
        {/* <div className="movie-card">{Movie}</div> */}
      </div>
      <div className="cocktail-app">
        <div className="cocktail-search"></div>
        <div className="cocktail-random"></div>
        <div className="cocktail-card"></div>
      </div>
    </div>
  );
}

export default App;
