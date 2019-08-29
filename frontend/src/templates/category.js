import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Heading, Box } from "rebass"

export default function CategoryTemplate({ pageContext, data }) {
  console.log(pageContext)
  const { category, categorySlug } = pageContext
  const { edges } = data.allSanityTag
  console.log(edges)

  return (
    <>
      <Heading
        textAlign="center"
        fontFamily="var(--sans)"
        fontWeight="900"
        fontSize={[5]}
        mb={[2]}
      >
        {category}
      </Heading>
      {edges.map(edge => (
        <Link
          key={edge.node.id}
          to={`${categorySlug}/${edge.node.slug.current}`}
        >
          <h4>{edge.node.tag}</h4>
          <Img fluid={edge.node.image.asset.fluid} />
        </Link>
      ))}
    </>
  )
}

// Query all tags in array of tag slugs
export const CATEGORY_PAGE_QUERY = graphql`
  query($tags: [String!]) {
    allSanityTag(filter: { slug: { current: { in: $tags } } }) {
      edges {
        node {
          ...SanityTagFragment
        }
      }
    }
  }
`
