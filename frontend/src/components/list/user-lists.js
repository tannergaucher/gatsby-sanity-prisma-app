import React, { useState } from "react"
import { useMutation, useQuery } from "@apollo/react-hooks"
import { Heading, Text } from "rebass"
import { CheckBox, Button, Form, FormField } from "grommet"

import { CREATE_LIST_MUTATION, CURRENT_USER_QUERY } from "../apollo/graphql"

function isPlaceInList(places, placeId) {
  const isPlace = places.filter(place => place.placeSanityId === placeId)
  return isPlace.length ? true : false
}

export default function UserLists({ place }) {
  console.log("PLACE", place)

  const [show, setShow] = useState(false)
  const [listTitle, setListTitle] = useState("")
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY)
  const [createList] = useMutation(CREATE_LIST_MUTATION, {
    variables: {
      title: listTitle,
      placeSanityId: place.place.id,
      placeName: place.place.name,
      placeImageUrl: JSON.stringify(place.place.image.asset.fluid),
      placeSlug: place.place.slug.current,
    },
  })

  if (loading) return `Loading...`
  if (error) return `Error: ${error.message}`

  return (
    <>
      <Heading mb={[2]} fontFamily="var(--sans)">
        Add {place.place.name}:
      </Heading>
      {data &&
        data.me &&
        data.me.lists.map(
          list =>
            console.log(list) || (
              <CheckBox
                key={list.id}
                label={<Text fontFamily="var(--sans)">{list.title}</Text>}
                checked={isPlaceInList(list.places, place.place.id)}
                onChange={() => {
                  console.log("TOGGLE_PLACE_MUTATION")
                }}
              />
            )
        )}
      <Button label="Create new list" plain onClick={() => setShow(true)} />
      {show && (
        <Form
          onSubmit={async e => {
            e.preventDefault()
            const { data } = await createList()

            setShow(false)
          }}
        >
          <FormField
            name="List Name"
            value={listTitle}
            onChange={e => setListTitle(e.target.value)}
          />
          <Button type="submit" primay label="Create" />
        </Form>
      )}
    </>
  )
}
