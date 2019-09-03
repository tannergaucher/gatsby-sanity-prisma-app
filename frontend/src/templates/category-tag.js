import React from "react"
import { Heading } from "rebass"
import { Link } from "gatsby"

import { HeroCard } from "../components/styles"

export default function CategoryTag({ pageContext, data }) {
  const { category } = pageContext

  return (
    <>
      <Heading
        textAlign="center"
        fontFamily="var(--sans)"
        fontWeight="900"
        fontSize={[5]}
        mb={[2]}
      >
        {data.tag.tag}
      </Heading>
      {data.posts.edges.map(edge => (
        <Link
          to={`${edge.node.category.slug.current}/${edge.node.slug.current}`}
        >
          <HeroCard
            key={edge.node.id}
            text={edge.node.title}
            fluid={edge.node.mainImage.asset.fluid}
          />
        </Link>
      ))}
    </>
  )
}

// Query all posts with category slug of category slug and tag slug of tag slug
// Query the tag with a slug of tagSlug
export const CATEGORY_PAGE_QUERY = graphql`
  query($categorySlug: String!, $tagSlug: String!) {
    posts: allSanityPost(
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
    tag: sanityTag(slug: { current: { eq: $tagSlug } }) {
      tag
    }
  }
`
