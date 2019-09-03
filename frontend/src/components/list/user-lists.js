import React, { useState } from "react"
import { useMutation, useQuery } from "@apollo/react-hooks"
import { Heading } from "rebass"
import { CheckBox, Button, Form, FormField } from "grommet"

import { CREATE_LIST_MUTATION, CURRENT_USER_QUERY } from "../apollo/graphql"

export default function UserLists({ place }) {
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
                label={list.title}
                // checked={list.places.filter(listPlace =>
                //   listPlace.placeSanityId === place.place.id ? true : false
                // )}
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
            console.log(data)
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
