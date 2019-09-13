import React from "react"
import { Flex } from "rebass"
import { FacebookOption, Twitter, Pinterest } from "grommet-icons"

export default function Share() {
  return (
    <Flex flexWrap="wrap" pl={[3]}>
      <a href="http://facebook.com">
        <button mr={[2]}>
          <FacebookOption color="var(--light-1)" />
        </button>
      </a>
      <a href="https://twitter.com/intent/tweet">
        <button bg="var(--light-1)" mr={[2]}>
          <Twitter color="var(--light-1)" />
        </button>
      </a>
      <a href="http://pinterest.com">
        <button bg="var(--light-1)">
          <Pinterest color="var(--light-1)" />
        </button>
      </a>
    </Flex>
  )
}
