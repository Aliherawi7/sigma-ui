import React from 'react'
import useRedirect from '../../hooks/useRedirect'
import "./NotFound.css"

function NotFound() {
    useRedirect()
    return (
        <div className='not_found fade_in display_flex display_flex_align_center height_100 flex_direction_column justify_content_center'>
            <h2>404</h2>
            <p className='title'>Ooops... resource not found</p>
        </div>
    )
}

export default NotFound
