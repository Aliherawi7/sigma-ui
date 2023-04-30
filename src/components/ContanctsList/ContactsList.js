import React, { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { APIEndpoints } from '../../constants/PathURL';
import { Icons } from '../../constants/UiConstant';
import useFetch from '../../hooks/useFetch';
import actions from '../../store/Actions';
import { setCookie } from '../../Utils/Cookie';
import Error from '../UI/Error/Error';
import Spinner from '../UI/Loading/Spinner';
import "./ContactsList.css";


function ContactsList({ setCurrentChat }) {
    const auth = useSelector(state => state.authentication)
    const dispatch = useDispatch();
    const [pagination, setPagination] = useState({ offset: 1, pageSize: 12 })
    const lastNode = useRef();
    const { data, error, loading, setData, hasMore } =
        useFetch(APIEndpoints.ALL_FRIENDS(auth.userName, pagination.offset, pagination.pageSize), { method: "GET", headers: { "Authorization": auth.token } });
    const currentChat = (username) => {
        setCookie("lastChat", username, 20)
        dispatch({
            type: actions.CURRENT_CHAT,
            payload: username
        })
        setCurrentChat(username)

    }
    useEffect(() => {


    }, [data, pagination])

    const lastNodeReference = node => {
        if (loading) return;
        if (lastNode.current) lastNode.current.disconnect();
        lastNode.current = new IntersectionObserver(enteries => {
            if (enteries[0].isIntersecting) {
                if (hasMore) {
                    setPagination({ offset: pagination.offset + 1, pageSize: pagination.pageSize })
                }
            }
        })
        if (node) lastNode.current.observe(node);
    }


    let element;
    if (error) {
        console.log(error)
        element = <Error />
    } else if (data) {
        element = (
            data.length > 0 ?
                data?.map((item, index) => {
                    if (data.length === index + 1) {
                        return (
                            <div className='contact_to_chat display_flex_align_center click_effect'
                                onClick={() => currentChat(item.userName)}
                                key={item.userName}
                                ref={lastNodeReference}
                            >
                                <div className='contact_info_container display_flex_align_center'>
                                    <div className='profile_img_container display_flex position_relative'>
                                        <img src={APIEndpoints.HOSTNAME + item.profilePictureUrl} className='profile_avatar_small' />
                                        <span className='active_badge'></span>
                                    </div>
                                    <div className='contact_text'>
                                        <h5>{item.name + " " + item.lastName}</h5>
                                        <p className='last_message'>hi dear friend how are you</p>
                                    </div>
                                </div>
                                <div className='badge_container display_flex_align_center flex_direction_column'>
                                    <span className='last_seen'>just now</span>
                                    <span className='badge new_message_counter'>1</span>
                                </div>
                            </div>
                        )
                    }
                    return (
                        <div className='contact_to_chat display_flex_align_center click_effect'
                            onClick={() => currentChat(item.userName)}
                            key={item.userName}>
                            <div className='contact_info_container display_flex_align_center'>
                                <div className='profile_img_container display_flex position_relative'>
                                    <img src={APIEndpoints.HOSTNAME + item.profilePictureUrl} className='profile_avatar_small' />
                                    <span className='active_badge'></span>
                                </div>
                                <div className='contact_text'>
                                    <h5>{item.name + " " + item.lastName}</h5>
                                    <p className='last_message'>hi dear friend how are you</p>
                                </div>
                            </div>
                            <div className='badge_container display_flex_align_center flex_direction_column'>
                                <span className='last_seen'>just now</span>
                                <span className='badge new_message_counter'>1</span>
                            </div>
                        </div>
                    )
                })
                : <h5>You don't have any friend</h5>);
    } else if (!data) {
        element = "You have no friend"
    }
    return (
        <div className='contacts_list'>
            <div className='search_bar'>
                <i className={Icons.search}></i>
                <form>
                    <input type="text" className='search_box input' placeholder='search in your inbox' />
                </form>
            </div>
            <div className='contacts_container'>
                {element}
                {hasMore && <Spinner />}
                {!hasMore && <h5>end of friends</h5>}
            </div>
        </div>
    )
}

export default ContactsList;
