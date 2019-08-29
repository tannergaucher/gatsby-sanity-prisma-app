import React from "react"
import Img from "gatsby-image"
import { Heading, Flex, Box, Text } from "rebass"

import { PlaceDetails } from "."
import { AddToListModal } from "../list"
import { Divider, BlockContent } from "../styles"

export default function Place({ postPlace }) {
  return (
    <Box>
      <Divider mb={[3]} mt={[4]} />
      <Flex justifyContent="space-between" alignItems="center" mb={[3]}>
        <Box>
          <Heading
            fontSize={[4]}
            fontWeight="900"
            style={{ fontFamily: `var(--sans)` }}
          >
            {postPlace.place.name}
          </Heading>
          <Flex>
            <Heading fontSize={[1]} fontFamily="var(--sans)" fontWeight="100">
              {postPlace.place.placeType.type}
            </Heading>
            {postPlace.place.tags.map(tag => (
              <Heading
                fontSize={[1]}
                fontFamily="var(--sans)"
                fontWeight="100"
                key={tag.id}
              >
                , {tag.tag}
              </Heading>
            ))}
          </Flex>
        </Box>
        <AddToListModal />
      </Flex>
      <Img fluid={postPlace.place.image.asset.fluid} />
      <Text
        fontFamily="var(--sans)"
        fontWeight="100"
        fontSize={[3]}
        mt={[3]}
        color="var(--dark-2)"
      >
        {postPlace.place.imageCaption}
      </Text>
      {/* TODO: position absolute photo credit over image */}
      <BlockContent blocks={postPlace._rawText} />
      <PlaceDetails place={postPlace} />
    </Box>
  )
}
