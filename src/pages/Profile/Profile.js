import React from 'react'
import "./Profile.css"
import { useSelector } from 'react-redux'

function Profile() {
    const state = useSelector(state => state.authentication)
    return (
        <div className='profile'>
            {/* the navbar of the profile page */}
            <div className='profile_header'>
                <div className='header_image' style={{ "--headerbackground": `url(${state.profileImage})` }}>
                    <div className='user_profile_info display_flex align_items_center'>
                        <img src={state.profileImage} className="profile_img_border" />
                        <h2 className='username'>{state.userName}</h2>
                    </div>
                </div>
                <ul className='profile_menu display_flex justify_content_center'>
                    <li className='active'>Timeline</li>
                    <li>About</li>
                    <li>Friends</li>
                    <li>Photos</li>
                </ul>
            </div>


            {/* the body of menu */}
            <div className='menu_body'>
                the lates posts
            </div>
        </div>
    )
}

export default Profile
