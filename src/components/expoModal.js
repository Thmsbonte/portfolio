import * as React from "react"
import "./expoModal.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "./Button"

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
            Try me with <strong>ExpoGo</strong> :
          </p>
          <p className="expo-modal-presentation">
            EcoFoodInfo is not available on the stores. Yet it is possible to
            try it through <strong>ExpoGo</strong> application. Make sure you
            have it downloaded on your phone before following the instructions
            below :
          </p>
          <div className="phone android">
            <h4>Android</h4>
            <p>1. Click on the link below </p>
            <p>2. Follow the page's instructions</p>
            <div className="expo-button">
              <a
                href="https://expo.io/@ecofoodinfo/Eco-FoodInfo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button text="Try me" style={{ minWidth: 115 }} />
              </a>
            </div>
          </div>
          <div className="phone iphone">
            <h4>Iphone</h4>
            <p>
              To open it with an Iphone, you first need to connect to the
              EcoFoodInfo ExpoGo account. Please email-me a request so I can
              share with you the credentials.
            </p>
            <div className="expo-button">
              <a href="mailto:thms.bonte@gmail.com">
                <Button text="Email me" style={{ minWidth: 115 }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpoModal
