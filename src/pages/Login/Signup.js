import React from 'react'
import "./Signup.css"
import Button from '../../components/UI/button/Button'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const navigate = useNavigate();
  return (
    <section className='signup fade_in'>
      <form className='display_flex flex_direction_column align_items_center'>
        <div className='input_profile_container position_relative '>
          <img src='\images\ProfileImages\pro.png' className='input_profile_img' alt='user_image' />
          <span className="upload_icon display_flex align_items_center justify_content_center">
            <i className="bi bi-camera"></i>
          </span>
          <input type={"file"} accept="image/*" className="input " />
        </div>
        <input type={"text"} className="input" placeholder='name' />
        <input type={"text"} className="input" placeholder='last name' />
        <input type={"email"} className="input" placeholder='email' />
        <input type={"date"} className="input" placeholder='birthday' />
        <input type={"password"} className="input" placeholder='password' />
        <input type={"password"} className="input" placeholder='repeat password' />
        <Button name={"Sign up"} cursor="pointer" type={"general"} />
        <div className="help_buttons display_flex justify_content_space_between">
          <Button name={"Already have account?"} cursor="pointer" click={() => navigate("/login")} />
        </div>
      </form>
    </section>
  )
}

export default Signup