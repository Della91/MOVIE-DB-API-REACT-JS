import React, { useContext } from 'react'
import '../../assets/css/header/SearchBox.css'
import { MyContext } from '../context/Context'

function SearchBox() {
    
    const { text,setText,getApiSearchMovies } = useContext(MyContext);


    /* function handleSubmit() {
        if (text) getApiSearchMovies(SEARCH_API+text); 
    } 
    handleSubmit(); */

    function handleChange(e){
        e.preventDefault();
        setText(e.target.value)
    }
    
    return(
        <>
            <header className="container-search-box">
                <form action="">
                    <input 
                    className="input-search-movie"
                    placeholder="search movie" 
                    type="text" 
                    value={text}
                    onChange={handleChange} />
                </form>
            </header>
        </>
    )
}

export default SearchBox
