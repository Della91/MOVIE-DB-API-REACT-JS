import React, { useContext, useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom';
import '../../assets/css/header/SearchBox.css'
import { MyContext } from '../context/Context'
import ListMoviesSearch from '../main/ListMoviesSearch';

function SearchBox() {
    
    const { text,setText,getApiSearchMovies } = useContext(MyContext);
    const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=eab759ce491c2669921b293405b7c20f&query=';


    function handleSubmit() {
        if (text) getApiSearchMovies(SEARCH_API+text); 
    } 
    handleSubmit();

    function handleChange(e){
        e.preventDefault();
        setText(e.target.value)
    }
    
    return(
        <>
            <header className="container-search-box">
                <form action="">
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
