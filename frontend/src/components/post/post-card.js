import React from "react"
import Img from "gatsby-image"

import { Link } from "../styles"

export default function Post({ post }) {
  return (
    <Link to={`/${post.slug.current}`}>
      <h1>{post.title}</h1>
      <Img fluid={post.mainImage.asset.fluid} />
    </Link>
  )
}
