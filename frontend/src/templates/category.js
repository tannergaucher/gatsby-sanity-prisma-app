import React from "react"
import { graphql } from "gatsby"
import { Heading } from "rebass"

import { CategoryTagsSelect } from "../components/category"

import { PostCardThumbnail } from "../components/post"

export default function CategoryTemplate({ data, pageContext }) {
  const { category } = pageContext
  const { edges } = data.allSanityPost

  console.log(edges)

  // TODO: CREATE A SET FROM TAGS ARR
  // MOVE ALL THIS INTO GATSBY NODE?

  const uniqueTags = []

  edges.map(edge => {
    edge.node.tags.map(tag => {
      uniqueTags.push(tag)
    })
  })

  return (
    <>
      <Heading textAlign="center" mb={[3]} fontFamily="var(--sans)">
        {category}
      </Heading>
      <CategoryTagsSelect tags={uniqueTags} />
      {edges.map(edge => (
        <PostCardThumbnail post={edge.node} />
      ))}
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
