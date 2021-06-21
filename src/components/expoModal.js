import * as React from "react"
import "./expoModal.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "./Button"

const ExpoModal = ({ setExpoModal, expoModal, expoURI }) => {
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
          <p>
            EcoFoodInfo is not available on the stores. Yet it is possible to
            try it through <strong>ExpoGo</strong> application. Make sure you
            have it downloaded on your phone before following the instructions
            below :
          </p>
          <div className="phone android">
            <h4>Android</h4>
            <p>1. Click on the link below </p>
            <p>2. Click on the "Open in ExpoGo" link</p>
            <a
              className="expo-button"
              href={expoURI}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button text="Try me" style={{ minWidth: 115 }} />
            </a>
          </div>
          <div className="phone iphone">
            <h4>Iphone</h4>
            <p>
              To open it with an Iphone, you unfortunately need first to connect
              to EcoFoodInfo ExpoGo account. Email-me a request so I can share
              with you the credentials.
            </p>
            <a className="expo-button" href="mailto:thms.bonte@gmail.com">
              <Button text="Email me" style={{ minWidth: 115 }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpoModal
