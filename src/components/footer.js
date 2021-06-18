import * as React from "react"
import SocialNetworks from "./socialNetworks"
import "./footer.scss"

const Footer = ({ FOOTER_HEIGHT }) => {
  return (
    <div className="footer" style={{ height: FOOTER_HEIGHT }}>
      <div className="footer-top">
        <SocialNetworks flexDirection="row" />
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} - Built by <strong> Thomas Bonte</strong>
      </div>
    </div>
  )
}

export default Footer
