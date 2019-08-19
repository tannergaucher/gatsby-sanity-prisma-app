import React from "react"
import Img from "gatsby-image"
import { Heading, Flex, Box } from "rebass"

import { Link } from "../styles"

export default function PostCard({ post }) {
  console.log(post)
  return (
    <Link to={`/${post.slug.current}`}>
      <Box mb={[5]}>
        {/* EXTRACT TO <CATEGORIES/> */}
        <Heading
          fontSize={[5, 6]}
          mb={[2]}
          lineHeight="1.2"
          style={{ fontFamily: `var(--sans)` }}
          fontWeight="900"
        >
          {post.title}
        </Heading>
        <Img fluid={post.mainImage.asset.fluid} />
        {post.category.map(category => (
          <Heading
            fontSize={[2]}
            fontWeight="lighter"
            fontFamily="var(--sans)"
            mb={[0]}
            mr={2}
            style={{ textTransform: `uppercase` }}
          >
            {category.category}
          </Heading>
        ))}
      </Box>
    </Link>
  )
}
