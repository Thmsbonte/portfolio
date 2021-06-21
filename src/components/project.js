import * as React from "react"
import "./project.scss"
import "./project-normal.scss"
import GithubLogo from "../images/github-brands.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Project = ({
  role,
  title,
  description,
  stack,
  githubURI,
  images,
  tryMe,
}) => {
  return (
    <div className="project project-normal">
      <div className="project-content">
        {images}
        <div className="project-presentation">
          <p className="project-role">{role}</p>
          <h3>{title}</h3>
          {description}
          {stack}
          <div className="project-footer">
            <a href={githubURI} target="_blank" rel="noopener noreferrer">
              <GithubLogo className="github-logo" />
            </a>
            {tryMe && (
              <a
                className="try-me"
                href={tryMe}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon="external-link-alt" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
