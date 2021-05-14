import React, { useContext } from 'react'
import '../../assets/css/main/ListMovies.css'
import gifLoading from '../../assets/image/gif/758X.gif'
import Spinner from '../loadingSpinner/Spinner';
import { useFetch } from '../../hooks/useFetch';
import { Redirect } from 'react-router';
import { MyContext } from '../context/Context';

const IMAGE_API = 'https://image.tmdb.org/t/p/w500'
const { REACT_APP_KEY } = process.env;
const MOVIE_API = `https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_KEY}`;

function Movie() {
    
    const { loading,setLoading,data } = useFetch(MOVIE_API)
    const { text } = useContext(MyContext)

    if(text) return <Redirect to="/search/movies/1" />

    return (
        <div className="info-movie-container"> 
            {loading ? data.map((movie) => {
                return <div key={movie.id}>
                    <img className="img-info-movie" 
                    onLoad={() => setLoading(true)}
                    src={IMAGE_API + movie.poster_path} alt=""/> 
                    <div className="info-movie">
                        <h3> {movie.title} </h3> 
                        <span 
                        style={{color: movie.vote_average >= 6 ? 'green' : 'red'}} > 
                        {movie.vote_average} </span>
                    </div>
                </div>
            }) : <Spinner imgGif={gifLoading} />}
        </div>
    )
}

export default Movie
