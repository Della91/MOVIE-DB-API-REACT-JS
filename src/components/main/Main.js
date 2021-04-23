import React, { useContext,useState } from 'react'
import { Route,Switch } from 'react-router'
import DropDown from './DropDown'
import Movie from './Movie'
import ListMoviesSearch from './ListMoviesSearch'
import { MyContext } from '../context/Context'
import MoviesSearchForGernes from './MoviesSearchForGernes'

function Main() {
    
    const [moviesSearchGenres,setMoviesSearchGenres] = useState([]);

    async function fetchGenresById(API,genreId){
        const response = await fetch(API+genreId);
        const json = await response.json();
        setMoviesSearchGenres(json.results);
        moviesSearchGenres.filter(movie => movie.genre_ids.includes(genreId));
        console.log(json.results)
    }

    return (
        <Switch>
            <>
            <div className="genres-container"> 
                <DropDown 
                dataMoviesSearchGenres = {moviesSearchGenres} 
                dataFetchGenresById = {fetchGenresById} /> 
            </div>
                <Route exact path="/" component={Movie} />
                <Route exact path="/search/movie" component={ListMoviesSearch} /> 
                <MoviesSearchForGernes dataMoviesSearchGenres = {moviesSearchGenres} />
            </>
        </Switch>
    )
}

export default Main
