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
          {/* I build things for the <span>web</span>. */}
          Full-Stack <span>web</span> and <span>mobile</span> developer.
        </h1>
        <p className="presentation-text">
          Full-Stack web and mobile developer based in Paris, specialized in
          React and React Native. With an IT consulting background, I aim to
          offer both technical and organizational skills to bring about your
          projects.
        </p>
        <a href="mailto:thms.bonte@gmail.com">
          <Button text="Get In Touch" style={{ height: 45, marginTop: 30 }} />
        </a>

        <div id="about"></div>
      </div>
    </div>
  )
}

export default Presentation
