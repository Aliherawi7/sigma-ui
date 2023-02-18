import React from 'react'
import "./Post.css"
import { Icons } from '../../constants/UiConstant'
import ProfilePicture from '../UI/ProfilePicture/ProfilePicture'

function Post({userInfo, date, images=[], reactions}) {
    return (
        <div className='post'>
            <div className='connection_post box_shadow background_color '>
                <div className='post_header'>
                    <ProfilePicture userInfo={userInfo} date={date}/>
                    <span className='post_setting'><i className={Icons.threeDots}></i></span>
                </div>
                <div className='post_body'>
                    <div className='image_containter'>
                        {images.map(item => {
                            return <img src={item} alt={userInfo.name} />
                        })}
                    </div>
                </div>
                <div className='post_reactions display_flex '>
                    <div className='likes'><i className='bi bi-heart'></i>235423</div>
                    <div className='likes'><i className='bi bi-chat'></i>45234</div>
                    <div className='likes'><i className='bi bi-share'></i>12</div>
                </div>
            </div>
        </div>
    )
}

export default Post
