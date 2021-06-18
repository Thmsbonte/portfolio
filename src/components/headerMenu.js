import * as React from "react"
import "./header-menu.scss"
import Button from "./Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import cvThomasBonte from "../files/CV-ThomasBonte.pdf"

const HeaderMenu = ({ HEADER_HEIGHT }) => {
  const [responsiveMenu, setResponsiveMenu] = React.useState(false)

  React.useEffect(() => {
    if (responsiveMenu) {
      document.getElementById("app-root").style.filter = "blur(5px)"
    } else {
      document.getElementById("app-root").style.filter = "blur(0px)"
    }
  }, [responsiveMenu])

  const Menu = () => {
    return (
      <nav className="menu">
        <ul>
          <li>
            <a href="#about" onClick={() => setResponsiveMenu(false)}>
              <span>01.</span>About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => {
                setResponsiveMenu(false)
              }}
            >
              <span>02.</span>Projects
            </a>
          </li>
          <li>
            <a
              href="#career"
              onClick={() => {
                setResponsiveMenu(false)
              }}
            >
              <span>03.</span>Career
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => {
                setResponsiveMenu(false)
              }}
            >
              <span>04.</span>Contact
            </a>
          </li>
          <li>
            <a type="button" href={cvThomasBonte} download>
              <Button text="Resume" style={{ height: 35 }} />
            </a>
          </li>
        </ul>
      </nav>
    )
  }

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
        <Menu setResponsiveMenu={setResponsiveMenu} />
      </div>
    </>
  )
}

export default HeaderMenu
