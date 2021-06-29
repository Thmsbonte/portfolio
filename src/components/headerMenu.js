import * as React from "react"
import "./header-menu.scss"
import Button from "./Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import cvThomasBonteEN from "../files/CV_Thomas_Bonte_EN.pdf"
import cvThomasBonteFR from "../files/CV_Thomas_Bonte_FR.pdf"
import { FormattedMessage, IntlContextConsumer } from "gatsby-plugin-intl"
import Languages from "./languages"

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
              <span>01.</span>
              <FormattedMessage id="menu.about" />
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => {
                setResponsiveMenu(false)
              }}
            >
              <span>02.</span>
              <FormattedMessage id="menu.projects" />
            </a>
          </li>
          <li>
            <a
              href="#career"
              onClick={() => {
                setResponsiveMenu(false)
              }}
            >
              <span>03.</span>
              <FormattedMessage id="menu.career" />
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => {
                setResponsiveMenu(false)
              }}
            >
              <span>04.</span>
              <FormattedMessage id="menu.contact" />
            </a>
          </li>
          <li>
            <Languages />
          </li>
          <li>
            <IntlContextConsumer>
              {({ languages, language: currentLocale }) => {
                if (currentLocale === "fr") {
                  return (
                    <a type="button" href={cvThomasBonteFR} download>
                      <Button
                        text={<FormattedMessage id="button.resume" />}
                        style={{ height: 35, minWidth: 85 }}
                      />
                    </a>
                  )
                } else {
                  return (
                    <a type="button" href={cvThomasBonteEN} download>
                      <Button
                        text={<FormattedMessage id="button.resume" />}
                        style={{ height: 35, minWidth: 85 }}
                      />
                    </a>
                  )
                }
              }}
            </IntlContextConsumer>
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
                <FontAwesomeIcon icon="times" className="icon" />
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
          <FontAwesomeIcon icon="bars" className="icon" />
        </button>
      )}
      <div className="header-menu">
        <Menu setResponsiveMenu={setResponsiveMenu} />
      </div>
    </>
  )
}

export default HeaderMenu
