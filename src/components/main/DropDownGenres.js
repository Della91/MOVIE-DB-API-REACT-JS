import React, { useContext } from 'react'
import { Link, Redirect } from 'react-router-dom';
import '../../assets/css/main/dropdownGenres.css';
import { useFetch } from '../../hooks/useFetch';
import { MyContext } from '../context/Context';

function DropDownGenres({dataFetchGenresById}) {

    const { REACT_APP_KEY } = process.env;
    const { text } = useContext(MyContext);
    const MOVIES_GENRES_BY_ID = `https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_KEY}&with_genres=`;
    const GENRES_API = `https://api.themoviedb.org/3/genre/movie/list?api_key=${REACT_APP_KEY}`;
    const { genresList } = useFetch(GENRES_API);
    
    if(text) return <Redirect to="/search/movies/1" />

    return (
        <div className="dropdown-container">
            <div className="btn-group dropleft">
                <button className="btn btn-secondary dropdown-toggle" 
                type="button" 
                id="dropdownMenuButton" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false" >
                    GENRES
                </button>
                <div className="dropdown-menu">
                    <Link style={{textDecoration:'underline'}} className="dropdown-item" to="/"> Home </Link>
                    {genresList.map(genresMovie => {
                            return <div key={genresMovie.id} className="genres-list-container">
                            <Link
                            onClick={() => dataFetchGenresById(MOVIES_GENRES_BY_ID,genresMovie.id)} 
                            key={genresMovie.id} 
                            className="dropdown-item" 
                            to={`/movies/genres/${genresMovie.name}`}> 
                            {genresMovie.name} 
                            </Link>
                        </div>
                    })}
  </div>
            </div>
        </div>
    )
}

export default DropDownGenres
