import React from 'react'
import { Icons } from '../../constants/UiConstant'
import "./Chat.css"


function Chat() {
    return (
        <section className='chat fade_in'>
            <div className='contacts_list'>
                <div className='search_bar'>
                    <i className={Icons.search}></i>
                    <form>
                        <input type="text" className='search_box input' placeholder='search in your inbox' />
                    </form>
                </div>
                <div className='contacts_container'>
                    <div className='contact_to_chat display_flex_align_center box_shadow click_effect'>
                        <div className='contact_info_container display_flex_align_center'>
                            <div className='profile_img_container display_flex position_relative'>
                                <img src='\images\ProfileImages\user3.jpg' className='profile_avatar_small' />
                                <span className='active_badge'></span>
                            </div>
                            <div className='contact_text'>
                                <h5>user name</h5>
                                <p className='last_message'>hi dear friend how are you</p>
                            </div>
                        </div>
                        <div className='badge_container display_flex_align_center flex_direction_column'>
                            <span className='last_seen'>just now</span>
                            <span className='badge new_message_counter'>1</span>
                        </div>
                    </div>
                    <div className='contact_to_chat display_flex_align_center box_shadow click_effect'>
                        <div className='contact_info_container display_flex_align_center'>
                            <div className='profile_img_container display_flex position_relative'>
                                <img src='\images\ProfileImages\user1.jpg' className='profile_avatar_small' />
                                <span className='active_badge'></span>
                            </div>
                            <div className='contact_text'>
                                <h5>user name</h5>
                                <p className='last_message'>hi dear friend how are you</p>
                            </div>
                        </div>
                        <div className='badge_container display_flex_align_center flex_direction_column'>
                            <span className='last_seen'>just now</span>
                            <span className='badge new_message_counter'>5</span>
                        </div>
                    </div>
                    <div className='contact_to_chat display_flex_align_center box_shadow click_effect'>
                        <div className='contact_info_container display_flex_align_center'>
                            <div className='profile_img_container display_flex position_relative'>
                                <img src='\images\ProfileImages\user2.jpg' className='profile_avatar_small' />
                                <span className='active_badge'></span>
                            </div>
                            <div className='contact_text'>
                                <h5>user name</h5>
                                <p className='last_message'>hi dear friend how are you</p>
                            </div>
                        </div>
                        <div className='badge_container display_flex_align_center flex_direction_column'>
                            <span className='last_seen'>just now</span>
                            <span className='badge new_message_counter'>2</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='messages_panel'>

            </div>
        </section>
    )
}

export default Chat