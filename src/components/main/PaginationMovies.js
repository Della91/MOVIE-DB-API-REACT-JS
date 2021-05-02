import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { usePagination } from '../../hooks/usePagination';
import '../../assets/css/main/paginationMovies.css'
import { MyContext } from '../context/Context';
import '../../assets/css/main/paginationMovies.css'

function PaginationMovies() {

    const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API}&query=`;
    const { text } = useContext(MyContext);
    const { getPages,totalPages } = usePagination();
    let pageLink = [];

    useEffect(() => {
        getPages(SEARCH_API);
    },[text])

    for (let i = 1; i <= totalPages; i++) {
        pageLink.push(
        <Link
        className="link-pagination"
        to={`/search/movies/${i}`}
        onClick={() => getPages(SEARCH_API,i)} > {i} </Link>)
    }
    

    return (
        <div className="pages-movies-container">
            {pageLink} 
        </div>
    )
}

export default PaginationMovies
