import React, { useState } from 'react'
import '../../assets/css/main/main.css'
import { Route,Switch } from 'react-router'
import ListMovies from './ListMovies'
import ListMoviesSearch from './ListMoviesSearch'
import ListMoviesSearchForGernes from './ListMoviesSearchForGernes'
import DropDownGenres from './DropDownGenres'
import PagesMovies from './PagesMovies'
import { useMyFunctions } from '../../hook/useMyFunctions'
import { useFetch } from '../../hook/useFetch'

function Main() {

    const [moviesSearchGenres,setMoviesSearchGenres] = useState([]);
    const [genresListId,setGenresListId] = useState([]); 
    const [loading,setLoading] = useState(false);
    const { data } = useFetch();

    async function fetchGenresById(API,genreId){
        const response = await fetch(API+genreId);
        const json = await response.json();
        setMoviesSearchGenres(json.results);
        moviesSearchGenres.filter(movie => movie.genre_ids.includes(genreId));
        console.log(json.results)
    }

    async function fetchApiGenres(url) {
        const response = await fetch(url);
        setLoading(true);
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
                <Route exact path="/" component={ListMovies} />
                <Route exact path={`/search/movies`} component={ListMoviesSearch} /> 
                <Route path="/movies/genres">
                    <ListMoviesSearchForGernes 
                    dataLoading = {loading}
                    dataMoviesSearchGenres = {moviesSearchGenres} />
                </Route>
            </>
        </Switch>
    )
}

export default Main
