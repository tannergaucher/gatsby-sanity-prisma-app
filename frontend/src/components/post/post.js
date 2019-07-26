import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

export default function Post({ post }) {
  return (
    <Link to={`/${post.slug.current}`}>
      <h1>{post.title}</h1>
      <Img fluid={post.mainImage.asset.fluid} />
    </Link>
  )
}
