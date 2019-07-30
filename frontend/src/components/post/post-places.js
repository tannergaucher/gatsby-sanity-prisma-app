import React from "react"

import { Place } from "../place"

export default function PostPlaces({ postPlaces }) {
  return (
    <>
      {postPlaces.map(postPlace => (
        <Place postPlace={postPlace} key={postPlace.place.id} />
      ))}
    </>
  )
}
