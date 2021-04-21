import React, { useContext, useEffect } from 'react'
import { MyContext } from '../context/Context';
import '../../assets/css/main/ListMoviesSearch.css'
import { Redirect } from 'react-router-dom';
import Spinner from '../loadingSpinner/Spinner';

function ListMoviesSearch() {

    const { searchMovies,setSearchMovies,text,loading } = useContext(MyContext); 
    const IMAGE_API = 'https://image.tmdb.org/t/p/w500/';

    useEffect(() => {
        if (!text) setSearchMovies([]);
    },[text,setSearchMovies])
    if (!text) return <Redirect to="/" />

    return (
        <div className="list-movie-container">  
            {loading ? searchMovies.map((listMovies) => {
                return <div key={listMovies.id}>
                    <img className="img-info-movie-search" 
                    src={IMAGE_API + listMovies.poster_path} alt="" />
                    <div className="search-movies-info">
                        <h3> {listMovies.original_title} </h3>
                        <p style={{fontSize:'16px'}}> {listMovies.vote_average} </p>
                    </div>
                </div>
            }) : <Spinner/>}
        </div>
    )
}

export default ListMoviesSearch
