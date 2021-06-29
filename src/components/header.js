import * as React from "react"
import PropTypes from "prop-types"
import "./header.scss"
import HeaderMenu from "./headerMenu"
import { Link } from "gatsby-plugin-intl"

const Header = ({ HEADER_HEIGHT }) => (
  <header className="header" style={{ height: HEADER_HEIGHT }}>
    <div className="header-content">
      <div className="header-left">
        <Link to="/" className="header-logo">
          TB
        </Link>
      </div>
      <div className="header-right">
        <HeaderMenu HEADER_HEIGHT={HEADER_HEIGHT} />
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
