import * as React from "react"
import "./presentation.scss"
import Button from "./Button"

const Presentation = ({ SECTION_HEIGHT }) => {
  return (
    <div className="presentation" style={{ height: SECTION_HEIGHT }}>
      <div className="content-left">
        <p className="my-name-is">Hi, my name is</p>
        <h1 className="my-name">Thomas Bonte.</h1>
        <h1 className="sub-my-name">
          Full-Stack <span>Javascript </span>developer.
        </h1>
        <p className="presentation-text">
          I am a Paris-based software engineer specialized in JavaScript and
          React. Enthusiast with new challenges, I am currently open to new
          opportunities as a <a href="https://fr.reactjs.org/">React </a>
          or <a href="https://reactnative.dev/">React Native</a> software
          developer.
        </p>
        <div>
          <a href="mailto:thms.bonte@gmail.com">
            <Button text="Get In Touch" style={{ height: 45, marginTop: 30 }} />
          </a>
        </div>

        <div id="about"></div>
      </div>
    </div>
  )
}

export default Presentation
