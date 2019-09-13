import React from "react"
import Img from "gatsby-image"
import { Heading, Card } from "rebass"

export default function PostCard({ post }) {
  return (
    <Card mb={[5]} p={[2]}>
      <Img fluid={post.mainImage.asset.fluid} />
      <Heading
        fontSize={[1]}
        fontWeight="lighter"
        color="var(--dark-2)"
        letterSpacing="var(--letter-spacing)"
        style={{ textTransform: `uppercase` }}
        mt={[2]}
      >
        {post.category.category}
      </Heading>
      <Heading
        fontSize={[5, 6]}
        lineHeight="1.1"
        letterSpacing="-.5px"
        fontWeight="900"
        mt={[1]}
      >
        {post.title}
      </Heading>
    </Card>
  )
}
