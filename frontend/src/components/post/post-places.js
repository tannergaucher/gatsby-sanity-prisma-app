import React, { useState } from "react"
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
      <PostPlaceDetails place={postPlace.place} />
    </>
  )
}

function PostPlaceDetails({ place }) {
  const [show, setShow] = useState(false)

  return (
    <>
      <button
        onClick={() => {
          setShow(!show)
        }}
      >
        Details
      </button>
      {show && (
        <>
          {place.facebookLink && <h6>{place.facebookLink}</h6>}
          {place.instagramLink && <h6>{place.instagramLink}</h6>}
          {place.twitterLink && <h6>{place.twitterLink}</h6>}
          {place.websiteLink && <h6>{place.websiteLink}</h6>}
        </>
      )}
    </>
  )
}
