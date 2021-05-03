import React from 'react'
import '../../assets/css/spinner/Spinner.css'

function Spinner({imgGif}) {
    
    return (
        <div className="spinner-container">
            <img className="img-spinner" src={imgGif} alt="loading..."/>
        </div>
    )
}

export default Spinner
