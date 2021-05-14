import React, { useState } from 'react'
import { MyContext } from './Context'


function MyProvider({children}) { 
    
    const [text,setText] = useState('');    
    
    function handleChange(e){
        e.preventDefault();
        setText(e.target.value)
    }
    
    return (
        <MyContext.Provider value={{ text,handleChange }}>
            {children}
        </MyContext.Provider>
    )

}


export default MyProvider;