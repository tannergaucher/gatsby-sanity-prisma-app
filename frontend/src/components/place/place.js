import React from "react"
import Img from "gatsby-image"
import BlockContent from "@sanity/block-content-to-react"
import { AddCircle } from "grommet-icons"
import { Heading, Button, Flex, Box } from "rebass"

import { PlaceDetails } from "."
import { Divider } from "../styles"

// chance postPlace name
export default function Place({ postPlace }) {
  return (
    <Box mb={[4]}>
      <Flex justifyContent="space-between" alignItems="center" mb={[3]}>
        <Heading
          fontSize={[4]}
          fontWeight="900"
          style={{ fontFamily: `var(--sans)` }}
        >
          {postPlace.place.name}
        </Heading>
        {/* Image Caption Here*/}
        <Button
          bg="var(--light-1)"
          color="var(--dark-1)"
          style={{
            fontFamily: `var(--sans)`,
            textTransform: `uppercase`,
          }}
        >
          <AddCircle color="var(--dark-1)" />
        </Button>
      </Flex>
      <Img fluid={postPlace.place.image.asset.fluid} />
      <BlockContent blocks={postPlace._rawText} />
      <PlaceDetails place={postPlace} />
      <Divider mt={[4]} />
    </Box>
  )
}
