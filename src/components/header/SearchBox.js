import React, { useContext, useEffect } from 'react'
import '../../assets/css/header/SearchBox.css'
import { MyContext } from '../context/Context'
import ListMoviesSearch from '../main/ListMoviesSearch';


function SearchBox() {
    
    const { handleSubmit,text,setText } = useContext(MyContext); 
  /*   console.log(handleSubmit);
    console.log(text);
    console.log(setText); */

    function handleChange(e){
        e.preventDefault();
        setText(e.target.value)
    }

    
    return(
            <div className="container-search-box">
                <form action="" onSubmit={handleSubmit}>
                    <input 
                    className="input-search-movie"
                    placeholder="search movie" 
                    type="text" 
                    value={text}
                    onChange={handleChange} />
                </form>

                {setText.length > 0 && <ListMoviesSearch/>}
            </div>
    )
}

export default SearchBox
