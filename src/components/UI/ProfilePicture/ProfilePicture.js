import React from 'react'
import "./ProfilePicture.css"

function ProfilePicture({ userInfo, date, size = "mid" }) {
    let widthAndHeight = {};
    let fontSize = {}
    if (size === "large") {
        widthAndHeight = {
            width: "100px",
            height: "100px"
        }
        fontSize = {
            fontSize: "1rem"
        }
    } else if (size === "mid") {
        widthAndHeight = {
            width: "40px",
            height: "40px"
        }
        fontSize = {
            fontSize: "0.8rem"
        }
    } else if (size === "small") {
        widthAndHeight = {
            width: "30px",
            height: "30px"
        }
        fontSize = {
            fontSize: "0.8rem"
        }
    }
    return (
        <div className='profile_picture display_flex align_items_center'>
            <div className='profile_img_container display_flex align_items_center justify_content_center' style={widthAndHeight}>
                <img src={userInfo?.image} className='profile_avatar' alt={userInfo?.name} style={widthAndHeight} />
            </div>
            {
                userInfo.name ?
                    <div className='account_name_date'>
                        <h4 style={fontSize}>{userInfo?.name}</h4>
                        <p className='post_date'>{date}</p>
                    </div>
                    : null
            }
        </div>
    )
}

export default ProfilePicture
