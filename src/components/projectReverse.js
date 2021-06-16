import * as React from "react"
import "./project-reverse.scss"
import GithubLogo from "../images/github-brands.svg"

const ProjectReverse = ({
  role,
  title,
  description,
  stack,
  githubURI,
  images,
}) => {
  return (
    <div className="project-reverse">
      <div className="project-content">
        <div className="project-presentation">
          <p className="project-role">{role}</p>
          <h3>{title}</h3>
          <p className="project-description">{description}</p>
          {stack}
          <a href={githubURI} target="_blank" rel="noopener noreferrer">
            <GithubLogo className="github-logo" />
          </a>
        </div>
        {images}
      </div>
    </div>
  )
}

export default ProjectReverse
