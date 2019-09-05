import React, { useState } from "react"
import { useMutation, useQuery } from "@apollo/react-hooks"
import { Heading, Text } from "rebass"
import { CheckBox, Button, Form, FormField } from "grommet"

import { isPlaceInList } from "../../utils"
import {
  CREATE_LIST_MUTATION,
  CURRENT_USER_QUERY,
  TOGGLE_PLACE_MUTATION,
} from "../apollo/graphql"

export default function UserLists({ place }) {
  const [show, setShow] = useState(false)
  const [listTitle, setListTitle] = useState("")
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY)
  const [createList] = useMutation(CREATE_LIST_MUTATION, {
    variables: {
      title: listTitle,
      placeSanityId: place.id,
      placeName: place.name,
      placeImageUrl: JSON.stringify(place.image.asset.fluid),
      placeSlug: place.slug.current,
    },
  })

  if (loading) return `Loading...`
  if (error) return `Error: ${error.message}`

  return (
    <>
      <Heading mb={[2]} fontFamily="var(--sans)">
        Add {place.name}:
      </Heading>
      {data &&
        data.me &&
        data.me.lists.map(list => (
          <List key={list.id} list={list} place={place} />
        ))}
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

function List({ place, list }) {
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
    <CheckBox
      key={list.id}
      label={<Text fontFamily="var(--sans)">{list.title}</Text>}
      checked={isPlaceInList(list.places, place.id)}
      onChange={async e => {
        const res = await togglePlace()
        console.log(res)
      }}
    />
  )
}
