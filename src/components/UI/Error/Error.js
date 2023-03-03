import React from 'react'
import "./Error.css"

function Error({errorType=""}) {
    return (
        <div className='error'>
            <h1>{errorType}</h1>
            <h2>Ooops... something went wrong</h2>
        </div>
    )
}

export default Error
