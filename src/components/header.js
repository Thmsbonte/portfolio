import * as React from "react"
import PropTypes from "prop-types"
import "./header.scss"
import HeaderMenu from "./headerMenu"

const Header = ({ siteTitle, HEADER_HEIGHT }) => (
  <header className="header" style={{ height: HEADER_HEIGHT }}>
    <div className="header-content">
      <div className="header-left">
        <a className="header-logo" href="http://localhost:8000/">
          TB
        </a>
      </div>
      <div className="header-right">
        <HeaderMenu />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
