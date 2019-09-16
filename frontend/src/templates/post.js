import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { Heading, Box, Flex } from "rebass"
import { navigate } from "@reach/router"

import { PostPlaces, Share, Author } from "../components/post"
import { BlockContent, Button } from "../components/styles"
import { SEO } from "../components/elements"

export default function PostTemplate({ data }) {
  const { sanityPost } = data

  return (
    <>
      <SEO
        title={data.sanityPost.title}
        image={data.sanityPost.mainImage.asset.fluid.src}
        url={`https://untrip.app/posts/${data.sanityPost.category.slug.current}/${data.sanityPost.slug.current}`}
      />
      <Box px={[3]}>
        <Flex justifyContent="center" my={[3]}>
          <Button
            fontFamily="var(--sans)"
            variant="outline"
            alignSelf="center"
            onClick={() => {
              navigate(`/guide/categories/${sanityPost.category.slug.current}`)
            }}
          >
            {sanityPost.category.category}
          </Button>
        </Flex>

        <Heading
          fontSize={[5]}
          my={[3]}
          lineHeight="1.1"
          fontWeight="900"
          textAlign={["", "center"]}
        >
          {sanityPost.title}
        </Heading>
      </Box>
      <Img fluid={sanityPost.mainImage.asset.fluid} />
      <Share post={data.sanityPost} />
      <Box as="article" mb={[4]} p={[2]}>
        <BlockContent blocks={sanityPost._rawBody} mb={[4]} />
        <PostPlaces postPlaces={sanityPost.postPlaces} />
        <Author author={sanityPost.author} />
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
