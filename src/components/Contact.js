import * as React from "react"
import "./contact.scss"
import Button from "./Button"

const Contact = ({ SECTION_HEIGHT }) => {
  return (
    <div className="contact" id="contact" style={{ height: SECTION_HEIGHT }}>
      <div className="contact-content">
        <h2>
          <span className="title-number">04.</span>Get In Touch
        </h2>
        <p>
          I am currently open to new opportunities as React or React Native
          developer. Whether you are interested in my profile or you want to
          contact me for any other subject, my inbox is always open. I will get
          back to you as soon as possible!
        </p>
        <div>
          <a href="mailto:thms.bonte@gmail.com">
            <Button text="Get In Touch" style={{ height: 45, marginTop: 30 }} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
