import React, { useState } from 'react'
import "./Signup.css"
import Button from '../../components/UI/button/Button'
import { useNavigate } from 'react-router-dom'
import { validationFuncations } from "../../Utils/ValidationsFunctions"
import { avatar } from "../../constants/UiConstant"
import { useDispatch } from 'react-redux'
import actions from '../../store/Actions'



function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [profileImg, setProfileImg] = useState({ imgUrl: '', file: "", isOk: false });
  const [inputs, setInputs] = useState({
    name: { value: "", type: "text", placeholder: "name", isValid: false },
    lastName: { value: "", type: "text", placeholder: "last name", isValid: false },
    email: { value: "", type: "email", placeholder: "email", isValid: false },
    dob: { value: "", type: "date", placeholder: "birthday", isValid: false },
    gender: { value: null, type: "select", placeholder: "gender", isValid: false },
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
      case "gender":
        [copyState[name].isValid, copyState[name].warning] = validationFuncations.genderValidation(value)
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

  // handle input change of profile image
  const setProfileImgInput = (e) => {
    const url = URL.createObjectURL(e.target.files[0])
    setProfileImg({ imgUrl: url, file: e.target.files[0], isOk: true })
  }

  const sendInformationToServer = () => {
    // check all inputs if there is any empty or invalid input
    const invalids = Object.keys(inputs).filter(item => {
      return inputs[item].isValid == false;
    })
    // if there is any empty or invalid input then alert a warning to user
    if (invalids.length > 0) {
      invalids.forEach(item => {
        changeInputValue(item+"", inputs[item].value)
      })
      return
    }

    let formData = new FormData();
    Object.keys(inputs).forEach(item => {
      formData.append(item, inputs[item].value)
    })
    formData.append("img", profileImg.file)
    
    fetch("http://localhost:9090/api/accounts",{
      method:"POST",
      headers:{},
      body:formData
    }).then(res =>  {
        return res.json()
    }).then(data => {
      // set the data into store
      setCookie("token",data.accessToken);
      setCookie("userName", data.accountDTO.name +" "+ data.accountDTO.lastName)
      setCookie("email", data.accountDTO.email)
      localStorage.setItem("profileImage", data.accountDTO.profileImage);
      setCookie("connections", data.accountDTO.connections)
      dispatch({
        type:actions.ADD_USER_INFO,
        payload:data
      })
      navigate("/")
      // and then redirect to the home page
    }).catch(error =>{
      console.log(error)
    })

  }
  return (
    <section className='signup fade_in'>
      <form className='display_flex  align_items_center'>
        <div className='input_profile_container position_relative '>
          <img src={profileImg.isOk ? profileImg.imgUrl : avatar} className='input_profile_img' alt='user_image' />
          <span className="upload_icon display_flex align_items_center justify_content_center">
            <i className="bi bi-camera"></i>
          </span>
          <input type={"file"} accept="image/*" className="input " onChange={(e) => setProfileImgInput(e)} />
        </div>
        <div className='input_container isplay_flex flex_direction_column align_items_center'>
          {Object.keys(inputs).map(name => {
            if (inputs[name].type == "select") {
              return (
                <>
                  <select
                    className={`input select ${!inputs[name].isValid && inputs[name].isUsed ? "input_warning" : ""}`}
                    value={inputs[name].value}
                    onChange={(e) => changeInputValue(name, e.target.value)}>
                    <option disabled selected >gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                  {inputs[name].isValid ? null : <span className="warning">{inputs[name].warning}</span>}
                </>
              )
            }
            return (
              <>
                <input
                  key={name}
                  type={inputs[name].type != "date" ? inputs[name].type: "text"}
                  value={inputs[name].value}
                  name="name"
                  className={`input ${!inputs[name].isValid && inputs[name].isUsed ? "input_warning" : ""}`}
                  placeholder={inputs[name].placeholder}
                  onFocus= {inputs[name].type == "date"? (e)=> (e.target.type = "date"): null}
                  onBlur= {inputs[name].type == "date"? (e)=> (e.target.type = "text"): null}
                  onChange={(e) => changeInputValue(name, e.target.value)} />
                {inputs[name].isValid ? null : <span className="warning">{inputs[name].warning}</span>}
              </>
            )
          })}
        <Button name={"Sign up"} click={sendInformationToServer} cursor="pointer" type={"general"} />
        <div className="help_buttons display_flex justify_content_space_between">
          <Button name={"Already have account?"} cursor="pointer" click={() => navigate("/login")} />
        </div>
        </div>
      </form>
    </section>
  )
}

export default Signup