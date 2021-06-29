import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./about.scss"
import { FormattedMessage } from "gatsby-plugin-intl"

const About = ({ SECTION_HEIGHT, HEADER_HEIGHT }) => {
  return (
    <div className="about" style={{ minHeight: SECTION_HEIGHT }}>
      <div className="about-content">
        <div className="content-left">
          <h2>
            {" "}
            <span className="title-number">01.</span>
            <FormattedMessage id="about.title" />
          </h2>
          <p>
            <FormattedMessage
              id="about.paragraphOne"
              values={{
                Wavestone: (
                  <a
                    href="https://www.wavestone.com/fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Wavestone
                  </a>
                ),
                ISEP: (
                  <a
                    href="https://www.isep.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    l'Institut Supérieur d'Électronique de Paris
                  </a>
                ),
              }}
            />
          </p>
          <p>
            <FormattedMessage
              id="about.paragraphTwo"
              values={{
                Javascript: (
                  <a
                    href="https://developer.mozilla.org/fr/docs/Web/JavaScript"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Javascript
                  </a>
                ),
                React: (
                  <a
                    href="https://fr.reactjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    React
                  </a>
                ),
              }}
            />
          </p>
          <p>
            <FormattedMessage id="about.paragraphThree" />{" "}
          </p>
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
                  <span>▹</span> React
                </li>
                <li>
                  <span>▹</span> Node.js
                </li>
                <li>
                  <span>▹</span> Jest
                </li>
              </ul>
            </div>
            <div className="column">
              <ul>
                <li>
                  <span>▹</span> TypeScript
                </li>
                <li>
                  <span>▹</span> React Native
                </li>
                <li>
                  <span>▹</span> MongoDB
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
