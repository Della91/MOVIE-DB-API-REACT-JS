import React, { useContext, useEffect } from 'react'
import { MyContext } from '../context/Context';
import '../../assets/css/main/ListMoviesSearch.css'
import { Redirect } from 'react-router-dom';
import Spinner from '../loadingSpinner/Spinner';
import { useFetch } from '../../hook/useFetch';



function ListMoviesSearch() {
    
    const IMAGE_API = 'https://image.tmdb.org/t/p/w500/';
    const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=eab759ce491c2669921b293405b7c20f&query=';
    const { text } = useContext(MyContext);
    const { data,setData,loading } = useFetch(SEARCH_API+text);
    
    if (!text) return <Redirect to="/" />

    console.log(data)

    return (
        <div className="list-movie-container">  
            {loading ? data.map((listMovies) => {
                return <div key={listMovies.id}>
                    <img className="img-info-movie-search" 
                    src={IMAGE_API + listMovies.poster_path} alt="" />
                    <div className="search-movies-info">
                        <h3> {listMovies.title} </h3>
                        <span 
                        style={{fontSize:'16px',color: listMovies.vote_average >= 6 ? 'green' : 'red'}}> 
                        {listMovies.vote_average} 
                        </span>
                    </div>
                </div>
            }) : <Spinner/>}
        </div>
    )
}

export default ListMoviesSearch
