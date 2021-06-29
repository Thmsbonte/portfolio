import * as React from "react"
import "./contact.scss"
import Button from "./Button"
import { FormattedMessage } from "gatsby-plugin-intl"

const Contact = ({ SECTION_HEIGHT }) => {
  return (
    <div className="contact" id="contact" style={{ height: SECTION_HEIGHT }}>
      <div className="contact-content">
        <h2>
          <span className="title-number">04.</span>
          <FormattedMessage id="contact.title" />
        </h2>
        <p>
          <FormattedMessage id="contact.text" />
        </p>
        <div>
          <a href="mailto:thms.bonte@gmail.com">
            <Button
              text={<FormattedMessage id="button.getintouch" />}
              style={{ height: 45, marginTop: 30 }}
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
