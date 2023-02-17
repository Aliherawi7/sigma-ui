import React from 'react'
import "./Post.css"
import { Icons } from '../../constants/UiConstant'

function Post({userInfo, date, images=[]}) {
    return (
        <div className='post'>
            <div className='connection_post box_shadow background_color element_touch'>
                <div className='post_header'>
                    <div className='account_info'>
                        <img src={userInfo?.image} className='profile_avatar' alt={userInfo?.name} />
                        <div className='account_name_date'>
                            <h4>{userInfo?.name}</h4>
                            <p className='post_date'>{date}</p>
                        </div>
                    </div>
                    <span className='post_setting'><i className={Icons.threeDots}></i></span>
                </div>
                <div className='post_body'>
                    <div className='image_containter'>
                        {images.map(item => {
                            return <img src={item} alt={userInfo.name} />
                        })}
                    </div>
                </div>
                <div className='post_reactions'>
                    <div className='likes'><i className='bi bi-heart'></i></div>
                    <div className='likes'><i className='bi bi-chat'></i></div>
                    <div className='likes'><i className='bi bi-share'></i></div>
                </div>
            </div>
        </div>
    )
}

export default Post
