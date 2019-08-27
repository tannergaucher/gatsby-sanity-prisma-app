import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { Bookmark } from "grommet-icons"
import { Heading, Flex, Button } from "rebass"

// Change PostPlaces to Places and import from /components/place
import { PostPlaces, Share } from "../components/post"
import { BlockContent } from "../components/styles"

export default function PostTemplate({ data }) {
  const { sanityPost } = data

  console.log(sanityPost)

  return (
    <>
      <Heading
        fontSize={[1]}
        fontWeight="lighter"
        fontFamily="var(--sans)"
        mb={[0]}
        style={{ textTransform: `uppercase` }}
      >
        {sanityPost.category.category}
      </Heading>
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
