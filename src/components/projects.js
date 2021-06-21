import * as React from "react"
import "./projects.scss"
import Project from "./project"
import ProjectReverse from "./projectReverse"
import { StaticImage } from "gatsby-plugin-image"

// ACHYLLES APP
const AchyllesDescription = () => {
  return (
    <p className="project-description">
      Cross-platform mobile application for French real estate company Achylles.
      With a multi-step search form and tinder-like results, this app's ambition
      is to offer an innovative way to look for your next new-build investment.
    </p>
  )
}

const AchyllesStack = () => {
  return (
    <p className="stack">
      <span>
        <a
          href="https://reactnative.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Native
        </a>
      </span>
      <span>-</span>
      <span>
        <a
          href="https://nodejs.org/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Node.js
        </a>
      </span>
      <span>-</span>
      <span>
        <a
          href="https://www.mongodb.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MongoDB
        </a>
      </span>
    </p>
  )
}

const AchyllesImages = () => {
  return (
    <div className="project-images">
      <StaticImage
        src="../images/Achylles/results.png"
        width={200}
        alt="achylles-signup-screen"
      />
      <StaticImage
        src="../images/Achylles/details2.png"
        width={200}
        alt="achylles-signup-screen"
      />
    </div>
  )
}

// ECO-FOODINFO APP
const EcofoofInfoDescription = () => {
  return (
    <p className="project-description">
      Cross-platform mobile application developed as part of a sensibilization
      project to product consumption. With its scan feature, the app aim to
      offer an easy way to access to the{" "}
      <a
        href="https://docs.score-environnemental.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Éco-score
      </a>{" "}
      of a product. Inspired by{" "}
      <a href="https://yuka.io/" target="_blank" rel="noopener noreferrer">
        Yuka
      </a>
      .
    </p>
  )
}

const EcoFoodInfoStack = () => {
  return (
    <p className="stack">
      <span>
        <a
          href="https://reactnative.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Native
        </a>
      </span>
      <span>-</span>
      <span>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TypeScript
        </a>
      </span>
      <span>-</span>
      <span>
        <a
          href="https://nodejs.org/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Node.js
        </a>
      </span>
    </p>
  )
}

const EcoFoodInfoImages = () => {
  return (
    <div className="project-images">
      <StaticImage
        src="../images/EcoFoodInfo/signin-screen.png"
        width={200}
        alt="Ecofoodinfo-signup-screen"
      />
      <StaticImage
        src="../images/EcoFoodInfo/details-screen.png"
        width={200}
        alt="Ecofoodinfo-detail-screen"
      />
    </div>
  )
}

// CLONE VINTED
const VintedDescription = () => {
  return (
    <p className="project-description">
      Partial clone of Vinted website developed as part of a React and Node.js
      practicing journey. Contains the following features : Login and Signup,
      Publish and Modify an offer, Search with filters, Pay and buy with Stripe.
    </p>
  )
}

const VintedStack = () => {
  return (
    <p className="stack">
      <span>
        <a
          href="https://fr.reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
      </span>
      <span>-</span>
      <span>
        <a
          href="https://nodejs.org/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Node.js
        </a>
      </span>
      <span>-</span>
      <span>
        <a
          href="https://www.mongodb.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MongoDB
        </a>
      </span>
    </p>
  )
}

const VintedImages = () => {
  return (
    <div className="project-images">
      <StaticImage
        src="../images/Vinted/home-page.png"
        width={600}
        alt="vinted-home-page"
      />
    </div>
  )
}

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-content">
        <h2>
          {" "}
          <span className="title-number">02.</span>Projects
        </h2>
        <Project
          role={"Technical lead"}
          title={"Achylles App"}
          description={<AchyllesDescription />}
          stack={<AchyllesStack />}
          githubURI={"https://github.com/Thmsbonte/Achylles-Application"}
          images={<AchyllesImages />}
        />
        <ProjectReverse
          role={"Full-Stack developer"}
          title={"Eco-FoodInfo"}
          description={<EcofoofInfoDescription />}
          stack={<EcoFoodInfoStack />}
          githubURI={"https://github.com/Thmsbonte/EFI-frontend"}
          images={<EcoFoodInfoImages />}
          tryMe={"https://expo.io/@ecofoodinfo/Eco-FoodInfo"}
        />
        <Project
          role={"Full-Stack developer"}
          title={"Vinted clone"}
          description={<VintedDescription />}
          stack={<VintedStack />}
          githubURI={"https://github.com/Thmsbonte/vinted-frontend"}
          images={<VintedImages />}
          tryMe="https://thmsbonte-vinted.netlify.app/"
        />
      </div>
    </div>
  )
}

export default Projects
