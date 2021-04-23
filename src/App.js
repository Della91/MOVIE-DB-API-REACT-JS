import React from 'react';
import './App.css';
import SearchBox from './components/header/SearchBox';
import MyProviderApi from './components/context/MyProviderApi';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/main/Main';

function App() {

  return (
    <Router>
      <MyProviderApi>
        <div className="App">
          <SearchBox/>
          <div className="main-container">
            <Main/>
          </div>
        </div>
      </MyProviderApi>
    </Router>
  );
}

export default App;
