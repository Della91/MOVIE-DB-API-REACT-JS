import React, { useContext } from 'react'
import { MyContext } from '../context/Context';
import '../../assets/css/main/ListMoviesSearch.css'

function ListMoviesSearch() {

    const { searchMovies,text } = useContext(MyContext); 
    return (
        <div className="list-movie-container">  
            {searchMovies.length > 0 && searchMovies.map((listMovies) => {
                return <div key={listMovies.id} className="search-movies">
                    <img src={listMovies.poster_path} alt="" />
                   <h1> {listMovies.original_title} </h1>
                   <p> {listMovies.vote_average} </p>
                </div>
            })}
        </div>
    )
}

export default ListMoviesSearch
