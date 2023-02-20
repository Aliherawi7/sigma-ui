import React from 'react'
import "./Button.css"

function Button({ name, type, icon, click, cursor = "unset" }) {
  return (
    <button
      className={`btn ${type}`}
      onClick={click}
      type="button"
      style={{ cursor: cursor }}>
      <i className={icon}></i> {name}</button>
  )
}

export default Button