import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { Bookmark } from "grommet-icons"
import { Heading, Box, Flex, Button, Text } from "rebass"
import BlockContent from "@sanity/block-content-to-react"

import { PostTags, PostPlaces, Share } from "../components/post"

export default function PostTemplate({ data }) {
  const { sanityPost } = data

  return (
    <>
      <Heading
        fontSize={[5]}
        mb={[2]}
        style={{ fontFamily: `var(--sans)` }}
        fontWeight="900"
      >
        {sanityPost.title}
      </Heading>
      <Img fluid={sanityPost.mainImage.asset.fluid} />
      <Flex justifyContent="space-between" my={[3]} flexWrap="wrap">
        <Share />
        <Button bg="var(--light-1)" color="var(--dark-1)">
          <Bookmark color="var(--dark-1)" />
        </Button>
      </Flex>
      <Box my={[4]}>
        <BlockContent blocks={sanityPost._rawBody} />
      </Box>
      <hr />
      <Box my={[4]}>
        <PostPlaces postPlaces={sanityPost.postPlaces} />
      </Box>
    </>
  )
}

export const POST_PAGE_QUERY = graphql`
  query($slug: String!) {
    sanityPost(slug: { current: { eq: $slug } }) {
      ...SanityPostFragment
    }
  }
`
