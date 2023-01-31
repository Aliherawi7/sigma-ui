import React from 'react'
import "./Button.css"

function Button({name, type, icon, click}) {
  return (
    <button className={`btn ${type}`} onclick={click}><i className={icon}></i> {name}</button>
  )
}

export default Button