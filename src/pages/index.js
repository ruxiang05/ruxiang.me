import React from "react"
import Header from "../components/Header"
import Avatar from "../components/Avatar"
import Intro from "../components/Intro"
import Social from "../components/Social"
import "../styles/styles.scss"
import "typeface-fira-sans"

const IndexPage = () => (
  <div className="wrapper">
    <Avatar />
    <div className="content">
      <Header />
      <Intro />
      <Social />
    </div>
  </div>
)

export default IndexPage
