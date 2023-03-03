import React from 'react'
import "./Error.css"

function Error({errorType=""}) {
    return (
        <div className='error'>
            <h1>{errorType}</h1>
            <h3>Ooops... something went wrong</h3>
        </div>
    )
}

export default Error
