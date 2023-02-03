import React from 'react'
import "./Signup.css"

function Signup() {
  return (
    <section className='signup '>
        <form className='display_flex flex_direction_column align_items_center'>
          <div className='input_profile_container position_relative '>
            <img src='\images\ProfileImages\user3.jpg' className='input_profile_img' alt='user_image'/>
            <span className = "upload_icon display_flex align_items_center justify_content_center">
              <i className = "bi bi-camera"></i>
            </span>
            <input type={"file"}   className = "input " />
          </div>
          
          <input type={"text"} className="input" placeholder='name'/>
          <input type={"text"} className="input" placeholder='last name'/>
          <input type={"date"} className="input" placeholder='birthday' />
          <input type={"password"} className="input" placeholder='password'/>
          <input type={"password"} className="input" placeholder='repeat password'/>

        </form>
    </section>
  )
}

export default Signup