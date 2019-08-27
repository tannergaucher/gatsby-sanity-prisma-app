import React, { useState } from "react"
import { Layer } from "grommet"
import { AddCircle } from "grommet-icons"
import { Button, Heading, Flex } from "rebass"

export default function AddToListModal() {
  const [show, setShow] = useState(false)

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
        >
          <Flex width={1}>
            <Heading>Add PLACE NAME to list</Heading>
            {/* Query users lists */}
            {/* Map lists to checkboxes */}
          </Flex>
        </Layer>
      )}
    </>
  )
}
