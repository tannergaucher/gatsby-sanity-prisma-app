import React from "react"

import { PostCard } from "../components/post"

export default function Tag({ data }) {
  const { sanityTag, allSanityPost } = data

  return (
    <>
      <h1>{sanityTag.tag}</h1>
      {allSanityPost.edges.map(edge => (
        <PostCard key={edge.node.id} post={edge.node} />
      ))}
    </>
  )
}

export const TAG_PAGE_QUERY = graphql`
  query($slug: String!, $tag: String!) {
    sanityTag(slug: { current: { eq: $slug } }) {
      ...SanityTagFragment
    }
    allSanityPost(filter: { tags: { elemMatch: { tag: { eq: $tag } } } }) {
      edges {
        node {
          ...SanityPostFragment
        }
      }
    }
  }
`
