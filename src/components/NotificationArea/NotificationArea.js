import React, { useState, useEffect } from 'react'
import { ButtonTypes, Icons } from '../../constants/UiConstant'
import Button from '../UI/button/Button'
import "./NotificationArea.css"
import { useSelector } from 'react-redux'
import ProfilePicture from '../UI/ProfilePicture/ProfilePicture'
import { BytesToFile } from '../../Utils/BlobToFile'
import { APIEndpoints, Paths } from '../../constants/PathURL'
import { useNavigate } from 'react-router-dom'


function NotificationArea() {
  const navigate = useNavigate();
  const auth = useSelector(state => state.authentication);
  const [friendRequests, setFriendReqeust] = useState([]);
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch(APIEndpoints.ALL_Received_Friend_Reqeuests, {
      method: "GET",
      headers: { "authorization": auth.token }
    }).then(res => res.json())
      .then(data => {
        setFriendReqeust(data)
      });

    fetch(APIEndpoints.ALL_FRIENDS(auth?.userName), {
      method: "GET",
      headers: { "authorization": auth.token }
    }).then(res => res.json())
      .then(data => {
        setFriends(data)
      });

  }, [])

  const acceptRequest = (requestSenderUserName) => {
    fetch(APIEndpoints.ACCEPT_FRIEND_REQUEST, {
      method: 'POST',
      headers: {
        "authorization": auth.token,
        "content-type": 'application/json'
      },
      body: JSON.stringify({
        "requestReceiverUserName": auth.userName,
        "requestSenderUserName": requestSenderUserName
      })
    })
      .then(res => {
        if (res.ok) {
          setFriendReqeust(friendRequests.filter(item => item.userName != requestSenderUserName))
        } else {
          console.log(res)
        }
      });
  }

  return (
    <section className='notification_area'>

      {friendRequests.length > 0 ? <section className='requests box_style section_splitor'>
        <div className='header_container display_flex_align_center'>
          <h3>Requests</h3>
          <span className='total_budge'>{friendRequests.length}</span>
        </div>
        <div className='friend_rquests'>
          {friendRequests.map(request => {
            return (
              <div className='request_container' key={request.userName}>
                <div className='profile_account request display_flex_align_center'>
                  <div className='profile_container'>
                    <img src={APIEndpoints.HOSTNAME+request.profilePicturePath} className='profile_avatar profile_avatar_small' />
                  </div>
                  <h5 className='name_request'>{request.name + " " + request.lastName} <span> wants to add you to friends</span></h5>
                </div>
                <div className='accept_reject_container display_flex_align_center'>
                  <Button name={"Accept"} type={ButtonTypes.general} icon={Icons.tick} click={() => acceptRequest(request.userName)} />
                  <Button name={"Decline"} type={ButtonTypes.gray} icon={Icons.x} />
                </div>
              </div>
            )
          })}
        </div>
      </section> : null}
      {friends.length > 0 ?
        <section className='contacts box_style section_splitor'>
          <div className='header_container display_flex_align_center'>
            <h3>Contacts</h3>
            <span className='total_budge'>{friends.length}</span>
          </div>
          <div className='contacts_container'>
            {friends?.map(item => {
              console.log("items in friends:", item)
              return (
                <ProfilePicture key={item.userName} 
                click={() => navigate(Paths.PROFILE + "/" + item.userName)} 
                userInfo={{ name: item.name + " " + item.lastName, image: APIEndpoints.HOSTNAME+item.profilePicturePath }} />
              )
            })}
          </div>
        </section>
        : null}

    </section >
  )
}

export default NotificationArea