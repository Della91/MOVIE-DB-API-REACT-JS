import React, { useContext } from 'react'
import { MyContext } from '../context/Context'

function Movie() {

    const { movies } = useContext(MyContext);
    console.log(movies)

    return (
        <div>
            {movies.map((movie) => {
                return <div key={movie.id}>
                   <img src={movie.poster_path} alt=""/> 
                </div>
            })}
        </div>
    )
}

export default Movie
