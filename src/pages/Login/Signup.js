import React, { useState } from 'react'
import "./Signup.css"
import Button from '../../components/UI/button/Button'
import { useNavigate } from 'react-router-dom'
import { validationFuncations } from "../../Utils/ValidationsFunctions"
import { avatar } from "../../constants/UiConstant"


function Signup() {
  const navigate = useNavigate();
  const [profileImg, setProfileImg] = useState({ img: '', isOk: false });
  const [inputs, setInputs] = useState({
    name: { value: "", type: "text", placeholder: "name", isValid: false },
    lastName: { value: "", type: "text", placeholder: "last name", isValid: false },
    email: { value: "", type: "email", placeholder: "email", isValid: false },
    dob: { value: "", type: "date", placeholder: "birthday", isValid: false },
    password: { value: "", type: "password", placeholder: "password", isValid: false },
    repeatPass: { value: "", type: "password", placeholder: "repeat password", isValid: false }
  });

  // handles the input changes
  const changeInputValue = (name, value) => {
    const copyState = { ...inputs }
    copyState[name].value = value;
    copyState[name].isUsed = true
    switch (name) {
      case "name":
        [copyState[name].isValid, copyState[name].warning] = validationFuncations.nameValidation(value)
        break;
      case "lastName":
        [copyState[name].isValid, copyState[name].warning] = validationFuncations.nameValidation(value)
        break;
      case "email":
        [copyState[name].isValid, copyState[name].warning] = validationFuncations.emailValidation(value)
        break;
      case "dob":
        [copyState[name].isValid, copyState[name].warning] = validationFuncations.dobValidation(value)
        break;
      case "password":
        [copyState[name].isValid, copyState[name].warning] = validationFuncations.passwordValidation(value)
        break;
      case 'repeatPass':
        [copyState[name].isValid, copyState[name].warning] = validationFuncations.repeatPass(copyState["password"].value, value);
        break;
    }
    setInputs(copyState)
  }

  const setProfileImgInput = (e) => {
    console.log(e)
    const url = URL.createObjectURL(e.target.files[0])
    console.log(url)
    setProfileImg({ img: url, isOk: true })
  }

  console.log(inputs)
  return (
    <section className='signup fade_in'>
      <form className='display_flex flex_direction_column align_items_center'>
        <div className='input_profile_container position_relative '>
          <img src={profileImg.isOk ? profileImg.img : avatar} className='input_profile_img' alt='user_image' />
          <span className="upload_icon display_flex align_items_center justify_content_center">
            <i className="bi bi-camera"></i>
          </span>
          <input type={"file"} accept="image/*" className="input " onChange={(e) => setProfileImgInput(e)} />
        </div>
        {Object.keys(inputs).map(name => {
          return (
            <>
              <input
                key={name}
                type={inputs[name].type}
                value={inputs[name].value}
                name="name" 
                className={`input ${!inputs[name].isValid && inputs[name].isUsed ? "input_warning": ""}`}
                placeholder={inputs[name].placeholder}
                onChange={(e) => changeInputValue(name, e.target.value)} />
              {inputs[name].isValid ? null : <span className="warning">{inputs[name].warning}</span>}
            </>
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