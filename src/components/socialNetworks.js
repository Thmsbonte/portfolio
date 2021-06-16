import * as React from "react"
import "./social-networks.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SocialNetworks = () => {
  return (
    <div className="social-networks-content">
      <a
        href="https://github.com/Thmsbonte"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
      </a>
      <a
        href="https://www.linkedin.com/in/thomas-bonte-767ab54b/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
      </a>
    </div>
  )
}

export default SocialNetworks
