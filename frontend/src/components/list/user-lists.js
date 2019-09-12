import React, { useState } from "react"
import { useQuery } from "@apollo/react-hooks"
import { Heading, Text, Box } from "rebass"
import { Add } from "grommet-icons"

import { CreateList, TogglePlaceCheckBox } from "."
import { Button } from "../styles"

import { CURRENT_USER_QUERY } from "../apollo/graphql"

export default function UserLists({ place }) {
  const [show, setShow] = useState(false)
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY)

  if (loading) return `Loading lists...`
  if (error) return `Error: ${error.message}`

  return (
    <>
      <Heading mb={[2]}>Add {place.name}...</Heading>
      {data &&
        data.me &&
        data.me.lists.map(list => (
          <TogglePlaceCheckBox key={list.id} list={list} place={place} />
        ))}

      <Box my={[3]}>
        <Button
          label={<Text> New list</Text>}
          icon={<Add size="small" color="var(--dark-1)" />}
          plain
          onClick={() => setShow(true)}
        />
      </Box>
      {show && <CreateList place={place} setShow={setShow} />}
    </>
  )
}
