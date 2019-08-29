import React from "react"
import { Heading } from "rebass"

import { PostCardThumbnail } from "../components/post"

export default function CategoryTag({ pageContext, data }) {
  const { category } = pageContext

  return (
    <>
      <Heading>{category}</Heading>
      {data.allSanityPost.edges.map(edge => (
        <PostCardThumbnail key={edge.node.id} post={edge.node} />
      ))}
    </>
  )
}

// Query all posts with category slug of category slug and tag slug of  tag slug
export const CATEGORY_PAGE_QUERY = graphql`
  query($categorySlug: String!, $tagSlug: String!) {
    allSanityPost(
      filter: {
        category: { slug: { current: { eq: $categorySlug } } }
        tags: { elemMatch: { slug: { current: { eq: $tagSlug } } } }
      }
    ) {
      edges {
        node {
          ...SanityPostFragment
        }
      }
    }
  }
`
