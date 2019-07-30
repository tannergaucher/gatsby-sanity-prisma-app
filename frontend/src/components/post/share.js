import React from "react"
import { Flex, Button } from "rebass"

import { Facebook, Twitter, Pinterest } from "grommet-icons"

export default function Share() {
  return (
    <Flex flexWrap="wrap">
      <Button bg="var(--light-1)" mr={[2]}>
        <Facebook color="var(--dark-1)" />
      </Button>
      <Button bg="var(--light-1)" mr={[2]}>
        <Twitter color="var(--dark-1)" />
      </Button>
      <Button bg="var(--light-1)">
        <Pinterest color="var(--dark-1)" />
      </Button>
    </Flex>
  )
}
