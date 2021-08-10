import * as React from "react"
import "./expoModal.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "./Button"
import { FormattedMessage } from "gatsby-plugin-intl"

const ExpoModal = ({ setExpoModal, expoModal }) => {
  return (
    <div className="expo-modal">
      <div className="expo-modal-content">
        <div className="expo-modal-header">
          <button
            onClick={() => {
              setExpoModal(!expoModal)
            }}
          >
            <FontAwesomeIcon icon="times" size="2x" />
          </button>
        </div>
        <div className="expo-modal-main">
          <p>
            <FormattedMessage
              id="expoModal.title"
              values={{
                ExpoGo: <strong>ExpoGo</strong>,
              }}
            />
          </p>
          <p className="expo-modal-presentation">
            <FormattedMessage
              id="expoModal.presentation"
              values={{
                ExpoGo: <strong>ExpoGo</strong>,
              }}
            />
          </p>
          <div className="phone android">
            <h4>Android</h4>
            <p>
              1. <FormattedMessage id="expoModal.androidFirstStep" />{" "}
            </p>
            <p>
              2. <FormattedMessage id="expoModal.androidSecondStep" />
            </p>
            <div className="generic-credentials">
              <p>
                - <FormattedMessage id="expoModal.email" />
              </p>
              <p>
                - <FormattedMessage id="expoModal.password" />
              </p>
            </div>

            <div className="expo-button">
              <a
                href="https://expo.io/@ecofoodinfo/Eco-FoodInfo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  text={<FormattedMessage id="expoModal.button" />}
                  style={{ minWidth: 115 }}
                />
              </a>
            </div>
          </div>
          <div className="phone iphone">
            <h4>Iphone</h4>
            <p>
              <FormattedMessage id="expoModal.iphoneStep" />
            </p>
            <div className="expo-button">
              <a href="mailto:thms.bonte@gmail.com">
                <Button text="Email" style={{ minWidth: 115 }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpoModal
