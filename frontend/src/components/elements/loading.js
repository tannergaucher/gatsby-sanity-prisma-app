import React from "react"
import { Flex, Heading } from "rebass"

export default function loading({ message }) {
  return (
    <Flex mt={[5]} justifyContent="center" alignItems="center">
      <Heading mt={[4]} textAlign="center">
        {message}
      </Heading>
    </Flex>
  )
}
