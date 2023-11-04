import * as React from "react"
import "./projects.scss"
import Project from "./project"
import ProjectReverse from "./projectReverse"
import { StaticImage } from "gatsby-plugin-image"
import { FormattedMessage } from "gatsby-plugin-intl"

// ACHYLLES APP
const AchyllesDescription = () => {
  return (
    <p className="project-description">
      <FormattedMessage id="projectAchylles.description" />
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
      <FormattedMessage
        id="projectEcoFoodInfo.description"
        values={{
          Ecoscore: (
            <a
              href="https://docs.score-environnemental.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              l'Eco-score
            </a>
          ),
          Yuka: (
            <a
              href="https://yuka.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yuka
            </a>
          ),
        }}
      />
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
      <FormattedMessage id="projectVinted.description" />
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

const PrequalifDescription = () => {
  return (
    <p className="project-description">
      <FormattedMessage id="projectPrequalif.description" />
    </p>
  )
}

const PrequalifStack = () => {
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
        <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
          Next.js
        </a>
      </span>
      <span>-</span>
      <span>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Typescript
        </a>
      </span>
    </p>
  )
}

const PrequalifImages = () => {
  return (
    <div className="project-images">
      <StaticImage
        src="../images/tucoenergie/prequalif.png"
        width={550}
        alt="Prequalif"
      />
    </div>
  )
}

const VisiteTechniqueDescription = () => {
  return (
    <p className="project-description">
      <FormattedMessage id="projectVisiteTechnique.description" />
    </p>
  )
}

const VisiteTechniqueStack = () => {
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
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Typescript
        </a>
      </span>
    </p>
  )
}

const VisiteTechniqueImages = () => {
  return (
    <div className="project-images border-radius">
      <StaticImage
        src="../images/tucoenergie/technical-visit-desktop-6ade165316d447fc1aa90249def69065.webp"
        width={550}
        alt="visit-technique"
      />
    </div>
  )
}

const Projects = ({ expoModal, setExpoModal }) => {
  return (
    <>
      <div className="projects">
        <div className="projects-content">
          <h2>
            {" "}
            <span className="title-number">02.</span>
            <FormattedMessage id="projects.title" />
          </h2>
          <Project
            role={<FormattedMessage id="projectPrequalif.role" />}
            title={<FormattedMessage id="projectPrequalif.title" />}
            description={<PrequalifDescription />}
            stack={<PrequalifStack />}
            tryMe="https://www.tucoenergie.fr/"
            images={<PrequalifImages />}
          />
          <ProjectReverse
            role={<FormattedMessage id="projectVisiteTechnique.role" />}
            title={<FormattedMessage id="projectVisiteTechnique.title" />}
            description={<VisiteTechniqueDescription />}
            stack={<VisiteTechniqueStack />}
            tryMe="https://roujoine-prod.azurewebsites.net/"
            images={<VisiteTechniqueImages />}
          />
          <Project
            role={<FormattedMessage id="projectAchylles.role" />}
            title={<FormattedMessage id="projectAchylles.title" />}
            description={<AchyllesDescription />}
            stack={<AchyllesStack />}
            githubURI={"https://github.com/Thmsbonte/Achylles-Application"}
            images={<AchyllesImages />}
          />
          <ProjectReverse
            role={<FormattedMessage id="projectEcoFoodInfo.role" />}
            title={<FormattedMessage id="projectEcoFoodInfo.title" />}
            description={<EcofoofInfoDescription />}
            stack={<EcoFoodInfoStack />}
            githubURI={"https://github.com/Thmsbonte/EFI-frontend"}
            images={<EcoFoodInfoImages />}
            expoGo={"https://expo.io/@ecofoodinfo/Eco-FoodInfo"}
            setExpoModal={setExpoModal}
            expoModal={expoModal}
          />
          {/* <Project
            role={<FormattedMessage id="projectVinted.role" />}
            title={<FormattedMessage id="projectVinted.title" />}
            description={<VintedDescription />}
            stack={<VintedStack />}
            githubURI={"https://github.com/Thmsbonte/vinted-frontend"}
            images={<VintedImages />}
            tryMe="https://thmsbonte-vinted.netlify.app/"
          /> */}
        </div>
      </div>
    </>
  )
}

export default Projects
