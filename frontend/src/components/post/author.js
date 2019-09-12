import React from "react"
import Img from "gatsby-image"
import { Flex, Heading, Box } from "rebass"

import { Link } from "../styles"

export default function Author({ author }) {
  console.log(author)

  return (
    <Flex alignItems="center">
      <Flex alignItems="center">
        <Img
          fixed={author.image.asset.fixed}
          style={{ borderRadius: `100%` }}
        />
      </Flex>
      <Flex ml={[2]} alignItems="center">
        <Link to={author.slug.current}>
          <Heading fontSize={[1]} fontWeight="lighter">
            {author.name}
          </Heading>
          <Heading fontSize={[1]} fontWeight="lighter">
            @IG
          </Heading>
        </Link>
      </Flex>
    </Flex>
  )
}
