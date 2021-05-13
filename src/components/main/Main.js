import React, { useState } from 'react'
import '../../assets/css/spinner/Spinner.css'
import '../../assets/css/main/main.css'
import { Route,Switch } from 'react-router'
import ListMovies from './ListMovies'
import ListMoviesSearchForGernes from './ListMoviesSearchForGernes'
import DropDownGenres from './DropDownGenres'
import PaginationMovies from './PaginationMovies'
import { useFetch } from '../../hooks/useFetch'
import faceGif from '../../assets/image/gif/face.gif'
import Spinner from '../loadingSpinner/Spinner'

function Main({text}) {

    const [moviesSearchGenres,setMoviesSearchGenres] = useState([]);
    const [loading,setLoading] = useState(false);
    const { REACT_APP_KEY } = process.env;
    const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_KEY}&query=`;
    const { totalResults } = useFetch(SEARCH_API+text);
    
    /** api call that searches for movies by genre based on id */
    async function fetchGenresById(API,genreId){
        const response = await fetch(API+genreId);
        setLoading(true);
        const json = await response.json();
        setMoviesSearchGenres(json.results);
        moviesSearchGenres.filter(movie => movie.genre_ids.includes(genreId));
        console.log(json.results)
    }
    
    return (
        <Switch>
            <>
            <div className="genres-container"> 
                <DropDownGenres text={text} 
                dataFetchGenresById = {fetchGenresById} /> 
            </div>
                <Route exact path="/">
                    <ListMovies text={text} />
                </Route>
                <Route path="/movies/genres">
                    <ListMoviesSearchForGernes 
                    text={text}
                    dataLoading = {loading}
                    dataMoviesSearchGenres = {moviesSearchGenres} />
                </Route>
                <Route path="/search/movies/:1">
                    <PaginationMovies text={text} />
                </Route>
                {totalResults === 0 && <div className="error-container"> <> <Spinner imgGif={faceGif} /> </> </div> }
            </>
        </Switch>
    )
}

export default Main
