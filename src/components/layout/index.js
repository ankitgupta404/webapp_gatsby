import React from "react"
import layoutStyles from "./index.module.css"
import Footer from '../footer/index'

export default function Layout({ children }) {
  return (
    <div className={layoutStyles.layout}>
      {children}
      <Footer footer = "Powered by Gatsby, css, AWS Cloud and me" />
      </div>
  )
  
}