import React, { useContext } from 'react'
import Spinner from '../loadingSpinner/Spinner';

function MoviesSearchForGernes({dataLoading,dataMoviesSearchGenres}) {

    const IMAGE_API = 'https://image.tmdb.org/t/p/w500';

    return (
        <div className="info-movie-container">
            {dataLoading ? dataMoviesSearchGenres.map((movie) => {
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

export default MoviesSearchForGernes
