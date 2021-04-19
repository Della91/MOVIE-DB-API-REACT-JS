import React, { useEffect, useState } from 'react'
import { MyContext } from './Context'


function MyProviderApi({children}) {
    
    const [movies,setMovies] = useState([]);
    const [text,setText] = useState('');
    const [searchMovies,setSearchMovies] = useState([]);
    var apiKey = process.env.REACT_APP_API;
    const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=eab759ce491c2669921b293405b7c20f&query=';
    const MOVIE_API = 'https://api.themoviedb.org/3/discover/movie?api_key=eab759ce491c2669921b293405b7c20f&';

    useEffect(() => {
        fetch(MOVIE_API)
        .then(response => response.json())
        .then(data => {
            setMovies(data.results);
            console.log(data);
        })
    },[]);

    function handleSubmit(e) {
        e.preventDefault();
        fetch(SEARCH_API+text)
        .then(data => data.json())
        .then(data => {
            setSearchMovies(data.results);
        })
    } 
    
    return (
        <MyContext.Provider value={{movies,handleSubmit,text,setText,searchMovies}}>
            {children}
        </MyContext.Provider>
    )

}


export default MyProviderApi;