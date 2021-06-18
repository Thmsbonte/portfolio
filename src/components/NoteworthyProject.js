import * as React from "react"
import "./noteworthy-project.scss"
import IconFolder from "../images/folder-regular.svg"
import GithubLogo from "../images/github-brands.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const NoteworthyProject = ({ title, description, stack, githubURI, tryMe }) => {
  return (
    <div className="noteworthy-project">
      <div className="noteworthy-project-top">
        <div className="noteworthy-header">
          <IconFolder className="icon-folder" />
          <div className="noteworthy-header-right">
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
            <a href={githubURI} target="_blank" rel="noopener noreferrer">
              <GithubLogo className="github-logo" />
            </a>
          </div>
        </div>
        {title}
        {description}
      </div>
      {stack}
    </div>
  )
}

export default NoteworthyProject
