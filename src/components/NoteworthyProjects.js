import * as React from "react"
import "./noteworthy-projects.scss"
import NoteworthyProject from "./NoteworthyProject"

// MARVEL
const TitleMarvel = () => {
  return <h5 className="title">Marvel - React</h5>
}

const DescriptionMarvel = () => {
  return (
    <p className="description">
      A website alowing the search of all Marvel characters and related comics.
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
  return <h5 className="title">Web and Mobile certification project</h5>
}

const DescriptionCertification = () => {
  return (
    <p className="description">
      A website permiting the creation and submission of online forms.
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
  return <h5 className="title">Deliveroo's restaurant front page clone</h5>
}

const DescriptionDeliveroo = () => {
  return (
    <p className="description">
      Clone of Deliveroo's restaurant front page. Frontend only.
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

const NoteworthyProjects = () => {
  return (
    <div className="noteworthy-projects">
      <h4>Other Projects</h4>
      <div className="noteworthy-content">
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
        <NoteworthyProject
          title={<TitleDeliveroo />}
          description={<DescriptionDeliveroo />}
          stack={<StackDeliveroo />}
          githubURI="https://github.com/Thmsbonte/reacteur-deliveroo-frontend"
          tryMe="https://thmsbonte-deliveroo.netlify.app/"
        />
      </div>
    </div>
  )
}

export default NoteworthyProjects
