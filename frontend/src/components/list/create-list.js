import React, { useState } from "react"
import { useMutation } from "@apollo/react-hooks"
import { Form, FormField, Button } from "grommet"

import { CREATE_LIST_MUTATION, CURRENT_USER_QUERY } from "../apollo/graphql"

export default function CreateList({ place, setShow }) {
  const [listTitle, setListTitle] = useState("")

  const [createList] = useMutation(CREATE_LIST_MUTATION, {
    variables: {
      title: listTitle,
      placeSanityId: place.id,
      placeName: place.name,
      placeImageUrl: JSON.stringify(place.image.asset.fluid),
      placeSlug: place.slug.current,
    },
    update: (cache, payload) => {
      const data = cache.readQuery({ query: CURRENT_USER_QUERY })
      data.me.lists = [...data.me.lists, payload.data.createList]
      cache.writeQuery({ query: CURRENT_USER_QUERY, data })
    },
  })

  return (
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
      <Button type="submit" primay label="Create" fill />
    </Form>
  )
}
