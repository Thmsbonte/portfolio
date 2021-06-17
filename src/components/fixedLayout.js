import * as React from "react"

import SocialNetworks from "./socialNetworks"
import "./fixedLayout.scss"
import PropTypes from "prop-types"

const FixedLayout = ({ children }) => {
  return (
    <>
      <div className="fixed-layout">
        <div className="social-networks">
          <SocialNetworks />
          <div className="fixed-trait"></div>
        </div>
        <div className="email-address">
          <p>thms.bonte@gmail.com</p>
          <div className="fixed-trait"></div>
        </div>
      </div>
      {children}
    </>
  )
}

FixedLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FixedLayout
