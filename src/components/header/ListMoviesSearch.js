import React, { useContext } from 'react'

function ListMoviesSearch(props) {
    return (
        <div>  
            {movies.map(moviesList => {
                return <>
                    <li>
                        <ul> {moviesList.results} </ul>
                    </li>
                </>
            })}
        </div>
    )
}

export default ListMoviesSearch
