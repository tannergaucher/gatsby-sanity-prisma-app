import React from "react"
import Img from "gatsby-image"
import { AddCircle } from "grommet-icons"
import { Heading, Button, Flex, Box, Text, Link as RebassLink } from "rebass"

import { PlaceDetails } from "."
import { Divider, BlockContent } from "../styles"

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
      <Text
        fontFamily="var(--sans)"
        fontWeight="100"
        fontSize={[2]}
        mt={[3]}
        color="var(--dark-2)"
      >
        {postPlace.place.imageCaption}
      </Text>
      {/* Todo: position absolute photo credit over image */}
      <BlockContent blocks={postPlace._rawText} />
      <PlaceDetails place={postPlace} />
      <Divider mt={[4]} />
    </Box>
  )
}
