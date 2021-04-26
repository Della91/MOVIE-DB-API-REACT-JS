import React from 'react';
import './App.css';
import SearchBox from './components/header/SearchBox';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/main/Main';
import MyProvider from './components/context/MyProvider';

function App() {

  return (
    <Router>
      <MyProvider>
        <div className="App">
          <SearchBox />
          <div className="main-container">
            <Main/>
          </div>
        </div>
      </MyProvider>
    </Router>
  );
}

export default App;
