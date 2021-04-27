import React from 'react'
import { useFetch } from '../../hook/useFetch'

function PagesMovies() {

    const PAGES_API = 'https://api.themoviedb.org/3/movie/changes?api_key=eab759ce491c2669921b293405b7c20f'
    const { data } = useFetch(PAGES_API)
    console.log(data)

    return (
        <div>
            
        </div>
    )
}

export default PagesMovies
