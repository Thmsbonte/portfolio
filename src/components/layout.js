/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import Footer from "./footer"
import "./layout.scss"
import "./layoutcontent.scss"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"

const Layout = ({ children, FOOTER_HEIGHT, HEADER_HEIGHT }) => {
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
      <main id="app-root">{children}</main>
      <Footer FOOTER_HEIGHT={FOOTER_HEIGHT} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
