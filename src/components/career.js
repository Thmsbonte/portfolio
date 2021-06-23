import * as React from "react"
import "./career.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { StaticImage } from "gatsby-plugin-image"

const Career = () => {
  return (
    <>
      <div id="career"></div>
      <div className="career">
        <div className="career-content">
          <h2>
            <span className="title-number">03.</span>Career
          </h2>
          <div className="career-journey">
            <div className="career-journey-content">
              <div className="row first-row">
                <div className="middle">
                  <FontAwesomeIcon
                    icon={["fab", "react"]}
                    size="2x"
                    color="#60DBFB"
                  />
                </div>
                <div className="block block-right">
                  <p className="career-p1">
                    Full-Stack Javascript/Typescript developer
                  </p>
                  <p className="career-text">
                    Sept 2020 – June 2021 (10 months)
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="middle">
                  <div className="round"></div>
                  <div className="middle-trait"></div>
                </div>
                <div className="block block-right">
                  <p className="career-p2">
                    Eco-FoodInfo - <span>Full-Stack developer</span>{" "}
                  </p>
                  <p className="career-text">
                    React-Native mobile application to scan and get the
                    Eco-score of a product
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="middle">
                  <div className="round"></div>
                  <div className="middle-trait"></div>
                </div>
                <div className="block block-right">
                  <p className="career-p2">
                    Achylles - <span>Lead developer</span>
                  </p>
                  <p className="career-text">
                    React-Native mobile application for French real estate
                    company
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="middle">
                  <div className="round"></div>
                  <div className="middle-trait"></div>
                </div>
                <div className="block block-right">
                  <p className="career-p2">
                    Web and mobile certification - Le Reacteur
                  </p>
                  <p className="career-text">Full-Stack JavaScript developer</p>
                </div>
              </div>
              <div className="row first-row">
                <div className="middle">
                  <StaticImage
                    src="../images/wavestone.png"
                    width={40}
                    alt="wavestone-logo"
                    className="wavestone-logo"
                  />
                </div>
                <div className="block block-right">
                  <p className="career-p1">Wavestone (conseil IT)</p>
                  <p className="career-text">Sept 2014 - Sept 2019 (5 years)</p>
                </div>
              </div>
              <div className="row">
                <div className="middle">
                  <div className="round"></div>
                  <div className="middle-trait"></div>
                </div>
                <div className="block block-right">
                  <p className="career-p2">
                    Senior Consultant - Digital & Emerging technologies
                  </p>
                  <p className="career-text">Sept 2018 – Sept 2019 (1 year)</p>
                </div>
              </div>
              <div className="row">
                <div className="middle">
                  <div className="round"></div>
                  <div className="middle-trait"></div>
                </div>
                <div className="block block-right">
                  <p className="career-p2">
                    Consultant - Digital & Emerging technologies
                  </p>
                  <p className="career-text">Sept 2014 – Sept 2018 (4 years)</p>
                </div>
              </div>

              <div className="row first-row">
                <div className="middle">
                  <StaticImage
                    src="../images/ISEP-logo.png"
                    width={40}
                    alt="wavestone-logo"
                    className="wavestone-logo"
                  />
                </div>
                <div className="block block-right">
                  <p className="career-p1">Computer science degree</p>
                  <p className="career-text">ISEP - 2014</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Career
