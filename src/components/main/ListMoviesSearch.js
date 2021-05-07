import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom';
import Spinner from '../loadingSpinner/Spinner';
import { useFetch } from '../../hooks/useFetch';
import { MyContext } from '../context/Context';
import gifLoading from '../../assets/image/gif/758X.gif'

function ListMoviesSearch() {
    
    const IMAGE_API = 'https://image.tmdb.org/t/p/w500/';
    const { REACT_APP_KEY } = process.env;
    const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_KEY}&query=`;
    const { text } = useContext(MyContext);
    const { data,loading,setLoading } = useFetch(SEARCH_API+text);

    /* console.log(data) */

    if (!text) return <Redirect to="/" />

    return (
        <div className="info-movie-container">  
            {loading ? data.map((listMovies) => {
                return  <div key={listMovies.id}>
                    <img className="img-info-movie" 
                    onLoad={() => setLoading(true)}
                    src={IMAGE_API + listMovies.poster_path} alt="" />
                    <div className="info-movie">
                        <h3> {listMovies.title} </h3>
                        <span 
                        style={{color: listMovies.vote_average >= 6 ? 'green' : 'red'}}> 
                        {listMovies.vote_average} 
                        </span>
                    </div>
                </div>
            }) : <Spinner imgGif={gifLoading} />}
        </div>
    )
}

export default ListMoviesSearch
