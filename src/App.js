import React, { useState } from 'react';
import './App.css';
import SearchBox from './components/header/SearchBox';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/main/Main';

function App() {

  const [text,setText] = useState('');    
    
    function handleChange(e){
        e.preventDefault();
        setText(e.target.value)
    }

  return (
    <Router>
      {/* <MyProvider> */}
        <div className="App">
          <SearchBox text={text} handleChange={handleChange} />
          <div className="main-container">
            <Main text={text} />
          </div>
        </div>
      {/* </MyProvider> */}
    </Router>
  );
}

export default App;
