import React, { useContext, useEffect } from 'react'
import '../../assets/css/header/SearchBox.css'
import { MyContext } from '../context/Context'


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
            </div>
    )
}

export default SearchBox
