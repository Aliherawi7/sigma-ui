import React from 'react'
import { ButtonTypes, Icons } from '../../constants/UiConstant'
import Button from '../UI/button/Button'
import "./NotificationArea.css"
import { useSelector } from 'react-redux'


function NotificationArea() {
  const state = useSelector(state => state.authentication);
  console.log(state);
  return (
    <section className='notification_area'>
      <section className='header'>
        <div className='search_bar'>
          <i className={Icons.search}></i>
          <form>
            <input type="text" className='search_box input' placeholder='search' />
          </form>
        </div>
        <section className='profile_info display_flex_align_center'>
          <div className='notifications'>
            <Button icon={Icons.notification} />
          </div>
          <div className='profile_account display_flex_align_center none_selectable'>
            <img src={state.profileImage} className='profile_avatar_small' />
            <h3 className='name'>
              {state.userName}
            </h3>
          </div>
        </section>
      </section>
      <section className='requests section_splitor'>
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
      <section className='contacts section_splitor'>
        <div className='header_container display_flex_align_center'>
          <h3>Contacts</h3>
          <span className='total_budge'>54</span>
        </div>
        <div className='contacts_container'>
          <div className='profile_account display_flex_align_center'>
            <img src='\images\ProfileImages\user3.jpg' className='profile_avatar_small' />
            <h3 className='name'>
              Maria Johns
            </h3>
          </div>
          <div className='profile_account display_flex_align_center'>
            <img src='\images\ProfileImages\user3.jpg' className='profile_avatar_small' />
            <h3 className='name'>
              Maria Johns
            </h3>
          </div>
          <div className='profile_account display_flex_align_center'>
            <img src='\images\ProfileImages\user3.jpg' className='profile_avatar_small' />
            <h3 className='name'>
              Maria Johns
            </h3>
          </div>
        </div>

      </section>




    </section >
  )
}

export default NotificationArea