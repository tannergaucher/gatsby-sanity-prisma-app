import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { Heading, Box, Flex } from "rebass"

import { useAllSanityCategory } from "../hooks"

export default function Categories() {
  const { edges } = useAllSanityCategory()

  return (
    <>
      {edges.map(edge => (
        <Category key={edge.node.id} category={edge.node} />
      ))}
    </>
  )
}

function Category({ category }) {
  return (
    <Box mb={[2]} style={{ position: `relative` }}>
      <Link to={category.slug.current}>
        <Heading
          color="var(--light-1)"
          fontSize={[4]}
          fontFamily="var(--sans)"
          fontWeight="400"
          style={{
            zIndex: `1`,
            position: `absolute`,
            top: `50%`,
            left: `50%`,
            transform: `translate(-50%, -50%)`,
            textTransform: `uppercase`,
            textAlign: `center`,
          }}
        >
          {category.category}
        </Heading>
        <Img
          fluid={category.image.asset.fluid}
          style={{
            filter: `brightness(.5)`,
          }}
        />
      </Link>
    </Box>
  )
}
