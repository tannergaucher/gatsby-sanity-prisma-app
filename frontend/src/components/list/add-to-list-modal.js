import React, { useState } from "react"
import { AddCircle } from "grommet-icons"
import { Button, Heading, Flex } from "rebass"
import { useQuery } from "@apollo/react-hooks"
import {
  Layer,
  CheckBox,
  Form,
  FormField,
  Button as GrommetButton,
} from "grommet"

import { IS_LOGGED_IN } from "../apollo/graphql"
import { AuthTabs } from "../auth"

export default function AddToListModal({ placeName, placeImage, placeSlug }) {
  const [show, setShow] = useState(false)

  const { data } = useQuery(IS_LOGGED_IN)

  return (
    <>
      <Button
        bg="var(--light-1)"
        color="var(--dark-1)"
        onClick={() => setShow(!show)}
        style={{
          fontFamily: `var(--sans)`,
          textTransform: `uppercase`,
        }}
      >
        <AddCircle color="var(--dark-1)" />
      </Button>
      {show && (
        <Layer
          onEsc={() => setShow(false)}
          onClickOutside={() => setShow(false)}
          responsive={false}
          style={{ width: `85vw` }}
        >
          <Flex width={1} flexDirection="column" p={[2]}>
            {data && data.isLoggedIn ? (
              <UserLists placeName={placeName} />
            ) : (
              <PleaseSignIn />
            )}
          </Flex>
        </Layer>
      )}
    </>
  )
}

function PleaseSignIn() {
  return (
    <>
      <Heading>You must be signed in to do that.</Heading>
      <AuthTabs />
    </>
  )
}

function UserLists({ placeName }) {
  const [show, setShow] = useState(false)

  // query data.me.lists and map
  // if !data.me.lists, display message: you have no lists yet. Create one.
  return (
    <>
      <Heading mb={[2]} fontFamily="var(--sans)">
        Add {placeName} to:
      </Heading>
      <CheckBox label="List number uno" checked={false} />
      <CheckBox label="List number dose" checked={true} />
      <GrommetButton
        label="Create new list"
        plain
        onClick={() => setShow(true)}
      />
      {show && (
        <Form>
          <FormField name="List Name" />
          <GrommetButton type="submit" primay label="Create" />
        </Form>
      )}
    </>
  )
}
