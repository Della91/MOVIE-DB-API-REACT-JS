import React, { useContext, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom';
import '../../assets/css/header/dropdown.css';
import { MyContext } from '../context/Context';

function DropDown() {

    const { genresList,text } = useContext(MyContext);

    if (text) return <Redirect to="/search/movie" />

    // function filterIdMovies(){
    //     let idFilter = moviesById.map((index,i) => index.genre_ids)
        
    // }
    // filterIdMovies()
    

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
                            // onClick={filterMovies(genresMovie.id)}
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
