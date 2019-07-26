import React from "react"
import { graphql } from "gatsby"

export default function Author({ data }) {
  const { sanityAuthor } = data

  return (
    <div>
      <h1>{sanityAuthor.name}</h1>
    </div>
  )
}

export const AUTHOR_PAGE_QUERY = graphql`
  query($slug: String!) {
    sanityAuthor(slug: { current: { eq: $slug } }) {
      ...SanityAuthorFragment
    }
  }
`
