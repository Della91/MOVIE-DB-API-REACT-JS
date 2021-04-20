import React, { useContext } from 'react'
import { MyContext } from '../context/Context'
import '../../assets/css/main/Movie.css'
import { Redirect } from 'react-router-dom';

function Movie() {

    const { handleSubmit,movies,text,moviesSearch } = useContext(MyContext);
    const IMAGE_API = 'https://image.tmdb.org/t/p/w500/'

    if (text) return <Redirect to="/search/movie" />

    return (
        <div className="info-movie-container">
            <h2 style={{position:'absolute',top:'5rem',left:'30px'}}> NEW RELEASES </h2>
            {movies.map((movie) => {
                return <div key={movie.id}>
                   <img className="img-info-movie" src={IMAGE_API + movie.poster_path} alt=""/> 
                   <div className="info-movie">
                       <h3> {movie.original_title} </h3> 
                       <span style={{fontSize:'16px'}} > {movie.vote_average} </span>
                   </div>
                </div>
            })}
        </div>
    )
}

export default Movie
