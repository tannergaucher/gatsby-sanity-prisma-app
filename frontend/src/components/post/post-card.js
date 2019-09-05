import React from "react"
import Img from "gatsby-image"
import { Heading, Box } from "rebass"

import { Link } from "../styles"

export default function PostCard({ post }) {
  return (
    <Link to={`/${post.category.slug.current}/${post.slug.current}`}>
      <Box mb={[5]}>
        <Heading
          fontSize={[1]}
          fontWeight="500"
          fontFamily="var(--sans)"
          color="var(--dark-2)"
          letterSpacing="1px"
          mb={[1]}
          style={{ textTransform: `uppercase` }}
        >
          {post.category.category}
        </Heading>
        <Heading
          fontSize={[5, 6]}
          mb={[2]}
          lineHeight="1.1"
          letterSpacing="-.5px"
          style={{ fontFamily: `var(--sans)` }}
          fontWeight="900"
        >
          {post.title}
        </Heading>
        <Img fluid={post.mainImage.asset.fluid} />
      </Box>
    </Link>
  )
}
