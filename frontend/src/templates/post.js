import React from "react"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import { Heading, Box } from "rebass"

import { PostPlaces, Share, Author } from "../components/post"
import { BlockContent } from "../components/styles"
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
      <Box style={{ position: `relative` }}>
        <Img
          fluid={sanityPost.mainImage.asset.fluid}
          style={{ filter: `brightness(.5)` }}
        />
        <Box style={{ position: `absolute`, top: `0` }} p={[3]}>
          <Heading
            fontSize={[1]}
            fontWeight="500"
            color="var(--light-1)"
            letterSpacing="var(--letter-spacing)"
            mt={1}
            mb={[1]}
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
            fontWeight="900"
          >
            {sanityPost.title}
          </Heading>
        </Box>
        <Box style={{ position: `absolute`, top: `calc(100% - 44px)` }}>
          <Share post={data.sanityPost} />
        </Box>
      </Box>

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
