import React from 'react';
import './App.css';
import SearchBox from './components/header/SearchBox';
import MyProviderApi from './components/context/MyProviderApi';
import ListMoviesSearch from './components/main/ListMoviesSearch';
import Movie from './components/main/Movie';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DropDown from './components/header/DropDown'

function App() {

  return (
    <Router>
        <MyProviderApi>
          <div className="App">
            <SearchBox/>
            <div className="main-container">
            <div className="genres-container"> 
              <DropDown/> 
            </div>
              <Route exact path="/" component={Movie} />
              <Route exact path="/search/movie" component={ListMoviesSearch} />
            </div>
          </div>
        </MyProviderApi>
    </Router>
  );
}

export default App;
