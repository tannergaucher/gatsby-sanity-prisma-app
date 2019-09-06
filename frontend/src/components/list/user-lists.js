import React, { useState } from "react"
import { useMutation, useQuery } from "@apollo/react-hooks"
import { Heading, Text, Box } from "rebass"
import { CheckBox, Button } from "grommet"
import { Add } from "grommet-icons"

import { CreateList, TogglePlaceCheckBox } from "."
import { isPlaceInList } from "../../utils"
import { CURRENT_USER_QUERY, TOGGLE_PLACE_MUTATION } from "../apollo/graphql"

export default function UserLists({ place }) {
  const [show, setShow] = useState(false)
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY)

  if (loading) return `Loading lists...`
  if (error) return `Error: ${error.message}`

  return (
    <>
      <Heading mb={[2]} fontFamily="var(--sans)">
        Add {place.name}...
      </Heading>
      {data &&
        data.me &&
        data.me.lists.map(list => (
          <TogglePlaceCheckBox key={list.id} list={list} place={place} />
        ))}

      <Box my={[3]}>
        <Button
          label={<Text fontFamily="var(--sans)"> New list</Text>}
          icon={<Add size="small" color="var(--dark-1)" />}
          plain
          onClick={() => setShow(true)}
        />
      </Box>
      {show && <CreateList place={place} setShow={setShow} />}
    </>
  )
}
