import React from "react"
import Img from "gatsby-image"
import { Heading, Card } from "rebass"

export default function PostCard({ post }) {
  return (
    <Card mb={[5]} m={[2]} boxShadow="var(--elevation-1)">
      <Img fluid={post.mainImage.asset.fluid} />
      <Heading
        fontSize={[1]}
        fontWeight="lighter"
        mb={2}
        px={[3]}
        pt={[3]}
        textAlign="center"
        style={{ textTransform: `uppercase` }}
      >
        {post.category.category}
      </Heading>
      <Heading
        fontSize={[5, 6]}
        px={3}
        pb={[3]}
        lineHeight="1.1"
        letterSpacing="-.5px"
        fontWeight="900"
        textAlign="center"
      >
        {post.title}
      </Heading>
    </Card>
  )
}
