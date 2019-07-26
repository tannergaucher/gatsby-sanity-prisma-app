import React from "react"
import { graphql } from "gatsby"

export default function Post({ data }) {
  const { sanityPost } = data

  return (
    <div>
      <h1>{sanityPost.title}</h1>
      <ul>
        {sanityPost.tags.map(tag => (
          <li key={tag.id}>{tag.tag}</li>
        ))}
      </ul>
    </div>
  )
}

export const POST_PAGE_QUERY = graphql`
  query($slug: String!) {
    sanityPost(slug: { current: { eq: $slug } }) {
      ...SanityPostFragment
    }
  }
`
