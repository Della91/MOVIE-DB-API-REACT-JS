import React, { useContext, useState } from 'react'
import '../../assets/css/spinner/Spinner.css'
import '../../assets/css/main/main.css'
import { Route,Switch } from 'react-router'
import ListMovies from './ListMovies'
import ListMoviesSearch from './ListMoviesSearch'
import ListMoviesSearchForGernes from './ListMoviesSearchForGernes'
import DropDownGenres from './DropDownGenres'
import PaginationMovies from './PaginationMovies'
import { useFetch } from '../../hooks/useFetch'
import { MyContext } from '../context/Context'
import faceGif from '../../assets/image/gif/face.gif'
import Spinner from '../loadingSpinner/Spinner'

function Main() {

    const [moviesSearchGenres,setMoviesSearchGenres] = useState([]);
    const [genresListId,setGenresListId] = useState([]); 
    const [loading,setLoading] = useState(false);
    const { text } = useContext(MyContext);
    const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API}&query=`;
    const { totalResults,data } = useFetch(SEARCH_API+text);
    const noTextError = []; 
    noTextError.push(<> <Spinner imgGif={faceGif} /> </> )
    
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
                <Route exact path={`/search/movies/`} >
                    <ListMoviesSearch dataResults={data} />
                    {totalResults === 0 && noTextError}
                    {totalResults > 20 && <PaginationMovies/>}
                </Route> 
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
