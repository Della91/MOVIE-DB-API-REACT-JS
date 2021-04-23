import React, { useContext } from 'react'
import '../../assets/css/main/Movie.css'
import { Redirect } from 'react-router-dom';
import Spinner from '../loadingSpinner/Spinner';
import { MyContext } from '../context/Context';

function Movie() {
    
    const { loading,text,movies } = useContext(MyContext);
    const IMAGE_API = 'https://image.tmdb.org/t/p/w500'

    if (text) return <Redirect to="/search/movie" />
    console.log(movies)

    return (
        <div className="info-movie-container"> 
            {loading ? movies.map((movie) => {
                return <div key={movie.id}>
                <img className="img-info-movie" src={IMAGE_API + movie.poster_path} alt=""/> 
                <div className="info-movie">
                    <h3> {movie.title} </h3> 
                    <span 
                    style={{fontSize:'16px',color: movie.vote_average >= 6 ? 'green' : 'red'}} > 
                    {movie.vote_average} </span>
                </div>
                </div>
            }) : <Spinner/>}
        </div>
    )
}

export default Movie
