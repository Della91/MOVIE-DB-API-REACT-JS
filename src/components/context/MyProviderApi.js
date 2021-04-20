import React, { useEffect, useState } from 'react'
import { MyContext } from './Context'


function MyProviderApi({children}) {
    
    const [movies,setMovies] = useState([]);
    const [text,setText] = useState('');
    const [searchMovies,setSearchMovies] = useState([]);
    const [loading,setLoading] = useState(false);
    var apiKey = process.env.REACT_APP_API;
    const MOVIE_API = 'https://api.themoviedb.org/3/discover/movie?api_key=eab759ce491c2669921b293405b7c20f&';

    useEffect(() => {
        fetch(MOVIE_API)
        .then(response => response.json())
        .then(data => {
            setMovies(data.results);
            console.log(data);
        })
    },[]);

    /** function  */
    function getApiSearchMovies(API){
        fetch(API)
        .then(data => data.json())
        .then(data => setSearchMovies(data.results))
    }
    
    return (
        <MyContext.Provider value={{loading,movies,getApiSearchMovies,setSearchMovies,text,setText,searchMovies}}>
            {children}
        </MyContext.Provider>
    )

}


export default MyProviderApi;