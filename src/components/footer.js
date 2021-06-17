import * as React from "react"
import "./footer.scss"

const Footer = ({ FOOTER_HEIGHT }) => {
  return (
    <div className="footer" style={{ height: FOOTER_HEIGHT }}>
      © {new Date().getFullYear()} - Built by <strong> Thomas Bonte</strong>
      {/* 95% inspired by{" "}
      <a href="https://brittanychiang.com/">brittanychiang.com</a> */}
    </div>
  )
}

export default Footer
