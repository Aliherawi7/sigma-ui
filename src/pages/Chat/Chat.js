import React, { useEffect, useRef, useState } from 'react'
import Button from '../../components/UI/button/Button'
import { Icons } from '../../constants/UiConstant'
import "./Chat.css"
import useRedirect from '../../hooks/useRedirect'
import { APIEndpoints } from '../../constants/PathURL'
import useFetch from "../../hooks/useFetch"
import { useSelector } from 'react-redux'
import ContactsList from '../../components/ContanctsList/ContactsList'




function Chat() {
    useRedirect();
    const auth = useSelector(state => state.authentication)
    
    const { data, error, loading, setData } =
    useFetch(APIEndpoints.MESSAGE_OF_SPECIFIC_ACCOUNT("userName"), { method: "GET", headers: { "Authorization": auth.token } })
    
    useEffect(() => {
        
        
    }, [])


    const onMessageReceive = (msg) => {
        
    }
    
    const sendMessage = (msg) => {
        
    }
    console.log(data)
    return (
        <section className='chat height_100 fade_in '>
            {<ContactsList />}
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
                        <input type={'text'} className='input width_100' placeholder='Type a message' />
                        <Button icon={Icons.send} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Chat