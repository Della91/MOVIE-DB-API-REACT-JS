import React from 'react'
import gifLoading from '../../assets/image/gif/758X.gif'

function Spinner() {
    
    return (
        <div className="spinner-container">
            <img src={gifLoading} alt="loading..."/>
        </div>
    )
}

export default Spinner
