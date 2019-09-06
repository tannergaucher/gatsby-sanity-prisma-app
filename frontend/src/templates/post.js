import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { Bookmark } from "grommet-icons"
import { Heading, Flex, Button } from "rebass"

import { PostPlaces, Share } from "../components/post"
import { BlockContent } from "../components/styles"

export default function PostTemplate({ data }) {
  const { sanityPost } = data

  return (
    <>
      <Heading
        fontSize={[1]}
        fontWeight="500"
        fontFamily="var(--sans)"
        color="var(--dark-2)"
        letterSpacing="1px"
        mb={[1]}
        style={{ textTransform: `uppercase` }}
      >
        {sanityPost.category.category}
      </Heading>
      <Heading
        fontSize={[5, 6]}
        mb={[2]}
        lineHeight="1.1"
        letterSpacing="-.5px"
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
      <BlockContent blocks={sanityPost._rawBody} mb={[4]} />
      <PostPlaces postPlaces={sanityPost.postPlaces} />
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
