import React from "react"
import { graphql } from "gatsby"
import { Heading } from "rebass"

import { PostCardThumbnail } from "../components/post"

export default function CategoryTemplate({ data, pageContext }) {
  const { allSanityPost } = data
  const { category } = pageContext

  return (
    <>
      <Heading textAlign="center" mb={[3]}>
        {category}
      </Heading>
      {/* Get all tags, and map to select options */}

      {allSanityPost.edges.map(edge => (
        <PostCardThumbnail post={edge.node} />
      ))}
    </>
  )
}

export const CATEGORY_PAGE_QUERY = graphql`
  query($slug: String!) {
    allSanityPost(
      filter: { category: { elemMatch: { slug: { current: { eq: $slug } } } } }
    ) {
      edges {
        node {
          ...SanityPostFragment
        }
      }
    }
  }
`
