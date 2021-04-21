import React, { useEffect, useState } from 'react'
import { MyContext } from './Context'


function MyProviderApi({children}) {
    
    const [movies,setMovies] = useState([]);
    const [text,setText] = useState('');
    const [searchMovies,setSearchMovies] = useState([]);
    const [genresList,setGenresList] = useState([]);
    const [loading,setLoading] = useState(false);
    const GENRES_API = 'https://api.themoviedb.org/3/genre/movie/list?api_key=eab759ce491c2669921b293405b7c20f';
    const MOVIE_API = 'https://api.themoviedb.org/3/discover/movie?api_key=eab759ce491c2669921b293405b7c20f&';

    useEffect(() => {
        async function callApi() {
            const response = await fetch(MOVIE_API);
            const json = await response.json();
            setLoading(true);
            setMovies(json.results);
        }
        callApi();
    },[]);

    useEffect(() => {
        async function callApiGenres() {
            const response = await fetch(GENRES_API);
            const json = await response.json();
            setGenresList(json.genres);
            console.log(json);
        }
        callApiGenres();
    },[]);

    /** function for API search movies  */

    async function getApiSearchMovies(API){
        const response = await fetch(API)
        const json = await response.json();
        setLoading(true)
        setSearchMovies(json.results);
    }
    
    return (
        <MyContext.Provider value={{genresList,loading,movies,getApiSearchMovies,setSearchMovies,text,setText,searchMovies}}>
            {children}
        </MyContext.Provider>
    )

}


export default MyProviderApi;