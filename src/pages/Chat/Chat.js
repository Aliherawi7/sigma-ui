import React, { useEffect, useState, useRef } from 'react'
import Button from '../../components/UI/button/Button'
import { Icons } from '../../constants/UiConstant'
import "./Chat.css"
import useRedirect from '../../hooks/useRedirect'
import { APIEndpoints } from '../../constants/PathURL'
import { useSelector } from 'react-redux'
import ContactsList from '../../components/ContanctsList/ContactsList'
import Spinner from '../../components/UI/Loading/Spinner'


let counter = 0;

function Chat() {
    useRedirect();
    const auth = useSelector(state => state.authentication)
    let [currentChat, setCurrentChat] = useState(useSelector(state => state.lastChatHistory));
    const [currentFrient, setCurrentFriend] = useState({});
    const [textInput, setTextInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true)
    const messageContainerRef = useRef();


    let chatElement;
    useEffect(() => {
        setLoading(true)
        fetch(APIEndpoints.ONE_PERSON + currentChat, { method: "GET", headers: { "Authorization": auth.token } }
        ).then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error(res.statusText);
            }
        }).then(resData => {
            setCurrentFriend(resData)
            //  setLoading(false)
        })
        //console.dir(messageContainerRef.current)
        //   messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight
    }, [currentChat])


    useEffect(() => {
        let interval = setInterval(() => {
            fetch(APIEndpoints.RECIVE_MESSAGE(currentChat ? currentChat : ""),
                { method: "GET", headers: { "Authorization": auth.token } })
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    } else {
                        throw new Error(res.statusText)
                    }
                }).then(resData => {
                    setMessages(resData)
                    setLoading(false)
                    messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight
                    // console.log(messages)
                    // console.log(resData)
                })

        }, 2000)

        return () => {
            clearInterval(interval)
        }

    }, [currentChat])



    const onMessageReceive = (msg) => {

    }

    const sendMessage = () => {
        let messageDate = new Date();

        fetch(APIEndpoints.SEND_MESSAGE, {
            method: "POST",
            headers: {
                "Authorization": auth.token,
                "content-type": "application/json"
            },
            body: JSON.stringify({
                username: currentChat,
                message: textInput,
                sentDateTime: messageDate.toJSON()
            })
        }).then(res => {

            if (res.ok) {
                return res.json();
            } else {
                throw new Error(res.statusText)
            }
        }).then(resData => {
            setMessages([...messages, resData])
            setTextInput("")
            messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight
        })
    }
    const onEnter = (e) => {
        if (e.key == "Enter") {
            sendMessage();
        }
    }

    if (loading) {
        chatElement = <Spinner />
    } else if (messages) {
        chatElement = (
            <div className='messages_container display_flex flex_direction_column' ref={messageContainerRef}>
                {messages?.length > 0 ? messages?.map(item => {
                    var date = new Date(item.dateTime)
                    if (item.receiverUsername == auth.userName) {
                        return (
                            <div className='receive_message display_flex' key={item.id}>
                                <img src={APIEndpoints.HOSTNAME + item.senderProfileImageUrl} className='profile_avatar_small' />
                                <div className='message_body display_flex flex_direction_column'>
                                    <p className='message_value'>{item.text}</p>
                                    <span className='message_date'>{date.getHours() + ":" + date.getMinutes()}</span>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div className='send_message display_flex' key={item.id}>
                                <div className='message_body display_flex flex_direction_column'>
                                    <p className='message_value'>{item.text}</p>
                                    <span className='message_date'>{date.getHours() + ":" + date.getMinutes()}</span>
                                </div>
                                <img src={APIEndpoints.HOSTNAME + item.senderProfileImageUrl} className='profile_avatar_small' />
                            </div>
                        )
                    }
                }) : <h5 style={{ height: "60vh" }} className='display_flex width_100 display_flex_align_center justify_content_center'>No messages here yet...</h5>}
            </div>
        )
    }


    return (
        <section className='chat height_100 fade_in '>
            {<ContactsList setCurrentChat={setCurrentChat} setLoading={setLoading} />}
            {currentChat ? <div className='messages_panel'>
                <div className='header display_flex'>
                    <img src={APIEndpoints.HOSTNAME + currentFrient.profilePictureUrl} className='profile_avatar_small' />
                    <div className='contact_name_status'>
                        <h5 className='name'>
                            {currentFrient.name + " " + currentFrient.lastName}
                            <span className='active_badge'> </span>
                        </h5>
                        <p className='last_seen'>Active now</p>
                    </div>
                </div>
                <div className='message_panel'>
                    {chatElement}
                    <div className='input_panel'>
                        <Button icon={Icons.emojis.smile} />
                        <input type={'text'} className='input width_100' value={textInput} onChange={e => (setTextInput(e.target.value))} placeholder='Type a message' onKeyUp={e => onEnter(e)} />
                        <Button icon={Icons.send} click={sendMessage} />
                    </div>
                </div>
            </div> : <h3 className='display_flex width_100 display_flex_align_center justify_content_center'>You haven't any chat yet</h3>}
        </section>
    )
}

export default Chat