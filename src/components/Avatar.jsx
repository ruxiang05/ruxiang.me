import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Avatar = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      className="profile"
      fluid={data.placeholderImage.childImageSharp.fluid}
      objectFit="cover"
    />
  )
}
export default Avatar
