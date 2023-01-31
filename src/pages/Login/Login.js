import React from 'react'
import Button from '../../components/UI/button/Button'
import "./Login.css"

function Login() {
  return (
    <section className='login display_flex flex_direction_column'>
        <div className='brand_name'>
          <img src='\images\sigma_v1_logo.png' alt='sigma_app' className='brand_logo'/>
        </div>
        <form className='display_flex flex_direction_column'>
            <input type={'text'} className="input box_shadow" placeholder="email" />
            <input type={'text'} className="input box_shadow" placeholder="password" />
            <Button name="Login" type={"general"}  />
        </form>
    </section>
  )
}

export default Login