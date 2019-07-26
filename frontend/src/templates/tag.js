import React from "react"

import { Post } from "../components/post"

export default function Tag({ data }) {
  const { sanityTag, allSanityPost } = data

  return (
    <>
      <h1>{sanityTag.tag}</h1>
      {/* <Img fluid={}/> */}
      {allSanityPost.edges.map(edge => (
        <Post key={edge.node.id} post={edge.node} />
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
