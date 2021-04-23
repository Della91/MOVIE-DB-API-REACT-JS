import React, { useEffect, useState } from 'react'
import { MyContext } from './Context'


function MyProviderApi({children}) {
    
    let [movies,setMovies] = useState([]);
    const [text,setText] = useState('');
    const [searchMovies,setSearchMovies] = useState([]);
    const [genresList,setGenresList] = useState([]);
    const [moviesById,setMoviesById] = useState([]);
    const [loading,setLoading] = useState(false);
    const GENRES_BY_ID_API = 'https://api.themoviedb.org/3/discover/movie?api_key=eab759ce491c2669921b293405b7c20f&with_genres=';
    const GENRES_API = 'https://api.themoviedb.org/3/genre/movie/list?api_key=eab759ce491c2669921b293405b7c20f';
    const MOVIE_API = 'https://api.themoviedb.org/3/discover/movie?api_key=eab759ce491c2669921b293405b7c20f&';

    useEffect(() => {
        async function callApi() {
            const response = await fetch(MOVIE_API);
            const json = await response.json();
            setLoading(true);
            setMovies(json.results);
        }
        console.log("setMovies")
        callApi();
    },[]);


    
    useEffect(() => {
        async function callApiGenres() {
            const response = await fetch(GENRES_API);
            const json = await response.json();
            setGenresList(json.genres);
            console.log(json)
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

    useEffect(() => {
        async function fetchGenresById(genre_id){
            const response = await fetch(GENRES_BY_ID_API+`${genre_id}`);
            const json = await response.json();
            setLoading(true)
            setMoviesById(json.results);
            console.log(json.results)
        }
        fetchGenresById(14)
    },[])

    // const filterMovies = (genreId) => { INSERIRE IN MOVIES
    //     //TODO: filter movies
    //     setMovies = movies.filter(movie => movie.genre_ids.includes(genreId));
    // }
    
    return (
        <MyContext.Provider value={{
            genresList,loading,movies,getApiSearchMovies,
            setSearchMovies,text,setText,searchMovies,moviesById}}>
            {children}
        </MyContext.Provider>
    )

}


export default MyProviderApi;