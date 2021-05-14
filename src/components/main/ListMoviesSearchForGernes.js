import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom';
import { MyContext } from '../context/Context';

function MoviesSearchForGernes({dataMoviesSearchGenres}) {

    const IMAGE_API = 'https://image.tmdb.org/t/p/w500';
    const { text } = useContext(MyContext);
    
    if(text) return <Redirect to="/search/movies/1" /> 

    return (
        <div className="info-movie-container">
            {dataMoviesSearchGenres.map((movie) => {
                return <div key={movie.id}>
                        <img className="img-info-movie" src={IMAGE_API + movie.poster_path} alt=""/> 
                        <div className="info-movie">
                            <h3> {movie.title} </h3> 
                            <span 
                            style={{color: movie.vote_average >= 6 ? 'green' : 'red'}} > 
                            {movie.vote_average} </span>
                        </div>
                </div>
            })}
        </div>
    )
}

export default MoviesSearchForGernes
