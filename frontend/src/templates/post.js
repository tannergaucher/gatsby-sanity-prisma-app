import React from "react"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import { Bookmark } from "grommet-icons"
import { Heading, Flex, Button, Card, Box } from "rebass"

import { PostPlaces, Share } from "../components/post"
import { BlockContent } from "../components/styles"

export default function PostTemplate({ data }) {
  const { sanityPost } = data

  return (
    <Card>
      <Box style={{ position: `relative` }}>
        <Img
          fluid={sanityPost.mainImage.asset.fluid}
          style={{ filter: `brightness(.5)` }}
        />
        <Box style={{ position: `absolute`, top: `0` }} p={[3]}>
          <Heading
            fontSize={[1]}
            fontWeight="500"
            fontFamily="var(--sans)"
            color="var(--light-1)"
            letterSpacing="1px"
            mt={[2]}
            mb={[2]}
            style={{ textTransform: `uppercase` }}
          >
            <Link
              to={`/guide/categories/${sanityPost.category.slug.current}`}
              style={{ textDecoration: `none`, color: `inherit` }}
            >
              {sanityPost.category.category}
            </Link>
          </Heading>
          <Heading
            fontSize={[5, 6]}
            mb={[2]}
            lineHeight="1.1"
            letterSpacing="-.5px"
            color="var(--light-1)"
            style={{ fontFamily: `var(--sans)` }}
            fontWeight="900"
          >
            {sanityPost.title}
          </Heading>
        </Box>
        <Box style={{ position: `absolute`, top: `calc(100% - 44px)` }}>
          <Share />
        </Box>
      </Box>

      <Box as="article">
        <BlockContent blocks={sanityPost._rawBody} mb={[4]} p={[2]} />
        <PostPlaces postPlaces={sanityPost.postPlaces} />
      </Box>
    </Card>
  )
}

export const POST_PAGE_QUERY = graphql`
  query($slug: String!) {
    sanityPost(slug: { current: { eq: $slug } }) {
      ...SanityPostFragment
    }
  }
`
