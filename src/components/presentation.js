import * as React from "react"
import "./presentation.scss"
import { FormattedMessage } from "gatsby-plugin-intl"
import { StaticImage } from "gatsby-plugin-image"
import Button from "./Button"

const Presentation = ({ SECTION_HEIGHT }) => {
  return (
    <div className="presentation">
      <div className="presentation__BackgroundImage">
        <StaticImage
          src="../images/156cabd8-f41d-4dfc-9eb9-e6e7cb2db8b3.jpeg"
          alt="amoureux"
          style={{ display: "unset" }}
        />
        <div className="presentation__Content">
          <h1 className="my-name">
            <FormattedMessage id="presentation.welcomemessage" />
          </h1>
          {/* <h1 className="sub-my-name">
          <FormattedMessage
            id="presentation.subtitle"
            values={{
              Bilbao: <span>Bilbao</span>,
            }}
          />
        </h1> */}
          <p className="presentation-text">
            <FormattedMessage
              id="presentation.text"
              values={{
                React: <a href="https://fr.reactjs.org/">React </a>,
                ReactNative: (
                  <a href="https://reactnative.dev/">React Native</a>
                ),
              }}
            />
          </p>
          {/* <div>
          <a href="mailto:thms.bonte@gmail.com">
            <Button
              text={<FormattedMessage id="button.getintouch" />}
              style={{ height: 45, marginTop: 30 }}
            />
          </a>
        </div> */}

          <div id="about"></div>
        </div>
      </div>
    </div>
  )
}

export default Presentation
