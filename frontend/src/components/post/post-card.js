import React from "react"
import Img from "gatsby-image"
import { Heading, Box } from "rebass"

import { Link } from "../styles"

export default function PostCard({ post }) {
  return (
    <Box mb={[5]}>
      <Link to={`/${post.slug.current}`}>
        <Heading fontSize={[5]} mb={[2]} style={{ fontFamily: `var(--sans)` }}>
          {post.title}
        </Heading>
        <Img fluid={post.mainImage.asset.fluid} />
      </Link>
    </Box>
  )
}
