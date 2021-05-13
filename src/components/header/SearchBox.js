import React from 'react'
import '../../assets/css/header/SearchBox.css'

function SearchBox({text,handleChange}) {

    /* const { text,handleChange } = useContext(MyContext); */
    
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
