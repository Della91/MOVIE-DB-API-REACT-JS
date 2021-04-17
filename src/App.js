import React, { useContext, useState } from 'react';
import './App.css';
import SearchBox from './components/header/SearchBox';
import MyProviderApi from './components/context/MyProviderApi';
import ListMoviesSearch from './components/main/ListMoviesSearch';

function App() {

/*   function handleSubmit(e){
    e.preventDefault();
    
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=eab759ce491c2669921b293405b7c20f&query=${text}`)
    .then(data => data.json())
    .then(data => {
      setMovies(...data.results);
      console.log(data)
    })
  } */

/*   function handleChange(e){
      e.preventDefault();
      setText(e.target.value)
  } */

  return (
    <MyProviderApi>
      <div className="App">
        <SearchBox />
        <div className="main-container">
          <ListMoviesSearch/>
        </div>
      </div>
    </MyProviderApi>
  );
}

export default App;
