import React from "react"
import Img from "gatsby-image"

import { Link } from "gatsby"

export default function Author({ author }) {
  return (
    <Link to={author.slug.current}>
      <h6>{author.name}</h6>
      <Img fluid={author.image.asset.fluid} />
    </Link>
  )
}
