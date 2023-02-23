import React from 'react'
import "./Wrapper.css"

function Wrapper(props) {
    return (
        <section className='wrapper box_shadow' id='wrapper'>
            {props.children}
        </section>
    )
}

export default Wrapper
