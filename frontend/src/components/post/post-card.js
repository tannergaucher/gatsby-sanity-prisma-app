import React from "react"
import Img from "gatsby-image"
import { Heading, Card } from "rebass"

export default function PostCard({ post }) {
  return (
    <Card mb={[4]} p={[2]}>
      <Img fluid={post.mainImage.asset.fluid} />

      <Heading
        fontSize={[1]}
        color="var(--dark-3)"
        letterSpacing="var(--letter-spacing)"
        style={{ textTransform: `uppercase` }}
        mt={[2]}
      >
        {post.category.category}
      </Heading>
      <Heading
        fontSize={[4]}
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
