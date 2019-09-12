import React from "react"
import Img from "gatsby-image"
import { Heading, Card } from "rebass"

export default function PostCard({ post }) {
  return (
    <Card mb={[5]}>
      <Heading
        fontSize={[1]}
        fontWeight="lighter"
        color="var(--dark-2)"
        px={[2]}
        mb={[1]}
        style={{ textTransform: `uppercase` }}
        letterSpacing="var(--letter-spacing)"
      >
        {post.category.category}
      </Heading>
      <Heading
        fontSize={[5, 6]}
        px={[2]}
        pb={[3]}
        lineHeight="1.1"
        letterSpacing="-.5px"
        fontWeight="900"
      >
        {post.title}
      </Heading>
      <Img fluid={post.mainImage.asset.fluid} />
    </Card>
  )
}
