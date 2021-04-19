import React, { useContext } from 'react'
import { MyContext } from '../context/Context';
import '../../assets/css/main/ListMoviesSearch.css'

function ListMoviesSearch() {

    const { searchMovies } = useContext(MyContext); 
    const IMAGE_API = 'https://image.tmdb.org/t/p/w500/';
    return (
        <div className="list-movie-container">  
            {searchMovies.map((listMovies) => {
                return <div key={listMovies.id}>
                    <img className="img-info-movie-search" src={IMAGE_API + listMovies.poster_path} />
                    <div className="search-movies-info">
                        <h3> {listMovies.original_title} </h3>
                        <span> {listMovies.vote_average} </span>
                    </div>
                </div>
            })}
        </div>
    )
}

export default ListMoviesSearch
