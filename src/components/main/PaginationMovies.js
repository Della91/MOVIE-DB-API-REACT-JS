import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useMyFunctions } from '../../hook/useMyFunctions';
import '../../assets/css/main/linkPagination.css'
import { MyContext } from '../context/Context';
import '../../assets/css/main/linkPagination.css'

function PagesMovies() {

    const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=eab759ce491c2669921b293405b7c20f&query=';
    const { text } = useContext(MyContext);
    const { nextPages,totalPages } = useMyFunctions();
    let pageLink = [];

    useEffect(() => {
        nextPages(SEARCH_API);
    },[text])

    for (let i = 1; i <= totalPages; i++) {
        pageLink.push(
        <Link
        className="link-pagination"
        to={`/search/movies/${i}`}
        onClick={() => nextPages(SEARCH_API,i)} > {i} </Link>)
    }
    

    return (
        <div className="pages-movies-container">
            {pageLink} 
        </div>
    )
}

export default PagesMovies
