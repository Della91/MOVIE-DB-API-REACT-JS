import React, { useContext, useState } from 'react'
import '../../assets/css/spinner/Spinner.css'
import '../../assets/css/main/main.css'
import { Route,Switch } from 'react-router'
import ListMovies from './ListMovies'
import DropDownGenres from './DropDownGenres'
import PaginationMovies from './PaginationMovies'
import { useFetch } from '../../hooks/useFetch'
import faceGif from '../../assets/image/gif/face.gif'
import Spinner from '../loadingSpinner/Spinner'
import { MyContext } from '../context/Context'

function Main() {

    const [moviesSearchGenres,setMoviesSearchGenres] = useState([]);
    const { REACT_APP_KEY } = process.env;
    const { text } = useContext(MyContext);
    const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_KEY}&query=`;
    const MOVIE_API = `https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_KEY}`;
    const { dataMovies,loading } = useFetch(MOVIE_API)
    const { totalResults } = useFetch(SEARCH_API+text);
    
    /** api call that searches for movies by genre based on id */
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
                <DropDownGenres dataFetchGenresById = {fetchGenresById} /> 
            </div>
                <Route exact path="/"> {/* LIST BEST MOVIES */}
                    <ListMovies 
                    dataApiMovies={dataMovies} 
                    dataLoading={loading} />
                </Route>
                <Route path="/movies/genres"> {/* MOVIES SEARCH FOR GENRES */}
                    <ListMovies 
                    dataApiMovies={moviesSearchGenres} 
                    dataLoading={loading} />
                </Route>
                <Route path="/search/movies/:1"> {/* PAGINATION MOVIES */}
                <PaginationMovies/>
                </Route>
                {totalResults === 0 && <div className="error-container"> <> <Spinner imgGif={faceGif} /> </> </div> }
            </>
        </Switch>
    )
}

export default Main
