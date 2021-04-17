import React, { useContext } from 'react'
import { MyContext } from '../context/Context';
import '../../assets/css/main/ListMoviesSearch.css'

function ListMoviesSearch(props) {

    const { movies } = useContext(MyContext); 
    console.log(movies)
    return (
        <div >  
            {movies.map((listMovies,id) => {
                return <div key={id}>
                   <h1 key={id}> {listMovies.original_title} </h1>
                   <p> {listMovies.vote_average} </p>
                </div>
            })}
        </div>
    )
}

export default ListMoviesSearch
