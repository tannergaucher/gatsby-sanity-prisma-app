import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { Heading, Box, Flex, Button } from "rebass"
import BlockContent from "@sanity/block-content-to-react"

import { PostTags, PostPlaces, Share } from "../components/post"

export default function PostTemplate({ data }) {
  const { sanityPost } = data

  return (
    <>
      <Heading fontSize={[5]} style={{ fontFamily: `var(--sans)` }}>
        {sanityPost.title}
      </Heading>
      <Flex my={[3]}>
        <PostTags tags={sanityPost.tags} />
      </Flex>
      <Img fluid={sanityPost.mainImage.asset.fluid} />
      <Share />
      <Button>Save This List</Button>
      {/* AddToListDropdown */}
      {/* View on Map Button */}
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
