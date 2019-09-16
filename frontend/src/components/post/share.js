import React from "react"
import { Flex } from "rebass"
import { FacebookOption, Twitter, Pinterest } from "grommet-icons"

export default function Share() {
  return (
    <Flex flexWrap="wrap">
      <a href="http://facebook.com/dialog/share?app_id=145634995501895&display=popup">
        <button mr={[2]}>
          <FacebookOption color="var(--dark-1)" />
        </button>
      </a>
      <a href="https://twitter.com/intent/tweet">
        <button bg="var(--dark-1)" mr={[2]}>
          <Twitter color="var(--dark-1)" />
        </button>
      </a>
      <a href="http://pinterest.com">
        <button bg="var(--dark-1)">
          <Pinterest color="var(--dark-1)" />
        </button>
      </a>
    </Flex>
  )
}
