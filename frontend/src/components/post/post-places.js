import React from "react"
import Img from "gatsby-image"
import BlockContent from "@sanity/block-content-to-react"

export default function PostPlaces({ postPlaces }) {
  return (
    <>
      {postPlaces.map(postPlace => (
        <PostPlace postPlace={postPlace} key={postPlace.place.id} />
      ))}
    </>
  )
}

function PostPlace({ postPlace }) {
  return (
    <>
      <h1>{postPlace.place.name}</h1>
      <Img fluid={postPlace.place.image.asset.fluid} />
      <BlockContent blocks={postPlace._rawText} />
      <PostPlaceDetails details={postPlace.place.details} />
    </>
  )
}

function PostPlaceDetails({ details }) {
  return (
    <>
      Details Accordion
      {/* On Google Maps */}
      {/* Place Address */}
      {details.facebookLink && <h6>{details.facebookLink}</h6>}
      {details.instagramLink && <h6>{details.instagramLink}</h6>}
      {details.twitterLink && <h6>{details.twitterLink}</h6>}
      {details.websiteLink && <h6>{details.websiteLink}</h6>}
    </>
  )
}
