import React, { useState } from 'react'
import { Route,Switch } from 'react-router'
import Movie from './Movie'
import ListMoviesSearch from './ListMoviesSearch'
import MoviesSearchForGernes from './MoviesSearchForGernes'
import DropDownGenres from './DropDownGenres'

function Main() {

    const [moviesSearchGenres,setMoviesSearchGenres] = useState([]);
    const [genresListId,setGenresListId] = useState([]); 

    async function fetchGenresById(API,genreId){
        const response = await fetch(API+genreId);
        const json = await response.json();
        setMoviesSearchGenres(json.results);
        moviesSearchGenres.filter(movie => movie.genre_ids.includes(genreId));
        console.log(json.results)
    }

    async function fetchApiGenres(url) {
        const response = await fetch(url);
        const json = await response.json();
        setGenresListId(json.genres);
        console.log(json)
    } 

    return (
        <Switch>
            <>
            <div className="genres-container"> 
                <DropDownGenres
                dataGenresListId = {genresListId} 
                dataFetchGenresById = {fetchGenresById} 
                dataFetchApiGenres = {fetchApiGenres} /> 
            </div>
                <Route exact path="/" component={Movie} />
                <Route exact path="/search/movie" component={ListMoviesSearch} /> 
                <Route path="/movies/genres">
                    <MoviesSearchForGernes dataMoviesSearchGenres = {moviesSearchGenres} />
                </Route>
            </>
        </Switch>
    )
}

export default Main
