import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Paths } from '../../constants/PathURL';
import "./Navbar.css"
import {useSelector} from "react-redux"

function Navbar() {
  const [state, setstate] = useState(window.location.pathname);
  const auth  = useSelector(state => state.authentication)
  return (
    <nav className='navbar'>
      <div className="profile_container display_flex_align_center flex_direction_column justify_content_center">
        <div className='profile_account display_flex_align_center  justify_content_center none_selectable'>
          <img src={auth.profileImage} className='profile_image_main' />
        </div>
        <h2 className='username'>{auth.userName}</h2>
      </div>
      <ul className='menu'>
        <li className={state == "/" ? "active" : ""} onClick={() => setstate(Paths.HOME)}>
          <Link to={Paths.HOME}><i className='bi bi-house-door'></i> <span>Home</span></Link>
        </li>
        <li className={state == Paths.PEOPLE ? "active" : ""} onClick={() => setstate(Paths.PEOPLE)}>
          <Link to={Paths.PEOPLE}><i className='bi bi-people'></i> <span>People</span></Link>
        </li>
        <li className={state == "/chat" ? "active" : ""} onClick={() => setstate(Paths.CHAT)}>
          <Link to={Paths.CHAT}><i className='bi bi-chat'></i> <span>Chats</span></Link>
        </li>
        <li className={state == Paths.PROFILE ? "active" : ""} onClick={() => setstate(Paths.PROFILE)}>
          <Link to={Paths.PROFILE}><i className='bi bi-person'></i> <span>Profile</span></Link>
        </li>
        <li className={state == Paths.SETTINGS ? "active" : ""} onClick={() => setstate(Paths.SETTINGS)}>
          <Link to={Paths.SETTINGS}>
            <i className='bi bi-gear'></i> <span>Settings</span></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar