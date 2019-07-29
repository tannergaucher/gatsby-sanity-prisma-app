import React, { useState } from "react"
import Img from "gatsby-image"
import BlockContent from "@sanity/block-content-to-react"

import { Heading, Button } from "rebass"

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
      <Heading
        fontSize={[4]}
        style={{ fontFamily: `var(--sans)` }}
        mt={[3]}
        mb={[2]}
      >
        {postPlace.place.name}
      </Heading>

      <Button>Share</Button>
      <Button>Add to List</Button>

      <Img fluid={postPlace.place.image.asset.fluid} />
      <PostPlaceDetails place={postPlace.place} />
      <BlockContent blocks={postPlace._rawText} />
      <hr />
    </>
  )
}

function PostPlaceDetails({ place }) {
  const [show, setShow] = useState(false)

  return (
    <>
      <Button
        mt={[2]}
        onClick={() => {
          setShow(!show)
        }}
      >
        More Info
      </Button>
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
