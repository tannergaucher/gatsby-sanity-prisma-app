import React from "react"

export default function Tag({ data }) {
  const { sanityTag, allSanityPost } = data

  return (
    <>
      <h1>{sanityTag.tag}</h1>
    </>
  )
}

export const TAG_PAGE_QUERY = graphql`
  query($slug: String!) {
    sanityTag(slug: { current: { eq: $slug } }) {
      ...SanityTagFragment
    }
    # query all sanity posts where tags array includes $tag
    allSanityPost(filter: { tags: { elemMatch: { tag: { eq: "Food" } } } }) {
      edges {
        node {
          ...SanityPostFragment
        }
      }
    }
  }
`
