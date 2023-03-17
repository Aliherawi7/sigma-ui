import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { APIEndpoints } from '../../constants/PathURL';
import { Icons } from '../../constants/UiConstant';
import useFetch from '../../hooks/useFetch';
import actions from '../../store/Actions';
import { setCookie } from '../../Utils/Cookie';
import Error from '../UI/Error/Error';
import Spinner from '../UI/Loading/Spinner';
import "./ContactsList.css";


function ContactsList({setCurrentChat}) {
    const auth = useSelector(state => state.authentication)
    const dispatch = useDispatch();
    const { data, error, loading, setData } =
        useFetch(APIEndpoints.ALL_FRIENDS(auth.userName, 1, 15), { method: "GET", headers: { "Authorization": auth.token } });
    const currentChat = (username) => {
        setCookie("lastChat", username, 20)
        dispatch({
            type: actions.CURRENT_CHAT,
            payload: username
        })
        setCurrentChat(username)

    }


    let element;
    if (loading) {
        element = <Spinner />;
    } else if (error) {
        element = <Error />
    } else if (!data) {
        element = "You have no friend"
    } else if (data) {

        element = (
            data.length > 0 ?
                data?.map(item => {
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
            </div>
        </div>
    )
}

export default ContactsList;
