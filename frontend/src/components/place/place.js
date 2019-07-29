import React from "react"
import Img from "gatsby-image"
import BlockContent from "@sanity/block-content-to-react"

import { Link } from "../styles"

export default function Place({ place }) {
  // const { place, _rawText } = place

  // console.log(place)

  return (
    <>
      Place
      {/* <Link to={place.slug.current}>
        <h1>{place.place.name}</h1>
      </Link>
      <Img fluid={place.image.asset.fluid} />
      <BlockContent blocks={_rawText} /> */}
      {/* <PlaceDetails place={place} /> */}
    </>
  )
}
