import React, { useEffect } from 'react'
import "./Home.css"
import Button from '../../components/UI/button/Button'
import { Icons, ButtonTypes } from '../../constants/UiConstant'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useRedirect from '../../hooks/useRedirect'

function Home() {
  useRedirect();
  const state = useSelector(state => state.authentication);

  return (
    <section className='home fade_in'>
      {/* <div className='greeting'>
        <h3>Hi dear {state.userName} Welcome to Sigma</h3>
      </div> */}
      <div className='whats_new box_shadow background_color'>
        <img src={state.profileImage} className='profile_avatar' alt='user_avatar' />
        <input type={"text"} className="input" placeholder="What's new, user?" />
        <Button name={"Post"} icon={Icons.post} type={ButtonTypes.general} />
      </div>

      <div className='connection_post box_shadow background_color element_touch'>
        <div className='post_header'>
          <div className='account_info'>
            <img src='\images\ProfileImages\user3.jpg' className='profile_avatar' alt='user_avatar' />
            <div className='account_name_date'>
              <h4>user name</h4>
              <p className='post_date'>2023-2-1</p>
            </div>
          </div>
          <span className='post_setting'><i className={Icons.threeDots}></i></span>
        </div>
        <div className='post_body'>

          <div className='image_containter'>
            <img src='\images\login_page.jpg' alt='user_avatar' />
            <img src='\images\signup_page.jpg' alt='user_avatar' />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Home