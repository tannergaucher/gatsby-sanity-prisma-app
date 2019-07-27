import React from "react"
import { graphql } from "gatsby"

export default function Place({ data }) {
  // const { sanityPlace } = data

  return (
    <div>
      {/*  */}
      {/*  */}
    </div>
  )
}

export const PLACE_PAGE_QUERY = graphql`
  query($slug: String!) {
    sanityPlace(slug: { current: { eq: $slug } }) {
      ...SanityPlaceFragment
    }
  }
`
