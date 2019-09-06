import React from "react"
import { Box, Text } from "rebass"
import { CheckBox } from "grommet"

import { useMutation } from "@apollo/react-hooks"
import { TOGGLE_PLACE_MUTATION } from "../apollo/graphql"
import { isPlaceInList } from "../../utils"

export default function TogglePlaceCheckBox({ place, list }) {
  const [togglePlace, { loading, error }] = useMutation(TOGGLE_PLACE_MUTATION, {
    variables: {
      listId: list.id,
      placeSanityId: place.id,
      placeName: place.name,
      placeImageUrl: JSON.stringify(place.image.asset.fluid),
      placeSlug: place.slug.current,
    },
  })

  return (
    <Box my={[1]}>
      <CheckBox
        key={list.id}
        label={<Text fontFamily="var(--sans)">{list.title}</Text>}
        checked={isPlaceInList(list.places, place.id)}
        onChange={async e => {
          const res = await togglePlace()
        }}
      />
    </Box>
  )
}
