import React from 'react'
import Button from '../../components/UI/button/Button'
import { Icons } from '../../constants/UiConstant'
import "./Chat.css"
import useRedirect from '../../hooks/useRedirect'


function Chat() {
    useRedirect();
    return (
        <section className='chat height_100 fade_in '>
            <div className='contacts_list'>
                <div className='search_bar'>
                    <i className={Icons.search}></i>
                    <form>
                        <input type="text" className='search_box input' placeholder='search in your inbox' />
                    </form>
                </div>
                <div className='contacts_container'>
                    <div className='contact_to_chat display_flex_align_center click_effect'>
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
                    <div className='contact_to_chat display_flex_align_center click_effect'>
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
                    <div className='contact_to_chat display_flex_align_center click_effect'>
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
                <div className='header display_flex'>
                    <img src='\images\ProfileImages\user2.jpg' className='profile_avatar_small' />
                    <div className='contact_name_status'>
                        <h5 className='name'>
                            Maria Johns
                            <span className='active_badge'> </span>
                        </h5>
                        <p className='last_seen'>Active now</p>
                    </div>

                </div>
                <div className='message_panel'>
                    <div className='messages_container display_flex flex_direction_column'>
                        <div className='send_message display_flex'>
                            <div className='message_body display_flex flex_direction_column'>
                                <p className='message_value'>Hi guys this is a test message</p>
                                <span className='message_date'>10:20 am</span>
                            </div>
                            <img src='\images\ProfileImages\user3.jpg' className='profile_avatar_small' />
                        </div>
                        <div className='receive_message display_flex'>
                            <img src='\images\ProfileImages\user2.jpg' className='profile_avatar_small' />
                            <div className='message_body display_flex flex_direction_column'>
                                <p className='message_value'>Hi guys this is a test message I made this line's width a little longer to test the size of message body</p>
                                <span className='message_date'>10:20 am</span>
                            </div>
                        </div>
                        
                    </div>
                    <div className='input_panel'>
                        <Button icon={Icons.emojis.smile} />
                        <input type={'text'} className='input width_100' placeholder='Type a message'/>
                        <Button icon={Icons.send} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Chat