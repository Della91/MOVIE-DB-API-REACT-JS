import React, { useState } from 'react'
import { MyContext } from './Context'


function MyProviderApi({children}) {
    
    const [movies,setMovies] = useState([]);
    const [text,setText] = useState('');
    
    function handleSubmit(e){
        e.preventDefault();
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=eab759ce491c2669921b293405b7c20f&query=${text}`)
        .then(data => data.json())
        .then(data => {
        setMovies(...data.results);
        console.log(data)
        })
    }

    function handleChange(e){
        e.preventDefault();
        setText(e.target.value)
    }

    return (
        <MyContext.Provider value={{text,setMovies,handleSubmit,handleChange}}>
            {children}
        </MyContext.Provider>
    )
}


export default MyProviderApi;