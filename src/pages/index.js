import * as React from "react"

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
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import Career from "../components/career"
library.add(faLinkedin, faGithub, faExternalLinkAlt, faReact)

const WINDOW_HEIGHT = window.innerHeight
const HEADER_HEIGHT = 60
const FOOTER_HEIGHT = 60
const SECTION_HEIGHT = ((WINDOW_HEIGHT - 60) * 85) / 100

const IndexPage = () => (
  <Layout HEADER_HEIGHT={HEADER_HEIGHT} FOOTER_HEIGHT={FOOTER_HEIGHT}>
    <Seo title="Home" />
    <Presentation SECTION_HEIGHT={WINDOW_HEIGHT} />
    <About SECTION_HEIGHT={SECTION_HEIGHT} HEADER_HEIGHT={HEADER_HEIGHT} />
    <Projects />
    <NoteworthyProjects />
    <Career />
    <Contact SECTION_HEIGHT={WINDOW_HEIGHT - HEADER_HEIGHT - FOOTER_HEIGHT} />
  </Layout>
)

export default IndexPage
