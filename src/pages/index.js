import * as React from "react"

import FixedLayout from "../components/fixedLayout"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Presentation from "../components/presentation"
import About from "../components/about"
import Projects from "../components/projects"
import NoteworthyProjects from "../components/NoteworthyProjects"
import Contact from "../components/Contact"
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
} from "@fortawesome/free-solid-svg-icons"
import Career from "../components/career"
library.add(faLinkedin, faGithub, faExternalLinkAlt, faReact, faBars, faTimes)

const IndexPage = () => {
  const [WINDOW_HEIGHT, setWINDOW_HEIGHT] = React.useState(760) // Default windows height
  // const [responsiveMenu, setResponsiveMenu] = React.useState(false)

  React.useEffect(() => {
    setWINDOW_HEIGHT(window.innerHeight)
  }, [])

  // React.useEffect(() => {
  //   if (responsiveMenu) {
  //     document.getElementById("app-root").style.filter = "blur(5px)"
  //   } else {
  //     document.getElementById("app-root").style.filter = "blur(0px)"
  //   }
  // }, [responsiveMenu])

  const HEADER_HEIGHT = 60
  const FOOTER_HEIGHT = 60
  const SECTION_HEIGHT = ((WINDOW_HEIGHT - 60) * 85) / 100

  return (
    <FixedLayout>
      <Layout FOOTER_HEIGHT={FOOTER_HEIGHT} HEADER_HEIGHT={HEADER_HEIGHT}>
        <Seo title="Home" />
        <Presentation SECTION_HEIGHT={WINDOW_HEIGHT} />
        <About SECTION_HEIGHT={SECTION_HEIGHT} HEADER_HEIGHT={HEADER_HEIGHT} />
        <Projects />
        <NoteworthyProjects />
        <Career />
        <Contact
          SECTION_HEIGHT={WINDOW_HEIGHT - HEADER_HEIGHT - FOOTER_HEIGHT}
        />
      </Layout>
    </FixedLayout>
  )
}

export default IndexPage
