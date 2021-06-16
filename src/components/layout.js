/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.scss"
import "./layoutcontent.scss"
import SocialNetworks from "./socialNetworks"

const Layout = ({ children, HEADER_HEIGHT, FOOTER_HEIGHT }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        HEADER_HEIGHT={HEADER_HEIGHT}
      />
      <div className="content">
        <main>{children}</main>
      </div>
      <Footer FOOTER_HEIGHT={FOOTER_HEIGHT} />
      <div className="email-address">
        <p>thms.bonte@gmail.com</p>
        <div className="fixed-trait"></div>
      </div>
      <div className="social-networks">
        <SocialNetworks />
        <div className="fixed-trait"></div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
