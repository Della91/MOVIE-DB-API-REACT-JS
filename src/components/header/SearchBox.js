import React, { useContext, useEffect, useState } from 'react'
import '../../assets/css/header/SearchBox.css'
import { MyContext } from '../context/Context'
import ListMoviesSearch from '../main/ListMoviesSearch';
import Movie from '../main/Movie';


function SearchBox() {
    
    const { movies,text,handleSubmit,setText } = useContext(MyContext);

    function handleChange(e){
        e.preventDefault();
        setText(e.target.value)
    }
    
    return(
        <>
            <header className="container-search-box">
                <form action="" onSubmit={handleSubmit}>
                    <input 
                    className="input-search-movie"
                    placeholder="search movie" 
                    type="text" 
                    value={text}
                    onChange={handleChange} />
                </form>
            </header>
        </>
    )
}

export default SearchBox
