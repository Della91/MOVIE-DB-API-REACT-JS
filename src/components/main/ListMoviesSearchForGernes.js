import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom';
import Spinner from '../loadingSpinner/Spinner';
import faceGif from '../../assets/image/gif/face.gif'

function MoviesSearchForGernes({dataLoading,dataMoviesSearchGenres,text}) {

    const IMAGE_API = 'https://image.tmdb.org/t/p/w500';
    
    if(text) return <Redirect to="/search/movies/1" /> 

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
            }) : <Spinner imgGif={faceGif} />}
        </div>
    )
}

export default MoviesSearchForGernes
