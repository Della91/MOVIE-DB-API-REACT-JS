import React, { useContext, useState } from 'react';
import './App.css';
import SearchBox from './components/header/SearchBox';
import MyProviderApi from './components/context/MyProviderApi';
import ListMoviesSearch from './components/main/ListMoviesSearch';
import Movie from './components/main/Movie';

function App() {

  return (
    <MyProviderApi>
      <div className="App">
        <SearchBox />
        <div className="main-container">
          <ListMoviesSearch/> 
          <Movie/>
        </div>
      </div>
    </MyProviderApi>
  );
}

export default App;
