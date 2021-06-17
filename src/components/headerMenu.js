import * as React from "react"
import "./header-menu.scss"
import Button from "./Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <a href="#about">
            <span>01.</span>About
          </a>
        </li>
        <li>
          <a href="#projects">
            <span>02.</span>Projects
          </a>
        </li>
        <li>
          <a href="#career">
            <span>03.</span>Career
          </a>
        </li>
        <li>
          <a href="#contact">
            <span>04.</span>Contact
          </a>
        </li>
        <li>
          <a type="button" href="/src/files/CV-ThomasBonte.pdf" download>
            <Button text="Resume" style={{ height: 35 }} />
          </a>
        </li>
      </ul>
    </nav>
  )
}

const HeaderMenu = ({ HEADER_HEIGHT, responsiveMenu, setResponsiveMenu }) => {
  // const [responsiveMenu, setResponsiveMenu] = React.useState(false)
  return (
    <>
      {responsiveMenu ? (
        <div className="responsive-modal">
          <div className="responsive-menu">
            <div
              className="responsive-menu-header"
              style={{ height: HEADER_HEIGHT }}
            >
              <button
                className="responsive-menu-cross-icon"
                onClick={() => setResponsiveMenu(!responsiveMenu)}
              >
                <FontAwesomeIcon icon="times" />
              </button>
            </div>
            <div className="responsive-menu-content">
              <Menu />
            </div>
          </div>
        </div>
      ) : (
        <button
          className="responsive-menu-icon"
          onClick={() => setResponsiveMenu(!responsiveMenu)}
        >
          <FontAwesomeIcon icon="bars" />
        </button>
      )}
      <div className="header-menu">
        <Menu />
      </div>
    </>
  )
}

export default HeaderMenu
