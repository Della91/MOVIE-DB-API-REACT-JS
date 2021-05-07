import React, { useContext, useEffect, useState } from 'react'
import { NavLink, Redirect, useParams } from 'react-router-dom';
import { usePagination } from '../../hooks/usePagination';
import '../../assets/css/main/paginationMovies.css'
import { MyContext } from '../context/Context';
import '../../assets/css/main/paginationMovies.css'

function PaginationMovies() {

    const { REACT_APP_KEY } = process.env;
    const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_KEY}&query=`;
    const { text } = useContext(MyContext);
    const { getPages,totalPages } = usePagination();
    let pageLink = [];

    useEffect(() => {
        getPages(SEARCH_API);
    },[text])

    if(!text) return <Redirect to="/" />
    
    for (let i = 1; i <= totalPages; i++) {
        pageLink.push(
        <NavLink
        exact to={`/search/movies/${i}`}
        activeClassName="active-link"
        className="link-pagination" 
        /* onClick={() => handleClick()} */ > {i} </NavLink>)
    }
    

    return (
        <div className="pages-movies-container">
            {pageLink} 
        </div>
    )
}

export default PaginationMovies
