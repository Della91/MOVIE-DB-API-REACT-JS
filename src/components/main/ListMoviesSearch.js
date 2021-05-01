import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom';
import Spinner from '../loadingSpinner/Spinner';
import { useFetch } from '../../hook/useFetch';
import { MyContext } from '../context/Context';

function ListMoviesSearch() {
    
    const IMAGE_API = 'https://image.tmdb.org/t/p/w500/';
    const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=eab759ce491c2669921b293405b7c20f&query=';
    const { text } = useContext(MyContext);
    const { data,loading } = useFetch(SEARCH_API+text);

    console.log(data)

    if (!text) return <Redirect to="/" />

    return (
        <div className="info-movie-container">  
            {loading ? data.map((listMovies) => {
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
            }) : <Spinner/>}
        </div>
    )
}

export default ListMoviesSearch
