import React, { useContext, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom';
import '../../assets/css/header/dropdown.css';
import { MyContext } from '../context/Context';

function DropDown(props) {

    const { genresList,text,fetchApiGenres } = useContext(MyContext);
    const MOVIES_GENRES_BY_ID = 'https://api.themoviedb.org/3/discover/movie?api_key=eab759ce491c2669921b293405b7c20f&with_genres=';
    const GENRES_API = 'https://api.themoviedb.org/3/genre/movie/list?api_key=eab759ce491c2669921b293405b7c20f';

    useEffect(() => {
        fetchApiGenres(GENRES_API);
    },[])

    if (text) return <Redirect to="/search/movie" />

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
                            onClick={() => props.dataFetchGenresById(MOVIES_GENRES_BY_ID,genresMovie.id)} 
                            key={genresMovie.id} 
                            className="dropdown-item" 
                            to={`/${genresMovie.name}`}> 
                            {genresMovie.name} 
                            </Link>
                        </div>
                    })}
  </div>
            </div>
        </div>
    )
}

export default DropDown
