import * as React from "react"
import "./header-menu.scss"
import Button from "./Button"

const HeaderMenu = () => {
  return (
    <nav className="header-menu">
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
          <a
            type="button"
            href="/src/files/CV-ThomasBonte.pdf"
            download
            onkeydown="myFunction()"
          >
            <Button text="Resume" style={{ height: 35 }} />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default HeaderMenu
