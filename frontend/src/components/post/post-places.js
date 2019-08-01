import React from "react"
import styled from "styled-components"
import { space } from "styled-system"

import { Place } from "../place"

const Styled = styled.div`
  ${space}
`

export default function PostPlaces({ postPlaces }) {
  return (
    <Styled>
      {postPlaces.map(postPlace => (
        <Place postPlace={postPlace} key={postPlace.place.id} />
      ))}
    </Styled>
  )
}
