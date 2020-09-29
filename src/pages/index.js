import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-static-image"
import Img from "gatsby-image"

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "drink-unsplash.jpg" }) {
        childImageSharp {
          fixed(height: 250) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h1>Static Images</h1>
      <section>
        <StaticImage src="drink-unsplash.jpg" tracedSVG height={250} />
        <Img fixed={data.file.childImageSharp.fixed} />
      </section>
    </div>
  )
}
