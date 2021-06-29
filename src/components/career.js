import * as React from "react"
import "./career.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { StaticImage } from "gatsby-plugin-image"
import { FormattedMessage } from "gatsby-plugin-intl"

const Career = () => {
  return (
    <>
      <div id="career"></div>
      <div className="career">
        <div className="career-content">
          <h2>
            <span className="title-number">03.</span>
            <FormattedMessage id="career.title" />
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
                    <FormattedMessage id="career.stepOne" />
                  </p>
                  <p className="career-text">
                    <FormattedMessage id="career.stepOneDate" />
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
                    <FormattedMessage id="career.stepOneExpOneTitle" /> -{" "}
                    <span>
                      <FormattedMessage id="career.stepOneExpOneRole" />
                    </span>{" "}
                  </p>
                  <p className="career-text">
                    <FormattedMessage id="career.stepOneExpOneDescription" />
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
                    <FormattedMessage id="career.stepOneExpTwoTitle" /> -{" "}
                    <span>
                      <FormattedMessage id="career.stepOneExpTwoRole" />
                    </span>
                  </p>
                  <p className="career-text">
                    <FormattedMessage id="career.stepOneExpTwoDescription" />
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
                    <FormattedMessage id="career.stepOneExpThreeTitle" /> -{" "}
                    <FormattedMessage id="career.stepOneExpThreeRole" />
                  </p>
                  <p className="career-text">
                    <FormattedMessage id="career.stepOneExpThreeDescription" />
                  </p>
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
                  <p className="career-p1">
                    <FormattedMessage id="career.stepTwo" />
                  </p>
                  <p className="career-text">
                    <FormattedMessage id="career.stepTwoDate" />
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
                    <FormattedMessage id="career.stepTwoExpOneTitle" /> -{" "}
                    <FormattedMessage id="career.stepTwoExpOneRole" />
                  </p>
                  <p className="career-text">
                    <FormattedMessage id="career.stepTwoExpOneDate" />
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
                    <FormattedMessage id="career.stepTwoExpTwoTitle" /> -{" "}
                    <FormattedMessage id="career.stepTwoExpTwoRole" />
                  </p>
                  <p className="career-text">
                    <FormattedMessage id="career.stepTwoExpTwoDate" />{" "}
                  </p>
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
                  <p className="career-p1">
                    <FormattedMessage id="career.stepThree" />
                  </p>
                  <p className="career-text">
                    <FormattedMessage id="career.stepThreeDate" />
                  </p>
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
