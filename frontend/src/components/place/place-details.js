import React, { useState } from "react"

export default function PlaceDetails({ place }) {
  const [show, setShow] = useState(false)

  return (
    <>
      <button
        onClick={() => {
          setShow(!show)
        }}
      >
        Place Details
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
