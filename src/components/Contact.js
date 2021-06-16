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
          Although I'm not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I'll try my best to get back to you!
        </p>
        <a href="mailto:thms.bonte@gmail.com">
          <Button text="Get In Touch" style={{ height: 45, marginTop: 30 }} />
        </a>
      </div>
    </div>
  )
}

export default Contact
