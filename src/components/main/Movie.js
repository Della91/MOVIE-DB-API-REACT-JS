import React, { useContext } from 'react'
import { MyContext } from '../context/Context'
import '../../assets/css/main/Movie.css'

function Movie() {

    const { movies,text } = useContext(MyContext);
    const IMAGE_API = 'https://image.tmdb.org/t/p/w500/';
    console.log(movies)

    return (
        <div className="info-movie-container">
            {movies.map((movie) => {
                return <div key={movie.id}>
                   <img className="img-info-movie" src={IMAGE_API + movie.poster_path} alt=""/> 
                   <div className="info-movie">
                       <h3> {movie.original_title} </h3> 
                       <span> {movie.vote_average} </span>
                   </div>
                </div>
            })}
        </div>
    )
}

export default Movie
