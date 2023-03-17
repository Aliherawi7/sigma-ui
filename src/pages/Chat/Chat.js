import React, { useEffect, useRef, useState } from 'react'
import Button from '../../components/UI/button/Button'
import { Icons } from '../../constants/UiConstant'
import "./Chat.css"
import useRedirect from '../../hooks/useRedirect'
import { APIEndpoints } from '../../constants/PathURL'
import useFetch from "../../hooks/useFetch"
import { useSelector } from 'react-redux'
import ContactsList from '../../components/ContanctsList/ContactsList'
import { getCookie, getCookies } from '../../Utils/Cookie'




function Chat() {
    useRedirect();
    const auth = useSelector(state => state.authentication)
    let [currentChat, setCurrentChat] = useState(getCookie("lastChat"));
    const [currentFrient, setCurrentFriend] = useState({});
    const { data, error, loading, setData } =
        useFetch(APIEndpoints.MESSAGE_OF_SPECIFIC_ACCOUNT(currentChat ? currentChat : ""),
            { method: "GET", headers: { "Authorization": auth.token } })
    console.log(data)
    useEffect(() => {
        fetch(APIEndpoints.ONE_PERSON+currentChat,{
            method:"GET",
            headers:{
                "Authorization":auth.token,
                "content-type":"application/json"
            },
            
        })
        .then(res => {
            if(res.ok){
                return res.json();
            }else{
                throw new Error(res.statusText);
            }
        }).then(data => {
            setCurrentFriend(data)
        })

    }, [currentChat])


    const onMessageReceive = (msg) => {

    }

    const sendMessage = (msg) => {
        
    }
    return (
        <section className='chat height_100 fade_in '>
            {<ContactsList setCurrentChat={setCurrentChat} />}
            {currentChat? <div className='messages_panel'>
                <div className='header display_flex'>
                    <img src={APIEndpoints.HOSTNAME+currentFrient.profilePictureUrl} className='profile_avatar_small' />
                    <div className='contact_name_status'>
                        <h5 className='name'>
                            {currentFrient.name + " " + currentFrient.lastName}
                            <span className='active_badge'> </span>
                        </h5>
                        <p className='last_seen'>Active now</p>
                    </div>

                </div>
                <div className='message_panel'>
                    <div className='messages_container display_flex flex_direction_column'>
                        {data.length > 0 ? data?.map(item => {
                            var date = new Date(item.dateTime)
                        
                            if (item.receiverUsername == auth.userName) {
                                return (
                                    <div className='receive_message display_flex'>
                                        <img src={APIEndpoints.HOSTNAME+item.senderProfileImageUrl} className='profile_avatar_small' />
                                        <div className='message_body display_flex flex_direction_column'>
                                            <p className='message_value'>{item.text}</p>
                                            <span className='message_date'>{date.getHours()+":"+date.getMinutes()}</span>
                                        </div>
                                    </div>
                                )
                            }else {
                                return(
                                <div className='send_message display_flex'>
                                    <div className='message_body display_flex flex_direction_column'>
                                        <p className='message_value'>{item.text}</p>
                                        <span className='message_date'>{date.getHours()+":"+date.getMinutes()}</span>
                                    </div>
                                    <img src={APIEndpoints.HOSTNAME+item.senderProfileImageUrl} className='profile_avatar_small' />
                                </div>
                                )
                            }
                        }) : <h5 style={{height:"60vh"}}className='display_flex width_100 display_flex_align_center justify_content_center'>No messages here yet...</h5>}



                    </div>
                    <div className='input_panel'>
                        <Button icon={Icons.emojis.smile} />
                        <input type={'text'} className='input width_100' placeholder='Type a message' />
                        <Button icon={Icons.send} />
                    </div>
                </div>
            </div> : <h3 className='display_flex width_100 display_flex_align_center justify_content_center'>You haven't any chat yet</h3>}
        </section>
    )
}

export default Chat