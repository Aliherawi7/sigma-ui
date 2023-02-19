import React from 'react'
import { ButtonTypes, Icons } from '../../constants/UiConstant'
import Button from '../UI/button/Button'
import "./NotificationArea.css"
import { useSelector } from 'react-redux'
import ProfilePicture from '../UI/ProfilePicture/ProfilePicture'


function NotificationArea() {
  const state = useSelector(state => state.authentication);
  console.log(state);
  return (
    <section className='notification_area'>
      
      <section className='requests box_style section_splitor'>
        <div className='header_container display_flex_align_center'>
          <h3>Requests</h3>
          <span className='total_budge'>5</span>
        </div>
        <div className='contacts_container'>
          <div className='profile_account request display_flex_align_center'>
            <img src='\images\ProfileImages\user3.jpg' className='profile_avatar_small' />
            <h5 className='name_request'>Maria Johns <span> wants to add you to friends</span></h5>
          </div>
          <div className='accept_reject_container display_flex_align_center'>
              <Button name={"Accept"} type={ButtonTypes.general} icon={Icons.tick}/>
              <Button name={"Decline"} type={ButtonTypes.gray} icon={Icons.x}/>
          </div>
        </div>


      </section>
      <section className='contacts box_style section_splitor'>
        <div className='header_container display_flex_align_center'>
          <h3>Contacts</h3>
          <span className='total_budge'>54</span>
        </div>
        <div className='contacts_container'>
          {<ProfilePicture userInfo={{name:"Maria Johns", image:'/images/ProfileImages/user3.jpg' }} /> }
          {<ProfilePicture userInfo={{name:"Alex Johns", image:'/images/ProfileImages/user1.jpg' }} /> }
        </div>

      </section>




    </section >
  )
}

export default NotificationArea