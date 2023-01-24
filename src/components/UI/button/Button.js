import React from 'react'
import "./Button.css"

function Button({name, type, icon}) {
  return (
    <button className={`btn ${type}`}><i className={icon}></i> {name}</button>
  )
}

export default Button