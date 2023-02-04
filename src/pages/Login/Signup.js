import React, { useState } from 'react'
import "./Signup.css"
import Button from '../../components/UI/button/Button'
import { useNavigate } from 'react-router-dom'
import {validationFuncations} from "../../Utils/ValidationsFunctions"

function Signup() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: { value: "", type: "text", placeholder: "name", isValid: false },
    lastName: { value: "", type: "text", placeholder: "last name", isValid: false },
    email: { value: "", type: "email", placeholder : "email", isValid: false },
    dob: { value: "", type: "date", placeholder : "birthday", isValid: false },
    password: { value: "", type: "password", placeholder : "password", isValid: false },
    repeatPass: { value: "", type: "password", placeholder : "repeat password", isValid: false }
  });

  const changeInputValue = (name, value) => {
    const copyState = { ...inputs }
    copyState[name].value = value;
    switch (name) {
      case "name":
        copyState[name].isValid = validationFuncations.nameValidation(value)
        break;
      case "lastName":
        copyState[name].isValid = validationFuncations.nameValidation(value)
        break;
      case "email":
        copyState[name].isValid = validationFuncations.emailValidation(value)
        break;
      case "dob":
        copyState[name].isValid = validationFuncations.dobValidation(value)
        break;
    }
    setInputs(copyState)
  }

  console.log(inputs)
  return (
    <section className='signup fade_in'>
      <form className='display_flex flex_direction_column align_items_center'>
        <div className='input_profile_container position_relative '>
          <img src='\images\ProfileImages\pro.png' className='input_profile_img' alt='user_image' />
          <span className="upload_icon display_flex align_items_center justify_content_center">
            <i className="bi bi-camera"></i>
          </span>
          <input type={"file"} accept="image/*" className="input " onChange={(e) => changeInputValue("image", e.target.value)} />
        </div>
        {Object.keys(inputs).map(name => {
          console.log("hello")
          return (
            <input key={name} type={inputs[name].type} value={inputs[name].value} name="name" className="input" placeholder={inputs[name].placeholder} onChange={(e) => changeInputValue(name, e.target.value)} />
          )
        })}
        <Button name={"Sign up"} cursor="pointer" type={"general"} />
        <div className="help_buttons display_flex justify_content_space_between">
          <Button name={"Already have account?"} cursor="pointer" click={() => navigate("/login")} />
        </div>
      </form>
    </section>
  )
}

export default Signup