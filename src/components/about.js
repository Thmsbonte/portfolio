import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./about.scss"

const About = ({ SECTION_HEIGHT, HEADER_HEIGHT }) => {
  return (
    <div className="about" style={{ minHeight: SECTION_HEIGHT }}>
      <div className="about-content">
        <div className="content-left">
          <h2>
            {" "}
            <span className="title-number">01.</span>About me
          </h2>
          <p>
            Graduated as a computer science engineer in 2014, I worked 5 five
            years as a digital and emerging technologies consultant at{" "}
            <a
              href="https://www.wavestone.com/fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wavestone
            </a>{" "}
            before embracing my interest in web development and becoming a
            full-time software developer.
          </p>
          <p>
            Benefiting from my consulting experience, I aim to offer both
            technical and organizational skills to build accessible and
            performant product as well as enjoyable digital experience.
          </p>
          <p>Here are a few technologies I've been working with recently: </p>
          <div className="table">
            <div className="column">
              <ul>
                <li>
                  <span>▹</span> JavaScript
                </li>
                <li>
                  <span>▹</span> TypeScript
                </li>
                <li>
                  <span>▹</span> Node.js
                </li>
              </ul>
            </div>
            <div className="column">
              <ul>
                <li>
                  <span>▹</span> React
                </li>
                <li>
                  <span>▹</span> React Native
                </li>
                <li>
                  <span>▹</span> MongoDB
                </li>
              </ul>
            </div>
            <div className="column">
              <ul>
                <li>
                  <span>▹</span> Jest
                </li>
                <li>
                  <span>▹</span> Gatsby
                </li>
                <li>
                  <span>▹</span> Next.js
                </li>
              </ul>
            </div>
          </div>
          <div className="table-responsive">
            <div className="column">
              <ul>
                <li>
                  <span>▹</span> JavaScript
                </li>
                <li>
                  <span>▹</span> TypeScript
                </li>
                <li>
                  <span>▹</span> Node.js
                </li>
                <li>
                  <span>▹</span> MongoDB
                </li>
              </ul>
            </div>
            <div className="column">
              <ul>
                <li>
                  <span>▹</span> React
                </li>
                <li>
                  <span>▹</span> React Native
                </li>
                <li>
                  <span>▹</span> Jest
                </li>
                <li>
                  <span>▹</span> Gatsby
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="content-right">
          <StaticImage
            src="../images/profile-pic.jpg"
            width={300}
            alt="profile-picture"
            className="profile-picture"
          />
        </div>
      </div>
      <div id="projects" style={{ bottom: HEADER_HEIGHT + 30 }}></div>
    </div>
  )
}

export default About
