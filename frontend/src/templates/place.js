import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Heading, Text } from "rebass"

export default function Place({ data }) {
  const { sanityPlace } = data
  console.log(sanityPlace)

  return (
    <div>
      <Heading fontSize={6}>{sanityPlace.name}</Heading>
      <Img fluid={sanityPlace.image.asset.fluid} />
      <Text>{sanityPlace.imageCaption}</Text>
      <a href={sanityPlace.imageLink}>By {sanityPlace.imageCredit}</a>
      {/* Tags of place */}
      {/* All Posts with Place */}
      {/* Place details */}
      {/* Google Map with place centered */}
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
