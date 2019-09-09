import React from "react"
import Img from "gatsby-image"
import { Heading, Flex, Box, Text, Card } from "rebass"

import { PlaceDetails } from "."
import { AddToListModal } from "../list"
import { BlockContent } from "../styles"

export default function PlaceCard({ postPlace }) {
  return (
    <Card
      mx={[2]}
      my={[5]}
      p={[2]}
      boxShadow="0px 4px 12px rgba(0, 0, 0, .2)"
      borderRadius="12px"
    >
      <Flex justifyContent="space-between" alignItems="center" mb={[3]}>
        <Box px={[2]}>
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
        <AddToListModal place={postPlace} />
      </Flex>
      <Img fluid={postPlace.place.image.asset.fluid} />
      <Text
        fontWeight="100"
        fontSize={[3]}
        mt={[3]}
        color="var(--dark-2)"
        fontFamily="var(--sans)"
      >
        {postPlace.place.imageCaption}
      </Text>
      {/* TODO: position absolute photo credit over image */}
      <BlockContent blocks={postPlace._rawText} fontFamily="var(--sans)" />
      <PlaceDetails place={postPlace} />
    </Card>
  )
}
