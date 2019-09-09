import React from "react"
import Img from "gatsby-image"
import { Heading, Card } from "rebass"

import { Link } from "../styles"

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.category.slug.current}/${post.slug.current}`}>
      <Card
        mb={[5]}
        boxShadow="0px 10px 12px rgba(0, 0, 0, .2)"
        borderRadius="25px"
      >
        <Img
          fluid={post.mainImage.asset.fluid}
          style={{ borderRadius: "25px 25px 0px 0px" }}
        />
        <Heading
          fontSize={[1]}
          fontWeight="500"
          fontFamily="var(--sans)"
          color="var(--dark-2)"
          letterSpacing="1px"
          mb={2}
          px={[3]}
          pt={[3]}
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
          style={{ fontFamily: `var(--sans)` }}
          fontWeight="900"
        >
          {post.title}
        </Heading>
      </Card>
    </Link>
  )
}
