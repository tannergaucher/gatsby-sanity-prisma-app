import React from "react"
import { Flex } from "rebass"

import { FacebookOption, Twitter, Pinterest } from "grommet-icons"

export default function Share() {
  return (
    <Flex flexWrap="wrap" pl={[3]}>
      <a>
        <meta proptery="og:url" content="http://untrip.app/" />
        <button mr={[2]}>
          <FacebookOption color="var(--light-1)" />
        </button>
      </a>
      <button bg="var(--light-1)" mr={[2]}>
        <Twitter color="var(--light-1)" />
      </button>
      <button bg="var(--light-1)">
        <Pinterest color="var(--light-1)" />
      </button>
    </Flex>
  )
}
