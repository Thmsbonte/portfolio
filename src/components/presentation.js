import * as React from "react"
import "./presentation.scss"
import { FormattedMessage } from "gatsby-plugin-intl"
import Button from "./Button"

const Presentation = ({ SECTION_HEIGHT }) => {
  return (
    <div className="presentation" style={{ height: SECTION_HEIGHT }}>
      <div className="content-left">
        <p className="my-name-is">
          <FormattedMessage id="presentation.mynameis" />
        </p>
        <h1 className="my-name">Thomas Bonte.</h1>
        <h1 className="sub-my-name">
          <FormattedMessage
            id="presentation.subtitle"
            values={{
              Javascript: <span>Javascript</span>,
            }}
          />
        </h1>
        <p className="presentation-text">
          <FormattedMessage
            id="presentation.text"
            values={{
              React: <a href="https://fr.reactjs.org/">React </a>,
              ReactNative: <a href="https://reactnative.dev/">React Native</a>,
            }}
          />
        </p>
        <div>
          <a href="mailto:thms.bonte@gmail.com">
            <Button
              text={<FormattedMessage id="button.getintouch" />}
              style={{ height: 45, marginTop: 30 }}
            />
          </a>
        </div>

        <div id="about"></div>
      </div>
    </div>
  )
}

export default Presentation
