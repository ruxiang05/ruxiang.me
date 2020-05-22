import React from "react"
import Insta from "../images/instagram-brands.svg"
import LinkedIn from "../images/linkedin-in-brands.svg"
import Twitter from "../images/twitter-brands.svg"

const Social = () => (
  <div>
    <p>Connect with me on</p>
    <a href="https://www.linkedin.com/in/ruxiang/">
      <img className="social-media" src={LinkedIn} alt="LinkedIn logo" />
    </a>
    <a href="https://www.instagram.com/ruxi.ang/">
      <img className="social-media" src={Insta} alt="Instagram logo" />
    </a>
    <a href="https://twitter.com/ruxi_ang">
      <img className="social-media" src={Twitter} alt="Twitter logo" />
    </a>
  </div>
)

export default Social
