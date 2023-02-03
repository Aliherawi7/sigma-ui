import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/UI/button/Button'
import "./Login.css"

function Login() {
  const navigate = useNavigate();
  return (
    <section className='login fade_in display_flex flex_direction_column'>
        <div className='brand_name'>
          <img src='\images\sigma_v1_logo.png' alt='sigma_app' className='brand_logo'/>
        </div>
        <form className='display_flex flex_direction_column'>
            <input type={'text'} className="input box_shadow" placeholder="email" />
            <input type={'text'} className="input box_shadow" placeholder="password" />
            <Button name="Login" type={"general"}  />
            <div className="help_buttons display_flex justify_content_space_between">
              <Button name={"Create acount"} cursor="pointer" click={() => navigate("/signup")}/>
              <Button name={"forgot your password?"} cursor="pointer"/>
            </div>
        </form>
    </section>
  )
}

export default Login