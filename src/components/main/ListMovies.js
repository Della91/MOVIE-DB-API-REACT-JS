import React, { useContext } from 'react'
import '../../assets/css/main/ListMovies.css'
import { Redirect } from 'react-router-dom';
import Spinner from '../loadingSpinner/Spinner';
import { useFetch } from '../../hooks/useFetch';
import { MyContext } from '../context/Context';

const IMAGE_API = 'https://image.tmdb.org/t/p/w500'
const MOVIE_API = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API}`;

function Movie() {
    
    const { text } = useContext(MyContext);
    const { loading,data } = useFetch(MOVIE_API)

    if (text) return <Redirect to="/search/movies" />

    return (
        <div className="info-movie-container"> 
            {loading ? data.map((movie) => {
                return <div key={movie.id}>
                    <img className="img-info-movie" src={IMAGE_API + movie.poster_path} alt=""/> 
                    <div className="info-movie">
                        <h3> {movie.title} </h3> 
                        <span 
                        style={{color: movie.vote_average >= 6 ? 'green' : 'red'}} > 
                        {movie.vote_average} </span>
                    </div>
                </div>
            }) : <Spinner/>}
        </div>
    )
}

export default Movie
