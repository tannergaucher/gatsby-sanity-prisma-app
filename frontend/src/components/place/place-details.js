import React, { useState } from "react"
import { Button } from "rebass"

export default function PlaceDetails({ place }) {
  const [show, setShow] = useState(false)

  return (
    <>
      <Button
        bg="var(--light-1)"
        color="var(--dark-1)"
        style={{
          fontFamily: `var(--sans)`,
        }}
        onClick={() => {
          setShow(!show)
        }}
      >
        Details
      </Button>
      {show && (
        <>
          {place.place.facebookLink && <h6>{place.place.facebookLink}</h6>}
          {place.place.instagramLink && <h6>{place.place.instagramLink}</h6>}
          {place.place.twitterLink && <h6>{place.place.twitterLink}</h6>}
          {place.place.websiteLink && <h6>{place.place.websiteLink}</h6>}
          View on map
        </>
      )}
    </>
  )
}
