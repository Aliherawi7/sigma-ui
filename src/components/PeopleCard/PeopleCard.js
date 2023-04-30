import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./PeopleCard.css"
import { ButtonTypes, Icons } from '../../constants/UiConstant'
import Button from '../../components/UI/button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { APIEndpoints, Paths } from '../../constants/PathURL'

function PeopleCard({ userName, profilePictureUrl, name, lastName, friends, posts, customRef = null, randColor }) {
    const navigate = useNavigate();
    const auth = useSelector(state => state.authentication)
    const goToProfilePage = (id) => {
        console.log("in nav")
        navigate(Paths.PROFILE + "/" + id)
    }
    const addFriendRequest = (userName) => {
        fetch(APIEndpoints.ADD_FRIEND_REQUEST, {
            method: "POST",
            headers: {
                "authorization": auth.token,
                "content-Type": "application/json"
            },
            body: JSON.stringify({
                'requestSenderUserName': auth.userName,
                'requestReceiverUserName': userName
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div className='people_card box_shadow' key={userName} ref={customRef}>
            <div className='card_header' style={{ "--background": randColor.background }}>
            </div>
            <div
                onClick={() => goToProfilePage(userName)}
                className='profile_img_container display_flex align_items_center justify_content_center'>
                <img src={APIEndpoints.HOSTNAME + profilePictureUrl} className='profile_avatar' alt={name} />
            </div>
            <div className='profile_info position_relative'>
                <h5 className='title' onClick={() => goToProfilePage(userName)}>{name + " " + lastName}</h5>
                <div className='connections_posts display_flex justify_content_center'>
                    <div className='container display_flex flex_direction_column'>
                        <span><strong>{friends}</strong></span>
                        <span>Friends</span>
                    </div>
                    <div className='container display_flex flex_direction_column'>
                        <span><strong>1.2k</strong></span>
                        <span>Posts</span>
                    </div>
                </div>
            </div>
            {/*  this button should be in selection case */}
            <div className='connection_buttons'>
                <Button name="connect" icon={Icons.plus} type={ButtonTypes.general} click={() => addFriendRequest(userName)} />
            </div>
        </div>
    )
}

export default PeopleCard