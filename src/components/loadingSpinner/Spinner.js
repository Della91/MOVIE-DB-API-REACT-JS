import React from 'react'
import gifLoading from '../../assets/image/gif/758X.gif'
import '../../assets/css/spinner/Spinner.css'

function Spinner() {
    
    return (
        <div className="spinner-container">
            <img className="img-spinner" src={gifLoading} alt="loading..."/>
        </div>
    )
}

export default Spinner
