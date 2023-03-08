import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/UI/button/Button'
import "./Login.css"
import { validationFuncations } from '../../Utils/ValidationsFunctions'
import { useDispatch } from 'react-redux'
import actions from '../../store/Actions'
import { getCookies, setCookie } from '../../Utils/Cookie'
import { APIEndpoints } from '../../constants/PathURL'

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    email: { value: "", type: "email", placeholder: "email", isValid: false },
    password: { value: "", type: "password", placeholder: "password", isValid: false },
  });

  // handles the input changes
  const changeInputValue = (name, value) => {
    const copyState = { ...inputs }
    copyState[name].value = value;
    copyState[name].isUsed = true
    switch (name) {
      case "email":
        [copyState[name].isValid, copyState[name].warning] = validationFuncations.emailValidation(value)
        break;
      case "password":
        [copyState[name].isValid, copyState[name].warning] = validationFuncations.passwordValidation(value)
        break;
    }
    setInputs(copyState)
  }

  const sendInformationToServer = () => {
    // check all inputs if there is any empty or invalid input
    const invalids = Object.keys(inputs).filter(item => {
      return inputs[item].isValid == false;
    })
    // if there is any empty or invalid input then alert a warning to user
    if (invalids.length > 0) {
      invalids.forEach(item => {
        changeInputValue(item + "", inputs[item].value)
      })
      return
    }

    let formData = new FormData();
    Object.keys(inputs).forEach(item => {
      formData.append(item, inputs[item].value)
    })

    fetch(APIEndpoints.LOGIN, {
      method: "POST",
      headers: {},
      body: formData
    }).then(res => {
        return res.json()
    }).then(data => {
      if(data.statusCode == 400){
        const copyState = {...inputs};
        if(data.errorMessage.includes('email')){
          copyState.email.warning = data.errorMessage;
          copyState.email.isValid = false
        }else{
          copyState.password.warning = data.errorMessage;
          copyState.password.isValid = false
        }
        console.log(copyState)
        setInputs(copyState);
        return
      }
      // set the data into store
      console.log(data)
      setCookie("token",data?.accessToken);
      setCookie("name", data.accountDTO?.name);
      setCookie("lastName",data.accountDTO?.lastName)
      setCookie("email", data.accountDTO?.email)
      setCookie("userName", data.accountDTO?.userName)
      setCookie("profileImage", data.accountDTO?.profilePicturePath)
      setCookie("connections", data.accountDTO?.connections)
      dispatch({
        type: actions.ADD_USER_INFO,
        payload: data
      })
      navigate("/")
      // and then redirect to the home page
    }).catch(error => {
      console.log(error)
    })

  }

  return (
    <section className='login fade_in display_flex flex_direction_column'>
      <div className='brand_name'>
        <img src='\images\sigma_v2.1_logo.png' alt='sigma_app' className='brand_logo' />
      </div>
      <form className='display_flex flex_direction_column'>
        {Object.keys(inputs).map(name => {
          return (
            <>
              <input
                key={name}
                type={inputs[name].type}
                value={inputs[name].value}
                name="name"
                className={`input ${!inputs[name].isValid && inputs[name].isUsed ? "input_warning" : ""}`}
                placeholder={inputs[name].placeholder}
                onChange={(e) => changeInputValue(name, e.target.value)} />
              {inputs[name].isValid ? null : <span className="warning">{inputs[name].warning}</span>}
            </>
          )
        })}
        <Button name="Login" type={"general"} click={sendInformationToServer} />
        <div className="help_buttons display_flex justify_content_space_between">
          <Button name={"Create acount"} cursor="pointer" click={() => navigate("/signup")} />
          <Button name={"forgot your password?"} cursor="pointer" />
        </div>
      </form>
    </section>
  )
}

export default Login