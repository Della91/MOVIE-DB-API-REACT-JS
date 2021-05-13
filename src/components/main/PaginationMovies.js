import React, { useEffect } from 'react'
import { NavLink, Redirect } from 'react-router-dom';
import { usePagination } from '../../hooks/usePagination';
import '../../assets/css/main/paginationMovies.css'
/* import { MyContext } from '../context/Context'; */
import '../../assets/css/main/paginationMovies.css'

function PaginationMovies({text}) {

    const { REACT_APP_KEY } = process.env;
    const IMAGE_API = 'https://image.tmdb.org/t/p/w500/';
    const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_KEY}&query=`;
    /* const { text } = useContext(MyContext); */
    const { getPages,totalPages,dataResults,setLoading } = usePagination(text);
    let pageLink = [];

    useEffect(() => {
        getPages(SEARCH_API,text)
        /* return () => getPages(SEARCH_API,text) */
    },[text])

    if(!text) return <Redirect to="/" />
    
    for (let i = 1; i <= totalPages; i++) {
        pageLink.push(
        <NavLink
        key={i}
        exact to={`/search/movies/${i}`}
        activeClassName="active-link"
        className="link-pagination" 
        onClick={() => getPages(SEARCH_API,text,i)} > {i} </NavLink>)
    }

    return (
        <div className="info-movie-container">  
            {dataResults.map((listMovies) => {
                return  <div key={listMovies.id}>
                    <img className="img-info-movie" 
                    src={IMAGE_API + listMovies.poster_path} alt=""
                    onLoad={() => setLoading(true)} />
                    <div className="info-movie">
                        <h3> {listMovies.title} </h3>
                        <span 
                        style={{color: listMovies.vote_average >= 6 ? 'green' : 'red'}}> 
                        {listMovies.vote_average} 
                        </span>
                    </div>
                </div>
            })}
            <div className="pages-movies-container"> 
                {pageLink}
            </div>
        </div>
    )
}

export default PaginationMovies
