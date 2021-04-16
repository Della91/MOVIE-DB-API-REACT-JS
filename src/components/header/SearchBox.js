import React, { createContext, useContext, useState } from 'react'
import '../../assets/css/header/SearchBox.css'
import { MyContext } from '../context/Context'


function SearchBox(props) {
    
    const myContext = useContext(MyContext); 
    const [text,setText] = useState('');
    console.log(myContext);

    function handleChange(e){
        e.preventDefault();
        setText(e.target.value)
    }
    
    return(
            <div className="container-search-box">
                <form action="">
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
