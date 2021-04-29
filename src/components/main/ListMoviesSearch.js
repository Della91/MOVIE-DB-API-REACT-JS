import React, { useContext,useEffect,useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import Spinner from '../loadingSpinner/Spinner';
import { useFetch } from '../../hook/useFetch';
import { MyContext } from '../context/Context';
import PagesMovies from './PagesMovies'
import { useMyFunctions } from '../../hook/useMyFunctions';

function ListMoviesSearch() {
    
    const IMAGE_API = 'https://image.tmdb.org/t/p/w500/';
    const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=eab759ce491c2669921b293405b7c20f&query=';
    const { text } = useContext(MyContext);
    const { data,loading } = useFetch(SEARCH_API+text);
    const { dataSearch,nextPages } = useMyFunctions();

    console.log(data)

    if (!text) return <Redirect to="/" />

    /* console.log(totalPages) */

    return (
        <div className="info-movie-container">  
            {data.map((listMovies) => {
                return <div key={listMovies.id}>
                    <img className="img-info-movie" 
                    src={IMAGE_API + listMovies.poster_path} alt="" />
                    <div className="info-movie">
                        <h3> {listMovies.title} </h3>
                        <span 
                        style={{color: listMovies.vote_average >= 6 ? 'green' : 'red'}}> 
                        {listMovies.vote_average} 
                        </span>
                    </div>
                </div>
            })}
            {/* <PagesMovies dataMovies = {data} /> */}
        </div>
    )
}

export default ListMoviesSearch
