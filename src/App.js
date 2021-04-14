import { useState } from 'react';
import './App.css';
import SearchBox from './components/header/SearchBox'

function App() {
  
  const [movies,setMovies] = useState([]);
  const [text,setText] = useState('');
  var apiKey = process.env.REACT_APP_API;

  function handleSubmit(e){
    e.preventDefault();
    
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=eab759ce491c2669921b293405b7c20f&query=${text}`)
    .then(data => data.json())
    .then(data => {
      setMovies(...data.results);
      console.log(data)
    })
  }

  function handleChange(e){
      e.preventDefault();
      setText(e.target.value)
  }

  return (
    <div className="App">
      <SearchBox handleSubmit={handleSubmit} handleChange={handleChange} />
    </div>
  );
}

export default App;
