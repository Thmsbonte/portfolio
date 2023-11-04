import * as React from "react"

import FixedLayout from "../components/fixedLayout"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Presentation from "../components/presentation"
import About from "../components/about"
import Projects from "../components/projects"
import NoteworthyProjects from "../components/NoteworthyProjects"
import Contact from "../components/Contact"
import ExpoModal from "../components/expoModal"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faLinkedin,
  faGithub,
  faReact,
} from "@fortawesome/free-brands-svg-icons"
import {
  faExternalLinkAlt,
  faBars,
  faTimes,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons"
import Career from "../components/career"
library.add(
  faLinkedin,
  faGithub,
  faExternalLinkAlt,
  faReact,
  faBars,
  faTimes,
  faChevronDown,
)

const IndexPage = () => {
  const [WINDOW_HEIGHT, setWINDOW_HEIGHT] = React.useState(760) // Default windows height
  const [expoModal, setExpoModal] = React.useState(false)

  React.useEffect(() => {
    setWINDOW_HEIGHT(window.innerHeight)
  }, [])

  React.useEffect(() => {
    const element = document.getElementById("app-root")
    if (element) {
      if (expoModal) {
        element.style.filter = "blur(3px)"
      } else {
        element.style.filter = "blur(0px)"
      }
    }
  }, [expoModal])

  const HEADER_HEIGHT = 60
  const FOOTER_HEIGHT = 100
  const SECTION_HEIGHT = ((WINDOW_HEIGHT - 60) * 85) / 100

  return (
    <>
      {expoModal && (
        <ExpoModal setExpoModal={setExpoModal} expoModal={expoModal} />
      )}
      {/* <FixedLayout> */}

      <Seo title="Sandra & Thomas 2024" />
      <Presentation SECTION_HEIGHT={WINDOW_HEIGHT} />
      <Layout FOOTER_HEIGHT={FOOTER_HEIGHT} HEADER_HEIGHT={HEADER_HEIGHT}>
        <About SECTION_HEIGHT={SECTION_HEIGHT} HEADER_HEIGHT={HEADER_HEIGHT} />
        <Projects expoModal={expoModal} setExpoModal={setExpoModal} />
        <NoteworthyProjects />
        <Career />
        <Contact
          SECTION_HEIGHT={WINDOW_HEIGHT - HEADER_HEIGHT - FOOTER_HEIGHT}
        />
      </Layout>
      {/* </FixedLayout> */}
    </>
  )
}

export default IndexPage
