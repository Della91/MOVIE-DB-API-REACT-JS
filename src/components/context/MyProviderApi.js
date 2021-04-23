import React, { useState } from 'react'
import { MyContext } from './Context'


function MyProviderApi({children}) {
    
    let [movies,setMovies] = useState([]);
    const [text,setText] = useState('');
    const [searchMovies,setSearchMovies] = useState([]);
    const [genresList,setGenresList] = useState([]);
    const [loading,setLoading] = useState(false);

    async function fetchApiMovies(MOVIE_API) {
        const response = await fetch(MOVIE_API);
        const json = await response.json();
        setLoading(true);
        setMovies(json.results);
        console.log(json)
        
    }

    async function fetchApiGenres(GENRES_API) {
        const response = await fetch(GENRES_API);
        const json = await response.json();
        setLoading(true)
        setGenresList(json.genres);
        console.log(json)
    }

    /** function for API search movies  */

    async function fetchApiSearchMovies(SEARCH_API){
        const response = await fetch(SEARCH_API)
        const json = await response.json();
        setLoading(true)
        setSearchMovies(json.results);
    }
    
    return (
        <MyContext.Provider value={{
            fetchApiSearchMovies,
            fetchApiGenres,
            fetchApiMovies,
            genresList,
            loading,
            movies,
            setMovies,
            searchMovies,
            setSearchMovies,
            text,
            setText,
            }}>
            {children}
        </MyContext.Provider>
    )

}


export default MyProviderApi;