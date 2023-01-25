import React from 'react'
import { Icons } from '../../constants/UiConstant'
import Button from '../UI/button/Button'
import "./NotificationArea.css"


function NotificationArea() {
  return (
    <header className='notification_area'>
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
          <div className='profile_account display_flex_align_center'>
            <img src='\images\ProfileImages\user3.jpg' className='profile_avatar_small' />
            <h3 className='name'>
              Maria Johns
            </h3>
          </div>
        </section>
      </section>




    </header>
  )
}

export default NotificationArea