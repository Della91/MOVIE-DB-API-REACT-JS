import React, { useContext, useState } from 'react';
import './App.css';
import SearchBox from './components/header/SearchBox';
import MyProviderApi from './components/context/MyProviderApi';
import ListMoviesSearch from './components/main/ListMoviesSearch';
import Movie from './components/main/Movie';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Switch>
        <MyProviderApi>
          <div className="App">
            <SearchBox/>
            <div className="main-container">
              <Route exact path="/" component={Movie} />
              <Route exact path="/search/movie" component={ListMoviesSearch} />
            </div>
          </div>
        </MyProviderApi>
      </Switch>
    </Router>
  );
}

export default App;
