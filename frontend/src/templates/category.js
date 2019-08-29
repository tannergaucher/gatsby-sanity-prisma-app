import React from "react"
import { graphql } from "gatsby"
import { Heading } from "rebass"

export default function CategoryTemplate({ data, pageContext }) {
  const { category } = pageContext

  return (
    <>
      <Heading textAlign="center" mb={[3]} fontFamily="var(--sans)">
        {category}
      </Heading>
    </>
  )
}

export const CATEGORY_PAGE_QUERY = graphql`
  query($slug: String!) {
    allSanityPost(filter: { category: { slug: { current: { eq: $slug } } } }) {
      edges {
        node {
          ...SanityPostFragment
        }
      }
    }
  }
`
