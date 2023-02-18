import React from 'react'
import "./ProfilePicture.css"

function ProfilePicture({ userInfo, date }) {
    return (
        <div className='profile_picture display_flex align_items_center'>
            <div className='profile_img_container display_flex align_items_center justify_content_center'>
                <img src={userInfo?.image} className='profile_avatar' alt={userInfo?.name} />
            </div>
            {
                userInfo.name ?
                    <div className='account_name_date'>
                        <h4>{userInfo?.name}</h4>
                        <p className='post_date'>{date}</p>
                    </div>
                    : null
            }
        </div>
    )
}

export default ProfilePicture
