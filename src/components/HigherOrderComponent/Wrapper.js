import React from 'react'
import "./Wrapper.css"

function Wrapper(props) {
    return (
        <section className='wrapper'>
            {props.children}
        </section>
    )
}

export default Wrapper
