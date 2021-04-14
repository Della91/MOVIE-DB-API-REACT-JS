import React from 'react'
import '../../assets/css/header/SearchBox.css'

function SearchBox(props) {
    
    return(
        <div className="container-search-box">
            <form action="" onSubmit={props.handleSubmit}>
                <input 
                className="input-search-movie"
                placeholder="search movie" 
                type="text" 
                value={props.text}
                onChange={props.handleChange} />
            </form>
        </div>
    )
}

export default SearchBox
