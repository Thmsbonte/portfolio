import * as React from "react"
import "./button.scss"

const Button = ({ text, style }) => {
  return (
    <button className="button" style={style}>
      <p>{text}</p>
    </button>
  )
}

export default Button
