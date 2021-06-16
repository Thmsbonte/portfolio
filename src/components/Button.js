import * as React from "react"
import "./button.scss"

const Button = ({ text, style }) => {
  return (
    <div className="button" style={style}>
      <p>{text}</p>
    </div>
  )
}

export default Button
