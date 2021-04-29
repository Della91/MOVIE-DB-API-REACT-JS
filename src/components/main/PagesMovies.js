import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useMyFunctions } from '../../hook/useMyFunctions';
import '../../assets/css/main/linkPages.css'

function PagesMovies() {

    const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=eab759ce491c2669921b293405b7c20f&query=';
    const { nextPages,totalPages } = useMyFunctions();

    const pageLinks = [];

    for (let i = 1; i <= totalPages + 1; i++) {
        let active = totalPages === i ? 'red' : '';
        pageLinks.push(<Link 
            className="link-pages"
            style={{backgroundColor:`${active}`}} 
            key={i} 
            onClick={() => nextPages(SEARCH_API,i)}> {i} </Link>) 
    }

    return (
        <div className="pages-movies-container">
           {pageLinks}
        </div>
    )
}

export default PagesMovies
