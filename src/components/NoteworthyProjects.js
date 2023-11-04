import * as React from "react"
import "./noteworthy-projects.scss"
import NoteworthyProject from "./NoteworthyProject"
import { FormattedMessage } from "gatsby-plugin-intl"

// MARVEL
const TitleMarvel = () => {
  return (
    <h5 className="title">
      {" "}
      <FormattedMessage id="projectMarvel.title" />
    </h5>
  )
}

const DescriptionMarvel = () => {
  return (
    <p className="description">
      <FormattedMessage id="projectMarvel.description" />
    </p>
  )
}

const StackMarvel = () => {
  return (
    <div className="stack">
      <p>React Node.js MongoDB</p>
    </div>
  )
}

// CERTIFICATION
const TitleCertification = () => {
  return (
    <h5 className="title">
      {" "}
      <FormattedMessage id="projectCertification.title" />
    </h5>
  )
}

const DescriptionCertification = () => {
  return (
    <p className="description">
      <FormattedMessage id="projectCertification.description" />
    </p>
  )
}

const StackCertification = () => {
  return (
    <div className="stack">
      <p>React Node.js MongoDB</p>
    </div>
  )
}

// DELIVEROO
const TitleDeliveroo = () => {
  return (
    <h5 className="title">
      <FormattedMessage id="projectDeliveroo.title" />
    </h5>
  )
}

const DescriptionDeliveroo = () => {
  return (
    <p className="description">
      <FormattedMessage id="projectDeliveroo.description" />
    </p>
  )
}

const StackDeliveroo = () => {
  return (
    <div className="stack">
      <p>React</p>
    </div>
  )
}

// VINTED
const TitleVinted = () => {
  return (
    <h5 className="title">
      <FormattedMessage id="projectVinted.title" />
    </h5>
  )
}

const DescriptionVinted = () => {
  return (
    <p className="description">
      <FormattedMessage id="projectVinted.descriptionSimple" />
    </p>
  )
}

const StackVinted = () => {
  return (
    <div className="stack">
      <p>React Node.js MongoDB</p>
    </div>
  )
}

const NoteworthyProjects = () => {
  return (
    <div className="noteworthy-projects">
      <h4>
        <FormattedMessage id="projects.otherProjects" />
      </h4>
      <div className="noteworthy-content">
        <NoteworthyProject
          title={<TitleVinted />}
          description={<DescriptionVinted />}
          stack={<StackVinted />}
          githubURI="https://github.com/Thmsbonte/vinted-frontend"
          tryMe="https://thmsbonte-vinted.netlify.app/"
        />
        <NoteworthyProject
          title={<TitleMarvel />}
          description={<DescriptionMarvel />}
          stack={<StackMarvel />}
          githubURI="https://github.com/Thmsbonte/marvel-frontend"
          tryMe="https://thmsbonte-marvel.netlify.app/"
        />
        <NoteworthyProject
          title={<TitleCertification />}
          description={<DescriptionCertification />}
          stack={<StackCertification />}
          githubURI="https://github.com/Thmsbonte/tellmemore-frontend"
          tryMe="https://tellmemore-thmsbonte.netlify.app/"
        />
        {/* <NoteworthyProject
          title={<TitleDeliveroo />}
          description={<DescriptionDeliveroo />}
          stack={<StackDeliveroo />}
          githubURI="https://github.com/Thmsbonte/reacteur-deliveroo-frontend"
          tryMe="https://thmsbonte-deliveroo.netlify.app/"
        /> */}
      </div>
    </div>
  )
}

export default NoteworthyProjects
